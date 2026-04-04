/* ============================================================
   script.js — Warung Nusantara
   ============================================================ */

"use strict";

var MENU_DATA = [
  {
    id: 1,
    nama: "Chicken Katsu",
    kategori: "Paket Nasi",
    harga: 15000,
    deskripsi: "Pilihan saus: BBQ/Lada Hitam/Lava",
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
    harga: 18000,
    deskripsi: "Ayam crispy digeprek sambal bawang",
    foto: "img/foto-menu/ayam-geprek.webp",
  },
  {
    id: 6,
    nama: "Ayam Bakar",
    kategori: "Paket Nasi",
    harga: 18000,
    deskripsi: "Ayam bakar bumbu manis gurih + tahu tempe",
    foto: "img/foto-menu/ayam-kecap.webp",
  },
  {
    id: 7,
    nama: "Ayam Penyet",
    kategori: "Paket Nasi",
    harga: 18000,
    deskripsi: "Ayam goreng penyet sambal pedas + tahu tempe",
    foto: "img/foto-menu/ayam-penyet.webp",
  },
  {
    id: 8,
    nama: "Ayam Kalasan",
    kategori: "Paket Nasi",
    harga: 18000,
    deskripsi: "Ayam goreng bumbu kalasan + tahu tempe",
    foto: "img/foto-menu/ayam-kalasan.webp",
  },
  {
    id: 9,
    nama: "Ayam Kremes",
    kategori: "Paket Nasi",
    harga: 18000,
    deskripsi: "Ayam goreng renyah dengan kremesan gurih + tahu tempe",
    foto: "img/foto-menu/ayam-kremes.webp",
  },
  {
    id: 10,
    nama: "Ayam Tulang Lunak",
    kategori: "Paket Nasi",
    harga: 18000,
    deskripsi: "Ayam goreng tulang lunak renyah dan gurih + tahu tempe",
    foto: "img/foto-menu/ayam-tulanglunak.webp",
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
    harga: 20000,
    deskripsi: "Chicken wing bumbu saus dengan nasi",
    foto: "img/foto-menu/chicken-wing.webp",
  },
  {
    id: 15,
    nama: "Sapi Lada Hitam",
    kategori: "Paket Nasi",
    harga: 18500,
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
    lastFocusedEl = document.activeElement;
    var imgEl = qs("#menuModalImg", menuModal);
    var catEl = qs("#menuModalCat", menuModal);
    var bestEl = qs("#menuModalBest", menuModal);
    var titleEl = qs("#menuModalTitle", menuModal);
    var priceEl = qs("#menuModalPrice", menuModal);
    var descEl = qs("#menuModalDesc", menuModal);
    var waEl = qs("#menuModalWa", menuModal);
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
    if (waEl) {
      var msg = encodeURIComponent(
        "Halo Kantin Mini, saya ingin pesan: " +
          item.nama +
          " (" +
          formatRupiah(item.harga) +
          ")",
      );
      waEl.href = "https://wa.me/6285117693117?text=" + msg;
    }
    menuModal.removeAttribute("hidden");
    menuModal.setAttribute("aria-hidden", "false");
    menuModal.classList.add("is-open");
    document.body.classList.add("modal-open");
    var closeBtn = qs("#menuModalClose", menuModal);
    if (closeBtn) closeBtn.focus();
  }

  if (menuModal) {
    menuModal.addEventListener("click", function (e) {
      if (e.target.closest("[data-modal-close]")) closeMenuModal();
    });
    var modalCloseBtn = qs("#menuModalClose", menuModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeMenuModal);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (menuModal && menuModal.classList.contains("is-open")) {
      closeMenuModal();
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
