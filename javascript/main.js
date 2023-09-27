


// UI interaction
(() => {
  //Link to registration page
  qs('.hero-btn').addEventListener('click', () => {
    window.open('./register.html', '_self');
  })

  if (qs('#scroll-btn')) {
    qs('#scroll-btn').addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { qs('#scroll-btn').style.visibility = 'visible'; }
    else { qs('#scroll-btn').style.visibility = 'hidden'; }
  });
})();