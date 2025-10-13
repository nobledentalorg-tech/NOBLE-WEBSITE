import { ADMIN_PASSWORD } from '../config/admin-config.js';
import { TEAM_MEMBERS as BASE_TEAM, CERTIFICATES_LIBRARY as BASE_CERTIFICATES, NEWS_BROADCAST as BASE_NEWS } from './certificates-data.js';

function toArray(value) {
  return Array.isArray(value) ? value : [];
}

const storageKeys = {
  certificates: 'nobleCertificates',
  news: 'nobleNews',
  team: 'nobleTeamMembers'
};

const siteOrigin = (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin !== 'null')
  ? window.location.origin
  : 'https://nobledentalnallagandla.in';

const state = {
  authenticated: false,
  pendingModal: null,
  filters: {
    staff: 'all',
    search: ''
  },
  baseTeam: toArray(BASE_TEAM),
  localTeam: [],
  teamMembers: [],
  baseCertificates: toArray(BASE_CERTIFICATES),
  localCertificates: [],
  certificates: [],
  baseNews: toArray(BASE_NEWS),
  localNews: [],
  news: []
};

const previewState = {
  certificate: null,
  news: null
};

const dom = {
  filterToolbar: document.querySelector('.filter-toolbar'),
  credentialCount: document.getElementById('credential-count'),
  credentialGrid: document.querySelector('.credentials-grid'),
  newsGrid: document.querySelector('.news-grid'),
  scoreboard: document.getElementById('certificate-scoreboard'),
  searchInput: document.getElementById('credential-search'),
  jsonOutputs: {
    certificate: document.getElementById('credential-json-output'),
    news: document.getElementById('news-json-output')
  },
  toast: document.querySelector('.toast'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
  modals: {
    login: document.getElementById('login-modal'),
    credential: document.getElementById('credential-modal'),
    news: document.getElementById('news-modal')
  },
  loginForm: document.getElementById('login-form'),
  credentialForm: document.getElementById('credential-form'),
  newsForm: document.getElementById('news-form'),
  staffSelect: document.getElementById('certificate-staff'),
  customStaffFields: document.getElementById('custom-staff-fields'),
  credentialSchema: document.getElementById('credential-schema'),
  newsSchema: document.getElementById('news-schema'),
  certificateImageFile: document.getElementById('certificate-image-file'),
  certificateImagePath: document.getElementById('certificate-image-path'),
  certificateImagePreview: document.getElementById('certificate-image-preview'),
  newsImageFile: document.getElementById('news-image-file'),
  newsImagePath: document.getElementById('news-image-path'),
  newsImagePreview: document.getElementById('news-image-preview'),
  adminPanels: document.querySelectorAll('[data-admin-panel]')
};

function storageAvailable() {
  try {
    const testKey = '__noble_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    console.warn('Local storage unavailable', error);
    return false;
  }
}

const canUseStorage = typeof window !== 'undefined' && storageAvailable();

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || `team-${Math.random().toString(16).slice(2)}`;
}

