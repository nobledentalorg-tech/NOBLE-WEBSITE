const PRODUCTS = [
  {
    id: "shy-nm",
    name: "SHY-NM Tooth Sensitivity Foam",
    category: "dental",
    badge: "Best seller",
    tagline: "Strengthens enamel and calms sudden zingers",
    price: 495,
    mrp: 525,
    description: "Potassium nitrate and NovaMin combine to seal exposed tubules and rebuild enamel. Ideal for hot-cold sensitivity and post-whitening care.",
    highlights: [
      "Apply twice a day after brushing for 2 minutes",
      "NovaMin minerals rebuild enamel within 7 days",
      "Safe for braces, crowns and post-root canal sites"
    ],
    tags: ["sensitivity", "enamel repair", "foam", "nova min"]
  },
  {
    id: "enafix",
    name: "Enafix Remineralising Cream",
    category: "dental",
   badge: "Clinic exclusive",
    tagline: "Rapid relief for early enamel lesions",
    price: 760,
    mrp: 799,
    description: "ACP-CPP technology reverses white spot lesions, boosts fluoride uptake and supports long-term remineralisation.",
    highlights: [
      "Night-time tray application recommended",
      "Pair with SHY-NM for stubborn sensitivity",
      "Clinically proven for orthodontic decalcification"
    ],
    tags: ["enamel", "tray", "white spots", "orthodontic"]
  },
  {
    id: "orafresh",
    name: "OraFresh Chlorhexidine Mouth Rinse",
    category: "dental",
    tagline: "Controls gum bleeding and infection",
    price: 285,
    mrp: 310,
    description: "0.2% chlorhexidine gluconate mouthwash for acute gingivitis, post-surgical hygiene and halitosis control.",
    highlights: [
      "Use 10 ml undiluted twice daily for 7 days",
      "Avoid food for 30 minutes post-rinse",
      "Do not swallow or exceed recommended duration"
    ],
    tags: ["gum", "bleeding", "mouthwash", "chlorhexidine"]
  },
  {
    id: "augmentin",
    name: "Augmentin 625 Duo",
    category: "antibiotic",
    badge: "Doctor supervised",
    tagline: "Controls acute dental infections",
    price: 410,
    mrp: 430,
    description: "Amoxicillin and clavulanic acid blend used under dentist supervision for spreading dental infections and systemic fevers.",
    highlights: [
      "1 tablet twice daily after meals for 5 days",
      "Not for patients with penicillin allergy",
      "Hydrate well and follow-up with clinic review"
    ],
    tags: ["infection", "antibiotic", "amoxicillin", "clavulanic"]
  },
  {
    id: "metrogyl",
    name: "Metrogyl 400",
    category: "antibiotic",
    tagline: "Targets anaerobic oral infections",
    price: 120,
    mrp: 135,
    description: "Metronidazole support for anaerobic bacterial control during gum infections and post-surgical recovery.",
    highlights: [
      "Take only under dentist supervision",
      "Avoid alcohol during the course",
      "Pair with Augmentin for severe swelling cases"
    ],
    tags: ["metronidazole", "gum infection", "anaerobic"]
  },
  {
    id: "dolo-650",
    name: "Dolo 650",
    category: "pain",
    tagline: "Trusted for moderate dental pain",
    price: 35,
    mrp: 40,
    description: "Paracetamol based analgesic that lowers fever and reduces dental pain while you arrange definitive treatment.",
    highlights: [
      "1 tablet every 6 hours after food",
      "Maximum 4 tablets in 24 hours",
      "Stop and call us if fever persists"
    ],
    tags: ["pain", "analgesic", "paracetamol", "fever"]
  },
  {
    id: "ketorol",
    name: "Ketorol DT 10 mg",
    category: "pain",
    tagline: "For intense short-term dental pain",
    price: 145,
    mrp: 160,
    description: "Ketorolac tromethamine provides potent relief for acute toothache and post-extraction discomfort.",
    highlights: [
      "Dissolve one tablet under the tongue",
      "Do not exceed 3 tablets in 24 hours",
      "Avoid if you have gastric ulcers or kidney disease"
    ],
    tags: ["ketorolac", "strong painkiller", "emergency"]
  },
  {
    id: "ibugesic",
    name: "Ibugesic Plus",
    category: "pain",
    tagline: "Combines ibuprofen with paracetamol",
    price: 95,
    mrp: 110,
    description: "Dual-action analgesic for inflammatory dental pain and swelling under dentist supervision.",
    highlights: [
      "Take after meals with water",
      "Do not combine with other NSAIDs",
      "Follow tele-consult advice for dosage interval"
    ],
    tags: ["ibuprofen", "combination", "swelling"]
  },
  {
    id: "probiotic",
    name: "Dental Probiotic Sachets",
    category: "wellness",
    tagline: "Supports oral microbiome balance",
    price: 320,
    mrp: 340,
    description: "Lactobacillus reuteri based sachets to reduce bad breath, plaque formation and post-antibiotic imbalance.",
    highlights: [
      "Dissolve in cool water once daily",
      "Use alongside antibiotic therapy",
      "Improves healing after periodontal treatment"
    ],
    tags: ["probiotic", "fresh breath", "recovery"]
  }
];

