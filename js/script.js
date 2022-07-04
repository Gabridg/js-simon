console.log('JS OK')
/*
Descrizione:
Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
ATTENZIONE:
prompt() e alert() vengono sempre eseguiti prima del resto del codice nel loro scope, quindi dovete trovare un escamotage per "tenerli a bada" finchè le altre operazioni siano state svolte. 
Siete autorizzate a "imbrogliare" un po' e chiedere all'utente i numeri un pochettino dopo :faccia_leggermente_sorridente: l'importante è far sparire i numeri allo scadere dei 30 secondi!
*/

/*
MILESTONE 1:
creare gli elementi HTML e CSS per visualizzare i 5 numeri casuali.
Generare i numeri tramite JS.
MILESTONE 2:
far partire un timer di 30sec.
chiedere all'utente tramite prompt quali erano i 5 numeri allo scadere dei 30sec.
MILESTONE 3:
vedere se i numeri inseriti dall'utente sono i numeri estratti casualmente.
controllare quali numeri sono stati indovinati e quanti numeri.
*/

// FUNZIONI 
function getRandomNumber(min = 1, max = 100) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
}

// DOM
const numberOne = document.getElementById('number-one');
const numberTwo = document.getElementById('number-two');
const numberThree = document.getElementById('number-three');
const numberFour = document.getElementById('number-four');
const numberFive = document.getElementById('number-five');

// MS 1:
numberOne.innerText = getRandomNumber();
numberTwo.innerText = getRandomNumber();
numberThree.innerText = getRandomNumber();
numberFour.innerText = getRandomNumber();
numberFive.innerText = getRandomNumber();
