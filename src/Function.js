import { modal } from "./Dom.js";

function DisplayPopup(data, examples) {
  modal.innerHTML = ` <div class="closeBtn">X</div>
  <div class="popup">
            <div class="popup-header" >
                
                    <div class="img-popcontainer">
                        <div class="img-pophold">
                            <div class="img">
                                <img src="${data.strCategoryThumb}">
                            </div>
                        </div>
                    </div>
                <div class="popup-title">${data.strCategory}</div>
            </div>

            <div class="popup-details">
              
                <div class="details">
                    <div class="images">
                    </div>
                    <hr />
                   <div class="details-text">
                   ${data.strCategoryDescription}
                    </div>
                </div>
                <div class="popup-comments">
                    <div class="container-comments">
                        <form >
                    
                    <textarea id="comment" type="text" placeholder="Comment"/></textarea>
                    <div class="form-header"><input id="name" type="text" placeholder="Name" /> <button class="submit">submit</button></div>
                        </form>
                     <hr/>
                    <div class="comment-list">
                        <ul class="comments">
                           <li class="single-comment">
                               <img class="user" src="https://www.w3schools.com/howto/img_avatar.png" alt="user" >
                               <b class="user-comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur architecto quidem molestiae deserunt vero voluptas odit asperiores nemo laborum cum laudantium eaque voluptate esse nobis voluptatem iusto, est maxime!</b>
                           </li>             
                        </ul>
                    </div>
                </div>
            </div>
        </div>
   
   
   </div>`;
  const images = document.querySelector(".images");

  examples.meals.slice(0, 3).forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("single-product-example");
    div.innerHTML = ` 
    <div class="img-popholdpop">
        <div class="imgex">
            <img src=${element.strMealThumb}>
        </div>
    </div>
    <p class="title-example">${element.strMeal.substr(0, 15)}</p>
`;
    images.appendChild(div);
  });

  const closeBtn = document.querySelector(".closeBtn");

  closeBtn.addEventListener("click", () => {
    modal.classList.toggle("hide");
  });
}

export default DisplayPopup;