const PRODUCT_ORDER = new Map(PRODUCTS.map((item, index) => [item.id, index]));

const CATEGORY_LABELS = {
  dental: "Dental care",
  antibiotic: "Antibiotic support",
  pain: "Pain comfort",
  wellness: "Wellness add-on"
};

const CATEGORY_DISCOUNTS = {
  dental: 0.25,
  antibiotic: 0.1,
  pain: 0.1,
  wellness: 0
};

const STORAGE_KEY = "ndc-dental-cart-v1";
const DELIVERY_FEE = 50;

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

const getDiscountRate = (category) => CATEGORY_DISCOUNTS[category] ?? 0;

const getSellingPrice = (product) => {
  const discount = getDiscountRate(product.category);
  return Math.round(product.price * (1 - discount));
};

const loadCart = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => item && item.productId && Number.isFinite(item.quantity));
  } catch (error) {
    console.warn("Unable to load cart", error);
    return [];
  }
};

const saveCart = (cart) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn("Unable to save cart", error);
  }
};

const findProduct = (productId) => PRODUCTS.find((item) => item.id === productId);

const createSnapshot = (product) => ({
  id: product.id,
  name: product.name,
  category: product.category,
  tagline: product.tagline,
  price: product.price,
  mrp: product.mrp,
  sellingPrice: getSellingPrice(product),
  discountRate: getDiscountRate(product.category)
});

let cart = typeof window !== "undefined" ? loadCart() : [];

const getCartCount = () => cart.reduce((total, item) => total + item.quantity, 0);

const updateCartBadges = () => {
  const count = getCartCount();
  document.querySelectorAll("[data-cart-count]").forEach((badge) => {
    if (count > 0) {
      badge.hidden = false;
      badge.textContent = String(count);
    } else {
      badge.hidden = true;
      badge.textContent = "0";
    }
  });
};

const addToCart = (product, quantity = 1, { quiet = false } = {}) => {
  const existing = cart.find((entry) => entry.productId === product.id);
  if (existing) {
    existing.quantity = Math.min(existing.quantity + quantity, 99);
  } else {
    cart.push({ productId: product.id, quantity: Math.max(quantity, 1), snapshot: createSnapshot(product) });
  }
  saveCart(cart);
  updateCartBadges();
  if (!quiet) {
    announce(`${product.name} added to cart.`);
  }
};

const updateCartQuantity = (productId, quantity) => {
  const entry = cart.find((item) => item.productId === productId);
  if (!entry) return;
  entry.quantity = Math.max(1, Math.min(99, quantity));
  saveCart(cart);
  updateCartBadges();
};

const removeFromCart = (productId) => {
  cart = cart.filter((item) => item.productId !== productId);
  saveCart(cart);
  updateCartBadges();
};

const announce = (message) => {
  if (!message) return;
  const liveRegion = document.querySelector("#productLiveRegion");
  if (liveRegion) {
    liveRegion.textContent = "";
    window.setTimeout(() => (liveRegion.textContent = message), 50);
  }
};

