const hero = document.querySelector('.hero-section');
hero.style.backgroundColor = '#93f5f0';
const mainBtn = document.querySelector('.btn-custom');
const modalCustom = document.querySelector('.custom-modal');
const customTitle = document.querySelector('.custom-title');
const formText = document.querySelector('.form-text');
const formLabel = document.querySelector('.form-label');
const passLabel = document.querySelector('.pass-label');

const footerColor = document.querySelector('.foot-color');
const confirmPass = document.querySelector('.pass-confirm');
const emailColor = document.querySelector('.email-color');
const emailText = document.querySelector('.email-text');

customTitle.style.color = '#ffffff';
modalCustom.style.backgroundColor = '#d1269b';
formText.style.color = '#ffffff';
formLabel.style.color = '#ffffff';
passLabel.style.color = '#ffffff';
formChek.style.color = '#ffffff';
footerColor.style.backgroundColor = '#470332';
confirmPass.style.color = '#ffffff';
emailColor.style.color = '#ffffff';
emailText.style.color = '#ffffff';

mainBtn.addEventListener('click', () => {
  console.log('Button Clicked');
});
