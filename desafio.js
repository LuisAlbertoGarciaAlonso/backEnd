class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [
      { nombre: "El señor de las moscas", autor: "William Golding" },
      { nombre: "Fundacion", autor: "Isaac Asimov" },
    ];
    this.mascotas = ["perro", "gato"];
  }
  getFullName() {
    console.log(`Mi Nombre es ${this.nombre} ${this.apellido}.`);
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
    console.log(`Mis mascotas son ${this.mascotas}`);
  }
  countMascotas() {
    console.log(`Tengo ${this.mascotas.length} mascotas`);
  }
  addBook(nombre, autor) {
    this.libros.push({nombre:nombre, autor:autor});
  }
  getBookNames() {
    console.log(`Mi Lista de Libros ${usuario1.libros[0].nombre} , ${usuario1.libros[1].nombre} y ${usuario1.libros[2].nombre}.`);
  }
}

const usuario1 = new Usuario("Luis", "Garcia");
usuario1.getFullName();
usuario1.addMascota("perico");
usuario1.countMascotas();
usuario1.addBook("El Tunel","sabato");
usuario1.getBookNames();

