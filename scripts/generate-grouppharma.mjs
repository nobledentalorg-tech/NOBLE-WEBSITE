import fs from 'node:fs/promises';
import path from 'node:path';
import { setDefaultResultOrder } from 'node:dns';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

setDefaultResultOrder('ipv4first');

const execFileAsync = promisify(execFile);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const API_URL = 'https://shop.grouppharma.com/collections/all-products/products.json?limit=250';

const ICON_MAP = new Map([
  ['Braces', { icon: 'ri-braces-line', kicker: 'Braces-friendly care' }],
  ['Mouthwash', { icon: 'ri-drop-line', kicker: 'Fresh breath defence' }],
  ['Toothpaste', { icon: 'ri-tooth-line', kicker: 'Fluoride-powered care' }],
  ['Kids Care', { icon: 'ri-parent-line', kicker: 'Kid-approved smiles' }],
  ['kids 3 to 12 yrs', { icon: 'ri-parent-line', kicker: 'Kids 3-12 routine' }],
  ['Babies & Toddlers', { icon: 'ri-bear-smile-line', kicker: 'Toddler-safe formula' }],
  ['Teenagers', { icon: 'ri-user-smile-line', kicker: 'Teen-friendly support' }],
  ['Adults', { icon: 'ri-user-2-line', kicker: 'Adult daily care' }],
  ['Women', { icon: 'ri-women-line', kicker: 'Women-first oral care' }],
  ['Men', { icon: 'ri-men-line', kicker: 'Men-friendly care' }],
  ['Denture care', { icon: 'ri-user-5-line', kicker: 'Denture hygiene boost' }],
  ['Dry mouth', { icon: 'ri-water-flash-line', kicker: 'Dry mouth relief' }],
  ['Mouth ulcer', { icon: 'ri-capsule-line', kicker: 'Ulcer soothing care' }],
  ['Nature inspired', { icon: 'ri-leaf-line', kicker: 'Nature-inspired care' }],
  ['Seniors', { icon: 'ri-nurse-line', kicker: 'Senior comfort plan' }],
  ['combos', { icon: 'ri-links-line', kicker: 'Complete care kit' }],
]);

const BADGE_MAP = new Map([
  ['Braces', 'Braces care essential'],
  ['Mouthwash', 'Plaque defence rinse'],
  ['Toothpaste', 'Fluoride-rich toothpaste'],
  ['Kids Care', 'Kids favourite'],
  ['kids 3 to 12 yrs', 'Kids 3-12 daily'],
  ['Babies & Toddlers', 'Toddler safe'],
  ['Teenagers', 'Teen-friendly'],
  ['Adults', 'Adult routine'],
  ['Women', 'Women-first care'],
  ['Men', 'Men-friendly'],
  ['Denture care', 'Denture hygiene'],
  ['Dry mouth', 'Dry mouth relief'],
  ['Mouth ulcer', 'Mouth ulcer relief'],
  ['Nature inspired', 'Nature-inspired'],
  ['Seniors', 'Senior comfort'],
  ['combos', 'Complete kit'],
]);

const CATEGORY_MAP = new Map([
  ['Mouthwash', 'dental'],
  ['Toothpaste', 'dental'],
  ['Braces', 'dental'],
  ['Kids Care', 'dental'],
  ['kids 3 to 12 yrs', 'dental'],
  ['Babies & Toddlers', 'dental'],
  ['Denture care', 'dental'],
  ['Dry mouth', 'wellness'],
  ['Mouth ulcer', 'wellness'],
  ['Nature inspired', 'wellness'],
  ['Seniors', 'dental'],
  ['Adults', 'dental'],
  ['Teenagers', 'dental'],
  ['combos', 'dental'],
]);

const DEFAULT_ICON = { icon: 'ri-hearts-line', kicker: 'Clinic curated pick' };
const DEFAULT_BADGE = 'Clinic curated';

async function fetchJson(url) {
  const { stdout } = await execFileAsync('curl', ['-sL', url]);
  return JSON.parse(stdout);
}

