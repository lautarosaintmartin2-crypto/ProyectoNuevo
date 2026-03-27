export enum Categoria
    {
        ALIMENTOS = 'Alimentos',
        ROPA = 'Ropa',
        ELECTRONICA = 'Electrónica'
    }

export type Producto = 
    {
        nombre: string,
        precio: number,
        categoria: Categoria
    }