import "./reset.css";
import * as Elements from "./modules/dom.js";

Elements.popupBtn.addEventListener("click", (e) => {
  const openModal = () => {
    Elements.modal.style.display = "block";
  };
  openModal();
});

Elements.closeBtn.addEventListener("click", (e) => {
  const closeModal = () => {
    Elements.modal.style.display = "none";
  };
  closeModal();
});