const buildProductCard = (product) => {
  const discountRate = getDiscountRate(product.category);
  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.productId = product.id;
  card.innerHTML = `
    <p class="product-card__category">${CATEGORY_LABELS[product.category] ?? "Dental care"}</p>
    ${product.badge ? `<span class="product-card__badge product-card__badge--highlight">${product.badge}</span>` : ""}
    <h3 class="product-card__title">${product.name}</h3>
    <p class="product-card__tagline">${product.tagline}</p>
    <div class="product-card__meta">
      <div class="product-card__price"><strong>${formatCurrency(getSellingPrice(product))}</strong></div>
      ${discountRate > 0 ? `<span class="product-card__badge">${Math.round(discountRate * 100)}% clinic savings</span>` : ""}
    </div>
  `;
  return card;
};

const applyActiveFilter = (buttons, activeKey) => {
  buttons.forEach((button) => {
    const isActive = button.dataset.filterPill === activeKey;
    button.classList.toggle("is-active", isActive);
  });
};

const openDrawer = (product) => {
  const drawer = document.querySelector("[data-drawer]");
  if (!drawer) return;
  const title = drawer.querySelector("[data-drawer-title]");
  const category = drawer.querySelector("[data-drawer-category]");
  const tagline = drawer.querySelector("[data-drawer-tagline]");
  const body = drawer.querySelector("[data-drawer-body]");
  const tags = drawer.querySelector("[data-drawer-tags]");
  const price = drawer.querySelector("[data-drawer-price]");
  const mrp = drawer.querySelector("[data-drawer-mrp]");
  const note = drawer.querySelector("[data-drawer-note]");
  const qtyInput = drawer.querySelector("[data-drawer-qty]");
  const status = drawer.querySelector("[data-drawer-status]");

  if (!title || !category || !tagline || !body || !tags || !price || !mrp || !note || !qtyInput || !status) return;

  title.textContent = product.name;
  category.textContent = CATEGORY_LABELS[product.category] ?? "Dental care";
  tagline.textContent = product.tagline;
  body.innerHTML = `
    <p>${product.description}</p>
    <ul>${product.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
  tags.innerHTML = product.tags?.map((tag) => `<span>#${tag}</span>`).join("") ?? "";
  price.textContent = formatCurrency(getSellingPrice(product));
  mrp.textContent = product.mrp && product.mrp !== product.price ? formatCurrency(product.mrp) : formatCurrency(product.price);
  note.textContent = `${Math.round(getDiscountRate(product.category) * 100)}% clinic discount is applied during billing.`;
  status.textContent = "Tap add to cart or adjust quantity.";
  qtyInput.value = 1;
  drawer.dataset.productId = product.id;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const existing = cart.find((item) => item.productId === product.id);
  if (!existing) {
    addToCart(product, 1, { quiet: true });
    status.textContent = "Added 1 item to your cart. Adjust quantity below.";
  } else {
    qtyInput.value = existing.quantity;
    status.textContent = "Already in your cart. Adjust quantity below.";
  }
};

const closeDrawer = () => {
  const drawer = document.querySelector("[data-drawer]");
  if (!drawer) return;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  drawer.removeAttribute("data-product-id");
  document.body.style.overflow = "";
};

const initDrawer = () => {
  const drawer = document.querySelector("[data-drawer]");
  if (!drawer) return;
  const closeButtons = drawer.querySelectorAll("[data-drawer-close]");
  const addButton = drawer.querySelector("[data-drawer-add]");
  const qtyInput = drawer.querySelector("[data-drawer-qty]");
  const minus = drawer.querySelector("[data-drawer-qty-minus]");
  const plus = drawer.querySelector("[data-drawer-qty-plus]");
  const status = drawer.querySelector("[data-drawer-status]");

  closeButtons.forEach((btn) => btn.addEventListener("click", closeDrawer));
  drawer.addEventListener("click", (event) => {
    if (event.target.matches("[data-drawer-close]")) closeDrawer();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  });

  const clampQty = (value) => Math.max(1, Math.min(99, Number.parseInt(value, 10) || 1));

  minus?.addEventListener("click", () => {
    qtyInput.value = clampQty(Number(qtyInput.value) - 1);
  });
  plus?.addEventListener("click", () => {
    qtyInput.value = clampQty(Number(qtyInput.value) + 1);
  });

  addButton?.addEventListener("click", () => {
    const productId = drawer.dataset.productId;
    const product = findProduct(productId);
    if (!product) return;
    const quantity = clampQty(qtyInput.value);
    updateCartQuantity(product.id, quantity);
    status.textContent = `${product.name} updated to ${quantity} ${quantity === 1 ? "unit" : "units"}.`;
    announce(status.textContent);
  });
};

