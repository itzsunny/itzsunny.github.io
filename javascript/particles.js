particlesJS("particles-js", {
  particles: {
    number: {
      value: 221,
      density: { enable: true, value_area: 2324.947488255008 },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "edge",
      stroke: { width: 1, color: "#000000" },
      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: true, speed: 0.1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 0,
      random: true,
      anim: { enable: true, speed: 0, size_min: 0, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 192.40944730386272,
      color: "#76E465",
      opacity: 0.3,
      width: 1.5,
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: "top-right",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: { enable: false, rotateX: 0, rotateY: 0 },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 150, line_linked: { opacity: 1 } },
      bubble: {
        distance: 146.17389821424212,
        size: 40,
        duration: 1.2993235396821523,
        opacity: 0.07308694910712106,
        speed: 3,
      },
      repulse: { distance: 219.26084732136317, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// var count_particles, stats, update;
// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = "absolute";
// stats.domElement.style.left = "0px";
// stats.domElement.style.top = "0px";
// document.body.appendChild(stats.domElement);
// update = function () {
//   stats.begin();
//   stats.end();
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);
