const addToShoppingCartButtons = document.querySelectorAll('.compra');
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

//CAPTURO EL EVENTO
function addToCartClicked(event){
    const button = event.target;
    const item = button.closet('.card');
    console.log('wea : addToCartClicked - > card', card);
};