function kebabCase(value) {
  return (value || '')
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function buildMediaPath({ kind, title, staffName, originalName }) {
  const extension = originalName?.split('.').pop()?.toLowerCase() || 'webp';
  const titleSlug = kebabCase(title) || kind;
  const staffSlug = kebabCase(staffName) || 'noble-team';
  const year = new Date().getFullYear();
  return `images/blog/${staffSlug}-${titleSlug}-${year}.${extension}`;
}

function getCredentialField(name) {
  return dom.credentialForm?.querySelector(`[name="${name}"]`);
}

function getNewsField(name) {
  return dom.newsForm?.querySelector(`[name="${name}"]`);
}

function parseStoredData(key) {
  if (!canUseStorage) return [];
  const raw = window.localStorage.getItem(key);
  if (!raw) return [];
  try {
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.warn(`Unable to parse stored data for ${key}`, error);
    return [];
  }
}

function mergeById(base, additions) {
  const baseEntries = Array.isArray(base) ? base : [];
  const additionEntries = Array.isArray(additions) ? additions : [];
  const map = new Map();
  baseEntries.forEach((entry) => {
    if (entry && entry.id) {
      map.set(entry.id, { ...entry });
    }
  });
  additionEntries.forEach((entry) => {
    if (!entry || !entry.id) {
      return;
    }
    const existing = map.get(entry.id) || {};
    map.set(entry.id, { ...existing, ...entry });
  });
  return Array.from(map.values());
}

function generateId(prefix) {
  const base = (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function')
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${prefix}-${base}`;
}

function findTeamMemberByName(name) {
  const normalised = name?.trim().toLowerCase();
  return state.teamMembers.find((member) => member.name.trim().toLowerCase() === normalised);
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

function resolveSelectedStaffName() {
  if (dom.staffSelect?.value && dom.staffSelect.value !== '__custom__') {
    const member = getTeamMemberById(dom.staffSelect.value);
    return member?.name || '';
  }
  return dom.customStaffFields?.querySelector('input[name="staffName"]')?.value || '';
}

function setPreviewImage(previewElement, file, key) {
  if (!previewElement) return;
  const image = previewElement.querySelector('img');
  if (!image) return;
  if (previewState[key]) {
    URL.revokeObjectURL(previewState[key]);
    previewState[key] = null;
  }
  if (!file) {
    previewElement.hidden = true;
    image.removeAttribute('src');
    return;
  }
function showPreviewFromPath(previewElement, src, altText, key) {
  if (!previewElement) return;
  const image = previewElement.querySelector('img');
  if (!image) return;
  if (key && previewState[key]) {
    URL.revokeObjectURL(previewState[key]);
    previewState[key] = null;
  }
  if (!src) {
    previewElement.hidden = true;
    image.removeAttribute('src');
    return;
  }
  image.src = src;
  if (altText) {
    image.alt = altText;
  }
  previewElement.hidden = false;
}

function updateCredentialImageSuggestion(force = false) {
  if (!dom.certificateImagePath) return;
  const currentValue = dom.certificateImagePath.value.trim();
  const wasAuto = dom.certificateImagePath.dataset.autoValue === currentValue && currentValue !== '';
  if (!force && currentValue && !wasAuto) {
    return;
  }
  const title = getCredentialField('title')?.value || 'credential';
  const staffName = resolveSelectedStaffName() || 'Noble Dental Care';
  const file = dom.certificateImageFile?.files?.[0];
  const suggestion = buildMediaPath({
    kind: 'credential',
    title,
    staffName,
    originalName: file?.name
  });
  dom.certificateImagePath.value = suggestion;
  dom.certificateImagePath.dataset.autoValue = suggestion;
}

function updateNewsImageSuggestion(force = false) {
  if (!dom.newsImagePath) return;
  const currentValue = dom.newsImagePath.value.trim();
  const wasAuto = dom.newsImagePath.dataset.autoValue === currentValue && currentValue !== '';
  if (!force && currentValue && !wasAuto) {
    return;
  }
  const headline = getNewsField('headline')?.value || 'daily-update';
  const file = dom.newsImageFile?.files?.[0];
  const suggestion = buildMediaPath({
    kind: 'news',
    title: headline,
    staffName: 'knowledge-broadcast',
    originalName: file?.name
  });
  dom.newsImagePath.value = suggestion;
  dom.newsImagePath.dataset.autoValue = suggestion;
}

function presetCredentialDefaults() {
  const issueField = getCredentialField('issueDate');
  if (issueField && !issueField.value) {
    issueField.value = new Date().toISOString().split('T')[0];
  }
  const typeField = getCredentialField('credentialType');
  if (typeField && !typeField.value) {
    typeField.value = 'Medical';
  }
  const idField = getCredentialField('certificateId');
  if (idField) {
    idField.value = '';
  }
  if (dom.customStaffFields) {
    dom.customStaffFields.hidden = true;
  }
  if (dom.certificateImageFile) {
    dom.certificateImageFile.value = '';
  }
  if (dom.credentialForm) {
    const submitButton = dom.credentialForm.querySelector('button[type="submit"]');
    if (submitButton) {
      if (!submitButton.dataset.defaultText) {
        submitButton.dataset.defaultText = submitButton.textContent;
      }
      submitButton.textContent = submitButton.dataset.defaultText;
    }
  }
  updateCredentialImageSuggestion(true);
  if (dom.certificateImagePreview) {
    setPreviewImage(dom.certificateImagePreview, null, 'certificate');
  }
}

function presetNewsDefaults() {
  const dateField = getNewsField('publishedOn');
  if (dateField && !dateField.value) {
    dateField.value = new Date().toISOString().split('T')[0];
  }
  const idField = getNewsField('newsId');
  if (idField) {
    idField.value = '';
  }
  if (dom.newsImageFile) {
    dom.newsImageFile.value = '';
  }
  if (dom.newsForm) {
    const submitButton = dom.newsForm.querySelector('button[type="submit"]');
    if (submitButton) {
      if (!submitButton.dataset.defaultText) {
        submitButton.dataset.defaultText = submitButton.textContent;
      }
      submitButton.textContent = submitButton.dataset.defaultText;
    }
  }
  updateNewsImageSuggestion(true);
  if (dom.newsImagePreview) {
    setPreviewImage(dom.newsImagePreview, null, 'news');
  }
}

function normaliseCertificate(entry) {
  if (!entry || typeof entry !== 'object') {
    return null;
  }
  const id = entry.id || entry.certificateId || generateId('cert');
  if (entry.title && entry.staffName) {
    return {
      ...entry,
      id,
      tags: normaliseTags(entry.tags)
    };
  }

  const staffName = entry.staffName || entry.issuedTo || entry.staff || 'Noble Dental Care Team';
  const teamMember = findTeamMemberByName(staffName);
  const staffId = teamMember?.id || slugify(staffName);
  const profileImage = entry.profileImage || teamMember?.profileImage || 'images/blog/implants.webp';
  const staffRole = entry.staffRole || entry.focusArea || teamMember?.role || 'Dental Professional';
  const issuer = entry.issuer || entry.issuingAuthority || 'Noble Dental Care Academy';
  const issueDate = entry.issueDate || entry.issue_date || new Date().toISOString().split('T')[0];
  const credentialType = entry.credentialType || entry.courseLevel || (teamMember?.category === 'Non-Medical' ? 'Non-Medical' : 'Medical');
  const location = entry.location || 'Hyderabad, India';
  const tags = normaliseTags(entry.tags || entry.focusArea);
  const image = entry.image || entry.imagePath || 'images/blog/implants.webp';
  const description = entry.description || entry.certificateSummary || entry.summary || '';

  return {
    id,
    staffId,
    staffName,
    staffRole,
    profileImage,
    title: entry.title || entry.certificateTitle || 'Credential',
    issuer,
    issueDate,
    credentialCode: entry.credentialCode || '',
    location,
    credentialType,
    tags,
    image,
    description
  };
}

function normaliseNews(entry) {
  if (!entry || typeof entry !== 'object') {
    return null;
  }
  const id = entry.id || entry.newsId || generateId('news');
  if (entry.headline && entry.summary) {
    return {
      ...entry,
      id,
      tags: normaliseTags(entry.tags)
    };
  }
  return {
    id,
    headline: entry.headline || entry.newsTitle || 'Noble Dental Care Update',
    summary: entry.summary || entry.newsSummary || '',
    publishedOn: entry.publishedOn || entry.newsDate || '',
    link: entry.link || entry.newsLink || '',
    tags: normaliseTags(entry.tags || entry.newsTags),
    image: entry.image || entry.coverImage || 'images/blog/implants.webp',
    documentUrl: entry.documentUrl || entry.referenceDocument || ''
  };
}

function loadState() {
  state.localTeam = parseStoredData(storageKeys.team).filter((entry) => entry && entry.id);
  state.teamMembers = mergeById(state.baseTeam, state.localTeam);

  state.localCertificates = parseStoredData(storageKeys.certificates)
    .map((entry) => normaliseCertificate(entry))
    .filter(Boolean);
  state.certificates = mergeById(state.baseCertificates, state.localCertificates);

  state.localNews = parseStoredData(storageKeys.news)
    .map((entry) => normaliseNews(entry))
    .filter(Boolean);
  state.news = mergeById(state.baseNews, state.localNews);
}

function saveLocalData(key, value) {
  if (!canUseStorage) return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function showToast(message) {
  if (!dom.toast) return;
  dom.toast.textContent = message;
  dom.toast.classList.add('active');
  window.setTimeout(() => {
    dom.toast.classList.remove('active');
  }, 3400);
}

function syncAdminPanels(activeModalName = null) {
  if (!dom.adminPanels || typeof dom.adminPanels.forEach !== 'function') return;
  dom.adminPanels.forEach((panel) => {
    const panelFor = panel.getAttribute('data-panel-for');
    const shouldReveal = state.authenticated && panelFor === activeModalName;
    panel.hidden = !shouldReveal;
    panel.setAttribute('aria-hidden', shouldReveal ? 'false' : 'true');
  });
}

function openModal(name) {
  const modal = dom.modals[name];
  if (!dom.modalBackdrop || !modal) return;
  dom.modalBackdrop.classList.add('active');
  Object.values(dom.modals).forEach((dialog) => {
    if (!dialog) return;
    dialog.classList.remove('active-modal');
    dialog.setAttribute('aria-hidden', 'true');
  });
  modal.classList.add('active-modal');
  modal.setAttribute('aria-hidden', 'false');
  if (name === 'credential') {
    presetCredentialDefaults();
  } else if (name === 'news') {
    presetNewsDefaults();
  }
  syncAdminPanels(name);
  const focusTarget = modal.querySelector('input, select, textarea, button');
  focusTarget?.focus();
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active-modal');
  modal.setAttribute('aria-hidden', 'true');
  const stillOpen = Object.values(dom.modals).some((dialog) => dialog?.classList.contains('active-modal'));
  if (!stillOpen) {
    dom.modalBackdrop?.classList.remove('active');
    syncAdminPanels(null);
  } else {
    const activeEntry = Object.entries(dom.modals).find(([, dialog]) => dialog?.classList.contains('active-modal'));
    syncAdminPanels(activeEntry?.[0] || null);
  }
}

function closeAllModals() {
  Object.values(dom.modals).forEach((modal) => closeModal(modal));
}

function populateStaffSelect() {
  if (!dom.staffSelect) return;
  dom.staffSelect.innerHTML = '';
  state.teamMembers
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((member) => {
      const option = document.createElement('option');
      option.value = member.id;
      option.textContent = `${member.name} — ${member.role}`;
      dom.staffSelect.appendChild(option);
    });
  const customOption = document.createElement('option');
  customOption.value = '__custom__';
  customOption.textContent = 'Add new team member…';
  dom.staffSelect.appendChild(customOption);
}

function renderFilterToolbar() {
  if (!dom.filterToolbar) return;
  dom.filterToolbar.innerHTML = '';

  const makeButton = (label, value) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.dataset.value = value;
    if (state.filters.staff === value) {
      button.classList.add('active');
    }
    button.addEventListener('click', () => {
      state.filters.staff = value;
      renderFilterToolbar();
      renderCertificates();
    });
    return button;
  };

  dom.filterToolbar.appendChild(makeButton('All team', 'all'));
  dom.filterToolbar.appendChild(makeButton('Doctors', 'category:Doctor'));
  dom.filterToolbar.appendChild(makeButton('Support team', 'category:Non-Medical'));

  state.teamMembers.forEach((member) => {
    const value = `member:${member.id}`;
    const button = makeButton(member.name, value);
    dom.filterToolbar.appendChild(button);
  });
}

function getTeamMemberById(id) {
  return state.teamMembers.find((member) => member.id === id);
}

function matchesStaffFilter(certificate) {
  const filter = state.filters.staff;
  if (!filter || filter === 'all') {
    return true;
  }
  if (filter.startsWith('category:')) {
    const category = filter.split(':')[1];
    const member = getTeamMemberById(certificate.staffId);
    return member?.category === category;
  }
  if (filter.startsWith('member:')) {
    const id = filter.split(':')[1];
    return certificate.staffId === id;
  }
  return true;
}

function matchesSearchFilter(certificate) {
  const query = state.filters.search.trim().toLowerCase();
  if (!query) return true;
  const haystack = [
    certificate.title,
    certificate.staffName,
    certificate.staffRole,
    certificate.issuer,
    certificate.location,
    certificate.description,
    certificate.tags?.join(' ')
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return haystack.includes(query);
}

function formatDate(value) {
  if (!value) return '';
  try {
    return new Date(value).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch (error) {
    return value;
  }
}

function createCredentialCard(certificate) {
  const card = document.createElement('article');
  card.className = 'credential-card';
  card.dataset.certificateId = certificate.id;

  const figure = document.createElement('figure');
  const image = document.createElement('img');
  image.src = certificate.image;
  image.alt = `${certificate.title} credential for ${certificate.staffName}`;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.setAttribute('draggable', 'false');
  figure.appendChild(image);
  card.appendChild(figure);

  const body = document.createElement('div');
  body.className = 'card-body';

  if (certificate.tags && certificate.tags.length > 0) {
    const tagList = document.createElement('div');
    tagList.className = 'tag-list';
    certificate.tags.forEach((tag) => {
      const span = document.createElement('span');
      span.textContent = tag;
      tagList.appendChild(span);
    });
    body.appendChild(tagList);
  }

  const title = document.createElement('h3');
  title.textContent = certificate.title;
  body.appendChild(title);

  if (certificate.description) {
    const description = document.createElement('p');
    description.textContent = certificate.description;
    body.appendChild(description);
  }

  const meta = document.createElement('div');
  meta.className = 'card-meta';
  const issuer = document.createElement('span');
  issuer.innerHTML = `<strong>Issuer:</strong> ${certificate.issuer}`;
  meta.appendChild(issuer);
  if (certificate.issueDate) {
    const issued = document.createElement('span');
    issued.innerHTML = `<strong>Issued:</strong> ${formatDate(certificate.issueDate)}`;
    meta.appendChild(issued);
  }
  if (certificate.location) {
    const location = document.createElement('span');
    location.innerHTML = `<strong>Location:</strong> ${certificate.location}`;
    meta.appendChild(location);
  }
  if (certificate.credentialType) {
    const type = document.createElement('span');
    type.innerHTML = `<strong>Type:</strong> ${certificate.credentialType}`;
    meta.appendChild(type);
  }
  body.appendChild(meta);

  const footer = document.createElement('div');
  footer.className = 'card-footer';
  const profile = document.createElement('div');
  profile.className = 'profile';
  const avatar = document.createElement('img');
  const member = getTeamMemberById(certificate.staffId);
  avatar.src = member?.profileImage || certificate.profileImage || 'images/blog/implants.webp';
  avatar.alt = `${certificate.staffName} profile photo`;
  avatar.loading = 'lazy';
  avatar.decoding = 'async';
  avatar.setAttribute('draggable', 'false');
  profile.appendChild(avatar);
  const profileText = document.createElement('div');
  const name = document.createElement('strong');
  name.textContent = certificate.staffName;
  const role = document.createElement('span');
  role.textContent = certificate.staffRole || member?.role || '';
  profileText.appendChild(name);
  profileText.appendChild(role);
  profile.appendChild(profileText);
  footer.appendChild(profile);

  body.appendChild(footer);
  card.appendChild(body);

  if (state.authenticated) {
    const adminActions = document.createElement('div');
    adminActions.className = 'card-admin-actions';
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.className = 'card-admin-button';
    editButton.textContent = 'Edit';
    editButton.setAttribute('data-edit-certificate', certificate.id);
    adminActions.appendChild(editButton);
    card.appendChild(adminActions);
  }

  return card;
}

function createNewsCard(entry) {
  const card = document.createElement('article');
  card.className = 'news-card';
  card.dataset.newsId = entry.id;

  if (entry.image) {
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = entry.image;
    image.alt = `${entry.headline} feature image`;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.setAttribute('draggable', 'false');
    figure.appendChild(image);
    card.appendChild(figure);
  }

  const title = document.createElement('h3');
  title.textContent = entry.headline;
  card.appendChild(title);

  if (entry.publishedOn) {
    const time = document.createElement('time');
    time.dateTime = entry.publishedOn;
    time.textContent = formatDate(entry.publishedOn);
    card.appendChild(time);
  }

  if (entry.summary) {
    const summary = document.createElement('p');
    summary.textContent = entry.summary;
    card.appendChild(summary);
  }

  if (entry.tags && entry.tags.length > 0) {
    const tagList = document.createElement('div');
    tagList.className = 'tag-list';
    entry.tags.forEach((tag) => {
      const span = document.createElement('span');
      span.textContent = tag;
      tagList.appendChild(span);
    });
    card.appendChild(tagList);
  }

  if (entry.link) {
    const link = document.createElement('a');
    link.className = 'btn-view';
    link.href = entry.link;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Read update';
    card.appendChild(link);
  }

  if (entry.documentUrl) {
    const docLink = document.createElement('a');
    docLink.className = 'doc-link';
    docLink.href = entry.documentUrl;
    docLink.target = '_blank';
    docLink.rel = 'noopener';
    docLink.textContent = 'Open supporting document';
    card.appendChild(docLink);
  }

  if (state.authenticated) {
    const adminActions = document.createElement('div');
    adminActions.className = 'card-admin-actions';
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.className = 'card-admin-button';
    editButton.textContent = 'Edit';
    editButton.setAttribute('data-edit-news', entry.id);
    adminActions.appendChild(editButton);
    card.appendChild(adminActions);
  }

  return card;
}

function populateCredentialForm(certificate) {
  if (!dom.credentialForm) return;
  const submitButton = dom.credentialForm.querySelector('button[type="submit"]');
  if (submitButton) {
    if (!submitButton.dataset.defaultText) {
      submitButton.dataset.defaultText = submitButton.textContent;
    }
    submitButton.textContent = 'Update credential';
  }

  const idField = getCredentialField('certificateId');
  if (idField) {
    idField.value = certificate.id;
  }

  if (dom.certificateImageFile) {
    dom.certificateImageFile.value = '';
  }

  const staffMember = getTeamMemberById(certificate.staffId);
  if (dom.staffSelect) {
    if (staffMember) {
      dom.staffSelect.value = staffMember.id;
      if (dom.customStaffFields) {
        dom.customStaffFields.hidden = true;
      }
    } else {
      dom.staffSelect.value = '__custom__';
      if (dom.customStaffFields) {
        dom.customStaffFields.hidden = false;
        const nameInput = dom.customStaffFields.querySelector('input[name="staffName"]');
        const roleInput = dom.customStaffFields.querySelector('input[name="staffRole"]');
        const imageInput = dom.customStaffFields.querySelector('input[name="profileImage"]');
        if (nameInput) nameInput.value = certificate.staffName || '';
        if (roleInput) roleInput.value = certificate.staffRole || '';
        if (imageInput) imageInput.value = certificate.profileImage || '';
      }
    }
  }

  const titleField = getCredentialField('title');
  if (titleField) {
    titleField.value = certificate.title || '';
  }

  const descriptionField = getCredentialField('description');
  if (descriptionField) {
    descriptionField.value = certificate.description || '';
  }

  const issuerField = getCredentialField('issuer');
  if (issuerField) {
    issuerField.value = certificate.issuer || '';
  }

  const issueDateField = getCredentialField('issueDate');
  if (issueDateField) {
    issueDateField.value = certificate.issueDate || '';
  }

  const credentialTypeField = getCredentialField('credentialType');
  if (credentialTypeField) {
    credentialTypeField.value = certificate.credentialType || credentialTypeField.value || 'Medical';
  }

  const locationField = getCredentialField('location');
  if (locationField) {
    locationField.value = certificate.location || '';
  }

  const codeField = getCredentialField('credentialCode');
  if (codeField) {
    codeField.value = certificate.credentialCode || '';
  }

  const tagsField = getCredentialField('tags');
  if (tagsField) {
    tagsField.value = (certificate.tags || []).join(', ');
  }

  const imagePathField = getCredentialField('image');
  if (imagePathField) {
    imagePathField.value = certificate.image || '';
    imagePathField.dataset.autoValue = certificate.image || '';
  }

  showPreviewFromPath(dom.certificateImagePreview, certificate.image, `${certificate.title} credential preview`, 'certificate');

  const focusTarget = titleField || dom.credentialForm.querySelector('input, textarea');
  focusTarget?.focus();
}

function populateNewsForm(entry) {
  if (!dom.newsForm) return;
  const submitButton = dom.newsForm.querySelector('button[type="submit"]');
  if (submitButton) {
    if (!submitButton.dataset.defaultText) {
      submitButton.dataset.defaultText = submitButton.textContent;
    }
    submitButton.textContent = 'Update news';
  }

  const idField = getNewsField('newsId');
  if (idField) {
    idField.value = entry.id;
  }

  if (dom.newsImageFile) {
    dom.newsImageFile.value = '';
  }

  const headlineField = getNewsField('headline');
  if (headlineField) {
    headlineField.value = entry.headline || '';
  }

  const summaryField = getNewsField('summary');
  if (summaryField) {
    summaryField.value = entry.summary || '';
  }

  const dateField = getNewsField('publishedOn');
  if (dateField) {
    dateField.value = entry.publishedOn || '';
  }

  const linkField = getNewsField('link');
  if (linkField) {
    linkField.value = entry.link || '';
  }

  const tagsField = getNewsField('tags');
  if (tagsField) {
    tagsField.value = (entry.tags || []).join(', ');
  }

  const imageField = getNewsField('image');
  if (imageField) {
    imageField.value = entry.image || '';
    imageField.dataset.autoValue = entry.image || '';
  }

  const documentField = getNewsField('documentUrl');
  if (documentField) {
    documentField.value = entry.documentUrl || '';
  }

  showPreviewFromPath(dom.newsImagePreview, entry.image, `${entry.headline} preview image`, 'news');

  const focusTarget = headlineField || dom.newsForm.querySelector('input, textarea');
  focusTarget?.focus();
}

function handleCredentialGridClick(event) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const editButton = target.closest('[data-edit-certificate]');
  if (!editButton) return;
  event.preventDefault();
  event.stopPropagation();
  const certificateId = editButton.getAttribute('data-edit-certificate');
  if (!certificateId) {
    showToast('Unable to identify the certificate to edit.');
    return;
  }
  if (!state.authenticated) {
    ensureAuthentication('credential');
    return;
  }
  const certificate = state.certificates.find((entry) => entry.id === certificateId);
  if (!certificate) {
    showToast('Credential not found. It may have been removed.');
    return;
  }
  openModal('credential');
  populateCredentialForm(certificate);
}

function handleNewsGridClick(event) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const editButton = target.closest('[data-edit-news]');
  if (!editButton) return;
  event.preventDefault();
  event.stopPropagation();
  const newsId = editButton.getAttribute('data-edit-news');
  if (!newsId) {
    showToast('Unable to identify the news entry to edit.');
    return;
  }
  if (!state.authenticated) {
    ensureAuthentication('news');
    return;
  }
  const entry = state.news.find((item) => item.id === newsId);
  if (!entry) {
    showToast('News update not found. It may have been removed.');
    return;
  }
  openModal('news');
  populateNewsForm(entry);
}

function renderCertificates() {
  if (!dom.credentialGrid) return;
  dom.credentialGrid.innerHTML = '';
  const filtered = state.certificates
    .filter((certificate) => matchesStaffFilter(certificate) && matchesSearchFilter(certificate))
    .sort((a, b) => new Date(b.issueDate || 0) - new Date(a.issueDate || 0));

  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'No certificates match the filters yet. Add a new credential to spotlight our upgrades.';
    dom.credentialGrid.appendChild(empty);
  } else {
    filtered.forEach((certificate, index) => {
      const card = createCredentialCard(certificate);
      card.style.setProperty('--card-delay', `${index * 70}ms`);
      dom.credentialGrid.appendChild(card);
    });
  }

  if (dom.credentialCount) {
    const total = state.certificates.length;
    dom.credentialCount.textContent = filtered.length === total
      ? `${total} verified credentials`
      : `Showing ${filtered.length} of ${total} verified credentials`;
  }

  renderScoreboard();
}

function renderNews() {
  if (!dom.newsGrid) return;
  dom.newsGrid.innerHTML = '';
  if (state.news.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'No news has been logged yet. Share a knowledge broadcast to keep the page fresh.';
    dom.newsGrid.appendChild(empty);
    return;
  }
  state.news
    .slice()
    .sort((a, b) => new Date(b.publishedOn || 0) - new Date(a.publishedOn || 0))
    .forEach((entry, index) => {
      const card = createNewsCard(entry);
      card.style.setProperty('--card-delay', `${index * 70}ms`);
      dom.newsGrid.appendChild(card);
    });
}

function getCertificateCounts() {
  const counts = new Map();
  state.certificates.forEach((certificate) => {
    const staffId = certificate.staffId || slugify(certificate.staffName || 'team-member');
    const key = staffId || certificate.staffName || certificate.id;
    if (!counts.has(key)) {
      const member = getTeamMemberById(staffId);
      counts.set(key, {
        id: key,
        staffId,
        name: member?.name || certificate.staffName || 'Noble Dental Care Team',
        role: member?.role || certificate.staffRole || '',
        profileImage: member?.profileImage || certificate.profileImage || 'images/blog/implants.webp',
        count: 0,
        credentials: [],
        tags: new Set()
      });
    }
    const record = counts.get(key);
    record.count += 1;
    record.credentials.push({
      id: certificate.id,
      title: certificate.title,
      issueDate: certificate.issueDate,
      credentialType: certificate.credentialType
    });
    (certificate.tags || []).forEach((tag) => record.tags.add(tag));
  });

  return Array.from(counts.values()).map((entry) => ({
    ...entry,
    tags: Array.from(entry.tags)
  })).sort((a, b) => {
    if (b.count === a.count) {
      return a.name.localeCompare(b.name);
    }
    return b.count - a.count;
  });
}

function renderScoreboard() {
  if (!dom.scoreboard) return;
  const counts = getCertificateCounts();
  dom.scoreboard.innerHTML = '';
  if (counts.length === 0) {
    dom.scoreboard.hidden = true;
    return;
  }
  dom.scoreboard.hidden = false;
  counts.forEach((entry, index) => {
    const card = document.createElement('article');
    card.className = 'score-card';
    card.style.setProperty('--card-delay', `${index * 60}ms`);

    const figure = document.createElement('figure');
    const avatar = document.createElement('img');
    avatar.src = entry.profileImage;
    avatar.alt = `${entry.name} credential count`;
    avatar.loading = 'lazy';
    avatar.decoding = 'async';
    avatar.setAttribute('draggable', 'false');
    figure.appendChild(avatar);
    card.appendChild(figure);

    const name = document.createElement('strong');
    name.textContent = entry.name;
    card.appendChild(name);

    if (entry.role) {
      const role = document.createElement('span');
      role.textContent = entry.role;
      card.appendChild(role);
    }

    const tagLine = document.createElement('span');
    tagLine.className = 'score-tags';
    tagLine.textContent = entry.tags.length > 0
      ? entry.tags.slice(0, 3).join(' · ')
      : 'Ever-learning mindset';
    card.appendChild(tagLine);

    const count = document.createElement('span');
    count.className = 'score-count';
    count.textContent = entry.count.toString();
    card.appendChild(count);

    dom.scoreboard.appendChild(card);
  });
}

function setupContentProtection() {
  if (setupContentProtection.initialised) return;
  setupContentProtection.initialised = true;

  document.addEventListener('contextmenu', (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest('.credentials-grid, .upload-preview')) {
      event.preventDefault();
      showToast('Credential downloads are disabled.');
    }
  });

  document.addEventListener('dragstart', (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest('.credentials-grid')) {
      event.preventDefault();
    }
  });

  document.addEventListener('keydown', (event) => {
    const key = event.key;
    const blocked = key === 'PrintScreen'
      || ((event.ctrlKey || event.metaKey) && ['s', 'S', 'p', 'P', 'u', 'U'].includes(key))
      || ((event.ctrlKey || event.metaKey) && event.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(key));
    if (blocked) {
      event.preventDefault();
      showToast('Protected content cannot be captured.');
    }
  });

  document.addEventListener('copy', (event) => {
    if (!dom.credentialGrid) return;
    const selection = window.getSelection();
    const anchorNode = selection?.anchorNode;
    const anchorElement = anchorNode instanceof Element ? anchorNode : anchorNode?.parentElement;
    if (anchorElement && dom.credentialGrid.contains(anchorElement)) {
      event.preventDefault();
      showToast('Copying of certificates is disabled.');
    }
  });

  dom.credentialGrid?.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest('figure')) {
      event.preventDefault();
      showToast('Certificate previews are protected.');
    }
  });

  dom.credentialGrid?.addEventListener('mousedown', (event) => {
    const target = event.target;
    if (event.button === 0 && target instanceof Element && target.closest('figure')) {
      event.preventDefault();
    }
  });
}

function updateJsonOutput() {
  const timestamp = new Date().toISOString();

  if (dom.jsonOutputs?.certificate) {
    const certificateSnippet = {
      generatedAt: timestamp,
      teamMembers: state.teamMembers,
      certificateCounts: getCertificateCounts().map((entry) => ({
        id: entry.id,
        staffId: entry.staffId,
        name: entry.name,
        role: entry.role,
        profileImage: entry.profileImage,
        count: entry.count,
        tags: entry.tags,
        credentials: entry.credentials
      })),
      certificates: state.certificates
    };
    dom.jsonOutputs.certificate.value = JSON.stringify(certificateSnippet, null, 2);
  }

  if (dom.jsonOutputs?.news) {
    const newsSnippet = {
      generatedAt: timestamp,
      news: state.news
    };
    dom.jsonOutputs.news.value = JSON.stringify(newsSnippet, null, 2);
  }
}

function updateStructuredData() {
  if (dom.credentialSchema) {
    const credentialGraph = state.certificates.slice(0, 18).map((certificate) => ({
      '@type': 'EducationalOccupationalCredential',
      '@id': `${siteOrigin}/#${certificate.id}`,
      'name': certificate.title,
      'credentialCategory': certificate.credentialType,
      'description': certificate.description,
      'dateCreated': certificate.issueDate,
      'recognizedBy': {
        '@type': 'Organization',
        'name': certificate.issuer || 'Accredited Provider'
      },
      'image': `${siteOrigin}/${certificate.image}`,
      'issuedBy': {
        '@type': 'Organization',
        'name': certificate.issuer || 'Noble Dental Care Academy'
      },
      'location': certificate.location || 'Hyderabad, India',
      'holder': {
        '@type': 'Person',
        'name': certificate.staffName,
        'jobTitle': certificate.staffRole
      }
    }));

    const personGraph = getCertificateCounts().slice(0, 12).map((entry) => ({
      '@type': 'Person',
      '@id': `${siteOrigin}/#${entry.id}`,
      'name': entry.name,
      'jobTitle': entry.role,
      'image': `${siteOrigin}/${entry.profileImage}`,
      'affiliation': {
        '@type': 'Organization',
        'name': 'Noble Dental Care – Nallagandla'
      },
      'hasCredential': entry.credentials.slice(0, 8).map((credential) => ({
        '@type': 'EducationalOccupationalCredential',
        'name': credential.title,
        'credentialCategory': credential.credentialType,
        'dateCreated': credential.issueDate
      })),
      'knowsAbout': entry.tags.slice(0, 8)
    }));

    dom.credentialSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [...credentialGraph, ...personGraph]
    }, null, 2);
  }

  if (dom.newsSchema) {
    const newsGraph = state.news.slice(0, 10).map((entry) => ({
      '@type': 'NewsArticle',
      'headline': entry.headline,
      'datePublished': entry.publishedOn,
      'description': entry.summary,
      'url': entry.link || `${siteOrigin}/credentials.html#daily-news`,
      'articleSection': entry.tags?.join(', ') || 'Dental advancements',
      'image': entry.image ? `${siteOrigin}/${entry.image}` : undefined,
      'keywords': entry.tags?.join(', '),
      'mainEntityOfPage': entry.documentUrl || entry.link,
      'publisher': {
        '@type': 'Organization',
        'name': 'Noble Dental Care – Nallagandla',
        'logo': {
          '@type': 'ImageObject',
          'url': `${siteOrigin}/images/logo-footer.webp`
        }
      }
    }));
    dom.newsSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': newsGraph
    }, null, 2);
  }
}

