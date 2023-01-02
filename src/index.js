import './reset.css';
import * as Elements from './modules/Dom.js';

Elements.popupBtn.addEventListener('click', () => {
  const openModal = () => {
    Elements.modal.style.display = 'block';
  };
  openModal();
});

Elements.closeBtn.addEventListener('click', () => {
  const closeModal = () => {
    Elements.modal.style.display = 'none';
  };
  closeModal();
});
