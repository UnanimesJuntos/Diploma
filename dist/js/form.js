$(document).ready(function () {

    var lenguaje = sessionStorage.getItem('leng');
    if (lenguaje == 'por') {
        document.getElementById('imagen').src = "./assets/img/Convencion/portugues.jpg"
        document.getElementById('texto-foto').innerHTML = 'Fotografia';
        document.getElementById('advertencia-foto').innerHTML = 'Faça upload de uma imagem JPG ou PNG <br> Quadrado, Instagram tipo 1: 1';
        document.getElementById('datos-usuario').innerHTML = '';
        document.getElementById('nombre-usuario').innerHTML = '<a class="text-danger">*</a> Nome do usuário';
        document.getElementById('apellido-usuario').innerHTML = '<a class="text-danger">*</a> Sobrenome do usuário';
        document.getElementById('genero-usuario').innerHTML = 'Gênero (Opcional)';
        document.getElementById('mujer').innerHTML = 'Mulher';
        document.getElementById('hombre').innerHTML = 'Homem';
        document.getElementById('pais-usuario').innerHTML = '<a class="text-danger">*</a> País';
        document.getElementById('ciudad-usuario').innerHTML = '<a class="text-danger">*</a> Cidade';
        document.getElementById('congregacion-usuario').innerHTML = '<a class="text-danger">*</a> Nome da Congregação';
        document.getElementById('pastor-usuario').innerHTML = 'Nome do pastor';
        document.getElementById('boton').innerHTML = 'Gerar Diploma';
    }else if (lenguaje == 'eng') {
        document.getElementById('imagen').src = "./assets/img/Convencion/ingles.jpg"
        document.getElementById('texto-foto').innerHTML = 'Photography';
        document.getElementById('advertencia-foto').innerHTML = 'Upload a JPG or PNG image <br> Square, Instagram type 1: 1';
        document.getElementById('datos-usuario').innerHTML = 'User data';
        document.getElementById('nombre-usuario').innerHTML = '<a class="text-danger">*</a> User names';
        document.getElementById('apellido-usuario').innerHTML = '<a class="text-danger">*</a> Surnames';
        document.getElementById('genero-usuario').innerHTML = 'Gender (Optional)';
        document.getElementById('mujer').innerHTML = 'Woman';
        document.getElementById('hombre').innerHTML = 'Man';
        document.getElementById('pais-usuario').innerHTML = '<a class="text-danger">*</a> Country';
        document.getElementById('ciudad-usuario').innerHTML = '<a class="text-danger">*</a> Town';
        document.getElementById('congregacion-usuario').innerHTML = '<a class="text-danger">*</a> Name of your congregation';
        document.getElementById('pastor-usuario').innerHTML = 'Name of your Pastor (Optional)';
        document.getElementById('boton').innerHTML = 'Generate Diploma';
    }

    var validacion = sessionStorage.getItem('confirmacion');

    if (validacion == 'si') {
        
    }else{
        window.location.href = './error-401.html';
    }

    document.getElementById("foto").src = "./assets/img/Convencion/blanco.jpg";
});

window.addEventListener('load', init, false);

function init() {
    var inputFile = document.getElementById('inputFile1');
    inputFile.addEventListener('change', mostrarImagen, false);
}

function mostrarImagen(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = document.getElementById('img1');
        img.src = event.target.result;

        var img2 = document.getElementById('foto');
        img2.src = event.target.result;
        sessionStorage.setItem('foto', 'verdad');
    }
    reader.readAsDataURL(file);
}


function guardar(nombreDiv) {
    var nombre_usuario = document.getElementById('nombre_usuario').value;
    var apellido_usuario = document.getElementById('apellido_usuario').value;
    var pais = document.getElementById('pais').value;
    var ciudad = document.getElementById('ciudad').value;
    var congregacion = document.getElementById('congregación').value;
    if (nombre_usuario == '') {
        Swal.fire(
            'Nombre Inválido',
            'No has escrito tu nombre aún',
            'warning'
        );
    } else if (apellido_usuario == '') {
        Swal.fire(
            'Apellido Inválido',
            'No has escrito tu apellido aún',
            'warning'
        );
    } else if (pais == '') {
        Swal.fire(
            'País Inválido',
            'No has escrito tu país aún',
            'warning'
        );
    } else if (ciudad == '') {
        Swal.fire(
            'Ciudad Inválida',
            'No has escrito tu ciudad aún',
            'warning'
        );
    } else if (congregacion == '') {
        Swal.fire(
            'Congregacion Inválida',
            'No has escrito el nombre de tu congregacion aún',
            'warning'
        );
    } else {
        document.getElementById('nombre').innerHTML = nombre_usuario + ' ' + apellido_usuario;
        document.getElementById('iglesia').innerHTML = congregacion;
        document.getElementById('lugar').innerHTML = ciudad + ', ' + pais + '.';

        var contenido = document.getElementById(nombreDiv).innerHTML;
        var contenidoOriginal = document.body.innerHTML;

        document.body.innerHTML = contenido;

        var css = '@page { size: landscape; }',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        style.media = 'print';

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }


        head.appendChild(style);

        setTimeout(() => {
            print(document);
        }, 100);
    }
}

function imprSelec(nombreDiv) {
}