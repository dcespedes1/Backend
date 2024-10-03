"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mostrarEstudiante = (estudiante) => {
    var _a;
    //informaciond del estudiante
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Apellido: ${estudiante.apellido}`);
    console.log(`Edad: ${estudiante.edad || `No definido`}`);
    console.log("--Direccion--");
    (_a = estudiante.addresses) === null || _a === void 0 ? void 0 : _a.forEach((direccion) => {
        console.log(`Calle ${direccion.street}`);
        console.log(`Numero ${direccion.numero}`);
        console.log(`Ciudad ${direccion.cyty}`);
        console.log("----------------");
    });
};
exports.default = mostrarEstudiante;
