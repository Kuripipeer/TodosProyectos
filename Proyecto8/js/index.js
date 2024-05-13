let formulario = document.getElementById('formulario');
let formularioEditar = document.getElementById('formularioEditar');
let nombre = document.getElementById('nombre');
let nombreEditar = document.getElementById('nombreEditar');
let fecha = document.getElementById('fecha');
let fechaEditar = document.getElementById('fechaEditar');
let descripcion = document.getElementById('descripcion');
let descripcionEditar = document.getElementById('descripcionEditar');
let video = document.getElementById('video');
let videoEditar = document.getElementById('videoEditar');
let imagen = document.getElementById('imagen');
let imagenEditar = document.getElementById('imagenEditar');
let audio = document.getElementById('audio');
let audioEditar = document.getElementById('audioEditar');
let idTarea = document.getElementById('idTarea');


let tareas = [
    {
        nombre: 'Tarea 1',
        fecha: '2021-01-01',
        descripcion: 'Descripcion de la tarea 1',
        video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
        imagen: 'https://www.w3schools.com/w3images/lights.jpg',
        audio: 'https://www.w3schools.com/html/horse.mp3'
    }
];



let listaTareas = document.getElementById('listaTareas');
let btnGuardar = document.getElementById('btnGuardar');
let btnGuardarEditar = document.getElementById('btnGuardarEditar');


let mostrarTareas = () => {
    listaTareas.innerHTML = '';
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class='row'>
            <div class='col-1 border p-3 m-0.5'>
            <strong>${tarea.nombre}</strong>
            </div>
            <div class='col-1 border p-3'>
            <strong>${tarea.fecha}</strong>
            </div>
            <div class='col-1 border p-3'>
            <strong>${tarea.descripcion}</strong>
            </div>
            <div class='col-3 border p-3 text-center'>
                <video width="100%" height="100%" controls>
                    <source src="${tarea.video}" type="video/mp4">
                </video>
            </div>
            <div class='col-2 border p-3 text-center'>
                <img src="${tarea.imagen}" class="img-fluid">
            </div>
            <div class='col-2 border p-3 text-center'>
                <audio controls>
                    <source src="${tarea.audio}" type="audio/mpeg">
                </audio>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick='editarTarea(${indice})'>Editar</button>
            </div>
            <div class='col-1 border p-3 text-center'>
            <button class='btn btn-danger' onclick='borrarTarea(${indice})'>Eliminar</button>
            </div>
        </div>
        `;
    });
}

mostrarTareas();

let agregarDatos = () => {
    let datos = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        video: video.value,
        imagen: imagen.value,
        audio: audio.value
    }
    tareas.push(datos);
    mostrarTareas();
}

let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
}

let cerrarModalEditar = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
    btnGuardarEditar.click();

}

let editarTarea = (indice) => {
    nombreEditar.value = tareas[indice].nombre;
    fechaEditar.value = tareas[indice].fecha;
    descripcionEditar.value = tareas[indice].descripcion;
    videoEditar.value = tareas[indice].video;
    imagenEditar.value = tareas[indice].imagen;
    audioEditar.value = tareas[indice].audio;
    idTarea.value = indice;
}

let borrarTarea = (indice) => {
    tareas.splice(indice, 1);
    mostrarTareas();
}

formularioEditar.addEventListener('submit', (e) => {
    e.preventDefault();
    let indice = idTarea.value;
    tareas[indice].nombre = nombreEditar.value;
    tareas[indice].fecha = fechaEditar.value;
    tareas[indice].descripcion = descripcionEditar.value;
    tareas[indice].video = videoEditar.value;
    tareas[indice].imagen = imagenEditar.value;
    tareas[indice].audio = audioEditar.value;
    mostrarTareas();
    cerrarModalEditar();
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarDatos();
    cerrarModal();
    formulario.reset();
});