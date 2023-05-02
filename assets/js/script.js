
var checkboxUno = document.querySelector('#checkUno');
var inputEmail = document.querySelector('#txtCorreo');
var botonOk = document.querySelector('#boton');

function validarCampos(checkboxUno, inputEmail) {

    botonOk.addEventListener('click', function () {

        var mensaje = (checkboxUno.checked && inputEmail.value != '')? '¡Felicitaciones! Pronto escucharás de nosotros':'Parece que nos faltó algo...';

        alert(mensaje);       

    });

}

validarCampos(checkboxUno, inputEmail);