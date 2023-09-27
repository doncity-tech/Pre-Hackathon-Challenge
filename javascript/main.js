


// UI interaction
(() => {
  //Link to registration page
  qs('.hero-btn').addEventListener('click', () => {
    window.open('./register.html', '_self');
  })

  // Home page scrolling button
  if (qs('#scroll-btn')) {
    qs('#scroll-btn').addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { qs('#scroll-btn').style.visibility = 'visible' }
    else { qs('#scroll-btn').style.visibility = 'hidden' }
  });

  // Collapsing FQS Panel
  qsAll('.fqa-tap').forEach(x => {
    x.addEventListener('click', (e) => {
      let panel = e.target.parentNode.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        e.target.innerHTML = "+";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        e.target.innerHTML = "-";
      }
    });
  });

})();