const addToShoppingCartButtons = document.querySelectorAll('.compra');
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

const cardDeck = document.querySelector('.card-deck');

//CAPTURO EL EVENTO
function addToCartClicked(event){
    const button = event.target;
    const card = button.closest('.card');
    
    const cardTitle = card.querySelector('.card-title').textContent;
    const cardPrice = card.querySelector('.price').textContent;
    const cardImg = card.querySelector('.card-img-top').src;

    addItemToShoppingCart(cardTitle, cardPrice, cardImg);
};

function addItemToShoppingCart(cardTitle, cardPrice, cardImg){
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent =    
        `<div class="row shoppingCartCard">
            <div class="col-6">
                <div class="shopping-cart-item d-flex align-item-center h100 border-0">
                    <img src=${cardImg} class="shopping-cart-image">
                    <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0>${cardTitle}</h6>
                </div>
            </div>
            <div class="col=2">
                <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p class="item-price mb-0 shoppingCartItemPrice">${cardPrice}</p>
                </div>
            </div>
            <div class="col-4">
                <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100>
                </div>
            </div>
        </div>`;
    console.log('addToCartClicked -> cardTitle : ',cardTitle + " " + cardPrice + " " + cardImg);
};