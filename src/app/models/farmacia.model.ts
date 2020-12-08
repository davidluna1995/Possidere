// Modelo de farmacia creado en base las respuestas que entrega la api
export class Farmacia{
    constructor(
        public comuna_nombre: string,
        public fecha: Date,
        public fk_comuna: number,
        public fk_region: number,
        public funcionamiento_dia: string,
        public funcionamiento_hora_apertura: string,
        public funcionamiento_hora_cierre: string,
        public local_direccion: string,
        public local_id: number,
        public local_lat: number,
        public local_lng: number,
        public local_nombre: string,
        public local_telefono: string,
        public localidad_nombre: string
    ){}
}