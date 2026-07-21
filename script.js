/* ============================================================
   script.js — Kantin Mini
   ============================================================ */

"use strict";

const FALLBACK_IMAGE_MODAL = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop";
const FALLBACK_IMAGE_CARD = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop";
const FALLBACK_IMAGE_CART = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop";

const MENU_DATA = [
  {
    id: 1,
    nama: "Chicken Katsu",
    kategori: "Paket Nasi",
    harga: 16000,
    deskripsi: "Nasi + chicken katsu dengan pilihan saus gurih.",
    pilihanSaus: ["BBQ", "Lada Hitam", "Lava", "Sambal Geprek"],
    foto: "img/foto-menu/katsu-bbq.webp",
  },
  {
    id: 2,
    nama: "Katsu Lada Garam",
    kategori: "Paket Nasi",
    harga: 16000,
    deskripsi: "Chicken katsu dengan bumbu lada garam gurih",
    foto: "img/foto-menu/katsu-ladagaram.webp",
  },
  {
    id: 3,
    nama: "Katsu Kari",
    kategori: "Paket Nasi",
    harga: 17500,
    deskripsi: "Chicken katsu saus kari",
    foto: "img/foto-menu/katsu-kari.webp",
  },
  {
    id: 4,
    nama: "Katsu Sambal Matah",
    kategori: "Paket Nasi",
    harga: 16000,
    deskripsi: "Chicken katsu sambal matah pedas segar",
    foto: "img/foto-menu/katsu-matah.webp",
  },
  {
    id: 5,
    nama: "Ayam Geprek",
    kategori: "Paket Nasi",
    harga: 19000,
    deskripsi: "Ayam crispy digeprek sambal bawang",
    foto: "img/foto-menu/ayam-geprek.webp",
  },
  {
    id: 6,
    nama: "Ayam Bakar",
    kategori: "Paket Nasi",
    harga: 19000,
    deskripsi: "Ayam bakar bumbu manis gurih + tahu tempe",
    foto: "img/foto-menu/ayam-kecap.webp",
  },
  {
    id: 7,
    nama: "Ayam Penyet",
    kategori: "Paket Nasi",
    harga: 19000,
    deskripsi: "Ayam goreng penyet sambal pedas + tahu tempe",
    foto: "img/foto-menu/ayam-penyet.webp",
  },
  {
    id: 8,
    nama: "Ayam Kalasan",
    kategori: "Paket Nasi",
    harga: 19000,
    deskripsi: "Ayam goreng bumbu kalasan + tahu tempe",
    foto: "img/foto-menu/ayam-kalasan.webp",
  },
  {
    id: 9,
    nama: "Ayam Kremes",
    kategori: "Paket Nasi",
    harga: 19000,
    deskripsi: "Ayam goreng renyah dengan kremesan gurih + tahu tempe",
    foto: "img/foto-menu/ayam-kremes.webp",
  },
  {
    id: 11,
    nama: "Ayam Pedas Daun Jeruk",
    kategori: "Paket Nasi",
    harga: 16000,
    deskripsi: "Ayam pedas wangi daun jeruk segar",
    foto: "img/foto-menu/ayam-daunjeruk.webp",
  },
  {
    id: 12,
    nama: "Ayam Teriyaki",
    kategori: "Paket Nasi",
    harga: 16000,
    deskripsi: "Ayam saus teriyaki manis gurih",
    foto: "img/foto-menu/ayam-teriyaki.webp",
  },
  {
    id: 13,
    nama: "Ayam Lada Hitam",
    kategori: "Paket Nasi",
    harga: 16000,
    deskripsi: "Ayam saus lada hitam gurih",
    foto: "img/foto-menu/ayam-ladahitam.webp",
  },
  {
    id: 14,
    nama: "Chicken Wing",
    kategori: "Paket Nasi",
    harga: 22000,
    deskripsi: "Chicken wing bumbu saus dengan nasi",
    foto: "img/foto-menu/chicken-wing.webp",
  },
  {
    id: 15,
    nama: "Sapi Lada Hitam",
    kategori: "Paket Nasi",
    harga: 19000,
    deskripsi: "Daging sapi empuk saus lada hitam",
    foto: "img/foto-menu/sapi-ladahitam.webp",
  },
  {
    id: 17,
    nama: "Sosis Asam Manis",
    kategori: "Paket Nasi",
    harga: 16000,
    deskripsi: "Pilihan saus: Asam Manis/Lada Hitam",
    foto: "img/foto-menu/sosis-asammanis.webp",
  },
  {
    id: 18,
    nama: "Nasi Goreng Kecap",
    kategori: "Paket Nasi",
    harga: 17000,
    deskripsi: "Nasi goreng kecap spesial",
    foto: "img/foto-menu/nasi-goreng.webp",
  },
  {
    id: 19,
    nama: "Nasi Goreng Putih",
    kategori: "Paket Nasi",
    harga: 17000,
    deskripsi: "Nasi goreng putih spesial",
    foto: "img/foto-menu/nasi-goreng-putih.webp",
  },
  {
    id: 20,
    nama: "Nasi Goreng Cikur",
    kategori: "Paket Nasi",
    harga: 15000,
    deskripsi: "Nasi goreng cikur harum + telor, mendoan",
    foto: "img/foto-menu/nasi-cikur.webp",
  },
  {
    id: 21,
    nama: "Kentang Katsu",
    kategori: "Light Bites",
    harga: 17000,
    deskripsi: "Kentang katsu renyah dengan pilihan saus.",
    pilihanSaus: ["BBQ", "Lada Hitam", "Lava", "Sambal Geprek"],
    foto: "img/foto-menu/kentang-katsu.webp",
  },
  {
    id: 22,
    nama: "Kentang Sosis",
    kategori: "Light Bites",
    harga: 15000,
    deskripsi: "Kentang goreng dengan sosis gurih",
    foto: "img/foto-menu/kentang-sosis.webp",
  },
  // {
  //   id: 23,
  //   nama: "Spaghetti Carbonara",
  //   kategori: "Mie & Pasta",
  //   harga: 15000,
  //   deskripsi: "Spaghetti creamy saus carbonara gurih",
  //   foto: "img/foto-menu/carbonara.webp",
  // },
  {
    id: 24,
    nama: "Mie Tektek",
    kategori: "Mie & Pasta",
    harga: 16000,
    deskripsi: "Mie goreng pedas gurih ala kaki lima",
    foto: "img/foto-menu/mie-tektek.webp",
  },
  {
    id: 25,
    nama: "Kwetiau Goreng",
    kategori: "Mie & Pasta",
    harga: 15000,
    deskripsi: "Kwetiau goreng spesial",
    foto: "img/foto-menu/kwetiau-goreng.webp",
  },
  {
    id: 26,
    nama: "Kwetiau Kuah",
    kategori: "Mie & Pasta",
    harga: 15000,
    deskripsi: "Kwetiau kuah gurih",
    foto: "img/foto-menu/kwetiau-kuah.webp",
  },
  {
    id: 28,
    nama: "Kapal Selam Besar",
    kategori: "Pempek",
    harga: 15000,
    deskripsi: "Pempek besar isi telur dengan cuko segar",
    foto: "img/foto-menu/selam-besar.webp",
  },
  {
    id: 29,
    nama: "Lenjer Besar",
    kategori: "Pempek",
    harga: 15000,
    deskripsi: "Pempek tenggiri panjang besar kenyal gurih",
    foto: "img/foto-menu/lenjer-besar.webp",
  },
  {
    id: 30,
    nama: "Pempek Kecil Isi 3",
    kategori: "Pempek",
    harga: 15000,
    deskripsi: "Isi 3 sejenis atau campur (kapal selam, lenjer, adaan, kulit) dengan cuko segar",
    foto: "img/foto-menu/pempek-kecil.webp",
  },
  {
    id: 31,
    nama: "Model",
    kategori: "Pempek",
    harga: 15000,
    deskripsi: "Pempek isi tahu kuah kaldu gurih",
    foto: "img/foto-menu/model.webp",
  },
  {
    id: 32,
    nama: "Tekwan",
    kategori: "Pempek",
    harga: 15000,
    deskripsi: "Sup tekwan tenggiri kuah bening gurih",
    foto: "img/foto-menu/tekwan.webp",
  },
  {
    id: 33,
    nama: "Lenggang",
    kategori: "Pempek",
    harga: 15000,
    deskripsi: "Pempek panggang telur dadar khas Palembang",
    foto: "img/foto-menu/lenggang.webp",
  },
  {
    id: 34,
    nama: "Ayam Besar",
    kategori: "Kapten Chicken",
    harga: 8500,
    deskripsi: "Dada/Paha Atas",
    foto: "img/foto-menu/ayamkapten-besar.webp",
  },
  {
    id: 35,
    nama: "Ayam Kecil",
    kategori: "Kapten Chicken",
    harga: 7500,
    deskripsi: "Sayap/Paha Bawah",
    foto: "img/foto-menu/ayamkapten-kecil.webp",
  },
  {
    id: 36,
    nama: "Kulit Ayam",
    kategori: "Kapten Chicken",
    harga: 5000,
    deskripsi: "Kulit ayam goreng garing gurih",
    foto: "img/foto-menu/kulit.webp",
  },
  {
    id: 40,
    nama: "Teh Tarik",
    kategori: "Minuman",
    harga: 4000,
    deskripsi: "Teh tarik manis panas atau dingin",
    foto: "img/foto-menu/teh-tarik.webp",
  },
  {
    id: 41,
    nama: "Lemon Tea",
    kategori: "Minuman",
    harga: 4000,
    deskripsi: "Teh manis lemon segar dingin",
    foto: "img/foto-menu/lemon-tea.webp",
  },
  {
    id: 42,
    nama: "Nutrisari",
    kategori: "Minuman",
    harga: 3500,
    deskripsi: "Aneka rasa Nutrisari segar dingin",
    foto: "img/foto-menu/nutrisari.webp",
  },
  {
    id: 43,
    nama: "Kopi",
    kategori: "Minuman",
    harga: 4000,
    deskripsi: "Kopi hitam manis panas atau dingin",
    foto: "img/foto-menu/kopi.webp",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  /* --- Utility --- */
  const qs = (sel, ctx) => {
    const root = ctx !== undefined ? ctx : document;
    if (!root || typeof root.querySelector !== "function") return null;
    return root.querySelector(sel);
  };
  
  const qsa = (sel, ctx) => {
    const root = ctx !== undefined ? ctx : document;
    if (!root || typeof root.querySelectorAll !== "function") return [];
    return Array.from(root.querySelectorAll(sel));
  };

  document.addEventListener(
    "animationend",
    (e) => {
      const t = e.target;
      if (!t || !t.classList) return;
      if (t.classList.contains("menu-card__add") && t.classList.contains("is-bump")) {
        t.classList.remove("is-bump");
      }
    },
    { passive: true },
  );

  const formatRupiah = (num) => "Rp " + Number(num).toLocaleString("id-ID");

  const escapeHtml = (str) => {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  };

  /* ============================================================
     1. NAVBAR
     ============================================================ */
  const navbar = qs("#navbar");
  const hamburger = qs("#hamburger");
  const navMenu = qs("#navMenu");
  const navLinks = qsa(".nav-link");

  if (hamburger && navMenu) {
    hamburger.setAttribute("aria-controls", "navMenu");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = hamburger.classList.toggle("open");
      navMenu.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  if (navMenu) {
    navMenu.addEventListener("click", (e) => {
      if (e.target.closest(".nav-link")) {
        if (hamburger) hamburger.classList.remove("open");
        navMenu.classList.remove("open");
        if (hamburger) hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.addEventListener("click", (e) => {
    if (!navbar || !navbar.contains(e.target)) {
      if (hamburger) hamburger.classList.remove("open");
      if (navMenu) navMenu.classList.remove("open");
      if (hamburger) hamburger.setAttribute("aria-expanded", "false");
    }
  });

  const menuModal = qs("#menuModal");
  const menuModalSausWrap = menuModal ? qs("#menuModalSausWrap", menuModal) : null;
  const menuModalSausSeg = menuModal ? qs("#menuModalSausSeg", menuModal) : null;
  let lastFocusedEl = null;
  let currentModalItem = null;
  const modalAddToCartBtn = qs("#menuModalAddToCart");
  let menuModalOrderQty = 1;
  const menuModalQtyValueEl = menuModal ? qs("#menuModalQtyValue", menuModal) : null;

  const syncMenuModalQtyUi = () => {
    if (menuModalQtyValueEl) {
      menuModalQtyValueEl.textContent = String(menuModalOrderQty);
    }
  };

  /** Entri history dari pushState saat overlay terbuka (untuk tombol Back browser). */
  let kmModalPushed = false;
  let kmCartPushed = false;

  const closeMenuModal = (fromPopState) => {
    if (!menuModal || !menuModal.classList.contains("is-open")) return;
    if (!fromPopState) {
      if (kmModalPushed) {
        history.back();
      } else {
        closeMenuModal(true);
      }
      return;
    }
    kmModalPushed = false;
    menuModal.classList.remove("is-open");

    // Move focus back to the last focused element before hiding the modal.
    const activeEl = document.activeElement;
    if (activeEl && menuModal.contains(activeEl)) {
      if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
        lastFocusedEl.focus();
      }
    }

    menuModal.setAttribute("aria-hidden", "true");
    menuModal.setAttribute("hidden", "");
    document.body.classList.remove("modal-open");
  };

  const openMenuModal = (item) => {
    if (!menuModal) return;
    const wasOpen = menuModal.classList.contains("is-open");
    currentModalItem = item;
    lastFocusedEl = document.activeElement;
    
    const imgEl = qs("#menuModalImg", menuModal);
    const catEl = qs("#menuModalCat", menuModal);
    const titleEl = qs("#menuModalTitle", menuModal);
    const priceEl = qs("#menuModalPrice", menuModal);
    const descEl = qs("#menuModalDesc", menuModal);

    if (imgEl) {
      imgEl.src = item.foto;
      imgEl.alt = item.nama;
      imgEl.onerror = function () {
        this.src = FALLBACK_IMAGE_MODAL;
      };
    }
    if (catEl) catEl.textContent = item.kategori;
    if (titleEl) titleEl.textContent = item.nama;
    if (priceEl) priceEl.textContent = formatRupiah(item.harga);
    if (descEl) descEl.textContent = item.deskripsi;

    if (menuModalSausWrap && menuModalSausSeg) {
      if (item.pilihanSaus && item.pilihanSaus.length) {
        menuModalSausWrap.hidden = false;
        menuModalSausSeg.innerHTML = "";
        item.pilihanSaus.forEach((label, i) => {
          const lab = document.createElement("label");
          lab.className = "menu-modal__seg-item";
          const inp = document.createElement("input");
          inp.type = "radio";
          inp.name = "menuModalSaus";
          inp.value = label;
          if (i === 0) inp.checked = true;
          const sp = document.createElement("span");
          sp.textContent = label;
          lab.appendChild(inp);
          lab.appendChild(sp);
          menuModalSausSeg.appendChild(lab);
        });
      } else {
        menuModalSausWrap.hidden = true;
        menuModalSausSeg.innerHTML = "";
      }
    }
    menuModalOrderQty = 1;
    syncMenuModalQtyUi();
    menuModal.removeAttribute("hidden");
    menuModal.setAttribute("aria-hidden", "false");
    menuModal.classList.add("is-open");
    document.body.classList.add("modal-open");
    
    const closeBtn = qs("#menuModalClose", menuModal);
    if (closeBtn) closeBtn.focus();
    
    if (!wasOpen) {
      try {
        history.pushState({ kmOverlay: "modal" }, "", window.location.href);
        kmModalPushed = true;
      } catch (_) {
        kmModalPushed = false;
      }
    }
  };

  /* ============================================================
     1b. CART (RINGAN) — simpan multi item + checkout via WhatsApp
     ============================================================ */
  const CART_STORAGE_KEY = "kantinmini_cart_v1";
  const CART_NAME_KEY = "kantinmini_cart_name_v1";
  const CART_ORDER_TYPE_KEY = "kantinmini_cart_order_type_v1";
  const CART_PICKUP_TIME_KEY = "kantinmini_cart_pickup_time_v1";
  
  const cartFab = qs("#cartFab");
  const cartFabCount = qs("#cartFabCount");
  const cartNavBtn = qs("#cartNavBtn");
  const cartNavCount = qs("#cartNavCount");
  const cartDrawer = qs("#cartDrawer");
  const cartDrawerBody = qs("#cartDrawerBody");
  const cartDrawerTotal = qs("#cartDrawerTotal");
  const cartDrawerClose = qs("#cartDrawerClose");
  const cartClearBtn = qs("#cartClear");
  const cartCheckout = qs("#cartCheckout");
  const cartNameInput = qs("#cartName");
  const cartPickupWrap = qs("#cartPickupWrap");
  const cartPickupInput = qs("#cartPickupTime");
  let lastFocusedBeforeCart = null;

  let cart = [];
  let cartName = "";
  let cartOrderType = "dinein";
  let cartPickupTime = "";

  const haptic = (ms) => {
    try {
      if (!navigator.vibrate) return;
      navigator.vibrate(typeof ms === "number" ? ms : 10);
    } catch (_) {
      // ignore
    }
  };

  const loadOrderType = () => {
    try {
      const raw = window.localStorage.getItem(CART_ORDER_TYPE_KEY);
      if (raw === "dinein" || raw === "takeaway") return raw;
      return "dinein";
    } catch (_) {
      return "dinein";
    }
  };

  const saveOrderType = () => {
    try {
      window.localStorage.setItem(CART_ORDER_TYPE_KEY, cartOrderType);
    } catch (_) {
      // ignore
    }
  };

  const loadPickupTime = () => {
    try {
      const raw = window.localStorage.getItem(CART_PICKUP_TIME_KEY);
      if (!raw) return "";
      return String(raw).slice(0, 10);
    } catch (_) {
      return "";
    }
  };

  const savePickupTime = () => {
    try {
      window.localStorage.setItem(CART_PICKUP_TIME_KEY, cartPickupTime);
    } catch (_) {
      // ignore
    }
  };

  const syncPickupUI = () => {
    if (!cartPickupWrap) return;
    const show = cartOrderType === "takeaway";
    cartPickupWrap.hidden = !show;
    if (!show) return;
    if (cartPickupInput) cartPickupInput.value = cartPickupTime || "";
  };

  const loadCartName = () => {
    try {
      const raw = window.localStorage.getItem(CART_NAME_KEY);
      if (!raw) return "";
      return String(raw).slice(0, 80);
    } catch (_) {
      return "";
    }
  };

  const saveCartName = () => {
    try {
      window.localStorage.setItem(CART_NAME_KEY, cartName);
    } catch (_) {
      // ignore
    }
  };

  const loadCart = () => {
    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter((x) => x && typeof x.id === "number" && typeof x.qty === "number" && x.qty > 0)
        .map((x) => {
          const line = { id: x.id, qty: Math.floor(x.qty) };
          if (x.saus && typeof x.saus === "string") {
            line.saus = String(x.saus).slice(0, 40);
          }
          const m = findMenuById(line.id);
          if (m && m.pilihanSaus && m.pilihanSaus.length) {
            const valid = line.saus && m.pilihanSaus.indexOf(line.saus) !== -1;
            if (!valid) line.saus = m.pilihanSaus[0];
          }
          return line;
        });
    } catch (_) {
      return [];
    }
  };

  const saveCart = () => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (_) {
      // ignore
    }
  };

  const cartCount = () => cart.reduce((sum, x) => sum + (x.qty || 0), 0);

  const findMenuById = (id) => {
    for (let i = 0; i < MENU_DATA.length; i++) {
      if (MENU_DATA[i].id === id) return MENU_DATA[i];
    }
    return null;
  };

  const cartLineSaus = (x) => (x && x.saus ? String(x.saus) : "");

  const cartLinesMatchForMerge = (a, b) => a.id === b.id && cartLineSaus(a) === cartLineSaus(b);

  const cartLineMatchesIdSaus = (x, id, saus) => {
    const s = saus != null ? String(saus) : "";
    return x.id === id && cartLineSaus(x) === s;
  };

  const cartTotal = () => {
    return cart.reduce((sum, x) => {
      const item = findMenuById(x.id);
      if (!item) return sum;
      return sum + item.harga * x.qty;
    }, 0);
  };

  const setCartBadges = () => {
    const c = String(cartCount());
    if (cartFabCount) {
      cartFabCount.textContent = c;
      bumpClickAnim(cartFabCount, "is-badge-bump");
    }
    if (cartNavCount) {
      cartNavCount.textContent = c;
      bumpClickAnim(cartNavCount, "is-badge-bump");
    }
  };

  const openCartDrawer = () => {
    if (!cartDrawer) return;
    hideToast();
    const wasCartOpen = cartDrawer.classList.contains("is-open");
    const modalWasOpen = menuModal && menuModal.classList.contains("is-open");

    if (modalWasOpen && !wasCartOpen) {
      closeMenuModal(true);
      if (history.state && history.state.kmOverlay === "modal") {
        try {
          history.replaceState({ kmOverlay: "cart" }, "", window.location.href);
          kmCartPushed = true;
        } catch (_) {
          kmCartPushed = false;
        }
      }
    }

    if (!wasCartOpen) {
      lastFocusedBeforeCart = document.activeElement;
    }

    cartDrawer.removeAttribute("hidden");
    cartDrawer.setAttribute("aria-hidden", "false");
    if (typeof cartDrawer.inert !== "undefined") cartDrawer.inert = false;
    cartDrawer.classList.add("is-open");
    document.body.classList.add("cart-open");
    renderCart();
    
    if (cartDrawerClose && typeof cartDrawerClose.focus === "function") {
      cartDrawerClose.focus();
    }
    
    if (!wasCartOpen && !kmCartPushed) {
      try {
        history.pushState({ kmOverlay: "cart" }, "", window.location.href);
        kmCartPushed = true;
      } catch (_) {
        kmCartPushed = false;
      }
    }
  };

  const closeCartDrawer = (fromPopState) => {
    if (!cartDrawer || !cartDrawer.classList.contains("is-open")) return;
    if (!fromPopState) {
      if (kmCartPushed) {
        history.back();
      } else {
        closeCartDrawer(true);
      }
      return;
    }
    kmCartPushed = false;
    
    const activeEl = document.activeElement;
    if (activeEl && cartDrawer.contains(activeEl)) {
      if (lastFocusedBeforeCart && typeof lastFocusedBeforeCart.focus === "function") {
        lastFocusedBeforeCart.focus();
      } else if (cartNavBtn && typeof cartNavBtn.focus === "function") {
        cartNavBtn.focus();
      } else if (cartFab && typeof cartFab.focus === "function") {
        cartFab.focus();
      } else if (typeof activeEl.blur === "function") {
        activeEl.blur();
      }
    }
    
    cartDrawer.classList.remove("is-open");
    cartDrawer.setAttribute("aria-hidden", "true");
    cartDrawer.setAttribute("hidden", "");
    if (typeof cartDrawer.inert !== "undefined") cartDrawer.inert = true;
    document.body.classList.remove("cart-open");
  };

  window.addEventListener("popstate", () => {
    if (cartDrawer && cartDrawer.classList.contains("is-open")) {
      closeCartDrawer(true);
      return;
    }
    if (menuModal && menuModal.classList.contains("is-open")) {
      closeMenuModal(true);
    }
  });

  const addToCart = (menuItem, qty, sausPilihan) => {
    if (!menuItem) return;
    const addQty = qty && qty > 0 ? qty : 1;
    let saus = "";
    if (menuItem.pilihanSaus && menuItem.pilihanSaus.length) {
      const pick = sausPilihan && menuItem.pilihanSaus.indexOf(sausPilihan) !== -1
        ? sausPilihan
        : menuItem.pilihanSaus[0];
      saus = pick;
    }
    const line = { id: menuItem.id, qty: Math.min(99, addQty) };
    if (saus) line.saus = saus;
    
    const existing = cart.find((x) => cartLinesMatchForMerge(x, line));
    if (existing) {
      existing.qty = Math.min(99, existing.qty + addQty);
    } else {
      cart.push(line);
    }
    saveCart();
    setCartBadges();
    renderCart();
    haptic(10);
  };

  /* Toast kecil */
  const TOAST_MSG_CART_ADDED = "Berhasil ditambahkan";
  let toastEl = null;
  let toastTimer = null;

  const hideToast = () => {
    if (toastTimer) {
      window.clearTimeout(toastTimer);
      toastTimer = null;
    }
    if (toastEl) toastEl.classList.remove("is-show");
  };

  const showToast = (text, opts) => {
    if (!text) return;
    const options = opts || {};
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.innerHTML = "";
    const msg = document.createElement("span");
    msg.className = "toast__text";
    msg.textContent = text;
    toastEl.appendChild(msg);

    if (options && options.actionText && typeof options.onAction === "function") {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "toast__action";
      btn.textContent = options.actionText;
      btn.addEventListener("click", () => {
        try {
          options.onAction();
        } finally {
          hideToast();
        }
      });
      toastEl.appendChild(btn);
    }
    toastEl.classList.add("is-show");
    if (toastTimer) window.clearTimeout(toastTimer);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    toastTimer = window.setTimeout(hideToast, reduceMotion ? 2100 : 2700);
  };

  const bumpClickAnim = (el, className) => {
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const cn = className || "is-bump";
    el.classList.remove(cn);
    // Force reflow supaya animasi bisa diputar ulang setiap klik.
    void el.offsetWidth;
    el.classList.add(cn);
  };

  const setQty = (id, qty, saus) => {
    const s = saus != null ? String(saus) : "";
    const q = Math.floor(qty);
    if (q <= 0) {
      cart = cart.filter((x) => !cartLineMatchesIdSaus(x, id, s));
    } else {
      cart.forEach((x) => {
        if (cartLineMatchesIdSaus(x, id, s)) x.qty = Math.min(99, q);
      });
    }
    saveCart();
    setCartBadges();
    renderCart();
  };

  const clearCart = () => {
    cart = [];
    saveCart();
    setCartBadges();
    renderCart();
  };

  const buildCheckoutLink = () => {
    if (!cartCheckout) return;
    if (cart.length === 0) {
      cartCheckout.href = "#";
      cartCheckout.setAttribute("aria-disabled", "true");
      cartCheckout.style.pointerEvents = "none";
      cartCheckout.style.opacity = "0.65";
      return;
    }

    cartCheckout.removeAttribute("aria-disabled");
    cartCheckout.style.pointerEvents = "";
    cartCheckout.style.opacity = "";

    const lines = [];
    lines.push("Halo Kantin Mini, saya ingin pesan.");
    lines.push("Jenis: " + (cartOrderType === "takeaway" ? "Take Away" : "Dine-In"));
    if (cartName && cartName.trim()) {
      lines.push("Atas nama: " + cartName.trim());
    }
    if (cartOrderType === "takeaway" && cartPickupTime && cartPickupTime.trim()) {
      lines.push("Jam ambil: " + cartPickupTime.trim());
    }
    lines.push("");

    lines.push("Pesanan:");
    let idx = 1;
    cart.forEach((x) => {
      const item = findMenuById(x.id);
      if (!item) return;
      const subtotal = item.harga * x.qty;
      const sausTxt = x.saus && item.pilihanSaus && item.pilihanSaus.length
        ? " (Saus: " + x.saus + ")"
        : "";
      lines.push(
        idx++ + ") " + item.nama + sausTxt + " — " + x.qty + " x " + formatRupiah(item.harga) + " = " + formatRupiah(subtotal)
      );
    });
    lines.push("");
    lines.push("Total: " + formatRupiah(cartTotal()));
    lines.push("");
    lines.push("Catatan:");

    const msg = encodeURIComponent(lines.join("\n"));
    cartCheckout.href = "https://wa.me/6285117693117?text=" + msg;
  };

  const renderCart = () => {
    if (!cartDrawerBody || !cartDrawerTotal) return;

    cartDrawerBody.innerHTML = "";
    const total = cartTotal();
    cartDrawerTotal.textContent = formatRupiah(total);
    buildCheckoutLink();

    if (cart.length === 0) {
      const empty = document.createElement("div");
      empty.className = "cart-empty";
      const msg = document.createElement("div");
      msg.textContent = "Keranjang masih kosong.";
      empty.appendChild(msg);

      const actions = document.createElement("div");
      actions.className = "cart-empty__actions";
      const go = document.createElement("button");
      go.type = "button";
      go.className = "btn btn--primary";
      go.textContent = "Lihat Menu";
      go.addEventListener("click", () => {
        closeCartDrawer();
        const target = document.getElementById("menu");
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      actions.appendChild(go);
      empty.appendChild(actions);
      cartDrawerBody.appendChild(empty);
      return;
    }

    cart.forEach((x) => {
      const item = findMenuById(x.id);
      if (!item) return;

      const row = document.createElement("div");
      row.className = "cart-item";

      const imgWrap = document.createElement("div");
      imgWrap.className = "cart-item__img";
      const img = document.createElement("img");
      img.src = item.foto;
      img.alt = item.nama;
      img.loading = "lazy";
      img.onerror = function () {
        this.src = FALLBACK_IMAGE_CART;
      };
      imgWrap.appendChild(img);

      const info = document.createElement("div");
      const name = document.createElement("div");
      name.className = "cart-item__name";
      name.textContent = item.nama;
      const meta = document.createElement("div");
      meta.className = "cart-item__meta";
      const metaParts = [formatRupiah(item.harga)];
      if (x.saus && item.pilihanSaus && item.pilihanSaus.length) {
        metaParts.push("Saus: " + x.saus);
      }
      meta.textContent = metaParts.join(" · ");

      const bottom = document.createElement("div");
      bottom.className = "cart-item__row";

      const lineSaus = cartLineSaus(x);
      const qty = document.createElement("div");
      qty.className = "cart-qty";
      const minus = document.createElement("button");
      minus.type = "button";
      minus.textContent = "−";
      minus.addEventListener("click", () => {
        setQty(item.id, x.qty - 1, lineSaus);
      });
      const num = document.createElement("span");
      num.textContent = String(x.qty);
      const plus = document.createElement("button");
      plus.type = "button";
      plus.textContent = "+";
      plus.addEventListener("click", () => {
        setQty(item.id, x.qty + 1, lineSaus);
      });
      qty.appendChild(minus);
      qty.appendChild(num);
      qty.appendChild(plus);

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "cart-remove";
      remove.textContent = "Hapus";
      remove.addEventListener("click", () => {
        setQty(item.id, 0, lineSaus);
      });

      bottom.appendChild(qty);
      bottom.appendChild(remove);

      info.appendChild(name);
      info.appendChild(meta);
      info.appendChild(bottom);

      row.appendChild(imgWrap);
      row.appendChild(info);
      cartDrawerBody.appendChild(row);
    });
  };

  if (menuModal) {
    menuModal.addEventListener("click", (e) => {
      if (e.target.closest("[data-modal-close]")) closeMenuModal();
    });
    const modalCloseBtn = qs("#menuModalClose", menuModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeMenuModal);
  }

  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener("click", () => {
      if (!currentModalItem) return;
      let sausPick = "";
      if (currentModalItem.pilihanSaus && currentModalItem.pilihanSaus.length && menuModal) {
        const chk = qs('input[name="menuModalSaus"]:checked', menuModal);
        sausPick = chk ? chk.value : currentModalItem.pilihanSaus[0];
      }
      addToCart(currentModalItem, menuModalOrderQty, sausPick);
      menuModalOrderQty = 1;
      syncMenuModalQtyUi();
      showToast(TOAST_MSG_CART_ADDED, {
        actionText: "Lihat keranjang",
        onAction: openCartDrawer,
      });
    });
  }

  const menuModalQtyMinus = menuModal ? qs("#menuModalQtyMinus", menuModal) : null;
  const menuModalQtyPlus = menuModal ? qs("#menuModalQtyPlus", menuModal) : null;
  
  if (menuModalQtyMinus) {
    menuModalQtyMinus.addEventListener("click", () => {
      if (menuModalOrderQty > 1) {
        menuModalOrderQty--;
        syncMenuModalQtyUi();
      }
    });
  }
  if (menuModalQtyPlus) {
    menuModalQtyPlus.addEventListener("click", () => {
      if (menuModalOrderQty < 99) {
        menuModalOrderQty++;
        syncMenuModalQtyUi();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (cartDrawer && cartDrawer.classList.contains("is-open")) {
      closeCartDrawer();
      return;
    }
    if (menuModal && menuModal.classList.contains("is-open")) {
      closeMenuModal();
      return;
    }
    if (hamburger) hamburger.classList.remove("open");
    if (navMenu) navMenu.classList.remove("open");
    if (hamburger) hamburger.setAttribute("aria-expanded", "false");
  });

  const highlightActiveLink = () => {
    const scrollY = window.scrollY + 100;
    let current = "";
    qsa("section[id]").forEach((sec) => {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href.charAt(0) !== "#") return;
      link.classList.toggle("active", href.slice(1) === current);
    });
  };

  highlightActiveLink();

  /* ============================================================
     2. SMOOTH SCROLL (offset navbar; hindari querySelector("#") yang invalid)
     ============================================================ */
  qsa('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href") || "";
      if (href === "#" || href === "") {
        e.preventDefault();
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({
          top: 0,
          behavior: reduceMotion ? "auto" : "smooth",
        });
        return;
      }
      const id = href.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navEl = qs("#navbar");
      const navH = navEl && navEl.offsetHeight ? navEl.offsetHeight : 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
      const reduceMotion2 = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: reduceMotion2 ? "auto" : "smooth",
      });
    });
  });

  /* ============================================================
     3. MENU
     ============================================================ */
  let allMenuItems = [];
  let filtersAttached = false;
  let activeMenuFilter = "all";
  const menuSearchInput = qs("#menuSearch");
  let menuRevealObserver = null;

  const loadMenu = () => {
    const grid = qs("#menuGrid");
    const loading = qs("#menuLoading");
    if (!grid) return;

    qsa(".menu-card", grid).forEach((c) => c.remove());
    qsa(".menu__empty", grid).forEach((c) => c.remove());

    allMenuItems = MENU_DATA;
    activeMenuFilter = "all";

    if (menuSearchInput) menuSearchInput.value = "";

    buildFilterButtons(allMenuItems);
    applyMenuView();

    if (loading) loading.classList.add("hidden");
  };

  // expose for retry button in HTML
  window.loadMenu = loadMenu;

  const getMenuItemsForCategory = () => {
    if (activeMenuFilter === "all") return allMenuItems;
    return allMenuItems.filter((i) => i.kategori === activeMenuFilter);
  };

  const itemMatchesSearch = (item, q) => {
    if (!q) return true;
    const hay = (item.nama + " " + item.deskripsi + " " + item.kategori).toLowerCase();
    const parts = q.toLowerCase().split(/\s+/).filter(Boolean);
    for (let i = 0; i < parts.length; i++) {
      if (hay.indexOf(parts[i]) === -1) return false;
    }
    return true;
  };

  const applyMenuView = () => {
    const base = getMenuItemsForCategory();
    const q = menuSearchInput ? menuSearchInput.value.trim() : "";
    const filtered = q ? base.filter((i) => itemMatchesSearch(i, q)) : base;
    renderCards(filtered, q, base.length);
  };

  const buildFilterButtons = (items) => {
    const filtersEl = qs("#menuFilters");
    if (!filtersEl) return;

    const categories = [];
    items.forEach((item) => {
      if (categories.indexOf(item.kategori) === -1) {
        categories.push(item.kategori);
      }
    });

    qsa(".filter-btn[data-filter]", filtersEl).forEach((b) => {
      if (b.dataset.filter !== "all") b.remove();
    });

    const allBtn = qs('.filter-btn[data-filter="all"]', filtersEl);
    if (allBtn) {
      allBtn.classList.add("active");
      qsa(".filter-btn", filtersEl).forEach((b) => {
        if (b !== allBtn) b.classList.remove("active");
      });
    }

    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.dataset.filter = cat;
      btn.textContent = cat;
      filtersEl.appendChild(btn);
    });

    if (!filtersAttached) {
      filtersAttached = true;
      filtersEl.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;

        qsa(".filter-btn", filtersEl).forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        activeMenuFilter = btn.dataset.filter;
        applyMenuView();
      });
    }
  };

  if (menuSearchInput) {
    menuSearchInput.addEventListener("input", () => {
      applyMenuView();
    });
  }

  const renderCards = (items, searchQuery, baseCategoryCount) => {
    const grid = qs("#menuGrid");
    const loading = qs("#menuLoading");
    if (!grid) return;

    qsa(".menu-card", grid).forEach((c) => c.remove());
    qsa(".menu__empty", grid).forEach((c) => c.remove());

    const insertIntoGrid = (node) => {
      if (loading && loading.parentNode === grid) {
        grid.insertBefore(node, loading);
      } else {
        grid.appendChild(node);
      }
    };

    if (items.length === 0) {
      const empty = document.createElement("p");
      empty.className = "menu__empty";
      empty.style.cssText = "grid-column:1/-1;text-align:center;color:#a09d97;padding:40px 0;";
      const q = searchQuery && String(searchQuery).trim();
      
      if (baseCategoryCount === 0) {
        empty.textContent = activeMenuFilter === "all"
          ? "Belum ada menu."
          : "Tidak ada menu dalam kategori ini.";
      } else if (q) {
        empty.textContent = "Tidak ada menu yang cocok dengan pencarian. Coba kata kunci lain.";
      } else {
        empty.textContent = "Tidak ada menu untuk ditampilkan.";
      }
      insertIntoGrid(empty);
      return;
    }

    items.forEach((item, idx) => {
      insertIntoGrid(createCard(item, idx));
    });
  };

  const createCard = (item, idx) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.style.animationDelay = (idx * 60) + "ms";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "Lihat detail: " + item.nama);

    card.addEventListener("click", () => {
      openMenuModal(item);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMenuModal(item);
      }
    });

    const photo = document.createElement("div");
    photo.className = "menu-card__photo";

    const img = document.createElement("img");
    img.src = item.foto;
    img.alt = item.nama;
    img.loading = "lazy";
    img.onerror = function () {
      this.src = FALLBACK_IMAGE_CARD;
    };

    const badge = document.createElement("span");
    badge.className = "menu-card__badge";
    badge.textContent = item.kategori;
    badge.classList.add("cat-" + item.kategori.toLowerCase().replace(/[^a-z0-9]+/g, "-"));

    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "menu-card__add";
    addBtn.textContent = "+";
    
    if (item.pilihanSaus && item.pilihanSaus.length) {
      addBtn.setAttribute("aria-label", "Buka detail untuk pilih saus: " + item.nama);
      addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        bumpClickAnim(addBtn, "is-bump");
        openMenuModal(item);
      });
    } else {
      addBtn.setAttribute("aria-label", "Tambah ke keranjang: " + item.nama);
      addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        bumpClickAnim(addBtn, "is-bump");
        addToCart(item, 1);
        showToast(TOAST_MSG_CART_ADDED, {
          actionText: "Lihat keranjang",
          onAction: openCartDrawer,
        });
      });
    }

    photo.appendChild(img);
    photo.appendChild(badge);

    const body = document.createElement("div");
    body.className = "menu-card__body";

    const name = document.createElement("h3");
    name.className = "menu-card__name";
    name.textContent = item.nama;

    const desc = document.createElement("p");
    desc.className = "menu-card__desc";
    desc.textContent = item.deskripsi;

    const footer = document.createElement("div");
    footer.className = "menu-card__footer";

    const price = document.createElement("span");
    price.className = "menu-card__price";
    price.textContent = formatRupiah(item.harga);

    footer.appendChild(price);
    footer.appendChild(addBtn);
    body.appendChild(name);
    body.appendChild(desc);
    body.appendChild(footer);
    card.appendChild(photo);
    card.appendChild(body);

    if (menuRevealObserver) {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "all 0.6s ease-out";
      menuRevealObserver.observe(card);
    }

    return card;
  };

  /* --- Inisialisasi Carousel --- */
  const initAboutCarousel = () => {
    const root = qs("#aboutCarousel");
    const track = qs("#aboutCarouselTrack");
    const dotsWrap = qs("#aboutCarouselDots");
    const prevBtn = qs("#aboutCarouselPrev");
    const nextBtn = qs("#aboutCarouselNext");
    const viewport = root ? qs(".about__carousel-viewport", root) : null;
    if (!root || !track || !dotsWrap || !prevBtn || !nextBtn || !viewport) return;

    const slides = qsa(".about__carousel-slide", track);
    if (slides.length === 0) return;

    let idx = 0;
    const n = slides.length;

    const goTo = (i) => {
      idx = Math.max(0, Math.min(n - 1, i));
      track.style.transform = "translateX(-" + (idx * 100) + "%)";
      qsa(".about__carousel-dot", dotsWrap).forEach((d, j) => {
        d.classList.toggle("is-active", j === idx);
      });
      prevBtn.disabled = idx <= 0;
      nextBtn.disabled = idx >= n - 1;
    };

    dotsWrap.innerHTML = "";
    slides.forEach((_, j) => {
      const dot = document.createElement("button");
      dot.className = "about__carousel-dot" + (j === 0 ? " is-active" : "");
      dot.addEventListener("click", () => { goTo(j); });
      dotsWrap.appendChild(dot);
    });

    prevBtn.addEventListener("click", () => { goTo(idx - 1); });
    nextBtn.addEventListener("click", () => { goTo(idx + 1); });
    goTo(0);
  };

  /* --- Inisialisasi Reveal & Status --- */
  const updateOpenStatus = () => {
    const statusEl = qs("#openStatus");
    if (!statusEl) return;
    const now = new Date();
    const hour = now.getHours();
    const isOpen = hour >= 9 && hour < 20;
    statusEl.textContent = isOpen ? "✅ Sekarang Buka" : "🔴 Sekarang Tutup";
    statusEl.className = isOpen ? "hours__note is-open" : "hours__note is-closed";
  };

  const initReveal = () => {
    if (!window.IntersectionObserver) return;

    menuRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        menuRevealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    const bindReveal = (el) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.6s ease-out";
      menuRevealObserver.observe(el);
    };

    qsa(".section-header").forEach(bindReveal);
    qsa(".contact__top").forEach(bindReveal);
    qsa(".menu-card", qs("#menuGrid")).forEach(bindReveal);
  };

  /* --- Eksekusi Akhir --- */
  cart = loadCart();
  cartName = loadCartName();
  cartOrderType = loadOrderType();
  cartPickupTime = loadPickupTime();
  
  qsa('input[name="cartOrderType"]').forEach((el) => {
    el.checked = el.value === cartOrderType;
    el.addEventListener("change", () => {
      if (!el.checked) return;
      if (el.value === "dinein" || el.value === "takeaway") {
        cartOrderType = el.value;
        saveOrderType();
        buildCheckoutLink();
        syncPickupUI();
      }
    });
  });
  
  syncPickupUI();
  
  if (cartPickupInput) {
    cartPickupInput.value = cartPickupTime;
    cartPickupInput.addEventListener("input", () => {
      cartPickupTime = (cartPickupInput.value || "").slice(0, 10);
      savePickupTime();
      buildCheckoutLink();
    });
  }
  
  if (cartNameInput) {
    cartNameInput.value = cartName;
    cartNameInput.addEventListener("input", () => {
      cartName = (cartNameInput.value || "").slice(0, 80);
      saveCartName();
      buildCheckoutLink();
    });
  }
  
  setCartBadges();
  buildCheckoutLink();

  if (cartFab) cartFab.addEventListener("click", openCartDrawer);
  if (cartNavBtn) cartNavBtn.addEventListener("click", openCartDrawer);
  if (cartDrawerClose) cartDrawerClose.addEventListener("click", closeCartDrawer);
  if (cartDrawer) {
    cartDrawer.addEventListener("click", (e) => {
      if (e.target && e.target.closest("[data-cart-close]")) closeCartDrawer();
    });
  }
  if (cartClearBtn) cartClearBtn.addEventListener("click", clearCart);
  if (cartDrawer && typeof cartDrawer.inert !== "undefined") cartDrawer.inert = true;

  loadMenu();
  initAboutCarousel();
  initReveal();
  updateOpenStatus();

  let scrollTicking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!navbar) return;
      if (!scrollTicking) {
        scrollTicking = true;
        window.requestAnimationFrame(() => {
          navbar.classList.toggle("scrolled", window.scrollY > 40);
          highlightActiveLink();
          scrollTicking = false;
        });
      }
    },
    { passive: true },
  );

}); // Penutup DOMContentLoaded
