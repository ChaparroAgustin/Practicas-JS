///OBJETOS


// let miLibro = {
//     titulo:'El libro de JavaScript',
//     autor: 'Agustin',
//     paginas: 400,
//     publicado: false
// };

// console.log(miLibro.titulo); //uso comun de los OBJETOS
// console.log(`${miLibro.titulo} creado por ${miLibro.autor}`);
// miLibro.paginas = 500;
// console.log(miLibro.paginas);

//Ejercicio, crear un objeto persona que tenga las siguientes props:
//nombre,edad, ciudad
//cambiar edad
//Mostrar datos de la persona

// let persona ={
//     nombre: "Agustin",
//     edad: 31,
//     ciudad: "Buenos Aires"
// };
// persona.edad = 32;
// console.log(`${persona.nombre} tiene ${persona.edad} años, y vive en la ciudad de ${persona.ciudad}`);


// let miLibroA = {
//     titulo:'El libro de JavaScript',
//     autor: 'Agustin',
//     paginas: 400,
//     publicado: false
// };

// let miLibro = {
//     titulo:'Programacion en PHP',
//     autor: 'Agustin',
//     paginas: 700,
//     publicado: true
// };

// let getResumen = (libro) => {
//     return {
//         resumen: `${libro.titulo} creado por ${libro.autor}`,
//         resumenPaginas: `${libro.titulo} tiene ${libro.paginas} paginas.`
//     }
// };

// console.log(getResumen(miLibro).resumen);
// console.log(getResumen(miLibro).resumenPaginas);

// console.log(getResumen(miLibroA).resumen);
// console.log(getResumen(miLibroA).resumenPaginas);


//-----------------------------------o----------------------------------

// //REFERENCIA DE OBJETOS
// let persona = {
//     nombre: "pablo",
//     edad : 30,
//     sueldo: 1200
// }

// let otraPersona = persona;
// otraPersona.sueldo = 1500;
// console.log(otraPersona);
// let cambiarSueldo = (p,monto) =>{
//     p.sueldo += monto;
//     //console.log(p);
// }

// cambiarSueldo(persona,500);
// console.log(otraPersona);//javascript usa los objetos como referencias por ende
//                          // al cambiar a otraPersona, cambia persona y viceversa

// console.log(persona); //la funciona cambia tambien los valores del objeto persona previamente declarado

// --------------------------------------0---------------------------------------------------

//////Metodos/////////


let persona = {
    nombre: "Pedro",
    edad: 30,
    sueldo: 1500,
    cambiarSueldo: function(monto){
        this.sueldo += monto;
    },
    cambiarEdad: function(edad){
        this.edad += edad;
    }
};

console.log(persona);
persona.cambiarSueldo(500);
persona.cambiarEdad(3);
console.log(persona);


//---------------------------------------o------------------------------------


///



