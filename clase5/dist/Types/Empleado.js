class Empleado {
    constructor(nombre, sueldo, fechaContratacion, puesto, idEmpleado) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fechaContratacion = fechaContratacion;
        this.puesto = puesto;
        this.idEmpleado = idEmpleado;
    }
    aumentar_sueldo(aumento) {
        return this.sueldo += aumento;
    }
    presentar() {
        alert(`Hola me llamo ${this.nombre}, y trabajo como ${this.puesto}`);
    }
}
class Pasante extends Empleado {
    constructor(nombre, sueldo, fechaContratacion, puesto, idEmpleado, mesesDePrueba) {
        super(nombre, sueldo, fechaContratacion, puesto, idEmpleado);
        this.mesesDePrueba = mesesDePrueba;
        this.activo = true;
    }
    finalizar_pasantia() {
        this.activo = false;
    }
    presentar() {
        alert(`Hola soy pasante de ${this.puesto} y me llamo ${this.nombre}`);
    }
}
export { Empleado, Pasante };
