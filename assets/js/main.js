
(function() {
  "use strict";

  /*Animate on Scroll*/
  AOS.init();

  /*Landing section typing effect*/
  var typed = new Typed('#typed-text', {
    strings: ['<em>design:</em>&nbsp; `100%;` <br/> <em>build:</em>&nbsp; `100%;` <br/> <em>deploy:</em>&nbsp; `auto;`'],
    startDelay: 1500,
    typeSpeed: 50,
    backDelay: 3000,
    backSpeed: 15,
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

  /*Tooltip on hover*/
  tippy('.tech-icon, .backtop, .project-link', {
    content: function(reference) {
      const content = reference.getAttribute('alt');
      return content;
    },
    offset: [0, 30],
  });

})()