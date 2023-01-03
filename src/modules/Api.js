import { DisplayPopup, DisplayCards } from "./Functions.js";
import { modal } from "./Dom.js";

export default class Api {
  constructor() {
    this.InvolvementApiEP =
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/";
    this.InvolvementAppID = "YrrcGavt9pgNOYlenrro";
    this.FreeMealEP = "https://www.themealdb.com/api/json/v1/";
    this.InvolvementAppComm = "vXgKvecGbONYA7rAAh7N";
  }

  GetMealInfos = async (id) => {
    await fetch(`${this.FreeMealEP}/1/categories.php`)
      .then((response) => response.json())
      .then((json) => {
        json.categories.forEach((item) => {
          if (item.idCategory === id) {
            this.GetExamples(item, id);
          }
        });
      });
  };

  GetExamples = async (item) => {
    await fetch(`${this.FreeMealEP}/1/filter.php?c=${item.strCategory}`)
      .then((response) => response.json())
      .then((json) => DisplayPopup(item, json));
  };

  GetMeals = async () => {
    await fetch(`${this.FreeMealEP}/1/categories.php`)
      .then((response) => response.json())
      .then((json) => {
        DisplayCards(json.categories);
        const comment = document.querySelectorAll(".comment");
        comment.forEach((item) => {
          item.addEventListener("click", () => {
            modal.classList.toggle("hide");
            this.GetMealInfos(item.id);
          });
        });
      });
  };

  AddComment = async (comment) => {
    const request = await fetch(
      `${this.InvolvementApiEP}apps/${this.InvolvementAppComm}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );
    return request.text();
  };
}
