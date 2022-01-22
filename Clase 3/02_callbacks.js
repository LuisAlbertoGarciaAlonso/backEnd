const miFuncion1=()=> console.log("f1");
const miFuncion2=()=> console.log("f2");
miFuncion1()
miFuncion2()




const imprimir = (mensaje)=>console.log(mensaje);

const sumar = (n1, n2, callback) => {
    let res = n1 + n2;
    callback(res);
}
sumar(5,3,imprimir)


sumar(10, 10, function(dato){
    console.log("soy un callback");
    console.log(dato);
})

//callback recibe 2 parametros!!!
//primer parametro para un error y el segundo al dato si todo esta oka!!!


//callback(error, dato)
const getDuplicate= (num, callback) => {
    let success = Math.floor(Math.random()*2);
    if (success){
        const result = num * 2;
        callback(null, result)
    }else {
        callback("hubo un error inesperado")
    }
};

const imprimirDuplicado = (error, dato) => {
    if(error){
        throw new Error(error);
    }
    console.log(`tu numero duplicado es ${dato}`);
}

getDuplicate(10, imprimirDuplicado)
