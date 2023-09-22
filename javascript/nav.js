
// useful functions
const qs = (elem) => {
  return document.querySelector(elem)
}
const qsAll = (elem) => {
  return document.querySelectorAll(elem)
}



// UI interaction
(() => {
  // Menu for responsive
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