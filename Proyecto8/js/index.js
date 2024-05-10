let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let nombreEditar = document.getElementById('nombreEditar');
let fecha = document.getElementById('fecha');
let fechaEditar = document.getElementById('fechaEditar');
let descripcion = document.getElementById('descripcion');
let descripcionEditar = document.getElementById('descripcionEditar');
let idTarea = document.getElementById('idTarea');

let tareas = [
    {
        nombre: 'Tarea 1',
        fecha: '2021-01-01',
        descripcion: 'Descripcion de la tarea 1'
    },
    {
        nombre: 'Tarea 2',
        fecha: '2023-01-01',
        descripcion: 'Descripcion de la tarea 2'
    },
    {
        nombre: 'Tarea3',
        fecha: '2024-01-01',
        descripcion: 'Descripcion de la tarea 3'
    }
];



let listaTareas = document.getElementById('listaTareas');
let btnGuardar = document.getElementById('btnGuardar');
let btnGuardarEditar = document.getElementById('btnGuardarEditar');


let mostrarTareas = () => {
    listaTareas.innerHTML = '';
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class ='row'>
            <div class='col-3 border p-3'>
                <strong>${tarea.nombre}</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${tarea.fecha}</strong>
            </div>
            <div class='col-4 border p-3'>
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class='col-1 border p-3 text center'>
            <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${indice})">Editar</button>
            </div>
            <div class='col-1 border p-3 text center'>
            <button class='btn btn-danger' onClick='borrarTarea(${indice})'>Borrar</button>
            </div>
        </div>    
        `;
    })

}

mostrarTareas();

let agregarDatos = () => {
    let datos = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value
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
    mostrarTareas();
    cerrarModalEditar();
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarDatos();
    cerrarModal();
    formulario.reset();
});