
function displayItemsOnHomePage(){
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement){                                         //jb dusra page khulega tb ke liye condition hai
    return;
  }
  let innerHTML = '';                                                                    //ek blank innerHTML liye
  products.forEach( item => {        //for each loop lgaye (items array pe) aur sare items ka innerHtml ready krte gye usko add krte gye        
    innerHTML += `
                  <div class="item-container">                                           <!-- hr particular image ke liye ek div -->
                    <img class="item-image" src="${item.image}" alt="item-image">   <!-- image daal diye -->
                    <div class="rating">                                                 <!--rating ke liye ek div bna diye take niche aaye-->
                        ${item.rating.stars} ⭐ | ${item.rating.count}
                    </div>
                    <div class="company-name">${item.company}</div>                    <!--company name ke liye div -->
                    <div class="item-name">${item.item_name}</div>                          <!--item name ke liye div -->
                    <div class="price">                                                     <!--price ke liye div -->
                        <span class="current-price">RS ${item.current_price}</span>         <!-- span taki ek line me aaye-->
                        <span class="original-price">RS ${item.original_price}</span>
                        <span class="discount">(${item.discount_percentage}% OFF)</span>
                    </div>
                    <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to Bag</button>                          <!-- button ke liye-->
                  </div>
              `
  });
  itemsContainerElement.innerHTML = innerHTML;                             //aur finally ush content ko bade div ke content se replace kr diye 
}


let bagItems;
onLoad();

function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));   // add to bag wale items ke id wala array localStorage me save kr rhe
  displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0){
    bagItemCountElement.innerText = bagItems.length;
    bagItemCountElement.style.visibility = 'visible';
   } else {
    bagItemCountElement.style.visibility = 'hidden';
   }
}


