import { Empleado, Pasante } from "./Types/Empleado.js";
/* hola */
class ManejadorEmpleados {
    constructor(empresa) {
        this.idEmpleados = 0;
        this.empleados = [];
        this.empresa = empresa;
    }
    agregar_empleado(nombre, sueldo, fechaContratacion, puesto) {
        const nuevoEmpleado = new Empleado(nombre, sueldo, fechaContratacion, puesto, this.idEmpleados++);
        this.empleados.push(nuevoEmpleado);
        return this.empleados;
    }
    obtener_empleado_id(id) {
        return this.empleados.find((empleado) => {
            return (empleado.idEmpleado === id);
        });
    }
    obtener_empleado_puesto(puesto) {
        return this.empleados.filter((empleado) => empleado.puesto === puesto);
    }
}
const manejador = new ManejadorEmpleados("UTN");
manejador.agregar_empleado("Facundo", 2000, "01/01/2020", "Developer");
manejador.agregar_empleado("Juan", 2000, "01/01/2020", "Developer");
manejador.agregar_empleado("Emi", 2000, "01/01/2020", "Design");
const facu = manejador.obtener_empleado_id(0);
const developersUtn = manejador.obtener_empleado_puesto("Developer");
console.log(manejador);
console.log(facu);
console.log(developersUtn);
const pasante1 = new Pasante("Pepe", 2000, "01/01/2020", "Developer", 5, 3);
console.log(pasante1);
pasante1.aumentar_sueldo(1000);
console.log(pasante1);
pasante1.finalizar_pasantia();
console.log(pasante1);
pasante1 === null || pasante1 === void 0 ? void 0 : pasante1.presentar();
