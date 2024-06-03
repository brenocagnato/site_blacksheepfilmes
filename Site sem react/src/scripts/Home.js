$(document).ready(function() {
  const tl = gsap.timeline({ paused: true });

  const animateOpenNav = () => {
    tl.to("#nav-container", 0.2, {
      autoAlpha: 1,
      delay: 0.1,
    })
    .to(".site-logo", 0.2, {
      color: "#fff"
    }, "-=0.1")
    .from(".flex > div", 0.4, {
      opacity: 0,
      y: 10,
      stagger: {
        amount: 0.04,
      }
    })
    .to(".nav-link > a", 0.8, {
      top: 0,
      ease: "power2.inOut",
      stagger: {
        amount: 0.1
      }
    }, "-=0.4")
    .from(".nav-footer", 0.3, {
      opacity: 0
    }, "-=0.5")
    .reverse();
  };

  animateOpenNav();

  $('#menu-toggle-btn').click(function() {
    $(this).toggleClass('active');
    $('#nav-container').toggleClass('active');
    tl.reversed(!tl.reversed());
  });
});
