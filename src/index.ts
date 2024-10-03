import  mostrarEstudiante  from "./mostrarEstudiante";
import { Estudiante, Address } from "./tipos";

//definir variables del tipo dado
const e1: Estudiante={
    nombre: "Daniel",
    apellido:"cespedes",
    addresses: [{
        street:"siempre viva",
        numero:42,
        cyty:"bogota"},
        {
            street:"F",
            numero:12,
            cyty:"ibagué"
        }
]
}
const e2: Estudiante={
    nombre: "eduar",
    apellido:"quintero",
    addresses: [{
        street:"L",
        numero:15,
        cyty:"cucuta"},
        {
            street:"m",
            numero:11,
            cyty:"ibagué"
        },
        {
            street:"o",
            numero:11,
            cyty:"maracaibo"
        }
]
}

//crear arreglo para almacenae estudiante:
let arregloEstudiantes: (number | string | Estudiante)[] = []


//agregar elementos :
arregloEstudiantes.push(2);
arregloEstudiantes.push("carlos")
arregloEstudiantes.push("jorge")
const addEstudiante = (e: Estudiante)=>{
arregloEstudiantes.push(e)
}
console.log(addEstudiante)

//metodo par añadir estudiante al principio del arreglo
const addEstudiantePrincipio = (e:Estudiante)=>{
    arregloEstudiantes.unshift(e)
}
addEstudiante(e1)
addEstudiante(e2)
//recorrer el arregloEstudiante mostrando solo los estudiantes
arregloEstudiantes.forEach((elemento)=>{
    if( typeof elemento === 'object' && elemento !==null ){
        if('nombre' in elemento && 'apellido' in elemento ){
        mostrarEstudiante(elemento)}

    }
});
addEstudiante(e1)
addEstudiantePrincipio (e2)
addEstudiante
//console.log(arregloEstudiantes)
/* 
//Metodo para encontrar un estudiante por nombre 
//y actulizar su apellido
function actualizarApellidoPorNombre(nombre: string, nuevoApellido:String){
    const estudiante = arregloEstudiantes.find(e => e.nombre === nombre);
    if (estudiante){
        estudiante.apellido == nuevoApellido;
        console.log(`Apellido de ${nombre} actulizado a ${nuevoApellido}.`);
    } else {
        console.log(`Estudiante con nombre ${nombre} no encotrado`)
    }
}
//estudiantes que viven en bogota y actualice su edad a 20
function actualizaredad(nuevaEdad: number){
    arregloEstudiantes.forEach(estudiante => {
        if(estudiante.addresses && estudiante.addresses.some(Address => Address.cyty. trim() === "Bogota")){
            estudiante.edad = nuevaEdad;
        }
    })
}

//metodo para borrar un estudiante por nombre y apellido 
function borrarPorNombreApellido(nombre:string, apellido:string){
    const longituOriginal = arregloEstudiantes.length;
    arregloEstudiantes = arregloEstudiantes.filter( e=> e.nombre !== nombre || e.apellido || apellido);
}
//metodo para borrar los estudiantes que tengan menos de 18 y vivan en bogota 
function borrarMenoresEnBogota(){
    
} */


//invocar el metodo para aglegar e1 al arrelgo
/* borrarMenoresEnBogota()
actualizaredad(18)
borrarPorNombreApellido("Daniel", "clavijo")
actualizarApellidoPorNombre("Daniel", "clavijo")

console.log(arregloEstudiantes)
 */


