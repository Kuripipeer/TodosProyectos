
let listaProductos = document.querySelector('#listaProductos');

// Obtiene produtos
let obtieneProductos = () => {
    // Promise o Promesa
    fetch('https://rickandmortyapi.com/api/character/?page=1')
        .then(res => res.json())
        .then(personajesObtenidos => {
            console.log("Personajes ", personajesObtenidos.results);

            personajesObtenidos.results.forEach(personaje => {
                listaProductos.innerHTML += `
                <div class="col-12 col-md-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${personaje.image}" class="card-img-top imagenProducto py-2" alt="">
                        <div class="card-body">
                            <h5 class="card-title">Nombre: ${personaje.name}</h5>
                            <p class="card-text">Especie: ${personaje.species}</p>
                            <p class="text-text">Género: ${personaje.gender}</p>
                            <p class="text-text">Localización: ${personaje.location.name}</p>
                            <p class="text-danger">Estado: ${personaje.status}</p>
                        </div>
                    </div>
                </div>
            `;
            })
        })
};

obtieneProductos();
