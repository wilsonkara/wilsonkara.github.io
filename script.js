document.querySelectorAll('.collapsedpreview').forEach(header => {
  header.addEventListener('click', () => {
    header.closest('.projectcard').classList.toggle('open');
  });
});

//close all other open cards
document.querySelectorAll('.projectcard.open').forEach(card => {
      if (card !== clickedCard) {
        card.classList.remove('open');
      }
    });

 // toggle the clicked card
    clickedCard.classList.toggle('open');
  });
});
