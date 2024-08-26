
import { Empleado, Puesto, Pasante } from "./Types/Empleado"
/* hola */

class ManejadorEmpleados {
    idEmpleados: number;
    empleados: Empleado[]
    empresa: string;

    constructor(empresa: string){
        this.idEmpleados = 0;
        this.empleados = [];
        this.empresa = empresa;
    }

    agregar_empleado(
        nombre: string, 
        sueldo: number, 
        fechaContratacion: string, 
        puesto: Puesto,
    ) : Empleado[] {
        const nuevoEmpleado : Empleado = new Empleado(nombre, sueldo, fechaContratacion, puesto, this.idEmpleados++);
        this.empleados.push(nuevoEmpleado);
        return this.empleados;
    }
    obtener_empleado_id(id: number) : Empleado | undefined {
        return this.empleados.find((empleado : Empleado) : boolean => {
            return (empleado.idEmpleado === id)
        })
    }
    obtener_empleado_puesto(puesto : Puesto) : Empleado[]{
        return this.empleados.filter((empleado : Empleado) => empleado.puesto === puesto)
    }
}

const manejador : ManejadorEmpleados = new ManejadorEmpleados("UTN");
manejador.agregar_empleado("Facundo", 2000, "01/01/2020", "Developer");
manejador.agregar_empleado("Juan", 2000, "01/01/2020", "Developer");
manejador.agregar_empleado("Emi", 2000, "01/01/2020", "Design");

const facu : Empleado | undefined = manejador.obtener_empleado_id(0);
const developersUtn : Empleado[] = manejador.obtener_empleado_puesto("Developer");
console.log(manejador)

console.log(facu)
console.log(developersUtn)

const pasante1 = new Pasante("Pepe", 2000, "01/01/2020", "Developer", 5, 3);
console.log(pasante1)
pasante1.aumentar_sueldo(1000);
console.log(pasante1)
pasante1.finalizar_pasantia();
console.log(pasante1)
pasante1?.presentar()