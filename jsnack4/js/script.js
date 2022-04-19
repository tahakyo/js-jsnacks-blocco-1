// chiedo un numero di 4 ciffre all'utente

let userNumber = prompt('inserisci un numero composto di quattro ciffre');
console.log(userNumber);

// uso lo split per separare i numeri inseriti dall'utente
const splitNumber = userNumber.split("");
console.log(splitNumber);

// calcolo la somma delle ciffre inserite dall utente
let sum = 0;
for (let i = 0; i < splitNumber.length; i++) {
    sum += parseInt(splitNumber[i]);
}
console.log(sum);