const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      $("#head").slideDown(100);
    } else {
      $("#head").slideUp(50);
    }
  });
});

observer.observe(document.querySelector('#TopDiv'));