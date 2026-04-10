/* ============================================================
   script.js — Warung Nusantara
   ============================================================ */

"use strict";

var MENU_DATA = [
  {
    id: 1,
    nama: "Chicken Katsu",
    kategori: "Paket Nasi",
    harga: 16000,
    deskripsi: "Pilihan saus: BBQ/Lada Hitam/Lava/Sambal Geprek",
    foto: "img/foto-menu/katsu-bbq.webp",
    // bestSeller: true,
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
  // {
  //   id: 10,
  //   nama: "Ayam Tulang Lunak",
  //   kategori: "Paket Nasi",
  //   harga: 18000,
  //   deskripsi: "Ayam goreng tulang lunak renyah dan gurih + tahu tempe",
  //   foto: "img/foto-menu/ayam-tulanglunak.webp",
  // },
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
    harga: 20000,
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
    harga: 13000,
    deskripsi: "Nasi goreng cikur harum",
    foto: "img/foto-menu/nasi-cikur.webp",
  },
  {
    id: 21,
    nama: "Kentang Katsu",
    kategori: "Light Bites",
    harga: 17000,
    deskripsi: "Pilihan saus: BBQ/Lada Hitam/Lava",
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
  {
    id: 23,
    nama: "Spaghetti Carbonara",
    kategori: "Mie & Pasta",
    harga: 15000,
    deskripsi: "Spaghetti creamy saus carbonara gurih",
    foto: "img/foto-menu/carbonara.webp",
  },
  {
    id: 24,
    nama: "Mie Tektek",
    kategori: "Mie & Pasta",
    harga: 15000,
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
    id: 27,
    nama: "Mie Goreng/Kuah",
    kategori: "Mie & Pasta",
    harga: 6500,
    deskripsi: "Mie goreng/kuah spesial",
    foto: "img/foto-menu/mie-gorengrebus.webp",
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
    deskripsi:
      "Isi 3 sejenis atau campur (kapal selam, lenjer, adaan, kulit) dengan cuko segar",
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

document.addEventListener("DOMContentLoaded", function () {
  /* --- Utility --- */
  function qs(sel, ctx) {
    var root = ctx !== undefined ? ctx : document;
    if (!root || typeof root.querySelector !== "function") return null;
    return root.querySelector(sel);
  }
  function qsa(sel, ctx) {
    var root = ctx !== undefined ? ctx : document;
    if (!root || typeof root.querySelectorAll !== "function") return [];
    return Array.from(root.querySelectorAll(sel));
  }

  document.addEventListener(
    "animationend",
    function (e) {
      var t = e.target;
      if (!t || !t.classList) return;
      if (t.classList.contains("menu-card__add") && t.classList.contains("is-bump")) {
        t.classList.remove("is-bump");
      }
    },
    { passive: true },
  );
  function formatRupiah(num) {
    return "Rp " + Number(num).toLocaleString("id-ID");
  }
  function escapeHtml(str) {
    var d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  /* ============================================================
     1. NAVBAR
     ============================================================ */
  var navbar = qs("#navbar");
  var hamburger = qs("#hamburger");
  var navMenu = qs("#navMenu");
  var navLinks = qsa(".nav-link");

  if (hamburger && navMenu) {
    hamburger.setAttribute("aria-controls", "navMenu");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = hamburger.classList.toggle("open");
      navMenu.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  if (navMenu) {
    navMenu.addEventListener("click", function (e) {
      if (e.target.closest(".nav-link")) {
        if (hamburger) hamburger.classList.remove("open");
        navMenu.classList.remove("open");
        if (hamburger) hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.addEventListener("click", function (e) {
    if (!navbar || !navbar.contains(e.target)) {
      if (hamburger) hamburger.classList.remove("open");
      if (navMenu) navMenu.classList.remove("open");
      if (hamburger) hamburger.setAttribute("aria-expanded", "false");
    }
  });

  var menuModal = qs("#menuModal");
  var lastFocusedEl = null;
  var currentModalItem = null;
  var modalAddToCartBtn = qs("#menuModalAddToCart");

  function closeMenuModal() {
    if (!menuModal || !menuModal.classList.contains("is-open")) return;
    menuModal.classList.remove("is-open");
    var bestEl = qs("#menuModalBest", menuModal);
    if (bestEl) bestEl.hidden = true;

    // Important A11Y: don't set aria-hidden on an ancestor while a descendant still has focus.
    // Move focus back to the last focused element before hiding the modal.
    var activeEl = document.activeElement;
    if (activeEl && menuModal.contains(activeEl)) {
      if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
        lastFocusedEl.focus();
      }
    }

    menuModal.setAttribute("aria-hidden", "true");
    menuModal.setAttribute("hidden", "");
    document.body.classList.remove("modal-open");
  }

  function openMenuModal(item) {
    if (!menuModal) return;
    currentModalItem = item;
    lastFocusedEl = document.activeElement;
    var imgEl = qs("#menuModalImg", menuModal);
    var catEl = qs("#menuModalCat", menuModal);
    var bestEl = qs("#menuModalBest", menuModal);
    var titleEl = qs("#menuModalTitle", menuModal);
    var priceEl = qs("#menuModalPrice", menuModal);
    var descEl = qs("#menuModalDesc", menuModal);
    if (imgEl) {
      imgEl.src = item.foto;
      imgEl.alt = item.nama;
      imgEl.onerror = function () {
        this.src =
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop";
      };
    }
    if (catEl) catEl.textContent = item.kategori;
    if (bestEl) {
      var isBestSeller = bestSellerIds && bestSellerIds.indexOf(item.id) !== -1;
      bestEl.textContent = "Best Seller";
      bestEl.hidden = !isBestSeller;
    }
    if (titleEl) titleEl.textContent = item.nama;
    if (priceEl) priceEl.textContent = formatRupiah(item.harga);
    if (descEl) descEl.textContent = item.deskripsi;
    menuModal.removeAttribute("hidden");
    menuModal.setAttribute("aria-hidden", "false");
    menuModal.classList.add("is-open");
    document.body.classList.add("modal-open");
    var closeBtn = qs("#menuModalClose", menuModal);
    if (closeBtn) closeBtn.focus();
  }

  /* ============================================================
     1b. CART (RINGAN) — simpan multi item + checkout via WhatsApp
     ============================================================ */
  var CART_STORAGE_KEY = "kantinmini_cart_v1";
  var CART_NAME_KEY = "kantinmini_cart_name_v1";
  var CART_ORDER_TYPE_KEY = "kantinmini_cart_order_type_v1";
  var CART_PICKUP_TIME_KEY = "kantinmini_cart_pickup_time_v1";
  var cartFab = qs("#cartFab");
  var cartFabCount = qs("#cartFabCount");
  var cartNavBtn = qs("#cartNavBtn");
  var cartNavCount = qs("#cartNavCount");
  var cartDrawer = qs("#cartDrawer");
  var cartDrawerBody = qs("#cartDrawerBody");
  var cartDrawerTotal = qs("#cartDrawerTotal");
  var cartDrawerClose = qs("#cartDrawerClose");
  var cartClearBtn = qs("#cartClear");
  var cartCheckout = qs("#cartCheckout");
  var cartNameInput = qs("#cartName");
  var cartPickupWrap = qs("#cartPickupWrap");
  var cartPickupInput = qs("#cartPickupTime");
  var cartPanel = cartDrawer ? qs(".cart-drawer__panel", cartDrawer) : null;
  var lastFocusedBeforeCart = null;

  var cart = [];
  var cartName = "";
  var cartOrderType = "dinein";
  var cartPickupTime = "";

  function haptic(ms) {
    try {
      if (!navigator.vibrate) return;
      navigator.vibrate(typeof ms === "number" ? ms : 10);
    } catch (_) {
      // ignore
    }
  }

  function loadOrderType() {
    try {
      var raw = window.localStorage.getItem(CART_ORDER_TYPE_KEY);
      if (raw === "dinein" || raw === "takeaway") return raw;
      return "dinein";
    } catch (_) {
      return "dinein";
    }
  }

  function saveOrderType() {
    try {
      window.localStorage.setItem(CART_ORDER_TYPE_KEY, cartOrderType);
    } catch (_) {
      // ignore
    }
  }

  function loadPickupTime() {
    try {
      var raw = window.localStorage.getItem(CART_PICKUP_TIME_KEY);
      if (!raw) return "";
      return String(raw).slice(0, 10);
    } catch (_) {
      return "";
    }
  }

  function savePickupTime() {
    try {
      window.localStorage.setItem(CART_PICKUP_TIME_KEY, cartPickupTime);
    } catch (_) {
      // ignore
    }
  }

  function syncPickupUI() {
    if (!cartPickupWrap) return;
    var show = cartOrderType === "takeaway";
    cartPickupWrap.hidden = !show;
    if (!show) return;
    if (cartPickupInput) cartPickupInput.value = cartPickupTime || "";
  }

  function loadCartName() {
    try {
      var raw = window.localStorage.getItem(CART_NAME_KEY);
      if (!raw) return "";
      return String(raw).slice(0, 80);
    } catch (_) {
      return "";
    }
  }

  function saveCartName() {
    try {
      window.localStorage.setItem(CART_NAME_KEY, cartName);
    } catch (_) {
      // ignore
    }
  }

  function loadCart() {
    try {
      var raw = window.localStorage.getItem(CART_STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter(function (x) {
          return (
            x &&
            typeof x.id === "number" &&
            typeof x.qty === "number" &&
            x.qty > 0
          );
        })
        .map(function (x) {
          return { id: x.id, qty: Math.floor(x.qty) };
        });
    } catch (_) {
      return [];
    }
  }

  function saveCart() {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (_) {
      // ignore
    }
  }

  function cartCount() {
    return cart.reduce(function (sum, x) {
      return sum + (x.qty || 0);
    }, 0);
  }

  function findMenuById(id) {
    for (var i = 0; i < MENU_DATA.length; i++) {
      if (MENU_DATA[i].id === id) return MENU_DATA[i];
    }
    return null;
  }

  function cartTotal() {
    return cart.reduce(function (sum, x) {
      var item = findMenuById(x.id);
      if (!item) return sum;
      return sum + item.harga * x.qty;
    }, 0);
  }

  function setCartBadges() {
    var c = String(cartCount());
    if (cartFabCount) {
      cartFabCount.textContent = c;
      bumpClickAnim(cartFabCount, "is-badge-bump");
    }
    if (cartNavCount) {
      cartNavCount.textContent = c;
      bumpClickAnim(cartNavCount, "is-badge-bump");
    }
  }

  function openCartDrawer() {
    if (!cartDrawer) return;
    lastFocusedBeforeCart = document.activeElement;
    cartDrawer.removeAttribute("hidden");
    cartDrawer.setAttribute("aria-hidden", "false");
    // Prevent focusing inside when closed (supported in modern browsers)
    if (typeof cartDrawer.inert !== "undefined") cartDrawer.inert = false;
    cartDrawer.classList.add("is-open");
    document.body.classList.add("cart-open");
    renderCart();
    if (cartDrawerClose && typeof cartDrawerClose.focus === "function") {
      cartDrawerClose.focus();
    }
  }

  function closeCartDrawer() {
    if (!cartDrawer) return;
    // Important A11Y: jangan hide drawer saat fokus masih di dalamnya.
    var activeEl = document.activeElement;
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
  }

  function initCartSwipeToClose() {
    if (!cartPanel) return;
    var startX = 0;
    var currentX = 0;
    var dragging = false;
    var panelW = 0;

    function setTranslate(px) {
      cartPanel.style.transform = "translateX(" + px + "px)";
    }

    cartPanel.addEventListener("pointerdown", function (e) {
      if (!cartDrawer || !cartDrawer.classList.contains("is-open")) return;
      if (e.pointerType === "mouse") return; // swipe only for touch/pen
      dragging = true;
      startX = e.clientX;
      currentX = 0;
      panelW = cartPanel.getBoundingClientRect().width || 1;
      cartPanel.classList.add("is-dragging");
      try {
        cartPanel.setPointerCapture(e.pointerId);
      } catch (_) {
        // ignore
      }
    });

    cartPanel.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var dx = e.clientX - startX;
      // drawer ada di kanan → geser ke kanan untuk tutup
      currentX = Math.max(0, dx);
      setTranslate(currentX);
    });

    function endDrag() {
      if (!dragging) return;
      dragging = false;
      cartPanel.classList.remove("is-dragging");
      cartPanel.style.transform = "";
      if (currentX > panelW * 0.35) {
        closeCartDrawer();
        haptic(10);
      }
      currentX = 0;
    }

    cartPanel.addEventListener("pointerup", endDrag);
    cartPanel.addEventListener("pointercancel", endDrag);
  }

  function addToCart(menuItem, qty) {
    if (!menuItem) return;
    var addQty = qty && qty > 0 ? qty : 1;
    var existing = cart.find(function (x) {
      return x.id === menuItem.id;
    });
    if (existing) {
      existing.qty = Math.min(99, existing.qty + addQty);
    } else {
      cart.push({ id: menuItem.id, qty: Math.min(99, addQty) });
    }
    saveCart();
    setCartBadges();
    renderCart();
    haptic(10);
  }

  /* Toast kecil */
  var TOAST_MSG_CART_ADDED = "Berhasil ditambahkan";
  var toastEl = null;
  var toastTimer = null;

  function showToast(text, opts) {
    if (!text) return;
    var options = opts || {};
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.innerHTML = "";
    var msg = document.createElement("span");
    msg.className = "toast__text";
    msg.textContent = text;
    toastEl.appendChild(msg);

    if (options && options.actionText && typeof options.onAction === "function") {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "toast__action";
      btn.textContent = options.actionText;
      btn.addEventListener("click", function () {
        try {
          options.onAction();
        } finally {
          toastEl.classList.remove("is-show");
        }
      });
      toastEl.appendChild(btn);
    }
    toastEl.classList.add("is-show");
    if (toastTimer) window.clearTimeout(toastTimer);
    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    toastTimer = window.setTimeout(
      function () {
        if (!toastEl) return;
        toastEl.classList.remove("is-show");
      },
      reduceMotion ? 2100 : 2700,
    );
  }

  function bumpClickAnim(el, className) {
    if (!el) return;
    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;
    var cn = className || "is-bump";
    el.classList.remove(cn);
    // Force reflow supaya animasi bisa diputar ulang setiap klik.
    void el.offsetWidth;
    el.classList.add(cn);
  }

  function setQty(id, qty) {
    var q = Math.floor(qty);
    if (q <= 0) {
      cart = cart.filter(function (x) {
        return x.id !== id;
      });
    } else {
      cart.forEach(function (x) {
        if (x.id === id) x.qty = Math.min(99, q);
      });
    }
    saveCart();
    setCartBadges();
    renderCart();
  }

  function clearCart() {
    cart = [];
    saveCart();
    setCartBadges();
    renderCart();
  }

  function buildCheckoutLink() {
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

    var lines = [];
    lines.push("Halo Kantin Mini, saya ingin pesan.");
    lines.push(
      "Jenis: " + (cartOrderType === "takeaway" ? "Take Away" : "Dine-In"),
    );
    if (cartName && cartName.trim()) {
      lines.push("Atas nama: " + cartName.trim());
    }
    if (cartOrderType === "takeaway" && cartPickupTime && cartPickupTime.trim()) {
      lines.push("Jam ambil: " + cartPickupTime.trim());
    }
    lines.push("");

    lines.push("Pesanan:");
    var idx = 1;
    cart.forEach(function (x) {
      var item = findMenuById(x.id);
      if (!item) return;
      var subtotal = item.harga * x.qty;
      lines.push(
        idx++ +
          ") " +
          item.nama +
          " — " +
          x.qty +
          " x " +
          formatRupiah(item.harga) +
          " = " +
          formatRupiah(subtotal),
      );
    });
    lines.push("");
    lines.push("Total: " + formatRupiah(cartTotal()));
    // lines.push("");
    // lines.push("Catatan: (opsional) alamat (jika delivery), patokan, dll.");

    var msg = encodeURIComponent(lines.join("\n"));
    cartCheckout.href = "https://wa.me/6285117693117?text=" + msg;
  }

  function renderCart() {
    if (!cartDrawerBody || !cartDrawerTotal) return;

    cartDrawerBody.innerHTML = "";
    var total = cartTotal();
    cartDrawerTotal.textContent = formatRupiah(total);
    buildCheckoutLink();

    if (cart.length === 0) {
      var empty = document.createElement("div");
      empty.className = "cart-empty";
      var msg = document.createElement("div");
      msg.textContent = "Keranjang masih kosong.";
      empty.appendChild(msg);

      var actions = document.createElement("div");
      actions.className = "cart-empty__actions";
      var go = document.createElement("button");
      go.type = "button";
      go.className = "btn btn--primary";
      go.textContent = "Lihat Menu";
      go.addEventListener("click", function () {
        closeCartDrawer();
        var target = document.getElementById("menu");
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      actions.appendChild(go);
      empty.appendChild(actions);
      cartDrawerBody.appendChild(empty);
      return;
    }

    cart.forEach(function (x) {
      var item = findMenuById(x.id);
      if (!item) return;

      var row = document.createElement("div");
      row.className = "cart-item";

      var imgWrap = document.createElement("div");
      imgWrap.className = "cart-item__img";
      var img = document.createElement("img");
      img.src = item.foto;
      img.alt = item.nama;
      img.loading = "lazy";
      img.onerror = function () {
        this.src =
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop";
      };
      imgWrap.appendChild(img);

      var info = document.createElement("div");
      var name = document.createElement("div");
      name.className = "cart-item__name";
      name.textContent = item.nama;
      var meta = document.createElement("div");
      meta.className = "cart-item__meta";
      meta.textContent = formatRupiah(item.harga);

      var bottom = document.createElement("div");
      bottom.className = "cart-item__row";

      var qty = document.createElement("div");
      qty.className = "cart-qty";
      var minus = document.createElement("button");
      minus.type = "button";
      minus.textContent = "−";
      minus.addEventListener("click", function () {
        setQty(item.id, x.qty - 1);
      });
      var num = document.createElement("span");
      num.textContent = String(x.qty);
      var plus = document.createElement("button");
      plus.type = "button";
      plus.textContent = "+";
      plus.addEventListener("click", function () {
        setQty(item.id, x.qty + 1);
      });
      qty.appendChild(minus);
      qty.appendChild(num);
      qty.appendChild(plus);

      var remove = document.createElement("button");
      remove.type = "button";
      remove.className = "cart-remove";
      remove.textContent = "Hapus";
      remove.addEventListener("click", function () {
        setQty(item.id, 0);
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
  }

  if (menuModal) {
    menuModal.addEventListener("click", function (e) {
      if (e.target.closest("[data-modal-close]")) closeMenuModal();
    });
    var modalCloseBtn = qs("#menuModalClose", menuModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeMenuModal);
  }

  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener("click", function () {
      if (!currentModalItem) return;
      addToCart(currentModalItem, 1);
      showToast(TOAST_MSG_CART_ADDED, {
        actionText: "Lihat keranjang",
        onAction: openCartDrawer,
      });
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (menuModal && menuModal.classList.contains("is-open")) {
      closeMenuModal();
      return;
    }
    if (cartDrawer && cartDrawer.classList.contains("is-open")) {
      closeCartDrawer();
      return;
    }
    if (hamburger) hamburger.classList.remove("open");
    if (navMenu) navMenu.classList.remove("open");
    if (hamburger) hamburger.setAttribute("aria-expanded", "false");
  });

  function highlightActiveLink() {
    var scrollY = window.scrollY + 100;
    var current = "";
    qsa("section[id]").forEach(function (sec) {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });
    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href || href.charAt(0) !== "#") return;
      link.classList.toggle("active", href.slice(1) === current);
    });
  }

  highlightActiveLink();

  /* ============================================================
     2. SMOOTH SCROLL (offset navbar; hindari querySelector("#") yang invalid)
     ============================================================ */
  qsa('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href") || "";
      if (href === "#" || href === "") {
        e.preventDefault();
        var reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        window.scrollTo({
          top: 0,
          behavior: reduceMotion ? "auto" : "smooth",
        });
        return;
      }
      var id = href.slice(1);
      if (!id) return;
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var navEl = qs("#navbar");
      var navH = navEl && navEl.offsetHeight ? navEl.offsetHeight : 72;
      var top =
        target.getBoundingClientRect().top + window.scrollY - navH - 8;
      var reduceMotion2 = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: reduceMotion2 ? "auto" : "smooth",
      });
    });
  });

  /* ============================================================
     3. MENU
     ============================================================ */
  var allMenuItems = [];
  var filtersAttached = false;
  var activeMenuFilter = "all";
  var menuSearchInput = qs("#menuSearch");
  var bestSellerIds = [];
  var menuRevealObserver = null;

  function loadMenu() {
    var grid = qs("#menuGrid");
    var loading = qs("#menuLoading");
    if (!grid) return;

    qsa(".menu-card", grid).forEach(function (c) {
      c.remove();
    });
    qsa(".menu__empty", grid).forEach(function (c) {
      c.remove();
    });

    allMenuItems = MENU_DATA;
    activeMenuFilter = "all";
    bestSellerIds = MENU_DATA.filter(function (i) {
      return i.bestSeller === true;
    }).map(function (i) {
      return i.id;
    });

    if (menuSearchInput) menuSearchInput.value = "";

    buildFilterButtons(allMenuItems);
    applyMenuView();

    if (loading) loading.classList.add("hidden");
  }

  // expose for retry button in HTML
  window.loadMenu = loadMenu;

  function getMenuItemsForCategory() {
    if (activeMenuFilter === "all") return allMenuItems;
    return allMenuItems.filter(function (i) {
      return i.kategori === activeMenuFilter;
    });
  }

  function itemMatchesSearch(item, q) {
    if (!q) return true;
    var hay = (
      item.nama +
      " " +
      item.deskripsi +
      " " +
      item.kategori
    ).toLowerCase();
    var parts = q.toLowerCase().split(/\s+/).filter(Boolean);
    for (var i = 0; i < parts.length; i++) {
      if (hay.indexOf(parts[i]) === -1) return false;
    }
    return true;
  }

  function applyMenuView() {
    var base = getMenuItemsForCategory();
    var q = menuSearchInput ? menuSearchInput.value.trim() : "";
    var filtered = q
      ? base.filter(function (i) {
          return itemMatchesSearch(i, q);
        })
      : base;
    renderCards(filtered, q, base.length);
  }

  function buildFilterButtons(items) {
    var filtersEl = qs("#menuFilters");
    if (!filtersEl) return;

    var categories = [];
    items.forEach(function (item) {
      if (categories.indexOf(item.kategori) === -1)
        categories.push(item.kategori);
    });

    qsa(".filter-btn[data-filter]", filtersEl).forEach(function (b) {
      if (b.dataset.filter !== "all") b.remove();
    });

    var allBtn = qs('.filter-btn[data-filter="all"]', filtersEl);
    if (allBtn) {
      allBtn.classList.add("active");
      qsa(".filter-btn", filtersEl).forEach(function (b) {
        if (b !== allBtn) b.classList.remove("active");
      });
    }

    categories.forEach(function (cat) {
      var btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.dataset.filter = cat;
      btn.textContent = cat;
      filtersEl.appendChild(btn);
    });

    if (!filtersAttached) {
      filtersAttached = true;
      filtersEl.addEventListener("click", function (e) {
        var btn = e.target.closest(".filter-btn");
        if (!btn) return;

        qsa(".filter-btn", filtersEl).forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");

        activeMenuFilter = btn.dataset.filter;
        applyMenuView();
      });
    }
  }

  if (menuSearchInput) {
    menuSearchInput.addEventListener("input", function () {
      applyMenuView();
    });
  }

  function renderCards(items, searchQuery, baseCategoryCount) {
    var grid = qs("#menuGrid");
    var loading = qs("#menuLoading");
    if (!grid) return;

    qsa(".menu-card", grid).forEach(function (c) {
      c.remove();
    });
    qsa(".menu__empty", grid).forEach(function (c) {
      c.remove();
    });

    function insertIntoGrid(node) {
      if (loading && loading.parentNode === grid) {
        grid.insertBefore(node, loading);
      } else {
        grid.appendChild(node);
      }
    }

    if (items.length === 0) {
      var empty = document.createElement("p");
      empty.className = "menu__empty";
      empty.style.cssText =
        "grid-column:1/-1;text-align:center;color:#a09d97;padding:40px 0;";
      var q = searchQuery && String(searchQuery).trim();
      if (baseCategoryCount === 0) {
        empty.textContent =
          activeMenuFilter === "all"
            ? "Belum ada menu."
            : "Tidak ada menu dalam kategori ini.";
      } else if (q) {
        empty.textContent =
          "Tidak ada menu yang cocok dengan pencarian. Coba kata kunci lain.";
      } else {
        empty.textContent = "Tidak ada menu untuk ditampilkan.";
      }
      insertIntoGrid(empty);
      return;
    }

    items.forEach(function (item, idx) {
      insertIntoGrid(createCard(item, idx));
    });
  }

  /* --- Fungsi Create Card yang Benar --- */
  function createCard(item, idx) {
    var card = document.createElement("article");
    card.className = "menu-card";
    card.style.animationDelay = (idx * 60) + "ms";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "Lihat detail: " + item.nama);

    card.addEventListener("click", function () {
      openMenuModal(item);
    });

    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMenuModal(item);
      }
    });

    var photo = document.createElement("div");
    photo.className = "menu-card__photo";

    var img = document.createElement("img");
    img.src = item.foto;
    img.alt = item.nama;
    img.loading = "lazy";
    img.onerror = function () {
      this.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop";
    };

    var badge = document.createElement("span");
    badge.className = "menu-card__badge";
    badge.textContent = item.kategori;
    // badge.classList.add("cat-" + item.kategori.toLowerCase().replace(/\s+/g, "-"));
    badge.classList.add("cat-" + item.kategori.toLowerCase().replace(/[^a-z0-9]+/g, "-"));

    var addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "menu-card__add";
    addBtn.setAttribute("aria-label", "Tambah ke keranjang: " + item.nama);
    addBtn.textContent = "+";
    addBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      bumpClickAnim(addBtn, "is-bump");
      addToCart(item, 1);
      showToast(TOAST_MSG_CART_ADDED, {
        actionText: "Lihat keranjang",
        onAction: openCartDrawer,
      });
    });

    var isBestSeller = bestSellerIds && bestSellerIds.indexOf(item.id) !== -1;
    if (isBestSeller) {
      var best = document.createElement("span");
      best.className = "menu-card__best";
      best.textContent = "Best Seller";
      photo.appendChild(best);
    }

    photo.appendChild(img);
    photo.appendChild(badge);

    var body = document.createElement("div");
    body.className = "menu-card__body";

    var name = document.createElement("h3");
    name.className = "menu-card__name";
    name.textContent = item.nama;

    var desc = document.createElement("p");
    desc.className = "menu-card__desc";
    desc.textContent = item.deskripsi;

    var footer = document.createElement("div");
    footer.className = "menu-card__footer";

    var price = document.createElement("span");
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
  }

  /* --- Inisialisasi Carousel --- */
  function initAboutCarousel() {
    var root = qs("#aboutCarousel");
    var track = qs("#aboutCarouselTrack");
    var dotsWrap = qs("#aboutCarouselDots");
    var prevBtn = qs("#aboutCarouselPrev");
    var nextBtn = qs("#aboutCarouselNext");
    var viewport = root ? qs(".about__carousel-viewport", root) : null;
    if (!root || !track || !dotsWrap || !prevBtn || !nextBtn || !viewport) return;

    var slides = qsa(".about__carousel-slide", track);
    if (slides.length === 0) return;

    var idx = 0;
    var n = slides.length;

    function goTo(i) {
      idx = Math.max(0, Math.min(n - 1, i));
      track.style.transform = "translateX(-" + (idx * 100) + "%)";
      qsa(".about__carousel-dot", dotsWrap).forEach(function (d, j) {
        d.classList.toggle("is-active", j === idx);
      });
      prevBtn.disabled = idx <= 0;
      nextBtn.disabled = idx >= n - 1;
    }

    dotsWrap.innerHTML = "";
    slides.forEach(function (_, j) {
      var dot = document.createElement("button");
      dot.className = "about__carousel-dot" + (j === 0 ? " is-active" : "");
      dot.addEventListener("click", function () { goTo(j); });
      dotsWrap.appendChild(dot);
    });

    prevBtn.addEventListener("click", function () { goTo(idx - 1); });
    nextBtn.addEventListener("click", function () { goTo(idx + 1); });
    goTo(0);
  }

  /* --- Inisialisasi Reveal & Status --- */
  function updateOpenStatus() {
    var statusEl = qs("#openStatus");
    if (!statusEl) return;
    var now = new Date();
    var hour = now.getHours();
    var isOpen = hour >= 9 && hour < 20;
    statusEl.textContent = isOpen ? "✅ Sekarang Buka" : "🔴 Sekarang Tutup";
    statusEl.className = isOpen ? "hours__note is-open" : "hours__note is-closed";
  }

  function initReveal() {
    if (!window.IntersectionObserver) return;

    menuRevealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        menuRevealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    function bindReveal(el) {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.6s ease-out";
      menuRevealObserver.observe(el);
    }

    qsa(".section-header").forEach(bindReveal);
    qsa(".contact__top").forEach(bindReveal);
    qsa(".menu-card", qs("#menuGrid")).forEach(bindReveal);
  }

  /* --- Eksekusi Akhir --- */
  cart = loadCart();
  cartName = loadCartName();
  cartOrderType = loadOrderType();
  cartPickupTime = loadPickupTime();
  qsa('input[name="cartOrderType"]').forEach(function (el) {
    el.checked = el.value === cartOrderType;
    el.addEventListener("change", function () {
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
    cartPickupInput.addEventListener("input", function () {
      cartPickupTime = (cartPickupInput.value || "").slice(0, 10);
      savePickupTime();
      buildCheckoutLink();
    });
  }
  if (cartNameInput) {
    cartNameInput.value = cartName;
    cartNameInput.addEventListener("input", function () {
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
    cartDrawer.addEventListener("click", function (e) {
      if (e.target && e.target.closest("[data-cart-close]")) closeCartDrawer();
    });
  }
  if (cartClearBtn) cartClearBtn.addEventListener("click", clearCart);
  initCartSwipeToClose();
  if (cartDrawer && typeof cartDrawer.inert !== "undefined") cartDrawer.inert = true;

  loadMenu();
  initAboutCarousel();
  initReveal();
  updateOpenStatus();

  var scrollTicking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!navbar) return;
      if (!scrollTicking) {
        scrollTicking = true;
        window.requestAnimationFrame(function () {
          navbar.classList.toggle("scrolled", window.scrollY > 40);
          highlightActiveLink();
          scrollTicking = false;
        });
      }
    },
    { passive: true },
  );

}); // Penutup DOMContentLoaded
