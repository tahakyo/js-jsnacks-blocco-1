// creo un array vuota
const numberList = [];
// Chiedo per 6 volte un numero all utente
for (let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt('inserici un numero'));
    console.log(userNumber);
    // se il numero inserito è dispari lo inserisco nell'array
    if (userNumber % 2 === 1) {
        numberList.push(userNumber);
    }
}

console.log(numberList);
