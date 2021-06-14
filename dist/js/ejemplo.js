function Div2IMG(divID) {
    html2canvas([document.getElementById(divID)], {
        onrendered: function (canvas) {
            var img = canvas.toDataURL('image/jpg'); //o por 'image/jpeg' 
            //display 64bit imag
            // document.write('<img src="' + img + '"/>');
            var link = document.createElement('a');
            link.download = `diploma.jpg`;
            link.href = img;

            link.click();
        }
    });
}

function imprSelec(nombreDiv) {
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
    
    window.print();

    document.body.innerHTML = contenidoOriginal;
}