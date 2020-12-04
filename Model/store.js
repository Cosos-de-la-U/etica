const addToShoppingCartButtons = document.querySelectorAll('.compra');
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

const buyButton = document.querySelector('.buyButton');
buyButton.addEventListener('click',()=> buyButtonAction);

const cardDeck = document.querySelector('.card-deck');
const shoppingCartContainer = document.querySelector('.printingHere');

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
 /*   const elementsTitle =
    shoppingCartContainer.getElementsByClassName('itemTitle');

    for (let index = 0; index < elementsTitle.length; index++) {
        if(elementsTitle[index].innerText === cardTitle){
        let elementQuantity = elementsTitle[index].parentElement.parentElement.parentElement
            .querySelector('.shoppingCartItemQuantity')
        };
        elementQuantity.value++;
        return;
    };*/

    const shoppingCartRow = document.createElement('tr');
    shoppingCartRow.setAttribute("class", "ShoppingCartItem");
    const shoppingCartContent =    
`
          <td class="pt-5 itemImg">
            <img class="img-fluid img-thumbnail" src=${cardImg} height="150" width="150" alt="Card image cap">
          </td>
          <td class="itemTitle pt-5">
            ${cardTitle}
          </td>
          <td class="itemPrice pt-5">
            ${cardPrice}
          </td>
          <td class="itemCant pt-5">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity border-0" type="number" value="1"
            min="1" max="10">
          </td>
          <td class="pt-5">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
          </td>`;

        shoppingCartRow.innerHTML = shoppingCartContent;
        shoppingCartContainer.append(shoppingCartRow);

        shoppingCartRow.querySelector('.buttonDelete')
        .addEventListener('click',removeShoppingCart);

        shoppingCartRow.querySelector('.shoppingCartItemQuantity')
        .addEventListener('change',quantityChanging);

        updateShopingCartTotal();
};

function updateShopingCartTotal() {
    let totalilnho = 0;

    const shoppingCartTotal = document.querySelector('.total');

    const shoppingCartItems = document.querySelectorAll('.ShoppingCartItem');

    shoppingCartItems.forEach((ShoppingCartItem) => {
        const shoppingCartItemPriceElement = ShoppingCartItem.querySelector('.itemPrice');

        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$',''));

        const shoppingtCartItemQuantityElement = Number(ShoppingCartItem.querySelector('.shoppingCartItemQuantity').value);

        totalilnho = totalilnho + shoppingCartItemPrice * shoppingtCartItemQuantityElement;

        shoppingCartTotal.innerHTML = `Total: $${totalilnho.toFixed(2)}`;

    });
};

function removeShoppingCart(event){
    const buttonClicked = event.target;
    buttonClicked.closest('.ShoppingCartItem').remove();
        updateShopingCartTotal();
};

function quantityChanging(event){
    const input = event.target;
    updateShopingCartTotal();
}

function buyButtonAction(){
    shoppingCartContainer.innerHTML= '';
    alert('Gracias por realizar su compra :)');
    console.log('hola');
    updateShopingCartTotal();
}