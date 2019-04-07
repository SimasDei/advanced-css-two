const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const planButtons = document.querySelectorAll('.plan button');
const noModal = document.querySelector('.modal__action--negative');
const mobileNav = document.querySelector('.mobile-nav');
const toggleButton = document.querySelector('.toggle-button');
const toggleBars = document.querySelectorAll('.toggle-button__bar');

for (let i = 0; i < planButtons.length; i++) {
  const element = planButtons[i];
  element.addEventListener('click', () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
  });
}

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

noModal.addEventListener('click', closeModal);

backdrop.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  closeModal();
});
toggleButton.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});
