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
    static mostrarLibros(){
        const libros = Datos.traerLibros();
        libros.forEach((libro) => UI.agregarLibroLista(libro));
    }

    static agregarLibroLista(libro){
        const lista = document.querySelector('#libro-list');

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        
        lista.appendChild(fila);
    }

    static eliminarLibro(e){
        if(e.classList.contains('delete')){
            e.parentElement.parentElement.remove();
        }

    }

    static mostrarAlerta(mensaje, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensaje));

        const container = document.querySelector('.container');
        const form = document.querySelector('#libro-form');
        container.insertBefore(div, form);

        setTimeout(()=> document.querySelector('.alert').remove(), 1000);
    }

    static limpiarCampos(){
        document.querySelector('#titulo').value = '';
        document.querySelector('#autor').value = '';
        document.querySelector('#isbn').value = '';
    }

}

class Datos{
    static traerLibros(){
        let libros;
        if(localStorage.getItem('libros') === null){
            libros = [];
        }
        else{
            libros = JSON.parse(localStorage.getItem('libros'));
        }
        return libros;
    }

    static agregarLibro(libro){
        const libros = Datos.traerLibros();
        libros.push(libro);
        localStorage.setItem('libros',JSON.stringify(libros));
    }

    static removeLibro(isbn){
        const libros = Datos.traerLibros();

        libros.forEach((libro, index) => {
            if(libro.isbn == isbn){
                libros.splice(index, 1);
            }
        });
        localStorage.setItem('libros', JSON.stringify(libros));
    }
}

//Carga de la Pagina
document.addEventListener('DOMContentLoaded',UI.mostrarLibros())


//Control del elemento submit 
document.querySelector('#libro-form').addEventListener('submit',(e)=>{
    e.preventDefault();

    //obtener valores de los campos
    const titulo = document.querySelector('#titulo').value;
    const autor = document.querySelector('#autor').value;
    const isbn = document.querySelector('#isbn').value;

    if (titulo === '' || autor === '' || isbn === '' ){
        UI.mostrarAlerta('Por favor ingrese todos los datos!!!','danger');
        console.log("submit");
    }
    else{
        const libro = new Libro (titulo, autor, isbn);
        Datos.agregarLibro(libro);
        UI.agregarLibroLista(libro);
        UI.mostrarAlerta('Libro Agregado a la coleccion!!!','success')
        UI.limpiarCampos();
    }

});

//Eliminacion de elementos
document.querySelector('#libro-list').addEventListener('click', (e) => {
    UI.eliminarLibro(e.target);
    Datos.removeLibro(e.target.parentElement.previousElementSibling.textContent);
    UI.mostrarAlerta("Libro eliminado correctamente",'info');
})
