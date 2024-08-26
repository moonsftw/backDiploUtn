/* let nombre : string = "Facu";


const saludar = (nombre? : string, edad : number = 10) : string => {
    if (nombre) {
        return `Hola ${nombre}, tu edad es ${edad}, es correcto?`;
    }
    return `Hola, tu edad es ${edad} y no sé tu nombre`
}
console.log(saludar('Facu',30));
 */

/* calcular iva que recibe un número y devuelve */

/* const calcularIva = (precio : number) : number => {
    return precio * 0.21
}
interface DetalleImpuesto {
    iva: number,
    total: number,
    base: number,
} */
/* const obtenerImpuestoIva = (precio : number) : DetalleImpuesto => {
 
    const objetoIva : DetalleImpuesto = {
        iva: calcularIva(precio),
        total: precio + calcularIva(precio),
        base: precio,
    }
    return objetoIva
} */

/* interface Personaje {
    nombre: string,
    edad: number,
    ciudadOrigen: string,
    vida: number,
    armadura: number,
    ataque: number,
    defensa: number
} */

/* const crearPersonaje = (nombre: string, edad: number, ciudad: string) : Personaje => {
    return {
        nombre: nombre,
        edad: edad,
        ciudadOrigen: ciudad,
        vida: 100,
        armadura: 0,
        ataque: 0,
        defensa:0
    }
    
} */

/* console.log(crearPersonaje('Batman', 10, 'san carlos')) */

/* interface Producto {
    nombre: string,
    id: number,
    precio: number,
    descripcion: string,
    title: string,
}

const producto_1 : Producto = {
    nombre: 'tv LG',
    id: 1,
    precio: 10,
    descripcion: 'lorem',
    title: 'Si'
}

const lista_productos : Producto[] = [
    producto_1,
    {
        nombre: 'tv noblex',
        id: 2,
        precio: 20,
        descripcion: 'lorem',
        title: 'La mejor'
    },
    {
        nombre: 'tv LG',
        id: 3,
        precio: 41,
        descripcion: 'lorem',
        title: 'Si'
    },
    {
        nombre: 'tv LG mas caro',
        id: 4,
        precio: 50,
        descripcion: 'lorem',
        title: 'Si'
    }
] */

/* const esMenor40 : boolean[] = lista_productos.map((producto : Producto) : boolean => producto.precio < 40)
console.log(esMenor40) */

/* POO en typescript */

class Personaje {
    nombre : string
    constructor (nombre : string) {
        this.nombre = nombre
    }
    saludar () : void {
        console.log('Hola ' + this.nombre)
    }
    comer(comida : string) : string {
        return this.nombre + ' come ' + comida
    }
}

const personaje_principal : Personaje = new Personaje('pepe')
let mensaje : string = personaje_principal.comer('carne')
/* document.write(mensaje) */

let id_counter = 0;
class Producto{
    nombre: string
    precio: number
    constructor(nombre: string, precio: number){
        this.nombre = nombre
        this.precio = precio
    }
}
class ManejadorProductos{
    productos : Producto[]
    id: number
    constructor() {
        this.productos = []
        this.id = id_counter++
    }
    agregarProducto (producto : Producto) : Producto[] {
        this.productos.push(producto)
        return this.productos
    }
}

const manejadorProductos : ManejadorProductos = new ManejadorProductos()
const producto_1 : Producto = new Producto('tv LG',10)
manejadorProductos.agregarProducto(producto_1)
console.log(manejadorProductos)