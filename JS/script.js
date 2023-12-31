console.log("ciao");

/* Consegna:
Oggi lavorerete a forse uno dei programmi piú noti nel ns settore, FizzBuzz!
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Diamo un'altro sguardo alla lista di operatori disponibili in js https://www.w3schools.com/js/js_operators.asp
e vediamo se uno di questo possa tornare utile magari qualcuno ci fa calcolare la rimanenza di una divizione e questo potrebbe tornare utile...
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */

const containerElement = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FrizzBuzz");
    boxElement.innerText = "FrizzBuzz";
    boxElement.classList.add("box_red");
  } else if (i % 5 === 0) {
    console.log("Buzz");
    boxElement.innerText = "Buzz";
    boxElement.classList.add("box_blue");
  } else if (i % 3 === 0) {
    console.log("Frizz");
    boxElement.innerText = "Frizz";
    boxElement.classList.add("box_yellow");
  } else {
    console.log(i);
    boxElement.innerText = i;
    boxElement.classList.add("box_green");
  }
  containerElement.append(boxElement);
}
