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
  var hasRedirected = false;
  listener = document.addEventListener("scroll", () => {
    if (window.location.pathname == "/" && !window.location.href.includes("?")) {
      if (document.querySelector('a[href="/?variant=past_posts"]').getBoundingClientRect().bottom + 50 < window.innerHeight) {
        console.log("over! over!", window.scrollY);
        window.scrollTo({ top: lastScrollPosition });
        // document.getElementById("mount_0_0_rm").style.height = window.screenTop + window.innerHeight + "px";
        // document.getElementById("mount_0_0_rm").style.overflow = "hidden";
        if (!hasRedirected) {
          window.location.href += "?variant=past_posts";
          hasRedirected = true;
        }
      } else {
        lastScrollPosition = window.scrollY;
      }
    }
  });
}

document.addEventListener("scroll", () => {
  // if (window.location.href.includes("?variant=past_posts") && window.scrollY == 0) {
  //   window.location.href = window.location.href.replace("?variant=past_posts", "");
  // }
});