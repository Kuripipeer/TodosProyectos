
let listaProductos = document.querySelector('#listaProductos');

// Obtiene produtos
let obtieneProductos = () => {
    // Promise o Promesa
    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(productosObtenidos => {
            console.log("Productos obtenidos ", productosObtenidos);

            productosObtenidos.forEach((producto, indice) => {
                console.log("Producto ", producto);

                listaProductos.innerHTML += `
                <div class="col-12 col-md-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${producto.image}" class="card-img-top imagenProducto py-2" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>
                            <p class="card-text">${producto.description.slice(0,100)}</p>
                            <p class="text-danger">$ ${producto.price}</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
                `;
            });
        });
}

obtieneProductos();