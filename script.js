(function() {
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    var validarNombre = function(e) {
        if (formulario.name.value == 0) {
            alert("Please write your name");
            e.preventDefault();
        }
    };


    var validar = function(e) {
        validarNombre(e);


    };
    formulario.addEventListener('submit', validar);

}())