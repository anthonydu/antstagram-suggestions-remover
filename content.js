const observer = new MutationObserver(() => {
  if (document.querySelector('a[href="/?variant=past_posts"]')) {
    handle();
    observer.disconnect();
  }
});

observer.observe(document, {
  childList: true,
  subtree: true
});

function handle() {
  var lastScrollPosition;
  document.addEventListener("scroll", () => {
    if (window.location.pathname == "/" && !window.location.href.includes("?")) {
      if (document.querySelector('a[href="/?variant=past_posts"]').getBoundingClientRect().bottom + 50 < window.innerHeight) {
        console.log("over! over!", window.scrollY);

        window.scrollTo({ top: lastScrollPosition })
      } else {
        lastScrollPosition = window.scrollY;
      }
    }
  });
}