// Configuração das partículas usando a biblioteca particles.js
particlesJS('particles-js', {  // Seleciona o elemento container
  particles: {
    number: { value: 80 },  // Quantidade de partículas
    color: { value: '#a78bfa' },  // Cor das partículas (roxo claro)
    shape: { type: 'circle' },  // Forma geométrica
    opacity: { value: 0.3 },  // Transparência
    size: { value: 3 },  // Tamanho
    line_linked: {  // Configuração das linhas que conectam partículas
      enable: true,
      distance: 150,  // Distância máxima para conexão
      color: '#c4b5fd',  // Cor das linhas
      opacity: 0.4,  // Transparência
      width: 1  // Espessuraex
    },
    move: {  // Comportamento do movimento
      enable: true,
      speed: 2,  // Velocidade
      direction: 'none',  // Direção aleatória
      random: false,
      straight: false,
      bounce: true  // Rebate nas bordas
    }
  },
  interactivity: {  // Interação com o usuário
    detect_on: 'canvas',
    events: {
      onhover: {  // Efeito ao passar o mouse
        enable: true,
        mode: 'grab'  // "Puxa" as partículas
      },
      onclick: {  // Efeito ao clicar
        enable: true,
        mode: 'push'  // "Empurra" as partículas
      }
    }
  }
});
