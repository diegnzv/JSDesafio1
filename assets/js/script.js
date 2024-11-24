//Aquí toca definir el precio de cada unidad//
let precio = 400000;

//Aquí definimos los queryselector de los elementos a usar del HTML//
let precioSpan = document.querySelector(".precio-inicial");
let cantidadSpan = document.querySelector(".cantidad"); 
let valorTotalSpan = document.querySelector(".valor-total");
let btnDecrementar = document.querySelector(".btn-decrementar");
let btnIncrementar = document.querySelector(".btn-incrementar");

//Se linkea el precio en el span y lo inicializamos en cantidad 0//
precioSpan.innerHTML = precio;
let cantidad = 0;

//Creamos la funcionar actualizar para linkear la cantidad y el valor//
function actualizar() {
    cantidadSpan.innerHTML = cantidad;
    valorTotalSpan.innerHTML = precio * cantidad;
  }

//Creamos los cambios de evento al hacer click en el botón + con la lógica de al hacer click en el + aumentar en 1 y luego llamar a la función actualizar//
btnIncrementar.addEventListener("click", () => {
    cantidad++;
    actualizar();
  });
//Creamos los cambios de evento al hacer click en el botón - con la lógica de si cantidad es mayor a 0 se le resta 1 a cantidad y luego llamar a la función actualizar//
//Si la cantidad es 0 no hace nada//
btnDecrementar.addEventListener("click", () => {
    if (cantidad > 0) {
      cantidad--;
      actualizar();
    }
  });