function handleSearch(event) {
  state.filters.search = event.target.value;
  renderCertificates();
}

function ensureAuthentication(targetModal) {
  if (state.authenticated) {
    openModal(targetModal);
    return;
  }
  state.pendingModal = targetModal;
  openModal('login');
}

function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const provided = formData.get('password');
  if (!provided) {
    showToast('Please enter the password.');
    return;
  }
  if (provided === ADMIN_PASSWORD) {
    state.authenticated = true;
    showToast('Admin tools unlocked.');
    renderCertificates();
    renderNews();
    updateJsonOutput();
    closeModal(dom.modals.login);
    event.target.reset();
    if (state.pendingModal) {
      openModal(state.pendingModal);
      state.pendingModal = null;
    }
  } else {
    showToast('Incorrect password. Try again.');
    event.target.reset();
  }
}


function handleStaffSelect(event) {
  if (!dom.customStaffFields) return;
  if (event.target.value === '__custom__') {
    dom.customStaffFields.hidden = false;
    dom.customStaffFields.querySelector('input[name="staffName"]').focus();
  } else {
    dom.customStaffFields.hidden = true;
  }
  updateCredentialImageSuggestion(false);
}

function collectCustomStaff(formData) {
  const name = formData.get('staffName')?.trim();
  const role = formData.get('staffRole')?.trim();
  const profileImage = formData.get('profileImage')?.trim() || 'images/blog/implants.webp';
  if (!name) {
    showToast('Please provide the team member name.');
    return null;
  }
  const id = slugify(name);
  const category = role && /sterilis|patient|admin|support|experience|coordinator|manager/i.test(role) ? 'Non-Medical' : 'Doctor';
  const teamMember = {
    id,
    name,
    role: role || 'Team Member',
    profileImage,
    category
  };
  const existingIndex = state.localTeam.findIndex((entry) => entry.id === id);
  if (existingIndex >= 0) {
    state.localTeam[existingIndex] = { ...state.localTeam[existingIndex], ...teamMember };
  } else {
    state.localTeam.push(teamMember);
  }
  state.teamMembers = mergeById(state.baseTeam, state.localTeam);
  saveLocalData(storageKeys.team, state.localTeam);
  populateStaffSelect();
  renderFilterToolbar();
  if (dom.staffSelect) {
    dom.staffSelect.value = id;
  }
  updateCredentialImageSuggestion(true);
  return teamMember;
}

