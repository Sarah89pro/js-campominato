/*Descrizione
- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50*/



//variabili iniziali

var maxNumber;                             //numeri che il giocatore pò utilizzare
var bombNumber = 16;                       //quante bombe ci sono
var chance;                                //numeri corretti
var bombList = [];                         //numeri sbagliati (bombe)
var allowedNumber = [];                    //numeri corretti inseriti dall'utente
var user= 0;                               // scelta utente



//creazione numeri casuali univoci

while (bombList.length < bombNumber) {
    var bomb = randomNumber (maxNumber);

    if (!bombList.includes(bomb)) {
        bombList.push(bomb);
    }
}

console.table (bombList);


//scegli la difficolta

var level = parseInt ( prompt ( "Scegli il livello di difficoltà: 0, 1 o 2?").trim() );

while ( isNaN(level) || level < 0 || level > 2 ) {
    level = parseInt ( prompt ( "Scegli il livello di difficoltà: 0, 1 o 2?").trim() );
}


//casistiche 0, 1, 2

switch (level) {
    case 0:
        maxNumber = 100;
        break;

    case 1:
        maxNumber = 80;
        break;
        
    case 2:
        maxNumber = 50;
}

chance = maxNumber - bombNumber;




//game loop

while ( (allowedNumber.length < chance) && (! bombList.includes(user)) ) {
    //scelta user
    user = parseInt ( prompt ("Inserisci un numero da 1 a " +  maxNumber + "\nTentativi riusciti: " + allowedNumber.length + "di " + chance) );

    while ( isNaN(user) || user < 1 || user > maxNumber ) {
        user = parseInt ( prompt ("Inserisci un numero da 1 a " +  maxNumber) );
    }
    console.log(user);

    //controllo scelta
    if ( bombList.includes(user) ) {
        alert ("Hai perso! \n Hai fatto " + allowedNumber.length + " tentativi prima di trovare una bomba.");
    } 
    else if ( allowedNumber.includes(user) ) {
            alert ("Hai già inserito questo numero: inseriscine un altro!");
    }

    else if ( ! allowedNumber.includes(user) ) {
        allowedNumber.push(user);
    }

    // controllo raggiungimento possibilita
    if (allowedNumber.length === chance) {
        alert ("Hai vinto!");
    }
}


//the end

console.log("GAME OVER");
console.log("Numeri validi inseriti: " + allowedNumber);
console.log("Tentativi riusciti " + allowedNumber.length);


/*********
* UTILITY *
*********/

//funzione per generare numero random
function randomNumber(max) {
    return Math.floor(Math.random() * max) +1;
}