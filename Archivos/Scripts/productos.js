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
        var productinfoplanta = "";
        var productinfofruto = "";

        switch(product) {
            case 'Melon_Palmira':
                productName = "Melon Palmira";
                productImageSrc = "Archivos/Imgs/Productos/Melon_Palmira.jpeg";
                productDescription = "<br>Melón grande con tamaño 9’s predominantemente, excelente apariencia exterior con red cerrada y uniforme. Calidad interior con 12+ grados Brix y 6+ psi de firmeza, pulpa de color naranja intenso y cavidad pequeña. Vida de anaquel extendida.";
                productinfoplanta = "";
                productinfofruto = "";
                break;
            case 'Fresa':
                productName = "Fresa";
                productImageSrc = "Archivos/Imgs/Productos/Fresa.jpeg";
                productDescription = "<br>Fresa de tamaño grande, con predominancia de frutos de calibre 9 o superior, destacando por su excelente apariencia exterior con un color rojo intenso y brillante. Su superficie se muestra uniforme y sin imperfecciones, con una firmeza que garantiza su frescura. En cuanto a su calidad interior, presenta un contenido de azúcar de 12+ grados Brix, ofreciendo un sabor dulce y delicioso. La firmeza de la fruta es de 6+ psi, asegurando una textura jugosa y consistente al paladar. La pulpa es de un rojo intenso y profundo, y la cavidad de la fresa es pequeña, lo que denota su calidad y frescura. Además, cuenta con una vida útil prolongada en anaquel, lo que garantiza su frescura por más tiempo.";
                productinfoplanta = "";
                productinfofruto = "";
                break;
            case 'Chile_Jalapenio':
                productName = "Chile Jalapeño";
                productImageSrc = "Archivos/Imgs/Productos/Chile_Jalapenio.jpeg";
                productDescription = "<br>Chile jalapeño de tamaño mediano a grande, con predominancia de frutos de calibre uniforme y de tamaño 9 o superior. Su apariencia exterior es excelente, caracterizada por un color verde intenso y brillante, con una piel lisa y sin manchas. La calidad interior destaca por su nivel de picor, con un grado de ardor que satisface los estándares de los amantes del picante. Presenta una textura firme y carnosa, con una pulpa densa y jugosa. Su cavidad es pequeña, lo que indica un jalapeño de buen desarrollo y frescura. Además, su vida útil es extendida, lo que permite disfrutar de su sabor y picor por más tiempo.";
                productinfoplanta = "";
                productinfofruto = "";
                break;
            default:
                break;
        }

        // Crear una nueva fila con la información del producto
        var newRow = document.createElement('tr');
        newRow.classList.add('product-info-row'); // Agregar una clase para identificar la fila de información del producto
        newRow.innerHTML = '<td colspan="100%"><strong>' + productName + '</strong><br><img src="' + productImageSrc + '" alt="30px"><br>' + productDescription + '</td>';

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
