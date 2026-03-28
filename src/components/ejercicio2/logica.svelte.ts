export const actualizarPropiedad = <T>(ob: T, key: keyof T, value: T[keyof T] ):T => {
    ob[key] = value
    return ob
}