function handleCredentialSubmit(event) {
  event.preventDefault();
  if (!state.authenticated) {
    showToast('Unlock admin tools before saving credentials.');
    return;
  }
  const formData = new FormData(event.target);
  let staffId = formData.get('staff');
  let staffMember = getTeamMemberById(staffId);
  if (staffId === '__custom__') {
    staffMember = collectCustomStaff(formData);
    if (!staffMember) {
      return;
    }
    staffId = staffMember.id;
    formData.set('staff', staffId);
  }
  if (!staffMember) {
    showToast('Select the team member receiving the credential.');
    return;
  }

  const title = formData.get('title').trim();
  const issueDate = formData.get('issueDate') || new Date().toISOString().split('T')[0];
  const credentialType = formData.get('credentialType') || (staffMember.category === 'Non-Medical' ? 'Non-Medical' : 'Medical');
  let imagePath = formData.get('image')?.trim();
  if (!imagePath) {
    imagePath = buildMediaPath({
      kind: 'credential',
      title,
      staffName: staffMember.name
    });
    formData.set('image', imagePath);
  }

  const certificate = {
    id: formData.get('certificateId') || generateId('cert'),
    staffId,
    staffName: staffMember.name,
    staffRole: staffMember.role,
    profileImage: staffMember.profileImage,
    title,
    issuer: formData.get('issuer')?.trim() || 'Noble Dental Care Academy',
    issueDate,
    credentialCode: formData.get('credentialCode')?.trim() || '',
    location: formData.get('location')?.trim() || 'Hyderabad, India',
    credentialType,
    tags: normaliseTags(formData.get('tags')),
    image: imagePath,
    description: formData.get('description').trim()
  };

  const existingIndex = state.localCertificates.findIndex((entry) => entry.id === certificate.id);
  if (existingIndex >= 0) {
    state.localCertificates[existingIndex] = certificate;
  } else {
    state.localCertificates.push(certificate);
  }

  state.certificates = mergeById(state.baseCertificates, state.localCertificates);
  saveLocalData(storageKeys.certificates, state.localCertificates);
  updateJsonOutput();
  updateStructuredData();
  renderCertificates();
  showToast('Credential saved. Copy the JSON snippet to commit your update.');
  event.target.reset();
  if (dom.customStaffFields) {
    dom.customStaffFields.hidden = true;
  }
  updateCredentialImageSuggestion(true);
  setPreviewImage(dom.certificateImagePreview, null, 'certificate');
  closeModal(dom.modals.credential);
}

