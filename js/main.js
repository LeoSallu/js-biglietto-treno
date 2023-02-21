'use strict';

// CHIEDERE KM DA PERCORRERE

const kmPercorsi = Number(prompt("Quanti km vuoi percorrere ?"));
console.log(kmPercorsi + ' km');

//CHIEDERE ETÁ

const età = Number(prompt("Quanti anni hai ?"));
console.log(età + ' anni');

//CALCOLO DEL PREZZO

const prezzoPerKm = (kmPercorsi * 0.21);
console.log(prezzoPerKm + ' €');