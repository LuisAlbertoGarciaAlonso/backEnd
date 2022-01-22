function crearGritarNombres(nombre){
    const signosDeExclamacion= " !!!!";
    return function(){
        console.log(nombre+signosDeExclamacion);
    }
};

const gritarCH = crearGritarNombres("alberto");
gritarCH();

//funcion que retorna otra funcion, funcion que genera otra funcion.

