// ScrollReveal (https://github.com/jlmakes/scrollreveal)

(function scrollReveal() {
    window.sr = ScrollReveal();
    
    sr.reveal('.project', {
      duration   : 600,
      distance   : '20px',
      easing     : 'ease-out',
      origin     : 'bottom',
      reset      : true,
      scale      : 1,
      viewFactor : 0,
      afterReveal  : revealChildren,
    }, 150);
    
      var revealChildren = sr.reveal('.project-title, .project-description, .jen-work-btn', {
      duration   : 700,
      scale      : 1,
      distance   : '20px',
      origin     : 'bottom',
      reset      : true,
      easing     : 'ease-out',
      viewFactor : 1,
    }, 75);
  })();

  (function scrollReveal() {
    window.sr = ScrollReveal();
    
    sr.reveal('.jen-footer', {
      duration   : 600,
      distance   : '20px',
      easing     : 'ease-out',
      origin     : 'bottom',
      reset      : true,
      scale      : 1,
      viewFactor : 0,
      afterReveal  : revealChildren,
    }, 150);
    
      var revealChildren = sr.reveal('.footer-quote', {
      duration   : 700,
      scale      : 1,
      distance   : '20px',
      origin     : 'bottom',
      reset      : true,
      easing     : 'ease-out',
      viewFactor : 1,
    }, 75);
  })();