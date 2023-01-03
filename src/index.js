import "./reset.css";
import Api from "./modules/Api.js";
import { modal } from "./modules/Dom.js";

const ApiCalls = new Api();
ApiCalls.GetMeals();

const saveComment = (data) => {
  ApiCalls.AddComment(data);
};
export default saveComment;