const initProductCatalogue = () => {
  const grid = document.querySelector("[data-products-grid]");
  if (!grid) return;
  const emptyState = document.querySelector("[data-products-empty]");
  const searchInput = document.querySelector("[data-products-search]");
  const clearButton = document.querySelector("[data-products-clear]");
  const countLabel = document.querySelector("[data-products-count]");
  const sortSelect = document.querySelector("[data-products-sort]");
  const filterButtons = Array.from(document.querySelectorAll("[data-filter-pill]"));
  const defaultCategory = document.body.dataset.catalogCategory || "all";
  let activeFilter = defaultCategory;
  let query = "";
  let sortKey = sortSelect?.value || "recommended";

  const describeFilter = () =>
    activeFilter === "all" || !activeFilter
      ? "all categories"
      : (CATEGORY_LABELS[activeFilter] ?? "All categories").toLowerCase();

  const updateClearVisibility = () => {
    if (clearButton) {
      clearButton.hidden = query.length === 0;
    }
  };

  const matchesFilter = (product) => {
    if (activeFilter === "all" || !activeFilter) return true;
    return product.category === activeFilter;
  };

  const matchesQuery = (product) => {
    if (!query) return true;
    const haystack = [product.name, product.tagline, product.description, ...(product.tags || [])]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query.toLowerCase());
  };

  const sortProducts = (items) => {
    const sorted = items.slice();
    if (sortKey === "price-low") {
      sorted.sort((a, b) => getSellingPrice(a) - getSellingPrice(b));
    } else if (sortKey === "price-high") {
      sorted.sort((a, b) => getSellingPrice(b) - getSellingPrice(a));
    } else if (sortKey === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sorted.sort(
        (a, b) => (PRODUCT_ORDER.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (PRODUCT_ORDER.get(b.id) ?? Number.MAX_SAFE_INTEGER)
      );
    }
    return sorted;
  };

  const updateCountMessage = (count) => {
    if (!countLabel) return;
    const filterLabel = describeFilter();
    if (query) {
      countLabel.textContent = count
        ? `${count} ${count === 1 ? "match" : "matches"} for “${query}” in ${filterLabel}.`
        : `No matches for “${query}” in ${filterLabel}.`;
      return;
    }
    if (activeFilter !== "all") {
      countLabel.textContent = count
        ? `${count} ${count === 1 ? "product" : "products"} in ${filterLabel}.`
        : `No products listed in ${filterLabel} yet.`;
      return;
    }
    countLabel.textContent = count
      ? `Showing ${count} ${count === 1 ? "product card" : "product cards"}.`
      : "No products available right now.";
  };

  const render = () => {
    let products = PRODUCTS.filter((item) => matchesFilter(item) && matchesQuery(item));
    products = sortProducts(products);
    grid.innerHTML = "";
    products.forEach((product) => {
      const card = buildProductCard(product);
      card.addEventListener("click", () => openDrawer(product));
      grid.appendChild(card);
    });
    if (emptyState) {
      emptyState.classList.toggle("hidden", products.length > 0);
   }
    updateCountMessage(products.length);
    updateClearVisibility();
  };

  if (filterButtons.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filterPill || "all";
        applyActiveFilter(filterButtons, activeFilter);
        render();
      });
    });
    applyActiveFilter(filterButtons, activeFilter);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      query = event.target.value.trim();
      render();
    });
  }

  clearButton?.addEventListener("click", () => {
    query = "";
    if (searchInput) {
      searchInput.value = "";
      searchInput.focus();
    }
    render();
  });

  sortSelect?.addEventListener("change", (event) => {
    sortKey = event.target.value;
    render();
  });

  const shortcutButtons = document.querySelectorAll("[data-open-product]");
  if (shortcutButtons.length) {
    shortcutButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const productId = button.dataset.openProduct;
        const product = findProduct(productId);
        if (!product) return;
        activeFilter = product.category || "all";
        query = "";
        if (searchInput) searchInput.value = "";
        applyActiveFilter(filterButtons, activeFilter);
        render();
        window.requestAnimationFrame(() => openDrawer(product));
      });
    });
  }

  render();
};

