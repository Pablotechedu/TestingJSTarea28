/*              El método .reduce()

Otro método de iteración ampliamente utilizado es 
.reduce(). El método .reduce() devuelve un único valor
tras iterar por los elementos de un array.
*/
// const numbers = [1, 2, 4, 10];

// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

// console.log(summedNums); // Output: 17

/*Aquí están los valores del acumulador y currentValue
a medida que iteramos a través de la matriz numbers

Iteración    accumulator    currentValue  Valor de retorno
Primera       1              2              3
Segunda       3              4              7
Tercera       7             10             17 

Ahora repasemos el uso de .reduce() del ejemplo anterior:

* numbers es una matriz que contiene números.
* summedNums es una variable que almacena el valor
  devuelto al invocar a .reduce() en numbers.
* numbers.reduce() llama al método .reduce() en la matriz
  numbers y toma una función de devolución de llamada
  como argumento.
* La función de devolución de llamada tiene dos parámetros,
  accumulator y currentValue. El valor de accumulator
  comienza como el valor del primer elemento del array, y
  el de currentValue comienza como el del segundo 
  elemento. Para ver el valor del cambio de 
  accumulator y currentValue.
* A medida que .reduce() se itera a través de la matriz, el
  valor de retorno de la función de devolución de llamada
  se convierte en el valor del accumulator para la siguiente
  iteración y currentValue toma el valor del elemento
  actual en el proceso de bucle.
   
El método .reduce() también puede tomar un segundo parámetro
opcional para establecer un valor inicial accumulator
(recuerde, el primer argumento es la función de devolución
de llamada). Si no se proporciona un valor inicial,
el primer elemento de la matriz se convierte en el valor
inicial de accumulator y el segundo elemento se convierte en
el valor inicial de currentValue.

Por ejemplo:    */
// numbers = [1, 2, 4, 10];

// summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 100); // <- Segundo argumento para .reduce()

// console.log(summedNums); // Output: 117

/*A continuación se muestra un gráfico actualizado
que tiene en cuenta el segundo argumento de 100

Iteración    accumulator    currentValue  Valor de retorno
Primera       100             1            101
Segunda       101             2            103
Tercera       103             4            107 
Cuarta        107            10            117*/

/*

/*Ejercicio:
Tarea 1:
Pratiquemos la llamada .reduce() y el uso de console.log()
para verificar los valores a medida que .reduce()
itera a través de la matriz.

Para comenzar, declara una nueva variable llamada newSum
con la palabra clave const. Asígnale a newSum el valor
de la llamada .reduce() a newNumbers. No necesitas
proporcionar argumentos a .reduce() todavía.

También verás un TypeError:  undefined is not a function
pero lo solucionaremos después de agregar nuestra
función de devolución de llamada en el siguiente paso.
*/
const newNumbers = [1, 3, 5, 7];

// const newSum = newNumbers.reduce(); // <- TypeError: undefined is not a function

// Tarea 2:
// Proporciona a .reduce() un argumento de una
// función de devolución de llamada. La función de
// devolución de llamada tiene dos parámetros. El
// primero es accumulator y el segundo es currentValue.
// Utiliza una expresión de función o una función de
// flecha.

// const newSum = newNumbers.reduce((accumulator, currentValue) => {
//   // El cuerpo de la función estará vacío por ahora
// });

// // Tarea 3:
// // Para comprobar el valor que se utiliza a medida que iteramos
// // a través de la matriz, agrega tres declaraciones
// // al cuerpo de la función de devolución de llamada:

// // *console.log('The value of accumulator: ', accumulator);
// // *console.log('The value of currentValue: ', currentValue);
// // *Una declaración de retorno que devuelve la suma de accumulator y
// //  currentValue.

// const newSum = newNumbers.reduce((accumulator, currentValue) => {
//   console.log("Valor de accumulator: ", accumulator);
//   console.log("Valor de currentValue: ", currentValue);
//   return accumulator + currentValue;
// });
// // Tarea 4:
// // Registra el valor de newSum en la consola para ver el
// // valor de retorno de llamar .reduce() a newNumbers.

// const newSum = newNumbers.reduce((accumulator, currentValue) => {
//   console.log("Valor de accumulator: ", accumulator);
//   console.log("Valor de currentValue: ", currentValue);
//   return accumulator + currentValue;
// });

// console.log("Nuevo Valor de newSum: ", newSum);

// // Tarea 5:
// // Ya que tenemos este código configurado, veamos qué
// // sucede si se agrega un segundo argumento a .reduce().
// // Este segundo argumento actúa como valor inicial
// // para accumulator.
// // Añade un segundo argumento de 10 a .reduce().

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

console.log("The value of newSum: ", newSum);
