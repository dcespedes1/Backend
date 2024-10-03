import { Estudiante, Address } from "./tipos"

 const mostrarEstudiante = (estudiante : Estudiante)=>{
    //informaciond del estudiante
    console.log(`Nombre: ${estudiante.nombre}`)
    console.log(`Apellido: ${estudiante.apellido}`)
    console.log(`Edad: ${estudiante.edad || `No definido`}`)
    console.log("--Direccion--")
    estudiante.addresses?.forEach((direccion:Address)=>{
        console.log(`Calle ${direccion.street}`)
        console.log(`Numero ${direccion.numero}`)
        console.log(`Ciudad ${direccion.cyty}`)
        console.log("----------------")
    })
}
export default mostrarEstudiante;