//settimeout
// setTimeout(()=>console.log("holassss"), 1000);


const miFuncion = () => console.log("funcion asincrona saludo asincrona 1 de 3 seg");
setTimeout(miFuncion, 3000);//proceso no bloqueante de naturaleza asincrona
setTimeout(()=>console.log("saludo asincrono 2 de 5 seg"),5000);
setTimeout(()=>console.log("saludo asincrono 3 de 1 seg"),1000);
console.log("inicio programa");
console.log("fin del programa");


//setInterval
//repite la callback por siempre un bucle hasta que llames un metodo que lo apaga



let reloj = () =>{
    let fecha=new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
setInterval(reloj, 1000);

//finalizar un intervalo 

clearInterval()