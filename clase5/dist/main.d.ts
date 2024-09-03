declare class Accion {
    idAccion: number;
    description: string;
    fecha: string;
    constructor(idAccion: number, description: string, fecha: string);
}
declare class Historial {
    acciones: Accion[];
    constructor();
    agregar_accion(idAccion: number, description: string, fecha: string): Accion[];
    eliminar_accion_por_id(idAccion: number): void;
    eliminar_todo(): void;
    mostrar_historial(): void;
}
declare const historial: Historial;
