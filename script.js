particlesJS('particles-js', { 
  particles: {
    number: { value: 80 }, 
    color: { value: '#a78bfa' },  
    shape: { type: 'circle' },  
    opacity: { value: 0.3 },  
    size: { value: 3 },  
    line_linked: { 
      enable: true,
      distance: 150,  
      color: '#c4b5fd',  
      opacity: 0.4,  
      width: 1  
    },
    move: { 
      enable: true,
      speed: 2, 
      direction: 'none',  
      random: false,
      straight: false,
      bounce: true 
    }
  },
  interactivity: { 
    detect_on: 'canvas',
    events: {
      onhover: {  
        enable: true,
        mode: 'grab'  
      },
      onclick: {  
        enable: true,
        mode: 'push'  
      }
    }
  }
});
