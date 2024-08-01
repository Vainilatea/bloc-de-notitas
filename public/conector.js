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
};

function logueaNotas() {
    listaDeNotas = getNotesValues()
    for (i in listaDeNotas) {
        console.log(listaDeNotas[i])
    }
}


function showCustomer(str) {
    // if (str == "") {
    //   document.getElementById("txtHint").innerHTML = "";
    //   return;
    // }
    
    // xhttp.onload = function() {
    //   document.getElementById("txtHint").innerHTML = this.responseText;
    // }

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "guardar-nota?q=" + str);
    xhttp.send();
}


function postAjax(url, data, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map((k) => {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&');

    var xhr = new window.XMLHttpRequest();
    xhr.open('POST', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200) {
            success(xhr.responseText);
        }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    
    return xhr;
}

function onPostSuccess(response) { 
    console.log(response)
}

postAjax('/guardar-nota', {nota: "deadpool & Perry Poppins"}, onPostSuccess)