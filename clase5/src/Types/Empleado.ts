type Puesto = 'Developer' | 'Project Manjer' | 'Marketing' | 'Design';

class Empleado {
    nombre: string;
    sueldo: number;
    fechaContratacion: string;
    puesto: Puesto;
    idEmpleado: number;
    constructor(
        nombre: string, 
        sueldo: number, 
        fechaContratacion: string, 
        puesto: Puesto, 
        idEmpleado: number
    ) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fechaContratacion = fechaContratacion;
        this.puesto = puesto;
        this.idEmpleado = idEmpleado;
    }
    aumentar_sueldo(aumento: number) : number {
        return this.sueldo += aumento
    }
    presentar() : void{
        alert(`Hola me llamo ${this.nombre}, y trabajo como ${this.puesto}`)
    }
}

class Pasante extends Empleado {
    mesesDePrueba: number
    activo : boolean
    constructor(
        nombre: string, 
        sueldo: number, 
        fechaContratacion: string, 
        puesto: Puesto, 
        idEmpleado: number,
        mesesDePrueba: number
    ) {
       super(nombre, sueldo, fechaContratacion, puesto, idEmpleado)
       this.mesesDePrueba = mesesDePrueba;
       this.activo = true;
    }

    finalizar_pasantia() : void {
        this.activo = false;
    }
    presentar() : void {
        alert(`Hola soy pasante de ${this.puesto} y me llamo ${this.nombre}`)
    }
}

export { Empleado, Puesto, Pasante };