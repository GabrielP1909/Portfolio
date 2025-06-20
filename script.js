
particlesJS('particles-js', {
  particles: {
    number: { value: 120 },
    color: { value: '#a78bfa' },
    shape: { type: 'circle' },
    opacity: { value: 0.3 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 170,
      color: '#c4b5fd',
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 3.5,
      direction: 'none',
      random: false,
      straight: false,
      bounce: true
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' }
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.8 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
