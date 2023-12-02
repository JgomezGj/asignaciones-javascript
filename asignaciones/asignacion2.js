// Ejercicio 1:
// Dado el siguiente arreglo de números, utiliza el método map() para crear un
// nuevo arreglo que contenga el cuadrado de cada número.

let numeros = [2, 4, 6, 8, 10];

let cuadrado = numeros.map(function(x) {
    return x * x;
});

console.log(cuadrado);


// Ejercicio 2:
// Dado el siguiente arreglo de nombres, usa el método filter() para generar un nuevo
// arreglo que contenga solo los nombres que tengan más de 5 caracteres.

let nombres = ["Juan", "María", "Carlos", "Ana", "Pedro", "Luisa"];

let nuevosNombres = nombres.filter((nombres) => nombres.length > 5);

console.log(nuevosNombres);


// Ejercicio 3:
// Dado el siguiente arreglo de números, utiliza el método reduce() para obtener la suma
// de todos los elementos.

let numeros1 = [10, 25, 83, 41, 5];

let suma = numeros1.reduce((cont, valor) => cont + valor);

console.log(suma);


// Ejercicio 4:
// Dado el siguiente arreglo de palabras, utiliza el método every() para verificar si todas
// las palabras tienen más de 3 caracteres.

let palabras = ['Hola', 'Mundo', 'JavaScript', 'Web'];

let masDe3Caracteres = palabras.every((palabras) => palabras.length > 3);

console.log(masDe3Caracteres);


// Ejercicio 6:
// Dado el siguiente objeto:

const persona = { nombre: 'Juan', edad: 25, ciudad: 'Cali' };

// Utiliza un bucle for...in para imprimir cada clave y su respectivo valor con
// console.log

for (person in persona) {
    console.log(persona);
    break;
}



