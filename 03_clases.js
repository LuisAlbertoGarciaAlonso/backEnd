// const carro = {
//     marca: "nissan",
//     modelo:"versa",
//     año: 2019,
//     arrnacar:function(){
//         console.log("el carro se prendio");
//     }
// };




                    //CLASESSS
                    //synthax sugar
//plantilla para objtos en js, 

//los nombres de clases van la primera en mayuscula
class Persona {
    //colocar metodo constructor

    constructor(nombre, edad){ //se le pasa parametros para usarlo libremente o cvvarias veces que quieras, dentro de los parentesis se le puede poner un objeto tambien
        console.log("una persona esta siendo creada");
        this.nombre= nombre; // se lo vinvula a los parametros que estan puestos arriba
        this.edad= edad;
    };
    saludar(){
        //este es otro metodo dentro de la class
        console.log("hola soy " + this.nombre);
    };
};


//agregar con metordo new para agregar uno nuevo
const persona1 = new Persona("alberto", 52);
const persona2 = new Persona("alb", 254);
console.log(persona1);
console.log(persona2);
persona1.saludar();//llamo al metodo que esta dentro de la clase
persona2.saludar()



class Auto{
    static marcasDisponibles = ["nissan", "fiat", "VW"];//
    constructor(marca, modelo, color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    };
    

    arrancar(){
        console.log("el auto " + this.marca + " acaba de encender");
    };
    detener(){
        console.log("el auto " + this.marca + "acaba de frenar");
    };
};

const miCarro =new Auto ("nissan", "sentra", "naranja");
const miCarro1 =new Auto ("fiat", "palio", "verde");

console.log(miCarro)
miCarro.arrancar()



