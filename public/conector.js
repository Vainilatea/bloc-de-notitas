console.log("CONECTOR ja AQUIII")

function getNotesValues() { 
    var listaDeNotas = []
    const notes = document.getElementsByClassName("note__content");
    for (i in notes) {
        if (notes[i].value && typeof notes[i].value == 'string') {
            listaDeNotas.push(notes[i].value)
        }
    }

    return listaDeNotas
}

function logueaNotas() {
    listaDeNotas = getNotesValues()
    for (i in listaDeNotas) {
        console.log(listaDeNotas[i])
    }
}
