/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

let arrayNumeriRandom = []

console.log(arrayNumeriRandom)

let arrayNumeriUtente = []

console.log(arrayNumeriUtente)


const tempoSpan = setTimeout(scomparsaSpan, 5000)

const tempoPrompt = setTimeout(comparsaPrompt, 6000)

const div = document.getElementById("numeriTemporanei")

let span = document.createElement("span")

span.innerText = `Memorizza i seguenti numeri ${arrayNumeriRandom} hai 5 secondi!`

div.append(span)



function generatoriNumeri(){

    for(i = 0; i < 5; i++){

       let numero = Math.floor(Math.random() * 100) + 1

       arrayNumeriRandom.push(numero)
    }
}

generatoriNumeri()


function scomparsaSpan(){

    span.classList.add("d-none")

}


function comparsaPrompt(){

    for(i = 0; i < 5; i++){

        let numeriUtente = parseInt(prompt(`Scrivi uno dei numeri memorizzati!`))

        arrayNumeriUtente.push(numeriUtente)

    } 
}

function verificaRisultato(){
    
}
 

