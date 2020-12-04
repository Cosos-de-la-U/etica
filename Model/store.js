console.log('ando corriendo');
//FUNCION PARA ANADIR COSOS AL CARRITO DE COMPRAS
let carro = document.querySelectorAll('.compra');
//EJEMPLO DEL JSON
let quesos = [
    {
        nombre : 'Guerlain Meteorites Light',
        precio : '5',
        enCarrito : '0'
    },
        {
        nombre : 'Guerlain Meteorites Light',
        precio : '5',
        enCarrito : '0'
    }
]

//QUE ITERE PARA ANADIRLOS => ES UNA FUNCION
for (let index = 0; index < carro.length; index++) {
    console.log("added to cart " + index);  
    carro[index].addEventListener('click', () => {
        console.log("added to cart");
    })
}
//FUNCION CARGAR EL CARRITO
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    //Product Numbers
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

//FUNCION PARA AGREGAR AL CARRITO DE COMPRAS
function cartNumbers(){
    let productoNumber = localStorage.setItem('carritoNumeros');

    productoNumbers = parseInt(productoNumbers);
//IF PRODUCTO NUMBER 
    if(productoNumber){
        productoNumber = parseInt(productoNumber);
        localStorage.setItem('carritoNumeros', productoNumber + 1);
        document.querySelector('.carrito span').textContent = productoNumber + 1;
    } else {
        localStorage.setItem('carritoNumeros',1);
        document.querySelector('.carrito span').textContent = 1;
    }
}

//FUNCION DE REMOVER COSAS DEL CARRITO DE COMPRAS
var removeCartItemButtons = document.getElementsByClassName('elqueleguaponer');
console.log(removeCartItemButtons);
for (let index = 0; index < removeCartItemButtons; index++) {
    const button = removeCartItemButtons[index];
    //STEMEN   
    button.addEventListener("click",function(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
    })
}

//FUncon de objetos
function setItems(product){
    product.inca
}



