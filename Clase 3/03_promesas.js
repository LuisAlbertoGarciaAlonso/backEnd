// promeas son objetos!!!

//permite ejecutar acciones difetentes

// - 3status:    pending    fulfilled   rejected
// - results:    undefined  dato        error
// - then: metodo par obtener el result de una promesa

//en promesas 2 callback una para el error y otra para el exito

/*ejemplo de promesa
comida rapida
    -pido hambuergesa  ----> ticket 50 (promesa "pending")

        -esta lista la hambuguesa -----> (promesa fulfilled) --> valo hamburguesa
        o
        -no pudimos hacer la hambueguesa ----> (promesa reject) ---> valor no hay mas pan
*/

//ejemplo de promesa en codigo


//declaramos promesa
const miPromesa = new Promise((resolve, reject)=>{
    let exito = true;
    if(exito){
        resolve("se resolvio")
    }else{
        reject("se produjo un error")
    }
});

miPromesa.then(
    (dato)=>console.log(dato),
    (error)=>console.log(error),
);

miPromesa
.then(dato => console.log(dato))
.catch(error => console.log(error));

miPromesa.finally()


hamburguesaPromesa = new Promise((resolve, reject)=>{
    let hayPan=true;
    if(hayPan){
        resolve("hay hamburguesa")
    }else{
        reject("no hay pan")
    }
});

hamburguesaPromesa
.then(valor=>{
    console.log(`me voy a comer ${valor}`);
})
.catch(error=>{
    console.log(`hubo un problema ${error}`);
});


//encadenamiento de promesas!!!!

