const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

function openPage(pageName) {
  pages.forEach(page => {
    if (page.dataset.page === pageName) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });

  navigationLinks.forEach(link => {
    // Remove active from all
    link.classList.remove("active");
    // Add active to clicked / matching link
    if (link.getAttribute("href") === "#" + pageName) {
      link.classList.add("active");
    }
  });
}

// Handle nav clicks
navigationLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetPage = link.getAttribute("href").substring(1);
    openPage(targetPage);
    // Update URL hash without jumping (smoothly)
    history.pushState(null, null, "#" + targetPage);
    window.scrollTo(0, 0);
  });
});

// On load, open page based on hash or default to about
window.addEventListener("load", () => {
  const hashPage = window.location.hash.substring(1);
  if (hashPage && [...pages].some(p => p.dataset.page === hashPage)) {
    openPage(hashPage);
  } else {
    openPage("about");
  }
});

// Optional: also handle back/forward navigation
window.addEventListener("popstate", () => {
  const hashPage = window.location.hash.substring(1);
  if (hashPage && [...pages].some(p => p.dataset.page === hashPage)) {
    openPage(hashPage);
  }
});
