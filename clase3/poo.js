let id_counter = 0;
const crearProducto = (nombre, precio, descripcion) => {
  return {
    nombre: nombre,
    precio: precio,
    descripcion: descripcion,
    id: ++id_counter,
  };
};

/* const producto_1 = crearProducto('pc dell', 300, 'lorem');
const producto_2 = crearProducto('tv dell', 500, 'lorem');
const producto_3 = crearProducto('cell dell', 600, 'lorem'); */

/* console.log(producto_1, producto_2, producto_3)
console.log(id_counter) */

/* Cuando le ponemos la palabra new a una funcion nos retornará un objeto sin necesidad de poner un return */

/* Funcion CONSTRUCTORA */
/* function Producto (nombre, precio, description) {
    this.nombre = nombre
    this.precio = precio
    this.description = description
    this.id = ++id_counter
    this.saludar = () => {
        console.log('Hola ' + this.nombre)
    }
} */

/* Los metodos para crearlos una sola vez y usarlo en Producto lo hacemos asi: */
/* Producto.prototype.despedirse = () => {
    console.log('Chau ' + this.nombre)
} */
/* 
const producto_clase = new Producto('pc dell', 300, 'lorem');
producto_clase.saludar()
producto_clase.despedirse() */

/* CREAR UNA CLASE, así vamos a trabajar */
/* las clases siempre retornan a this que es un objeto */
/* Podemos modificar a this en contexto de clases */

class Personaje {
  /* funcion constructor, se invoca al instanciarse la clase */
  constructor(nombre) {
    this.nombre = nombre;
  }
  /* por abajo del constructor vamos a crear los métodos, al ser un método se crea una solo vez y no cada vez que se instancia la clase */
  comer(comida) {
    console.log(this.nombre + ' come ' + comida);
  }
}

const personaje = new Personaje('Facu');
const personaje1 = new Personaje("Meli");
console.log(personaje, personaje1);
personaje.comer('empanadas');
