const miaTabella = document.createElement('div');
miaTabella.classList.add('d-flex', 'flex-wrap', 'justify-content-center');

for (let i = 1; i <= 100; i++){
    let griglia = document.createElement('div');
    if (i % 3 == Number.isSafeInteger(true) && i % 5 == Number.isSafeInteger(true)){
        griglia.classList.add('cella', 'bg-info', 'fw-bold');
        griglia.append('FizzBuzz ');
        const contatore = document.createElement('div');
        contatore.classList.add('contatore');
        griglia.append(contatore);
        contatore.append(i)
    } else if (i % 3 == Number.isSafeInteger(true)){
        griglia.classList.add('cella', 'bg-warning', 'fw-bold');
        griglia.append('Fizz ');
        const contatore = document.createElement('div');
        contatore.classList.add('contatore');
        griglia.append(contatore);
        contatore.append(i)
    } else if (i % 5 == Number.isSafeInteger(true)){
        griglia.classList.add('cella', 'bg-secondary', 'fw-bold');
        griglia.append('Buzz ');
        const contatore = document.createElement('div');
        contatore.classList.add('contatore');
        griglia.append(contatore);
        contatore.append(i)
    } else {
        griglia.classList.add('cella');
        griglia.append('' + i);
    }
    miaTabella.append(griglia);
}

const mioDiv = document.querySelector('div.wrapper');
mioDiv.append(miaTabella);




// const miaTabella = document.createElement('table');

// for (let i = 1; i <= 100; i++){
//     // creo una riga per ogni ciclo
//     let riga = document.createElement('tr');
//     // verifico i Fizz, Buzz e FizzBuzz
//     if (i % 3 == Number.isSafeInteger(true) && i % 5 == Number.isSafeInteger(true)){
//         // creo una cella
//         let cella = document.createElement('td');
//         // inserisco contenuto nella cella
//         cella.append('FizzBuzz - ' + i);
//         // appendo la cella alla riga
//         riga.append(cella);
//     } else if (i % 3 == Number.isSafeInteger(true)){
//         // creo una cella
//         let cella = document.createElement('td');
//         // inserisco contenuto nella cella
//         cella.append('Fizz - ' + i);
//         // appendo la cella alla riga
//         riga.append(cella);
//     } else if (i % 5 == Number.isSafeInteger(true)){
//         // creo una cella
//         let cella = document.createElement('td');
//         // inserisco contenuto nella cella
//         cella.append('Buzz - ' + i);
//         // appendo la cella alla riga
//         riga.append(cella);
//     } else {
//         // creo una cella
//         let cella = document.createElement('td');
//         // inserisco contenuto nella cella
//         cella.append('Cella n.' + i);
//         // appendo la cella alla riga
//         riga.append(cella);
//     }
//     miaTabella.append(riga);
// }

// const miodiv = document.querySelector('div.wrapper');
// miodiv.append(miaTabella);