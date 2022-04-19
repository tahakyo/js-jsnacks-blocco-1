// chiedo all utente due parole in succesione
const firstWord = prompt('inserici una parola')
const secondWord = prompt('inserisci un altra parola')
console.log(firstWord, secondWord);
// il software stampa prima la parola piu corta, poi la parola piu lunga
if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
} else if (firstWord.length < secondWord.length) {
    console.log(firstWord, secondWord);
}