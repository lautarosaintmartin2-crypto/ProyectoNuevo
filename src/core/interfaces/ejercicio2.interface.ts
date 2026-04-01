export interface Vehiculo {
    id : number,
    marca: string,
    modelo: string,
    año: number
}

export interface Coche extends Vehiculo {
    puertas: number
}

export const actualizarPropiedad = <T>(ob: T, key: keyof T, value: T[keyof T] ):T => {
    ob[key] = value
    return ob
}

export type VehiculoResumen = Pick<Vehiculo, 'marca' | 'modelo'>
// const miCoche: Coche = {id: 1, marca: 'Toyota', modelo: 'Corolla', año: 2020, puertas: 4}
// actualizarPropiedad<Coche>(miCoche, "año", 2024)