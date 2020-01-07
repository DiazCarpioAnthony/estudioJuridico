export interface Publicaciones  extends Array<Publicacion>{
    id_publicacion?: number;
    title?: string;
    description?: string;
    image?: string;
    fecha?: Date;
    resumen?: string;
    id_categoria?: number;
    nombre_categoria?: string;
    descripcion?: string;
    icono?: string;
    id_keyword?: number;
    nombre_keyword?: string;
    img?: any;
}
export interface Publicacion {
    id_publicacion?: number;
    title?: string;
    description?: string;
    image?: string;
    fecha?: Date;
    resumen?: string;
    id_categoria?: number;
    nombre_categoria?: string;
    descripcion?: string;
    icono?: string;
    id_keyword?: number;
    nombre_keyword?: string;
}