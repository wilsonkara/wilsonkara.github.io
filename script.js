const projectCards = document.querySelectorAll('.projectcard');
const shuffleButton = document.getElementById('button');

let currentIndex = 0;

// Hide all cards
function hideAllProjects() {
  projectCards.forEach(card => {
    card.classList.remove('active');
  });
}

// Show one card by index
function showProject(index) {
  hideAllProjects();
  projectCards[index].classList.add('active');
}

// Show the first project on load
showProject(currentIndex);

// Button click → shuffle to a random different project
shuffleButton.addEventListener('click', () => {
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * projectCards.length);
  } while (newIndex === currentIndex);

  currentIndex = newIndex;
  showProject(currentIndex);
});

