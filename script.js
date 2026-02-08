const projectCards = Array.from(document.querySelectorAll('.projectcard'));
const shuffleButton = document.getElementById('button');

let shuffledCards = [];
let currentIndex = 0;

// Fisher–Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function hideAllProjects() {
  projectCards.forEach(card => card.classList.remove('active'));
}

function showCurrentProject() {
  hideAllProjects();
  shuffledCards[currentIndex].classList.add('active');
}

// Initialize shuffle
function initShuffle() {
  shuffledCards = shuffle([...projectCards]);
  currentIndex = 0;
  showCurrentProject();
}

// Button click → next project
shuffleButton.addEventListener('click', () => {
  currentIndex++;

  // If we've reached the end, reshuffle
  if (currentIndex >= shuffledCards.length) {
    shuffledCards = shuffle([...projectCards]);
    currentIndex = 0;
  }

  showCurrentProject();
});

// Start on page load
initShuffle();
