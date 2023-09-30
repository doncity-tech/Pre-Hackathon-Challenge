


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
      qsAll('.fqa-answer').forEach(y => {
        let panel = e.target.parentNode.nextElementSibling;
        if (y.style.maxHeight && !panel.style.maxHeight) {
          y.style.maxHeight = null;
          y.previousElementSibling.children[0].textContent = "+";
        }
      })
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

  // Control the navigation when scrolling
  window.addEventListener('scroll', () => {
    // For Overview
    if (window.scrollY > 590 && window.scrollY < 2264) {
      qs('#overview-nav').className = "active-nav";
    }
    else {
      qs('#overview-nav').className = "";
    }
    // For FAQs
    if (window.scrollY > 2264 && window.scrollY < 2791) {
      qs('#faq-nav').className = "active-nav";
    }
    else {
      qs('#faq-nav').className = "";
    }
    // For Timeline
    if (window.scrollY > 2791 && window.scrollY < 3696) {
      qs('#timeline-nav').className = "active-nav";
    }
    else {
      qs('#timeline-nav').className = "";
    }


  });
})();