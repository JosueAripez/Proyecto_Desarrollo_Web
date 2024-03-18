document.addEventListener("DOMContentLoaded", function () 
{
    // Para encontrar el formulario
    var form = document.getElementById("loginForm");

    // Crea el evento enviar al formulario
    form.addEventListener("submit", function (event) 
    {
        // Detiene el envio del formulario predeterminado
        event.preventDefault();

        // Obtiene los datos ingresados
        var email = form.elements["email"].value;
        var password = form.elements["password"].value;

        // Esto es facil se lee solo
        if (email === "tres@gmail.com" && password === "0123456789") 
        {
            // Manda al usuario a index.html
            window.location.href = "index.html";
        } 
        else 
        {
            alert("Correo electrónico o contraseña incorrectos");
        }
    });
});
