function mostrarInfo(imagen) {
    var producto = imagen.closest('.producto');
    producto.classList.add('active');
    document.querySelector('.overlay').classList.add('active');
}

function cerrarInfo() {
    var productos = document.querySelectorAll('.producto');
    productos.forEach(function(producto) {
        producto.classList.remove('active');
    });
    document.querySelector('.overlay').classList.remove('active');
}