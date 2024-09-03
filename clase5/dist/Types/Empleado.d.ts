type Puesto = 'Developer' | 'Project Manjer' | 'Marketing' | 'Design';
declare class Empleado {
    nombre: string;
    sueldo: number;
    fechaContratacion: string;
    puesto: Puesto;
    idEmpleado: number;
    constructor(nombre: string, sueldo: number, fechaContratacion: string, puesto: Puesto, idEmpleado: number);
    aumentar_sueldo(aumento: number): number;
    presentar(): void;
}
declare class Pasante extends Empleado {
    mesesDePrueba: number;
    activo: boolean;
    constructor(nombre: string, sueldo: number, fechaContratacion: string, puesto: Puesto, idEmpleado: number, mesesDePrueba: number);
    finalizar_pasantia(): void;
    presentar(): void;
}
export { Empleado, Puesto, Pasante };
