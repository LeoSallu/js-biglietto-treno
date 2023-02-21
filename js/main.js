'use strict';
// CHIEDERE KM DA PERCORRERE

const kmPercorsi = Number(prompt("Quanti km vuoi percorrere ?"));
console.log(kmPercorsi + ' km');

//CHIEDERE ETÁ

const età = Number(prompt("Quanti anni hai ?"));
console.log(età + ' anni');

//CALCOLO DEL PREZZO
    //-Prezzo per Km

const prezzoPerKm = (kmPercorsi * 0.21);
console.log(prezzoPerKm + ' €');

    //-Sconto per età
if(età<18){
    const prezzoPerKmScontato = (((prezzoPerKm / 100) - 20).toFixed(2));
    console.log(prezzoPerKmScontato + ' €');
} else if(età>=65){
    const prezzoPerKmScontato = (((prezzoPerKm / 100) - 40).toFixed(2));
    console.log(prezzoPerKmScontato + ' €');
}
else{
    const prezzoPerKm = (kmPercorsi * 0.21);
    console.log(prezzoPerKm + ' €');
}
