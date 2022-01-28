const fs = require("fs");

//recibe un callback
fs.mkdir("./archivos-callbacks", (error)=>{
    if(error){
        console.log(error.message);
    }else{
        console.log("directorio creado");
    }
});

//leer un archivo con callbacks que recibe 2 parametros error y contenido
fs.readFile("./archivos-callbacks/archivo1.txt","utf-8",(error ,contenido)=>{
    if(error){
        console.log(error.message);
    }else{
        console.log(contenido);
    }
});

//escribir u archivo
fs.writeFile("./archivos-callbacks/archivo_nuevo_callback.txt","archivo nuevo con callback",(error)=>{
    if(error){
        console.log(error.message);
    }else{
        console.log("se creo archivo");
    }
})


//agregar al archivo
fs.writeFile("./archivos-callbacks/archivo_nuevo_callback.txt","archivo nuevo con callback,archivo actualizado",(error)=>{
    if(error){
        console.log(error.message);
    }else{
        console.log("se creo archivo actualizado");
    }
})






console.log("mas codigo");