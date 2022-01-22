//asignacion de valor por valor
let clase = "Programacion";
let curso = clase;

console.log(clase);
console.log(curso);

clase += "BackEnd";
console.log(clase);
console.log(curso);

//asiganacion de valor por referencia
const staff = ["profe", "tutor 1", "tutor 2"];
const copiaStaff = staff;
console.log(staff);
console.log(copiaStaff);

staff.push("tutor 3");
copiaStaff.push("tutor 4");

console.log("staff:", staff);
console.log("copia staff:", copiaStaff);


//funciones para no repetir codigo

console.log("hola soy Alberto"); //si tuviera que cambiar el nombre
console.log("tengo 28 años");

//le damos parametros a la funcion nombre edad para que cambien segun necesites.
function saludar(nombre, edad) {
    //instrucciones de la funcion
    console.log("Hola soy "+ nombre);
    console.log("tengo "+ edad + " años");
};

saludar("luis", 38); //llamamos la funcion

//funcion anonima


//cuando se le asigna una funcion a una variable y la funcion es anonima

const laFuncion = function(){
    console.log("hola soy anonima");
}
laFuncion();


//invocando inmediatamente fincion anonima
(function () { 
console.log("hola me llamo alberto");
})();


