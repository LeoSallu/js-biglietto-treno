'use strict';
// CHIEDERE KM DA PERCORRERE
const kmPercorsi = parseInt(prompt("Quanti km vuoi percorrere ?"));
console.log(kmPercorsi + ' km');

//CHIEDERE ETÁ
const età = parseInt(prompt("Quanti anni hai ?"));
console.log(età + ' anni');

//CALCOLO DEL PREZZO
   //-Prezzo per Km
let prezzoPerKm = (kmPercorsi * 0.21).toFixed(2);
console.log(prezzoPerKm + ' €');
    
//-SCONTO PER ETÁ
    //-Sconto per minorenni
if(età<18){
    let prezzoPerKmScontato = ((prezzoPerKm * 0.2).toFixed(2));
    console.log(prezzoPerKmScontato + ' €');
    document.getElementById('price').innerHTML = (prezzoPerKmScontato + ' €');
    //-Sconto per over 60
} else if(età>=65){
    let prezzoPerKmScontato = ((prezzoPerKm * 0.4).toFixed(2));
    console.log(prezzoPerKmScontato + ' €');
    document.getElementById('price').innerHTML = (prezzoPerKmScontato + ' €');
}
    //Default
else{
    let prezzoPerKm = (kmPercorsi * 0.21);
    console.log(prezzoPerKm + ' €');
    document.getElementById('price').innerHTML = (prezzoPerKm + ' €');
}
