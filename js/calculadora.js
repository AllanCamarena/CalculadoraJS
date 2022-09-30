window.addEventListener('load', () =>{   /*Escuchar cuando se carga el documento*/
    const display = document.querySelector('.calculadora-display'); /*constante par buscar display*/

    const keypadButton = document.getElementsByClassName('keypad-button');/*constante par buscar keypad*/

    const keypadButtonArray = Array.from(keypadButton);  /*creamos una constante para convertir el htmlcollection a Array*/

    /*Iteramos por nuestro nuevo array de botones */
    keypadButtonArray.forEach((button) =>{
    /*A cada boton le agregamos un listener*/
        button.addEventListener('click', () =>{
            calculadora(button, display);
        })
    })
});


function calculadora(button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        case '=':
        calcular(display);
            break;
        default:
            actualizar(display, button)
            break;
    }
}


function calcular(display){
   display.innerHTML = eval(display.innerHTML) /*Tomar el string*/
}

function actualizar(display, button){
    if(display.innerHTML ==0 ){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}