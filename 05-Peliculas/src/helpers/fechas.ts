
export const invertirFecha = (fecha:string) => {
    const arr = fecha.split('-')
    return `${arr[2]}/${arr[1]}/${arr[0]}`
}