//Definicion de las clases 

class Libro{
    constructor(titulo,autor,isbn){
        this.autor = autor;
        this.titulo = titulo;
        this.isbn = isbn;
    }
}

//clase ui es la que me permite utilizar el DOM
class UI{// tiene metodos estaticos para poder usarlos de forma directo sin tener que instanciarlo. 
    static mostrarLibro(){

    }

    static agregarLibro(libro){

    }

    static eliminarLibro(){

    }

    static mostrarAlerta(mensaje, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensaje));

        const container = document.querySelector('.container');
        const form = document.querySelector('#libro-form');
        container.insertBefore(div, form);

        //setTimeout(()=> document.querySelector('.alert').remove(), 3000);
    }

    static limpiarCampos(){

    }

}

class Datos{
    static traerLibros(){

    }

    static agregarLibro(libro){

    }

    static removeLibro(isbn){

    }
}

//Control del elemento submit 
document.querySelector('#libro-form').addEventListener('submit',(e)=>{
    //e.preventDefault();

    //obtener valores de los campos
    const titulo = document.querySelector('#titulo').value;
    const autor = document.querySelector('#autor').value;
    const isbn = document.querySelector('#isbn').value;

    if (titulo === '' || autor === '' || isbn === '' ){
        UI.mostrarAlerta('Por favor ingrese todos los datos!!!','danger');
        console.log("submit");
    }

});