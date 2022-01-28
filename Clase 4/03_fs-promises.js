const fs = require("fs");
console.log("inicio de programa");


//then catch

fs.promises.mkdir("./archivos-promises")
.then(()=>console.log("directorio creado"))
.catch((error)=>console.log(error.mensaje));

fs.promises.readFile("./archivos-promises/archivo1.txt", "utf-8")
.then((contenido)=>console.log(contenido))
.catch((error)=> console.log(error.mensaje));

//async await   solo para promesas
//syntax sugar

const leerArchivo = async() =>{
    try{
    const contenido = await fs.promises.readFile("./archivos-promises/archivo2.txt", "utf-8");
    console.log(contenido);
    }catch(error){
        console.log(error.mensaje);
    }
}

const renombrarArchivo = async() =>{
    try{
    await fs.promises.rename("./archivos-promises/archivo2.txt", "./archivos-promises/archivoRenombrado.txt");
    console.log("archivo renombrado");
    }catch(error){
        console.log(error.mensaje);
    }
}





leerArchivo();
renombrarArchivo();

console.log("fin del programa");

