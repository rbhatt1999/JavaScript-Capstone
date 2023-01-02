import { modal } from "./Dom.js";

function viewMeal(data) {
  modal.innerHTML = `
    <div class="popup-content">
        <div class ="popup-image">
            <span class ="popup-food">
                <img src="${data.strCategoryThumb}" alt="Pizza">
            </span>
            <span class="close-window">&times;</span>
        </div>
        <div class="meal-title">
            <h2>${data.strCategory}</h2> 
        </div>
        <div class="description">
            <p>${data.strCategoryDescription}</p>
        </div>
        <div class="comment-section">
            <h2 class="comment-title">Comments()</h2>
            <div class="display-comments">
                <ul>
                    <li>REally nice</li>
                    <li>Very yummy</li>
                </ul>
            </div>
        </div>
        <div class="add-comments">
            <h2 class="add-comm">Add a comment</h2>
            <form class="form">
                <input type="text" class="name" value="Your name">
                <input type="text" class="insights" value="Your insights">
                <button type="submit" class="submit"> Comment</button>
            </form>
        </div>    
    </div>`;
}
export default viewMeal;