function handleNewsSubmit(event) {
  event.preventDefault();
  if (!state.authenticated) {
    showToast('Unlock admin tools before saving news.');
    return;
  }
  const formData = new FormData(event.target);
  let newsImagePath = formData.get('image')?.trim();
  if (!newsImagePath) {
    const headline = formData.get('headline').trim();
    newsImagePath = buildMediaPath({
      kind: 'news',
      title: headline,
      staffName: 'knowledge-broadcast'
    });
    formData.set('image', newsImagePath);
  }
  const newsEntry = {
    id: formData.get('newsId') || generateId('news'),
    headline: formData.get('headline').trim(),
    summary: formData.get('summary').trim(),
    publishedOn: formData.get('publishedOn'),
    link: formData.get('link').trim(),
    tags: normaliseTags(formData.get('tags')),
    image: newsImagePath || 'images/blog/implants.webp',
    documentUrl: formData.get('documentUrl')?.trim() || ''
  };

  const existingIndex = state.localNews.findIndex((entry) => entry.id === newsEntry.id);
  if (existingIndex >= 0) {
    state.localNews[existingIndex] = newsEntry;
  } else {
    state.localNews.push(newsEntry);
  }

  state.news = mergeById(state.baseNews, state.localNews);
  saveLocalData(storageKeys.news, state.localNews);
  updateJsonOutput();
  updateStructuredData();
  renderNews();
  showToast('News update saved. Copy the JSON snippet to publish it.');
  event.target.reset();
  updateNewsImageSuggestion(true);
  setPreviewImage(dom.newsImagePreview, null, 'news');
  closeModal(dom.modals.news);
}

