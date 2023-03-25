/*Animate on Scroll*/
AOS.init();

(function() {
  "use strict";

  /*Landing section typing effect*/
  var typed = new Typed('#typed-text', {
    strings: ['<em>full-stack-web-dev;</em>',
      '<em>design:</em>&nbsp; 100%;',
      '<em>build:</em>&nbsp; 100%;',
      '<em>deploy:</em>&nbsp; auto;'],
    typeSpeed: 50,
    // backSpeed: 30,
    backDelay: 1800,
    loop: true
  });

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