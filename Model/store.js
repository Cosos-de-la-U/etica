console.log('ando corriendo');
//FUNCION PARA ANADIR COSOS AL CARRITO DE COMPRAS
let carro = document.querySelectorAll('.compra');
//QUE ITERE PARA ANADIRLOS => ES UNA FUNCION
for (let index = 0; index < carro.length; index++) {
    console.log("added to cart " + index);
    carro[i].addEventListener('click', () => {
        console.log("added to cart");
    })
}

//FUNCION DE REMOVER COSAS DEL CARRITO DE COMPRAS
var removeCartItemButtons = document.getElementsByClassName('elqueleguaponer');
console.log(removeCartItemButtons);
for (let index = 0; index < removeCartItemButtons; index++) {
    const button = removeCartItemButtons[index];   
    button.addEventListener("click",function(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
    })
}



