/*
Visualizzare in pagina 5 numeri casuali (tutti differenti). Da lì parte un timer di 5 secondi.
Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente(tramite il prompt() o traminte input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


1 definisco un array vuoto numeriCasuali nel quale memorizzo i numeri casuali

2 Creo  una funzione generaNumeroCasuale che genera numeri all' interno di due estremi min e max

3 creo una funzione chiamata  generaNumeriCasuali che genera 5 numeri casuali diversi tra 1 e 10 e li memorizza nell'array 
numeriCasuali

4 con una funzione visualizzaNumeri mostro sulla pagina i numeri casuali generati dall'utente.


5 con la  funzione fadeOutNumeri  faccio  scomparire gradualmente i numeri dalla pagina utilizzando le timing function

6 con la  funzione gioca  viene chiesto all;utente di inserire in pagina i numeri precedenetemente usciti  


 7 infine con la funzione resetGioco riporta  il gioco allo stato iniziale, crea nuovi numeri casuali, rende utilizzabile  il pulsante "Inizia il gioco" e fa ricomparire i numeri
*/


let numeriCasuali = [];


function generaNumeroCasuale (min , max) {
return Math.floor (Math.random () * (max - min +1) + min  );
}

function generaNumeriCasuali (){
  numeriCasuali = [];
  
  while (numeriCasuali.length <5){
    let numero = generaNumeroCasuale (1, 10);
    if (!numeriCasuali.includes (numero)){
      numeriCasuali.push(numero);

 }

  }

}

// faccio comparire i numeri casuali

function visualizzaNumeri () {

  
}