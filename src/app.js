// Handle the expansion and closing of the action menu
const mobileMenuButtons = document.querySelectorAll(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcons = document.querySelectorAll(".menu-icon");
const closeIcons = document.querySelectorAll(".close-icon");
const openAndLock = document.querySelector(".open-and-lock");
const ctaLock = document.querySelector(".cta-lock");
const body = document.body;

// 通用的 class 切換函式
function toggleClass(elements, className) {
  elements.forEach((element) => element.classList.toggle(className));
}

// 防止滾動的事件攔截函式
function preventScroll(event) {
  event.preventDefault();
  event.stopPropagation();
  return false; // 確保事件不會繼續傳播
}

// 綁定事件
mobileMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isMenuHidden = mobileMenu.classList.contains("hidden");

    // 切換選單顯示狀態
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("block");

    // 控制頁面滾動
    if (isMenuHidden) {
      body.style.overflow = "hidden"; // 基本滾動禁用
      document.addEventListener("touchmove", preventScroll, { passive: false }); // 禁止觸控滾動
      document.addEventListener("wheel", preventScroll, { passive: false }); // 禁止滑鼠滾輪滾動
    } else {
      body.style.overflow = ""; // 恢復滾動
      document.removeEventListener("touchmove", preventScroll, {
        passive: false,
      });
      document.removeEventListener("wheel", preventScroll, { passive: false });
    }

    // 打開固定選單後，指定資訊被隱藏
    if (openAndLock) {
      openAndLock.classList.toggle("hidden");
    }

    if (ctaLock) {
      ctaLock.classList.toggle("hidden");
    }

    // 切換圖標顯示狀態
    toggleClass(menuIcons, "hidden");
    toggleClass(closeIcons, "hidden");
  });
});

// Handling the expansion and collapse of submenus
const toggleButtons = document.querySelectorAll("[data-toggle]");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const menuId = button.getAttribute("data-toggle");
    const subMenu = document.getElementById(menuId);

    const arrowIcon = button.querySelector("svg");

    // Toggle submenu display
    subMenu.classList.toggle("hidden");
    subMenu.classList.toggle("block");

    arrowIcon.classList.toggle("rotate-180");
  });
});

// Handle fixed menu
const mainMenu = document.getElementById("main-menu");
const stickyMenu = document.getElementById("sticky-menu");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      stickyMenu.classList.remove("hidden");
      stickyMenu.classList.add("block");
    } else {
      stickyMenu.classList.remove("block");
      stickyMenu.classList.add("hidden");
    }
  },
  { root: null, threshold: 0 }
);

observer.observe(mainMenu);

//處理固定行動選單
const mobileMenus = document.querySelector(".mobile-menu");
const headerHeight = 64;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  mobileMenus.style.top = `${scrollPosition + headerHeight}px`;
});
