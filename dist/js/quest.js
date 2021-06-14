// document.getElementById('');
$(document).ready(function () {
    var lenguaje = sessionStorage.getItem('leng');
    if (lenguaje == 'por') {
        document.getElementById('primera').innerHTML = '1. De onde a convenção foi transmitida?';
        document.getElementById('segunda').innerHTML = '2. Quem foram os apresentadores na conferência de música?';
        document.getElementById('tercera').innerHTML = '3. Quem é o Mensageiro da Era da Pedra Angular?';
        document.getElementById('questionario').innerHTML = 'Questionário';
    }else if (lenguaje == 'eng') {
        document.getElementById('primera').innerHTML = '1. Where was the convention broadcasted from?';
        document.getElementById('segunda').innerHTML = '2. Whom were the presenters during the Music Conference?';
        document.getElementById('tercera').innerHTML = '3. Who is the Messenger of the Age of the Cornerstone?';
        document.getElementById('questionario').innerHTML = 'QUEST';
    }
});

function validar() {

    if (customCheck1.checked || customCheck2.checked || customCheck5.checked || customCheck6.checked || customCheck8.checked || customCheck9.checked) {
        window.location.href = './error-401.html';
    } else if (customCheck3.checked && customCheck4.checked && customCheck7.checked) {
        sessionStorage.setItem('confirmacion', 'si');
        window.location.href = './formulario.html';
    }
}