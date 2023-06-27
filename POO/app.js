//CLASES Y METODOS//

// class Persona{
//     constructor(nombre, edad, profesiones){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.profesiones = profesiones;
//     }
//     getBiografia(){
//         let biografia = `${this.nombre}, tiene ${this.edad}, y trabajos: `;
//         this.profesiones.forEach((profesion) => {
//             biografia += `${profesion} ,`;
//         });
//         return biografia;
//     }
// };
// // const persona1 = new Persona("agustin",31,["tecnico informatico","Desarrollador"]);

// // console.log(typeof persona1);
// // console.log(persona1.getBiografia());

// /////SUBCLASE = ES LO MISMO QUE HERENCIA////

// class empleado extends Persona{
//     constructor(nombre,edad,profesiones=[], sueldo , puesto){
//         super(nombre,edad,profesiones)
//         this.sueldo = sueldo;
//         this.puesto = puesto;
//     }
//     getBiografia(){
//         return super.getBiografia() + `sueldo ${this.sueldo}, puesto ${this.puesto}`
//     }
// };

// const empleado1 = new empleado("agustin",31,["tecnico informatico","Desarrollador"], 1500, 'Profesional informatico');

// console.log(typeof persona1);
// console.log(empleado1.getBiografia());


//GETTER AND SETTER 

// const datos = {
//     //ubiciacion: 'lima',
//     get ubicacion(){
//         return this._ubicacion;
//     },
//     set ubicacion(ubi){
//         this._ubicacion = ubi;
//     }
// };

// datos.ubicacion = 'Buenos Aires';
// console.log(datos.ubicacion);

class Persona{
    constructor(nombre, edad, profesiones){
        this.nombre = nombre;
        this.edad = edad;
        this.profesiones = profesiones;
    }
    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad}, y trabajos: `;
        this.profesiones.forEach((e) => {
            biografia += `${e},`
        });
        return biografia;
    }
};
class empleado extends Persona{
    constructor(nombre,edad,profesiones=[], sueldo , puesto){
        super(nombre,edad,profesiones)
        this.sueldo = sueldo;
        this.puesto = puesto;
    }
    getBiografia(){
        return super.getBiografia() + `sueldo ${this.sueldo}, puesto ${this.puesto}`
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(valor){
        this._sueldo = valor;
    }
    // setSueldo(monto){
    //     this.sueldo = monto; // ESTAS SON PRACTICAS QUE SE USAN EN OTROS LENGUAJES, HOY EN DIA EN JS 
    // }                        //SE UTILIZA DEL OTRO MODO.
};

let empleado1 = new empleado('Agustin',31, ['Desarrollador'], 1500 , 'Tecnico');
console.log(empleado1.getBiografia());
empleado1.sueldo = 2000;
console.log(empleado1.getBiografia());



