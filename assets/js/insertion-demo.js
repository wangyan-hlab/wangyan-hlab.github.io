
const experiment = document.getElementById('insertion-demo');
const experimentButton = document.querySelector('.demo-button');
const experimentStill = experiment.getAttribute('src');
const experimentAnimation = experiment.dataset.animation;
let experimentPlaying = false;

function setExperimentPlaying(playing) {
  experimentPlaying = playing;
  experiment.src = playing ? experimentAnimation : experimentStill;
  experimentButton.textContent = playing ? 'Stop experiment' : 'Play experiment';
}

experimentButton.addEventListener('click', () => setExperimentPlaying(!experimentPlaying));
window.addEventListener('pagehide', () => setExperimentPlaying(false));
