import { CERTIFICATES_LIBRARY as BASE_CERTIFICATES, NEWS_BROADCAST as BASE_NEWS } from './certificates-data.js';

const storageKeys = {
  certificates: 'nobleCertificates',
  news: 'nobleNews'
};

const siteOrigin = (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin !== 'null')
  ? window.location.origin
  : 'https://nobledentalnallagandla.in';

function readStorage(key) {
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('Unable to access stored data', error);
    return [];
  }
}

function normaliseTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) {
    return tags.map((tag) => tag.trim()).filter(Boolean);
  }
  return String(tags)
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function mergeById(base, additions) {
  const map = new Map();
  base.forEach((entry) => {
    if (!entry || !entry.id) return;
    map.set(entry.id, { ...entry });
  });
  additions.forEach((entry) => {
    if (!entry || !entry.id) return;
    const existing = map.get(entry.id) || {};
    map.set(entry.id, { ...existing, ...entry });
  });
  return Array.from(map.values());
}

function normaliseCertificate(entry) {
  if (!entry || typeof entry !== 'object') return null;
  if (entry.title && entry.staffName) {
    return {
      ...entry,
      tags: normaliseTags(entry.tags)
    };
  }
  const title = entry.title || entry.certificateTitle || 'Credential';
  const staffName = entry.staffName || entry.issuedTo || 'Noble Dental Care Team';
  return {
    id: entry.id || `cert-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    title,
    staffName,
    staffRole: entry.staffRole || entry.focusArea || '',
    issuer: entry.issuer || entry.issuingAuthority || '',
    issueDate: entry.issueDate || entry.issue_date || '',
    credentialType: entry.credentialType || entry.courseLevel || 'Medical',
    description: entry.description || entry.certificateSummary || '',
    tags: normaliseTags(entry.tags || entry.focusArea)
  };
}

function normaliseNews(entry) {
  if (!entry || typeof entry !== 'object') return null;
  if (entry.headline && entry.summary) {
    return {
      ...entry,
      tags: normaliseTags(entry.tags)
    };
  }
  return {
    id: entry.id || `news-${Math.random().toString(16).slice(2)}`,
    headline: entry.headline || entry.newsTitle || 'Noble Dental Care Update',
    summary: entry.summary || entry.newsSummary || '',
    publishedOn: entry.publishedOn || entry.newsDate || '',
    link: entry.link || entry.newsLink || '',
    tags: normaliseTags(entry.tags || entry.newsTags)
  };
}

function getCertificates() {
  const stored = readStorage(storageKeys.certificates)
    .map((entry) => normaliseCertificate(entry))
    .filter(Boolean);
  const base = BASE_CERTIFICATES.map((entry) => ({
    id: entry.id,
    title: entry.title,
    staffName: entry.staffName,
    staffRole: entry.staffRole,
    issuer: entry.issuer,
    issueDate: entry.issueDate,
    credentialType: entry.credentialType,
    description: entry.description,
    tags: entry.tags
  }));
  return mergeById(base, stored).sort((a, b) => new Date(b.issueDate || 0) - new Date(a.issueDate || 0));
}

function getNews() {
  const stored = readStorage(storageKeys.news)
    .map((entry) => normaliseNews(entry))
    .filter(Boolean);
  const base = BASE_NEWS.map((entry) => ({
    id: entry.id,
    headline: entry.headline,
    summary: entry.summary,
    publishedOn: entry.publishedOn,
    link: entry.link,
    tags: entry.tags
  }));
  return mergeById(base, stored).sort((a, b) => new Date(b.publishedOn || 0) - new Date(a.publishedOn || 0));
}

function formatDate(date) {
  try {
    return new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  } catch (error) {
    return date;
  }
}

function populateLandingCertificates() {
  const container = document.getElementById('landing-certificate-list');
  if (!container) return;

  const certificates = getCertificates();
  container.innerHTML = '';

  certificates.slice(0, 3).forEach((certificate) => {
    const item = document.createElement('li');
    const description = certificate.description || certificate.tags?.slice(0, 2).join(', ');
    item.innerHTML = `
      <h3>${certificate.title}</h3>
      <span>${certificate.staffName}${certificate.staffRole ? ` · ${certificate.staffRole}` : ''}${certificate.issueDate ? ` · ${formatDate(certificate.issueDate)}` : ''}</span>
      ${description ? `<p>${description}</p>` : ''}
    `;
    container.appendChild(item);
  });
}

function populateLandingNews() {
  const newsTeaser = document.getElementById('landing-news-teaser');
  const summary = document.getElementById('landing-news-summary');
  if (!newsTeaser || !summary) return;

  newsTeaser.querySelectorAll('[data-dynamic-tag]').forEach((node) => node.remove());

  const newsItems = getNews();
  if (newsItems.length === 0) {
    return;
  }

  const [latest] = newsItems;
  summary.textContent = `${latest.headline} — ${latest.summary}`;

  if (latest.tags && latest.tags.length > 0) {
    const tagElement = document.createElement('span');
    tagElement.textContent = latest.tags.slice(0, 3).map((tag) => `#${tag.trim().replace(/\s+/g, '')}`).join(' ');
    tagElement.className = 'tag-chip';
    tagElement.dataset.dynamicTag = 'true';
    newsTeaser.appendChild(tagElement);
  }
}

function injectStructuredData() {
  const certificates = getCertificates().slice(0, 5);
  if (certificates.length === 0) {
    return;
  }
  const graph = certificates.map((certificate) => ({
    '@type': 'EducationalOccupationalCredential',
    'name': certificate.title,
    'credentialCategory': certificate.credentialType,
    'description': certificate.description,
    'dateCreated': certificate.issueDate,
    'holder': {
      '@type': 'Person',
      'name': certificate.staffName,
      'jobTitle': certificate.staffRole
    }
  }));

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'landing-credential-schema';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph
  }, null, 2);
  document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
  populateLandingCertificates();
  populateLandingNews();
  injectStructuredData();
});
