// ScrollReveal (https://github.com/jlmakes/scrollreveal)

(function scrollReveal() {
    window.sr = ScrollReveal();
    
    sr.reveal('.project', {
      duration   : 600,
      distance   : '20px',
      easing     : 'ease-in',
      origin     : 'bottom',
      reset      : true,
      scale      : 1,
      viewFactor : 0,
      // afterReveal  : revealChildrenProject,
    }, 150);
    
      var revealChildrenProject = sr.reveal('.project-title, .project-description, .jen-work-btn', {
      duration   : 700,
      scale      : 1,
      distance   : '20px',
      origin     : 'bottom',
      reset      : true,
      easing     : 'ease-in',
      viewFactor : 1,
    }, 75);
    
    sr.reveal('.jen-footer', {
      duration   : 600,
      distance   : '20px',
      easing     : 'ease-in',
      origin     : 'bottom',
      reset      : true,
      scale      : 1,
      viewFactor : 0,
      // afterReveal  : revealChildrenFooter,
    }, 150);
    
      var revealChildrenFooter = sr.reveal('.footer-quote', {
      duration   : 700,
      scale      : 1,
      distance   : '20px',
      origin     : 'bottom',
      reset      : true,
      easing     : 'ease-in',
      viewFactor : 1,
    }, 75);
  })();

