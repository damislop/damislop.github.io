let cm = null; //Current Module

async function cargarModuloEmpleado()
{
    //AJAX: Asynchronous Java script And Xml
    let respuesta = await fetch('empleado/empleado.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;

    //DESPUES DE CARGAR EL CONTENIDO HTML, CARGAMOS EL MODULO JS DEL EMPLEADO:
    import('./empleado.js')
            .then(obj => {
                cm = obj;
                cm.inicializar();
            });
}
async function cargarModuloCliente()
{
    //AJAX: Asynchronous Java script And Xml
    let respuesta = await fetch('cliente/cliente.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;
    
     import('./cliente.js')
            .then(obj => {
                cm = obj;
                cm.inicializar();
            });
}
async function cargarModuloProducto()
{
    //AJAX: Asynchronous Java script And Xml
    let respuesta = await fetch('producto/productos.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;
    
    //DESPUES DE CARGAR EL CONTENIDO HTML, CARGAMOS EL MODULO JS DE PRODUCTOS
    import('./producto.js')
            .then(obj => {
                cm = obj;
                cm.inicializar();
            });
}


