import "./reset.css";
import * as Elements from "./modules/Dom.js";
import viewMeal from "./modules/Functions.js";
import getMeal from "./modules/Api.js";

getMeal(url).then((data) => viewMeal(data));

Elements.popupBtn.addEventListener("click", () => {
  const openModal = () => {
    Elements.modal.style.display = "block";
  };
  openModal();
});

Elements.closeBtn.addEventListener("click", () => {
  const closeModal = () => {
    Elements.modal.style.display = "none";
  };
  closeModal();
});
