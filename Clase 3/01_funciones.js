//funcion comun
function miFuncion(){
    console.log("saludos desde la funcion");
};
miFuncion();

//funcion flecha
const miFuncionFlecha = () => {//si esta todo en una sola linea de pueden omitir las llaves.
    console.log("saludos desde la funcion flecha");
}
//ejemplo en una sola linea  const miFuncionFlecha = () => console.log("saludos desde la funcion flecha");

const sumar = (n1, n2) => {
    return n1 + n2 
}

const saludarConNombre = (nombre) => console.log(`${nombre}`);
const saludarCon = apellido => console.log(`${apellido}`);
const saludarConTodo = (nombre, apellido) => console.log(`${nombre} y ${apellido}`);

miFuncionFlecha();
console.log(sumar(5, 5));
saludarConNombre("luis");
saludarCon("gar");
saludarConTodo("albert","Alonso");

//callbacks
//una funcion dentro de otra funcion
//una de las formas de manejar los procesos asincronos