function stripHtml(html = '') {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractList(html = '') {
  const matches = [];
  const regex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let match;
  while ((match = regex.exec(html))) {
    matches.push(stripHtml(match[1]));
  }
  return matches.filter(Boolean);
}

function toSentences(text = '') {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (!clean) return [];
  const sentences = clean.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
  return sentences.length ? sentences : [clean];
}

function toTitleCase(text = '') {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function slugToTitle(slug) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function escapeHtml(text = '') {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function pickCategory(tags) {
  for (const tag of tags) {
    const category = CATEGORY_MAP.get(tag);
    if (category) return category;
  }
  return 'dental';
}

function pickIcon(tags) {
  for (const tag of tags) {
    const mapped = ICON_MAP.get(tag);
    if (mapped) return mapped;
  }
  return DEFAULT_ICON;
}

function pickBadge(tags) {
  for (const tag of tags) {
    const badge = BADGE_MAP.get(tag);
    if (badge) return badge;
  }
  return DEFAULT_BADGE;
}

function normaliseTags(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw.map((tag) => String(tag).trim()).filter(Boolean);
  }
  return String(raw)
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag && tag !== '[]' && tag !== '[' && tag !== ']');
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function downloadImage(url, destPath) {
  await execFileAsync('curl', ['-sL', url, '-o', destPath]);
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(Math.round(value));
}

function generateFaqs(title, summary, highlights) {
  const shortTitle = title.length > 60 ? title.split(':')[0].trim() || title : title;
  const summarySentences = toSentences(summary);
  const firstHighlight = highlights[0] || summarySentences[0] || 'Follow dentist guidance.';
  const secondHighlight = highlights[1] || summarySentences[1] || 'Check with Noble Dental Care for your plan.';
  const thirdHighlight = highlights[2] || 'Store as directed on the pack.';
  return [
    {
      question: `Who can use ${shortTitle}?`,
      answer: summarySentences[0] || `This ${shortTitle} pack is designed for guided use at Noble Dental Care.`,
    },
    {
      question: `How often should I use ${shortTitle}?`,
      answer: firstHighlight,
    },
    {
      question: `Any clinic tips for ${shortTitle}?`,
      answer: `${secondHighlight} ${thirdHighlight}`.trim(),
    },
  ];
}

function deriveInstructionSentences(sentences, usedSentences = []) {
  const keywords = ['use', 'apply', 'brush', 'rinse', 'swish', 'spray', 'chew', 'store', 'morning', 'evening', 'night'];
  const lowerUsed = new Set(usedSentences.map((item) => item.toLowerCase()));
  const picked = [];

  sentences.forEach((sentence) => {
    if (picked.length >= 3) return;
    const lower = sentence.toLowerCase();
    if (lowerUsed.has(lower)) return;
    if (keywords.some((keyword) => lower.includes(keyword))) {
      picked.push(sentence);
      lowerUsed.add(lower);
    }
  });

  return picked;
}

function renderQuickLinks(products, currentIndex) {
  const quickLinks = [];
  for (let i = 1; quickLinks.length < 3 && i < products.length; i += 1) {
    const nextIndex = (currentIndex + i) % products.length;
    const candidate = products[nextIndex];
    quickLinks.push({
      handle: candidate.handle,
      title: candidate.heroTitle,
    });
  }
  return quickLinks;
}

function createHtmlTemplate(product, quickLinks) {
  const {
    handle,
    title,
    heroTitle,
    kickerIcon,
    kickerLabel,
    summary,
    badges,
    mrp,
    clinicPrice,
    priceSavings,
    benefits,
    instructions,
    faqs,
    imagePath,
    imageAlt,
    badgeLabel,
  } = product;

  const quickLinksMarkup = quickLinks
    .map(
      (link) => `  <a href="./${link.handle}.html"><i class="ri-arrow-right-up-line" aria-hidden="true"></i>${escapeHtml(link.title)}</a>`
    )
    .join('\n  ');

  const benefitsMarkup = benefits
    .map(
      (benefit) => `      <article class="offer-card">
        <span class="offer-card__tag"><i class="ri-sparkling-2-line" aria-hidden="true"></i>${escapeHtml(badgeLabel)}</span>
        <h3 style="margin:0;color:var(--ink);">${escapeHtml(benefit.title)}</h3>
        <p>${escapeHtml(benefit.text)}</p>
      </article>`
    )
    .join('\n');

  const instructionsMarkup = instructions
    .map((item) => `          <li>${escapeHtml(item)}</li>`)
    .join('\n');

  const faqsMarkup = faqs
    .map(
      (faq) => `    <details>
      <summary>${escapeHtml(faq.question)}</summary>
      <p>${escapeHtml(faq.answer)}</p>
    </details>`
    )
    .join('\n');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: heroTitle,
    description: summary,
    brand: {
      '@type': 'Organization',
      name: 'Noble Dental Care Nallagandla',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: clinicPrice,
      priceValidUntil: new Date(new Date().getFullYear(), 11, 31).toISOString().split('T')[0],
      availability: 'https://schema.org/InStock',
      url: `https://nobledentalnallagandla.in/products/${handle}.html`,
    },
  };

  const jsonLd = JSON.stringify(structuredData, null, 2);

  const orderFormId = `${handle}-order-form`;
  const orderStatusId = `${handle}-order-status`;
  const teleFormId = `${handle}-tele-form`;
  const teleStatusId = `${handle}-tele-status`;

  return `<!doctype html>
<html lang="en-IN" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <meta name="color-scheme" content="light">
  <meta name="theme-color" content="#0f9cb4">
  <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large">
  <meta name="googlebot" content="index,follow">
  <meta name="bingbot" content="index,follow">
  <title>${escapeHtml(heroTitle)} | Noble Dental Care Hyderabad</title>
  <meta name="description" content="${escapeHtml(summary)}">
  <link rel="canonical" href="https://nobledentalnallagandla.in/products/${handle}.html">
  <link rel="alternate" hreflang="en-IN" href="https://nobledentalnallagandla.in/products/${handle}.html">
  <link type="text/plain" rel="author" href="/humans.txt">
  <meta name="author" content="Dr. Dhivakaran">
  <meta name="medical-reviewer" content="Dr. Rakesh, MBBS">
  <meta name="last-reviewed" content="${new Date().toISOString().split('T')[0]}">
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet">
  <link rel="stylesheet" href="../styles.css">
  <link rel="stylesheet" href="../assets/product-page.css">
</head>
<body class="product-page">
<header class="site-header" role="banner">
  <a href="/" class="brand" aria-label="Noble Dental Care Home">
    <picture class="brand-logo">
      <source srcset="/images/dentalcare.nallagandla-inline.webp" type="image/webp">
      <img src="/images/dentalcare.nallagandla.png" alt="Noble Dental Care Logo" width="70" height="55" decoding="async" fetchpriority="high">
    </picture>
    <p class="brand-title"><span>Noble</span> Dental Care</p>
  </a>
  <nav class="main-nav" aria-label="Primary Navigation">
    <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation menu" aria-controls="primaryNav" aria-expanded="false">☰</button>
    <ul class="nav-pill" id="primaryNav" role="menubar" hidden>
      <li role="none"><a role="menuitem" class="nav-link" href="/">Home</a></li>
      <li class="has-submenu" role="none">
        <button class="nav-link submenu-toggle" id="submenuToggle" aria-haspopup="true" aria-expanded="false" aria-controls="specialitiesMenu">Specialities ▼</button>
        <ul class="submenu" id="specialitiesMenu" role="menu" aria-label="Specialities" aria-hidden="true">
          <li role="none" class="submenu__all"><a role="menuitem" href="/specialities/">Explore All Specialities</a></li>
          <li role="none"><a role="menuitem" href="/specialities/root-canal.html">Root Canal Treatment</a></li>
          <li role="none"><a role="menuitem" href="/specialities/implants.html">Dental Implants</a></li>
          <li role="none"><a role="menuitem" href="/specialities/fillings.html">Biomimetic Fillings</a></li>
          <li role="none"><a role="menuitem" href="/specialities/crowns-bridges.html">Crowns &amp; Bridges</a></li>
          <li role="none"><a role="menuitem" href="/specialities/kids-dentistry.html">Kids Dentistry</a></li>
        </ul>
      </li>
      <li role="none"><a role="menuitem" class="nav-link" href="/services.html">Services</a></li>
      <li role="none"><a role="menuitem" class="nav-link" href="#benefits">Benefits</a></li>
      <li role="none"><a role="menuitem" class="nav-link" href="#how-to-use">How to use</a></li>
      <li role="none"><a role="menuitem" class="nav-link" href="#order-now">Order</a></li>
      <li role="none"><a role="menuitem" class="nav-link" href="/contact.html">Contact</a></li>
      <li role="none"><a role="menuitem" class="nav-link btn btn--primary" href="#order-now">Book &amp; Buy</a></li>
    </ul>
  </nav>
</header>

<nav class="product-quick-links" aria-label="Browse Noble product catalogue">
  <span class="product-quick-links__label">Quick links</span>
  ${quickLinksMarkup}
</nav>

<main>
  <section class="product-hero" id="overview">
    <div class="container hero-grid">
      <div>
        <span class="kicker"><i class="${kickerIcon}" aria-hidden="true"></i> ${escapeHtml(kickerLabel)}</span>
        <h1>${escapeHtml(heroTitle)}</h1>
        <p class="lead" style="margin-top:16px;color:var(--muted);max-width:62ch;">${escapeHtml(summary)}</p>
        <div class="product-badges" style="margin-top:20px;">
${badges.map((badge) => `          <span><i class="ri-star-smile-line" aria-hidden="true"></i> ${escapeHtml(badge)}</span>`).join('\n')}
        </div>
      </div>
      <aside class="price-card" aria-labelledby="priceTitle">
        <figure class="product-hero-media">
          <img src="../${imagePath}" alt="${escapeHtml(imageAlt)}" loading="lazy" decoding="async">
        </figure>
        <div class="price-wrap">
          <h2 id="priceTitle" style="font-size:1.4rem;color:var(--ink);">Clinic-managed pricing</h2>
          <span class="mrp" aria-label="Maximum retail price">MRP ₹${formatCurrency(mrp)}</span>
          <span class="final-price" aria-live="polite">₹${formatCurrency(clinicPrice)}</span>
          <span class="saving">You save ₹${formatCurrency(priceSavings)} (25%)</span>
        </div>
        <div class="trust-highlights" style="margin-top:6px;">
          <span><i class="ri-customer-service-2-line" aria-hidden="true"></i> Tele-guided support with Dr. Dhivakaran</span>
          <span><i class="ri-map-pin-2-line" aria-hidden="true"></i> Hyperlocal doorstep delivery</span>
        </div>
        <div class="cta-buttons" style="margin-top:18px;">
          <a class="btn primary" href="#order-now"><i class="ri-shopping-bag-3-line" aria-hidden="true"></i>Add to cart</a>
          <a class="btn" style="background:rgba(15,156,180,0.12);color:var(--teal);font-weight:700;" href="tel:+918610425342"><i class="ri-phone-line" aria-hidden="true"></i>Call our dentist</a>
        </div>
      </aside>
    </div>
  </section>

  <section class="container" id="benefits" aria-labelledby="benefitsTitle">
    <h2 id="benefitsTitle" class="section-heading">Why Noble Dental recommends ${escapeHtml(heroTitle)}</h2>
    <div class="offer-grid">
${benefitsMarkup}
    </div>
  </section>

  <section class="container" id="how-to-use" aria-labelledby="usageTitle">
    <h2 id="usageTitle" class="section-heading">How to use ${escapeHtml(heroTitle)}</h2>
    <div class="two-column-grid">
      <article class="insight-card">
        <h3>Clinic-approved steps</h3>
        <ul>
${instructionsMarkup}
        </ul>
      </article>
      <article class="insight-card">
        <h3>Follow-up reminders</h3>
        <ul>
          <li>Send progress photos on WhatsApp for remote monitoring.</li>
          <li>Combine with personalised diet and brushing tweaks from our dentists.</li>
          <li>Store in a cool, dry place away from direct sunlight.</li>
        </ul>
      </article>
    </div>
    <p class="muted" style="margin-top:1.2rem;">Always consult Noble Dental Care before starting or changing your dosage routine.</p>
  </section>

  <section class="container" id="order-now" aria-labelledby="orderTitle">
    <h2 id="orderTitle" class="section-heading">Order ${escapeHtml(heroTitle)} with dentist guidance</h2>
    <div class="two-column-grid">
      <form class="form-card" id="${orderFormId}">
        <h3>Delivery request</h3>
        <label>Full name<input type="text" name="patientName" required></label>
        <label>Mobile number<input type="tel" name="patientPhone" required pattern="[0-9]{10}"></label>
        <label>Your concern<textarea name="patientConcern" required rows="3" placeholder="Share symptoms, product needs or flavour preferences..."></textarea></label>
        <label>Current routine<textarea name="currentMeds" rows="3" placeholder="List toothpastes, rinses or medicines you are using"></textarea></label>
        <button type="submit" class="btn primary">Send request</button>
        <p class="form-status" id="${orderStatusId}" aria-live="polite"></p>
      </form>
      <form class="form-card" id="${teleFormId}">
        <h3>Book tele-support</h3>
        <label>Your name<input type="text" name="followName" required></label>
        <label>Preferred call slot<select name="callTime" required>
          <option value="Morning">Morning (8-11 am)</option>
          <option value="Afternoon">Afternoon (1-3 pm)</option>
          <option value="Evening">Evening (6-8 pm)</option>
        </select></label>
        <label>Notes for dentist<textarea name="conditions" rows="3" placeholder="Mention allergies, dental history or goals"></textarea></label>
        <button type="submit" class="btn">Book guidance</button>
        <p class="form-status" id="${teleStatusId}" aria-live="polite"></p>
      </form>
    </div>
    <p class="muted" style="margin-top:1rem;">We combine every online order with tele-consult support and in-clinic follow-up when needed.</p>
  </section>

  <section class="container mini-faq" aria-label="${escapeHtml(heroTitle)} FAQ">
${faqsMarkup}
  </section>

  <section class="container footer-cta" aria-label="Plan your care">
    <h2>Need a personalised plan?</h2>
    <p>Schedule a call with Noble Dental Care to pair ${escapeHtml(heroTitle)} with diagnostics, diet tweaks and review visits.</p>
    <div class="cta-buttons">
      <a class="primary" href="tel:+918610425342">Call Noble Dental Care</a>
      <a href="/products/cart.html">Review your cart</a>
    </div>
  </section>
</main>

<script type="application/ld+json">
${jsonLd}
</script>
<script src="../main.js" defer></script>
<script src="../js/dental-products.js" type="module" defer></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    function handle(form, statusEl, successMessage) {
      if (!form || !statusEl) return;
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!form.checkValidity()) {
          statusEl.textContent = 'Please complete highlighted fields to continue.';
          statusEl.classList.add('is-visible');
          form.reportValidity();
          return;
        }
        statusEl.textContent = successMessage;
        statusEl.classList.add('is-visible');
        form.reset();
        window.setTimeout(() => statusEl.classList.remove('is-visible'), 6000);
      });
    }

    const orderForm = document.getElementById('${orderFormId}');
    const orderStatus = document.getElementById('${orderStatusId}');
    const teleForm = document.getElementById('${teleFormId}');
    const teleStatus = document.getElementById('${teleStatusId}');

    handle(orderForm, orderStatus, 'Thanks! We will align ${escapeHtml(heroTitle)} with your care plan and call shortly.');
    handle(teleForm, teleStatus, 'Tele-support booked. Expect guidance for ${escapeHtml(heroTitle)} soon.');
  });
</script>
</body>
</html>`;
}

async function main() {
  console.log('Fetching Grouppharma catalogue…');
  const data = await fetchJson(API_URL);
  const products = data.products || [];
  if (!products.length) {
    throw new Error('No products found in catalogue response.');
  }

  const productDir = path.join(rootDir, 'products');
  const imageDir = path.join(rootDir, 'images', 'grouppharma');
  const dataDir = path.join(rootDir, 'data');
  await ensureDir(imageDir);
  await ensureDir(dataDir);

  const generatedData = [];
  const htmlOutputs = [];

  products.forEach((product, index) => {
    const handle = product.handle;
    const tags = normaliseTags(product.tags || '');
    const listItems = extractList(product.body_html || '');
    const sentences = toSentences(stripHtml(product.body_html || ''));
    const summary = sentences.slice(0, 2).join(' ') || product.title;
    const heroTitle = (product.title.split(':')[0] || product.title).trim();
    const kickerDetails = pickIcon(tags);
    const badgeLabel = pickBadge(tags);
    const category = pickCategory(tags);
    const mrp = Number(product.variants?.[0]?.compare_at_price) || Number(product.variants?.[0]?.price) || 0;
    const clinicPrice = mrp ? Math.round(mrp * 0.75) : Number(product.variants?.[0]?.price) || 0;
    const priceSavings = mrp ? mrp - clinicPrice : 0;
    const benefitsRaw = listItems.slice(0, 3);
    const instructionsRaw = listItems.slice(3, 6);

    const benefits = benefitsRaw.length
      ? benefitsRaw.map((text, benefitIndex) => ({
          title: benefitIndex === 0 ? 'Key benefit' : benefitIndex === 1 ? 'What patients notice' : 'Why dentists like it',
          text,
        }))
      : [
          { title: 'Clinic curated care', text: 'Selected by Noble Dental Care for guided at-home use.' },
          { title: 'Dentist monitored', text: 'Comes with tele-support to adjust your dosage safely.' },
          { title: 'Fits into care kits', text: 'Pairs easily with other fluoride and remineralisation routines.' },
        ];

    const derivedInstructions = instructionsRaw.length
      ? instructionsRaw
      : deriveInstructionSentences(sentences, benefitsRaw);

    const instructions = derivedInstructions.length >= 3
      ? derivedInstructions.slice(0, 3)
      : [...derivedInstructions, 'Follow the usage instructions printed on the pack.', 'Check in with Noble Dental Care before adjusting frequency.', 'Stop use and call us if you notice unusual sensitivity.']
          .slice(0, 3);

    const faqs = generateFaqs(heroTitle, summary, [...benefitsRaw, ...instructions]);
    const imageSrc = product.image?.src || product.images?.[0]?.src;
    const imageExt = imageSrc ? path.extname(new URL(imageSrc).pathname) || '.png' : '.png';
    const imageFilename = imageSrc ? `${handle}${imageExt}` : `${handle}.png`;
    const imagePath = path.join('images', 'grouppharma', imageFilename);
    const imageAlt = `${heroTitle} product pack`;

    generatedData.push({
      handle,
      title: product.title,
      heroTitle,
      summary,
      tags,
      category,
      kickerIcon: kickerDetails.icon,
      kickerLabel: kickerDetails.kicker,
      badges: tags.length ? tags.slice(0, 3).map((tag) => toTitleCase(tag)) : ['Clinic curated'],
      mrp,
      clinicPrice,
      priceSavings,
      benefits,
      instructions,
      faqs,
      imageSrc,
      imageFilename,
      imagePath,
      imageAlt,
      badgeLabel,
    });

    htmlOutputs.push({ index, handle });
  });

  await fs.writeFile(
    path.join(dataDir, 'grouppharma-products.json'),
    JSON.stringify(generatedData, null, 2),
    'utf8'
  );

  await ensureDir(productDir);

  const quickLinkData = generatedData.map((product) => ({ handle: product.handle, heroTitle: product.heroTitle }));

  for (const [index, product] of generatedData.entries()) {
    const quickLinks = renderQuickLinks(quickLinkData, index);
    const html = createHtmlTemplate(product, quickLinks);
    const filePath = path.join(productDir, `${product.handle}.html`);

    await fs.writeFile(filePath, html, 'utf8');
    console.log(`Generated page for ${product.handle}`);

    if (product.imageSrc) {
      const imageDest = path.join(rootDir, product.imagePath);
      const imageExists = await fs
        .stat(imageDest)
        .then(() => true)
        .catch(() => false);
      if (!imageExists) {
        console.log(`Downloading image ${product.imageSrc}`);
        await downloadImage(product.imageSrc, imageDest);
      }
    }
  }

  const catalogueEntries = generatedData.map((item) => {
    return {
      id: item.handle,
      name: item.heroTitle,
      category: item.category,
      badge: item.badgeLabel,
      tagline: item.summary.split('. ').slice(0, 1)[0],
      price: item.clinicPrice,
      mrp: item.mrp,
      url: `/products/${item.handle}.html`,
      description: item.summary,
      highlights: item.benefits.map((benefit) => benefit.text).slice(0, 3),
      tags: item.tags.map((tag) => tag.toLowerCase()),
    };
  });

  const catalogueModule = `export const GROUPPHARMA_PRODUCTS = ${JSON.stringify(catalogueEntries, null, 2)};\n`;
  await fs.writeFile(path.join(rootDir, 'js', 'grouppharma-products.js'), catalogueModule, 'utf8');

  console.log('Generation complete.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
