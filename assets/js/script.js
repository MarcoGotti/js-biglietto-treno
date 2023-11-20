/* 
Il programma dovrà chiedere all'utente:

     il numero di chilometri che vuole percorrere
    e l'età del passeggero. 

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Queste sono le regole:

    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65 (fortunelli). 

L'output del prezzo finale va stampata in pagina assicurandoci sia leggibile da un essere umano (massimo due cifre decimali, per indicare centesimi sul prezzo).
*/



//chiedi quanti km vuole percorrere
const km = parseInt(prompt('quanti km vuoi percorrere?'));

//chiedi l'età
const user_age = parseInt(prompt('Quanti anni hai? (Il dato non verrà diffuso)'));

//calcola il prezzo del viaggio: km * 0.21€
const price_full = (km * 0.21);
let price = (price_full)



if (user_age < 18) {
    //se minorenne 20% sconto
    price = (price_full * 0.8)
} else if (user_age >= 65) {
    //se over 65 40% sconto
    price = (price_full * 0.6)
} else {
    //altrimenti prezzo pieno
    price = (price_full)
}

//controll on .log
console.log(`Qui abbiamo ${km}km e ${user_age}anni di età. Prezzo totale: ${price}€` );