function wireInteractions() {
  document.querySelectorAll('[data-open-modal]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const target = trigger.getAttribute('data-open-modal');
      if (target === 'credential' || target === 'news') {
        ensureAuthentication(target);
      } else {
        openModal(target);
      }
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  dom.modalBackdrop?.addEventListener('click', (event) => {
    if (event.target === dom.modalBackdrop) {
      closeAllModals();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllModals();
    }
  });

  dom.loginForm?.addEventListener('submit', handleLogin);
  dom.credentialForm?.addEventListener('submit', handleCredentialSubmit);
  dom.newsForm?.addEventListener('submit', handleNewsSubmit);
  dom.staffSelect?.addEventListener('change', handleStaffSelect);
  dom.searchInput?.addEventListener('input', handleSearch);
  dom.credentialGrid?.addEventListener('click', handleCredentialGridClick);
  dom.newsGrid?.addEventListener('click', handleNewsGridClick);

  getCredentialField('title')?.addEventListener('input', () => updateCredentialImageSuggestion(false));
  dom.customStaffFields?.querySelector('input[name="staffName"]')?.addEventListener('input', () => updateCredentialImageSuggestion(false));
  dom.certificateImagePath?.addEventListener('input', () => {
    dom.certificateImagePath.dataset.autoValue = '';
  });
  dom.certificateImageFile?.addEventListener('change', () => {
    const file = dom.certificateImageFile.files?.[0] || null;
    setPreviewImage(dom.certificateImagePreview, file, 'certificate');
    updateCredentialImageSuggestion(true);
  });

  getNewsField('headline')?.addEventListener('input', () => updateNewsImageSuggestion(false));
  dom.newsImagePath?.addEventListener('input', () => {
    dom.newsImagePath.dataset.autoValue = '';
  });
  dom.newsImageFile?.addEventListener('change', () => {
    const file = dom.newsImageFile.files?.[0] || null;
    setPreviewImage(dom.newsImagePreview, file, 'news');
    updateNewsImageSuggestion(true);
  });

  setupContentProtection();
}

function init() {
  loadState();
  populateStaffSelect();
  renderFilterToolbar();
  renderCertificates();
  renderNews();
  updateJsonOutput();
  updateStructuredData();
  wireInteractions();
  updateCredentialImageSuggestion(true);
  updateNewsImageSuggestion(true);
}

document.addEventListener('DOMContentLoaded', init);
