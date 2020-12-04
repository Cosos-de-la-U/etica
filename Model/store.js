console.log('ando corriendo');
//FUNCION PARA ANADIR COSOS AL CARRITO DE COMPRAS
let carro = document.querySelectorAll('.compra');
//EJEMPLO DEL JSON
let quesos = [
    {
        nombre : 'Queso Maasdam',
        precio : '5',
        enCarrito : '0'
    },
        {
        nombre : 'Queso Gruyère',
        precio : '4.50',
        enCarrito : '0'
    }
    {
        nombre : 'Queso Appenzeller',
        precio : '6',
        enCarrito : '0'
    }
    {
        nombre : 'Queso Parmesano ',
        precio : '7',
        enCarrito : '0'
    }
    {
        nombre : 'Queso Roquefort',
        precio : '10.50',
        enCarrito : '0'
    }
    
    {
        nombre : 'Queso Emmental',
        precio : '4.50',
        enCarrito : '0'
    }
    {
        nombre : 'Queso Feta',
        precio : '5.50  ',
        enCarrito : '0'
    },
        {
        nombre : 'Queso Quesillo',
        precio : '4.50',
        enCarrito : '0'
    }
    {
        nombre : 'Queso Mozzarella',
        precio : '3.00',
        enCarrito : '0'
    }
    {
        nombre : 'Queso Provolone',
        precio : '4.00',
        enCarrito : '0'
    }
    {
        nombre : 'Queso Monterey Jack ',
        precio : '3.70',
        enCarrito : '0'
    }
    
    {
        nombre : 'Queso Manchego',
        precio : '3.95',
        enCarrito : '0'
    }
]


let leches = [

     
    {
        nombre : 'Leche Lactaid',
        precio : '3.70 ',
        enCarrito : '0'
    }

    {
        nombre : 'Leche nutRi',
        precio : '4.75',
        enCarrito : '0'
    }
    {
        nombre : 'Leche Bienatur',
        precio : '3.50  ',
        enCarrito : '0'
    }

    {
        nombre : 'Leche sula Entera ',
        precio : '3.50',
        enCarrito : '0'
    }

    {
        nombre : '  Leche Nestle',
        precio : '3.95',
        enCarrito : '0'
    }
    {
        nombre : '  Leche sula Deslactosada',
        precio : '3.00',
        enCarrito : '0'
    }

    {
        nombre : '  Leche Great Value',
        precio : '5.00',
        enCarrito : '0'
    }
    {
        nombre : '  Leche LALA',
        precio : '4.00',
        enCarrito : '0'
    }

    {
        nombre : '  Leche Pascual',
        precio : '5.00',
        enCarrito : '0'
    }
    {
        nombre : ' Leche President',
        precio : '7.00',
        enCarrito : '0'
    }
    {
        nombre : '  Leche Serenísima',
        precio : '5.00',
        enCarrito : '0'
    }
    {
        nombre : ' Leche Fortuna',
        precio : '5.00',
        enCarrito : '0'
    }
]
let cremas = [

    {
        nombre : 'Crema LALA',
        precio : '5.00 ',
        enCarrito : '0'
    }

    {
        nombre : 'Crema yoplait',
        precio : '4.50',
        enCarrito : '0'
    }
    {
        nombre : 'Crema Milkaut',
        precio : '6.00  ',
        enCarrito : '0'
    }

    {
        nombre : 'Crema Milkaut pasteurizada',
        precio : '7.00',
        enCarrito : '0'
    }

    {
        nombre : '  Crema LALA',
        precio : '2.50',
        enCarrito : '0'
    }

    {
        nombre : ' Crema Nuestra Crema',
        precio : '3.90',
        enCarrito : '0'
    }
    {
        nombre : ' Crema El Huache',
        precio : '5.50',
        enCarrito : '0'
    }
    {
        nombre : ' Crema Philadelphia',
        precio : '4.50',
        enCarrito : '0'
    }
    {
        nombre : 'Crema Carabobo',
        precio : '3.00',
        enCarrito : '0'
    }
    {
        nombre : ' Crema alpura',
        precio : '5.00',
        enCarrito : '0'
    }
    {
        nombre : ' Crema sour cream',
        precio : '3.70',
        enCarrito : '0'
    }

    {
        nombre : ' Crema Quillayes',
        precio : '3.95 ',
        enCarrito : '0'
    }
]

let otros = [

    {
        nombre : 'Mantequilla colun',
        precio : '3.00 ',
        enCarrito : '0'
    }

    {
        nombre : 'Mantequilla Gloria',
        precio : '3.50',
        enCarrito : '0'
    }
    {
        nombre : 'yogurt LALA',
        precio : '3.00  ',
        enCarrito : '0'
    }
    {
        nombre : ' yogurt Greek',
        precio : '4.50 ',
        enCarrito : '0'
    }

    {
        nombre : 'Miel',
        precio : '5.00',
        enCarrito : '0'
    }

    {
        nombre : '  Miel Gibson',
        precio : '7.00',
        enCarrito : '0'
    }

    {
        nombre : ' Soda Dr Pepper',
        precio : '2.00',
        enCarrito : '0'
    }
    {
        nombre : 'Soda Coca Cola',
        precio : '2.00',
        enCarrito : '0'
    }
    {
        nombre : ' Soda 7up',
        precio : '2.00',
        enCarrito : '0'
    }
    {
        nombre : 'Galleta Pozuelo',
        precio : '1.00',
        enCarrito : '0'
    }
    {
        nombre : ' Agua ',
        precio : '3.00',
        enCarrito : '0'
    }
    {
        nombre : ' Crema sour cream',
        precio : '3.70',
        enCarrito : '0'
    }

    
    {
        nombre : ' Gomitas',
        precio : '1.00 ',
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



