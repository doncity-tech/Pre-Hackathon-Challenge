const preLoad = () => {
  qs('.page-load').style.display = "none";
}
// UI interaction
(() => {
  // Apply style for active Navigation in home page
  let activeLink = window.location.href.split('#')[1]
  if (qs(`#${activeLink}-nav`)) {
    qs(`#${activeLink}-nav`).className = "active-nav";
  }

  // Navigation and Menu for responsive
  if (qs('#menu-bar')) {
    qs('#menu-bar').addEventListener('click', () => {
      qs('#for-mobi-view').className += " responsive";
    });
  }
  if (qs('#menu-close')) {
    qs('#menu-close').addEventListener('click', () => {
      qs('#for-mobi-view').className = "for-mobi-view";
    });
  }

})();