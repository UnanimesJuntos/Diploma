$(document).ready(function () {

});

function ok() {
    var lenguaje = document.getElementById('idioma').value;
    if(lenguaje != ''){
        sessionStorage.setItem('leng', lenguaje);
        window.location.href = './questionario.html';
    }
}