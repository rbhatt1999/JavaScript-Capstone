import {ProductsCounter,Cards} from './Dom.js';

function DisplayCards(data) {
  data.forEach((element) => {
    Cards.innerHTML += `
        <div class="card">
        <div class="img-container">
            <div class="img-hold">
                <div class="img">
                    <img src="${element.strCategoryThumb}">
                </div>
            </div>
        </div>
        <div class="title-container">
            <h3>${element.strCategory}</h3>
            <div class="interactions">
            <div><i id="${element.idCategory}" class="fa-solid fa-comment fa-lg"></i>  355  </div>       <div><i class="fa-solid fa-heart fa-lg"></i> <b id="${element.idCategory}" class="likes-counter">355</b> </div>
            </div>
            <div>
            ${element.strCategoryDescription.substr(0, 50)}...
            </div>
            
        <button class="button comment"><i class="fa-solid fa-comments"></i> Comments</button>
        </div>

    </div>
        `;
  });
}

function Counter(data) {
    const LikesCounter = document.querySelectorAll('.likes-counter');
    ProductsCounter.innerHTML=data.products.length;
    data.likes.forEach(item => {
        console.log(LikesCounter);
        LikesCounter.forEach(counter=>{
            if(item.item_id === counter.id) {
                counter.innerHTML=item.likes
            }
        })
    })
}

export  {DisplayCards , Counter};