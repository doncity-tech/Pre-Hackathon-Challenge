const preLoad = () => {
  qs('.page-load').style.display = "none";
}

// UI interaction
(() => {
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