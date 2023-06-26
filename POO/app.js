//CLASES Y METODOS//

class Persona{
    constructor(nombre, edad, trabajos){
        this.nombre = nombre;
        this.edad = edad;
        this.trabajo = trabajos;
    }
    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad}, y trabajos: `;
        this.trabajos.forEach((trabajo) => {
            biografia += `, ${trabajo} `;
        })
        return biografia;
    }
};
const persona1 = new Persona("agustin",31,["tecnico informatico","Desarrollador"]);

console.log(typeof persona1);
console.log(persona1.getBiografia());

