class Accion{
    idAccion : number
    description : string
    fecha : string
    constructor (idAccion : number, description : string, fecha : string){
        this.idAccion = idAccion
        this.description = description
        this.fecha = fecha
    }
}

class Historial {
    idAcciones : number;
    acciones : Accion[]
    constructor(){
        this.acciones = [];
        this.idAcciones = 0;
    }
    agregar_accion(idAccion : number, description : string, fecha : string) : Accion[] {
        const nuevaAccion : Accion = new Accion(this.idAcciones++, description, fecha)
        this.acciones.push(nuevaAccion)
        return this.acciones;
    
    }
    eliminar_accion_por_id(idAccion : number) : Accion [] | undefined{
        return this.acciones.filter((accion) => accion.idAccion !== idAccion)
    }
    eliminar_todo() : void {
        this.acciones = []
        
    }
    mostrar_historial() : void {
        console.log(this.acciones)
    } 
}