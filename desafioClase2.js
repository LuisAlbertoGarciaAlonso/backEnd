class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }
  getFullName() {
    return(`Mi Nombre es ${this.nombre} ${this.apellido}.`);
  }
  addMascota(mascota) {
    this.mascotas.push([mascota]);
    return `Mis mascotas son: ${this.mascotas}`;
  }
  countMascotas() {
   return `Tengo ${this.mascotas.length} mascotas`;
  }
  addBook(nombre, autor) {
    this.libros.push({nombre, autor});
  }
  getBookNames() {
    return this.libros.map(libro => libro.nombre)
  }
}

const usuario1 = new Usuario("Luis", "Garcia");
console.log(usuario1.getFullName());
usuario1.addMascota("perico");
usuario1.addMascota("perro");
console.log(usuario1.addMascota());
 console.log(usuario1.countMascotas());
usuario1.addBook("El Tunel","sabato");
usuario1.addBook("El señor de las moscas", "William Golding");
usuario1.addBook("Fundacion", "Isaac Asimov");
console.log(usuario1.getBookNames());
