import "./reset.css";
import Api from "./modules/Api.js";
import { modal } from "./modules/Dom.js";

const ApiCalls = new Api();
ApiCalls.GetMeals();

UpdateComment = async (comments) => {
  const userComments = await this.AddComment(comments);
  return { userComments };
};

modal.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = modal.names.value.trim();
  const comment = form.insights.value.trim();
  const comments = {
    username: username,
    comment: comment,
    item_id: `${index}`,
  };
  console.log(comments);
});
