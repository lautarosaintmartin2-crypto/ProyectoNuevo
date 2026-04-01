import{Categoria, type Producto} from "../../core/interfaces/ejercicio1.interface.ts";

export const obtenerPrecioFinal = (p: Producto): number => 
{
    let precioFinal = p.precio

    try{
        if(p.precio < 0) throw new Error(`El precio de ${p.nombre} no puede ser 0`);
        
        if(p.precio > 1000){
            precioFinal = p.precio * 0.90
        }
    }catch(error: any) {}
    
    return precioFinal
}

export const nota = (p: Producto): string | null => 
{
    if(p.categoria === Categoria.ALIMENTOS)
        {
            return 'Este producto es perecedero'
        }else
            return 'No tiene nota'

}

export const inventario: Producto[] =
[
    {nombre: 'Manzana', precio: 1500, categoria: Categoria.ALIMENTOS},
    {nombre: 'Laptop', precio: 10000, categoria: Categoria.ELECTRONICA},
    {nombre: 'Remera', precio: -20, categoria: Categoria.ROPA},
    {nombre: 'Mouse', precio: 15000, categoria: Categoria.ELECTRONICA},
    {nombre: 'Pantalon', precio: 4500, categoria: Categoria.ROPA}
];