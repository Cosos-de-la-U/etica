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
//FUNCION PARA AGREGAR AL CARRITO DE COMPRAS
function carritoNumeros(){
    let productoNumber = localStorage.setItem('carritoNumeros',1);

    productoNumbers = parseInt(productoNumbers);
    localStorage.setItem('')
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



