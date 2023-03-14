
(function() {
  "use strict";

  /*Easy selector helper function*/
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /*Landing typing effect*/
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /*Navbar auto close upon select*/
  const navLinks = document.querySelectorAll('.navbar-nav > li > a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      navbarToggler.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    });
  });

})()