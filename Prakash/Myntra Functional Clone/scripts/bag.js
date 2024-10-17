function onLoad(){
  loadBagItemsObjects();
  displayBagItems();
  displayBagSummary();
}

let bagItemObjects;
onLoad();

function displayBagSummary(){
  let bagSummaryElement = document.querySelector('.bag-summary');
  let totalItems = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  const Convenience_Fee = 99;

  bagItemObjects.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  })

  let totalPayment = totalMRP - totalDiscount + Convenience_Fee;

  bagSummaryElement.innerHTML = `
  <div class="bag-details-container">                            <!--3. pahla calci wala-->
    <div class="price-header">PRICE DETAILS (${totalItems} Items) </div>      <!--4. uska price details-->
    <div class="price-item">                                      <!--4. total mrp-->
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">                                       <!--4.discount-->
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>          <!--4.Convenience fee-->
      <span class="price-item-value">₹99</span>
    </div>
    <hr>                                                           <!--4. hr-->
    <div class="price-footer">                                     <!--4. total amount  -->                               
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${totalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">                                 <!--4. button-->
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
}

function loadBagItemsObjects(){
  console.log(bagItems);
  bagItemObjects = bagItems.map(itemId => {
    for(let i=0; i< products.length; i++){
      if(itemId == products[i].id){
        return products[i];
      }
    }
  })
  console.log(bagItemObjects);
}


function displayBagItems() {
  let containerElement = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemObjects.forEach(item => {
    innerHTML += generateItemHtml(item);
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemsObjects();
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
}

function generateItemHtml(item){
  return `
    <div class="bag-item-container">                                 <!--3. pahla image wala item dusra sb js se aa jayega-->
      <div class="item-left-part">                                    <!--4. image lgaye-->                      
        <img class="bag-item-img" src="../${item.image}">
      </div>
      <div class="item-right-part">                                   <!--4. name and price ke liye-->
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
        </div>
        <div class="return-period">                                  <!--4. return wale details ke liye-->
          <span class="return-period-days">${item.return_period} days</span> return available
        </div>
        <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
      </div>

      <div class="remove-from-cart" onclick="removeFromBag(${item.id});">X</div>                     <!--4. X wale icon ke liye -->
    </div>
  `;
}
