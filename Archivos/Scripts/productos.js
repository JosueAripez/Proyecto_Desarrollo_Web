function MostrarInfoProducto(product) {
    // Obtener el elemento de la tabla según el ID del producto
    var currentRow = document.getElementById(product);

    // Verificar si se encontró el elemento de la tabla y si tiene una fila de información de producto asociada
    if (currentRow && currentRow.nextElementSibling && currentRow.nextElementSibling.classList && currentRow.nextElementSibling.classList.contains('product-info-row')) {
        // Si la información ya está visible, ocultarla
        currentRow.parentNode.removeChild(currentRow.nextElementSibling);
    } else if (currentRow) {
        // Aquí puedes cambiar la información según el producto seleccionado
        var productName = "";
        var productImageSrc = "";
        var productDescription = "";

        switch(product) {
            case 'Zanahoria_Cambray':
                productName = "Producto 1";
                productImageSrc = "imagen_producto1.jpg";
                productDescription = "Descripción del Producto 1.";
                break;
            case 'Chile_Mini_Bell':
                productName = "Producto 2";
                productImageSrc = "imagen_producto2.jpg";
                productDescription = "Descripción del Producto 2.";
                break;
            case 'Pepino':
                productName = "Producto 3";
                productImageSrc = "imagen_producto3.jpg";
                productDescription = "Descripción del Producto 3.";
                break;
            default:
                break;
        }

        // Crear una nueva fila con la información del producto
        var newRow = document.createElement('tr');
        newRow.classList.add('product-info-row'); // Agregar una clase para identificar la fila de información del producto
        newRow.innerHTML = '<td colspan="100%"><strong>' + productName + '</strong><br><img src="' + productImageSrc + '" alt="Imagen del Producto"><br>' + productDescription + '</td>';

        // Insertar la nueva fila antes de la siguiente fila
        if (currentRow.nextSibling) {
            currentRow.parentNode.insertBefore(newRow, currentRow.nextSibling);
        } else {
            currentRow.parentNode.appendChild(newRow);
        }
    } else {
        console.error("No se encontró el elemento de la tabla con el ID:", product);
    }
}
