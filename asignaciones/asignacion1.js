function men (){
    let menu = parseInt(prompt("Menú: " + "\n" + "   " + "\n" + "1. Helado" + "\n" + "2. Hamburguesa" + "\n" + "3. Perro caliente" + "\n" + "4. Ensalada" + 
                                "\n" + "   " + "\n" + "   " + "\n" + "   " + "\n" +
                                "Ingresa el número de tu pedido"))
    if (menu > 4 || menu < 0) {
        alert("Número seleccionado no esta en el menu")
    } else {
    switch (menu) {
        case 1:
            alert("Has seleccionado Helado" + "\n" + "$ 12.000");
            break;
        case 2:
            alert("Has seleccionado Hamburguesa" + "\n" + "$ 22.000");
            break;
        case 3:
            alert("Has seleccionado Perro caliente" + "\n" + "$ 18.000");
            break;
        case 4:
            alert("Has seleccionado Ensalada" + "\n" + "$ 15.000");
            break;
        default:
            alert("Gracias por su visita")
        }
    }
}

console.log(men());