const calculateCartSummary = () => {
  const lines = cart.map((item) => {
    const snapshot = item.snapshot ?? createSnapshot(findProduct(item.productId));
    const price = snapshot?.price ?? 0;
    const discountRate = snapshot?.discountRate ?? 0;
    const sellingPrice = snapshot?.sellingPrice ?? Math.round(price * (1 - discountRate));
    const subtotal = sellingPrice * item.quantity;
    const fullSubtotal = price * item.quantity;
    const discount = fullSubtotal - subtotal;
    return {
      productId: item.productId,
      quantity: item.quantity,
      name: snapshot?.name ?? item.productId,
      category: snapshot?.category ?? "dental",
      tagline: snapshot?.tagline ?? "",
      price,
      sellingPrice,
      subtotal,
      discount,
      discountRate
    };
  });

  const subtotal = lines.reduce((total, line) => total + line.subtotal + line.discount, 0);
  const discount = lines.reduce((total, line) => total + line.discount, 0);
  const shipping = lines.length ? DELIVERY_FEE : 0;
  const total = subtotal - discount + shipping;
  return { lines, subtotal, discount, shipping, total };
};

const renderCartPage = () => {
  const cartPage = document.body.hasAttribute("data-cart-page");
  if (!cartPage) return;
  const list = document.querySelector("[data-cart-list]");
  const emptyState = document.querySelector("[data-cart-empty]");
  const subtotalEl = document.querySelector("[data-cart-subtotal]");
  const discountEl = document.querySelector("[data-cart-discount]");
  const deliveryEl = document.querySelector("[data-cart-delivery]");
  const totalEl = document.querySelector("[data-cart-total]");
  const noteEl = document.querySelector("[data-cart-note]");
  const checkoutStatus = document.querySelector("[data-checkout-status]");
  const checkoutBtn = document.querySelector("[data-checkout-btn]");
  const patientForm = document.querySelector("[data-patient-form]");

  const updateList = () => {
    const summary = calculateCartSummary();
    if (!list) return;
    list.innerHTML = "";
    summary.lines.forEach((line) => {
      const li = document.createElement("li");
      li.className = "cart-item";
      li.dataset.itemId = line.productId;
      li.innerHTML = `
        <div class="cart-item__title">${line.name} <span class="product-card__badge">${Math.round(line.discountRate * 100)}% off</span></div>
        <p class="cart-item__meta">${CATEGORY_LABELS[line.category] ?? "Dental care"} · ${line.tagline}</p>
        <p class="cart-item__meta">${formatCurrency(line.sellingPrice)} each · Line total ${formatCurrency(line.sellingPrice * line.quantity)}</p>
        <div class="cart-item__actions">
          <button type="button" data-action="decrease">−</button>
          <span aria-live="polite">Qty ${line.quantity}</span>
          <button type="button" data-action="increase">+</button>
          <button type="button" data-action="remove">Remove</button>
        </div>
      `;
      list.appendChild(li);
    });

    if (emptyState) emptyState.hidden = summary.lines.length > 0;
    if (subtotalEl) subtotalEl.textContent = formatCurrency(summary.subtotal);
    if (discountEl) discountEl.textContent = `−${formatCurrency(summary.discount)}`;
    if (deliveryEl) deliveryEl.textContent = formatCurrency(summary.shipping);
    if (totalEl) totalEl.textContent = formatCurrency(summary.total);
    if (noteEl) {
      const parts = [];
      const categories = new Map();
      summary.lines.forEach((line) => {
        if (line.discountRate > 0) {
          const current = categories.get(line.category) ?? 0;
          categories.set(line.category, current + 1);
        }
      });
      categories.forEach((count, category) => {
        parts.push(`${Math.round(getDiscountRate(category) * 100)}% ${CATEGORY_LABELS[category]?.toLowerCase()}`);
      });
      noteEl.textContent = parts.length
        ? `Clinic savings active on ${parts.join(" & ")}. Delivery is fixed at ₹50.`
        : `Add dental, antibiotic or pain comfort products to unlock clinic savings. Delivery is fixed at ₹50.`;
    }

    if (checkoutBtn) {
      checkoutBtn.disabled = summary.lines.length === 0;
    }

    updateCartBadges();
  };

  const handleListClick = (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const listItem = button.closest(".cart-item");
    if (!listItem) return;
    const productId = listItem.dataset.itemId;
    const action = button.dataset.action;
    const entry = cart.find((item) => item.productId === productId);
    if (!entry) return;

    if (action === "increase") {
      updateCartQuantity(productId, entry.quantity + 1);
    } else if (action === "decrease") {
      if (entry.quantity > 1) updateCartQuantity(productId, entry.quantity - 1);
    } else if (action === "remove") {
      removeFromCart(productId);
    }
    updateList();
  };

  const getPatientDetails = () => {
    if (!patientForm) return null;
    const formData = new FormData(patientForm);
    const data = Object.fromEntries(formData.entries());
    const payment = formData.get("payment") || "UPI";
    return {
      name: data.patientName?.trim(),
      phone: data.patientPhone?.trim(),
      address: data.patientAddress?.trim(),
      complaint: data.patientComplaint?.trim(),
      notes: data.patientNotes?.trim(),
      payment
    };
  };

  const isCheckoutReady = () => {
    const summary = calculateCartSummary();
    if (summary.lines.length === 0) return false;
    const patient = getPatientDetails();
    if (!patient) return false;
    return Boolean(patient.name && patient.phone && patient.address && patient.complaint);
  };

  const updateCheckoutState = () => {
    if (!checkoutBtn || !checkoutStatus) return;
    if (isCheckoutReady()) {
      checkoutBtn.disabled = false;
      checkoutStatus.textContent = "Ready to share. Click the button to open WhatsApp and email.";
    } else {
      checkoutBtn.disabled = true;
      checkoutStatus.textContent = "Fill in patient details to enable WhatsApp and email sharing.";
    }
  };

  checkoutBtn?.addEventListener("click", () => {
    if (!isCheckoutReady()) return;
    const summary = calculateCartSummary();
    const patient = getPatientDetails();
    const lines = summary.lines
      .map((line) => `${line.quantity} × ${line.name} (${CATEGORY_LABELS[line.category] ?? "Dental care"}) – ${formatCurrency(line.sellingPrice)} each`)
      .join("\n");
    const totals = `Subtotal: ${formatCurrency(summary.subtotal)}\nDiscounts: ${formatCurrency(summary.discount)}\nDelivery: ${formatCurrency(summary.shipping)}\nEstimated payable: ${formatCurrency(summary.total)}`;

    const header = `Patient: ${patient.name}\nPhone: ${patient.phone}\nAddress: ${patient.address}\nComplaint: ${patient.complaint}`;
    const notes = patient.notes ? `\nNotes: ${patient.notes}` : "";
    const payment = `\nPreferred payment: ${patient.payment}`;

    const body = `${header}${notes}${payment}\n\nProducts:\n${lines}\n\n${totals}\n\nOne-time 50% consultation discount eligible on in-clinic visit.`;

    const mailSubject = encodeURIComponent("Noble Dental Care – Product order summary");
    const mailBody = encodeURIComponent(body);
    window.open(`mailto:dr.dhivakaran@gmail.com?subject=${mailSubject}&body=${mailBody}`, "_blank");

    const whatsappText = encodeURIComponent(`Dental order from ${patient.name}\n\n${lines}\n${totals}\n\nAddress: ${patient.address}\nComplaint: ${patient.complaint}${notes}\nPayment: ${patient.payment}`);
    window.open(`https://wa.me/918610425342?text=${whatsappText}`, "_blank");

    if (checkoutStatus) {
      checkoutStatus.textContent = "Opened WhatsApp and email with your order summary. We will call shortly.";
    }
  });

  patientForm?.addEventListener("input", updateCheckoutState);
  list?.addEventListener("click", handleListClick);

  updateList();
  updateCheckoutState();
};

const init = () => {
  document.addEventListener("DOMContentLoaded", () => {
    updateCartBadges();
    initDrawer();
    initProductCatalogue();
    renderCartPage();
    if (!document.querySelector("#productLiveRegion")) {
      const live = document.createElement("div");
      live.id = "productLiveRegion";
      live.className = "visually-hidden";
      live.setAttribute("aria-live", "polite");
      document.body.appendChild(live);
    }
  });
};

init();
