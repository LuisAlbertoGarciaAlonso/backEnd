//version sincrona

const fs = require("fs");

//metodo para crear carpetas un directorio

//fs.mkdirSync("./archivo-sync") //ruta relatica empieza con punto

//leer un archivo
//recibe 2 parametros
//primero la ruta(DONDE ESTA EL ARCHIVO) y la segunda un decodificador(UTF-8 PARA LATINOAMERICA)
try {
  const contenido = fs.readFileSync("./archivo-sync/no_existe.txt", "utf-8");
  console.log(contenido);
} catch (error) {
  console.log(error.mensaje);
}

//para atrapar errores manejo de errores
//try
//catch
//arriba esta usandose
console.log("mas codigo");

try {
  const contenido = fs.readFileSync("./archivo-sync/archivo1.txt", "utf-8");
  console.log(contenido);
} catch (error) {
  console.log(error.mensaje);
}

//METODO PARA ESCRIBIR UN ARCHIVO

try {
  fs.writeFileSync("./archivo-sync/archivoNuevo.txt", "soy archivo nuevo!");
  console.log("archivoNuevo");
} catch (error) {
  console.log(error.mensaje);
}

//agregar contenido a uno existente

try {
  fs.appendFileSync(
    "./archivo-sync/archivoNuevo.txt",
    "soy archivo agregado con append!"
  );
  console.log("archivoNuevo agregado");
} catch (error) {
  console.log(error.mensaje);
}

//eliminar un archivo
//solo un parametro la ruta del archivo
//lo dejo comentado asi no me elimina el archivo

// try {
//   const archivoNuevo = fs.unlinkSync(
//     "./archivo-sync/archivoeliminado.txt"
//   );
//   console.log("archivo eliminado");
// } catch (error) {
//   console.log(error.mensaje);
// }



//leer lo que hay en los archivos
try {
    const contenido = fs.readdirSync("./archivo-sync");
    console.log(contenido);
  } catch (error) {
    console.log(error.mensaje);
  }