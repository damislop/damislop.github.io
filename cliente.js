let clientes = [
    {
        "id": 1,
        "claveCliente": "C1",
        "emailCliente": "",
        "fechaRegistro": "2023-07-17",
        "estatus": 1,
        "persona": {
            "id": 101,
            "nombre": "Venta",
            "apellidoPaterno": "al",
            "apellidoMaterno": "Publico",
            "fechaNacimiento": "",
            "rfc": "",
            "curp": "",
            "genero": "O",
            "foto": "",
            "domicilio": "",
            "cp": "",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": ""
        }

    },
    {
        "id": 2,
        "claveCliente": "C2",
        "emailCliente": "mariana_lopez@gmail.com",
        "fechaRegistro": "2023-09-23",
        "estatus": 1,
        "persona": {
            "id": 102,
            "nombre": "Angela",
            "apellidoPaterno": "Barroso",
            "apellidoMaterno": "Luna",
            "fechaNacimiento": "04/09/1999",
            "rfc": "AAFE013889A10",
            "curp": "AAABL010804HLTRLMA3",
            "genero": "H",
            "foto": "",
            "domicilio": "Av. San Juan Bosco, No. 295",
            "cp": "7890",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4770602323"
        }
    },
    {
        "id": 3,
        "claveCliente": "C3",
        "emailCliente": "ariel_mares@gmail.com",
        "fechaRegistro": "2023-02-09",
        "estatus": 1,
        "persona": {
            "id": 103,
            "nombre": "Damian",
            "apellidoPaterno": "Gomez",
            "apellidoMaterno": "Flores",
            "fechaNacimiento": "04/08/1983",
            "rfc": "GDFJ010804A13",
            "curp": "AGDE010804HGTJLMA2",
            "genero": "H",
            "foto": "",
            "domicilio": "Av. Paseo de Jerez, No. 345",
            "cp": "37234",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4772634394"
        }
    },
    {
        "id": 4,
        "claveCliente": "C4",
        "emailCliente": "jukari_martinez@gmail.com",
        "fechaRegistro": "2023-09-03",
        "estatus": 1,
        "persona": {
            "id": 104,
            "nombre": "Kevin",
            "apellidoPaterno": "Alvarez",
            "apellidoMaterno": "Martinez",
            "fechaNacimiento": "04/08/1977",
            "rfc": "KAFE019894A23",
            "curp": "KAHE010894HGTRLMA2",
            "genero": "H",
            "foto": "",
            "domicilio": "Av.Plaza Galeria, No. 222",
            "cp": "73000",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4773692387"
        }
    },
    {
        "id": 5,
        "claveCliente": "C5",
        "emailCliente": "oscar_marquez@gmail.com",
        "fechaRegistro": "2023-01-13",
        "estatus": 1,
        "persona": {
            "id": 105,
            "nombre": "Laura",
            "apellidoPaterno": "Sanchez",
            "apellidoMaterno": "Rodriguez",
            "fechaNacimiento": "04/08/2009",
            "rfc": "AAFE010094A16",
            "curp": "AAFE019804HGTRLMA2",
            "genero": "M",
            "foto": "",
            "domicilio": "Av. Plaza Altacia, No. 550",
            "cp": "90987",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4777982321"
        }
    },
    {
        "id": 6,
        "claveCliente": "C6",
        "emailCliente": "marco_flores@gmail.com",
        "fechaRegistro": "2023-03-19",
        "estatus": 1,
        "persona": {
            "id": 106,
            "nombre": "Alondra",
            "apellidoPaterno": "Hernandez",
            "apellidoMaterno": "Marquez",
            "fechaNacimiento": "04/08/1987",
            "rfc": "AMUE010804A23",
            "curp": "ALOU010804HGTRLMA2",
            "genero": "M",
            "foto": "",
            "domicilio": "Av. Plaza Mayor, No. 405",
            "cp": "67899",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4775982329"
        }
    },
    {
        "id": 7,
        "claveCliente": "C7",
        "emailCliente": "rene_0987@gmail.com",
        "fechaRegistro": "2023-02-19",
        "estatus": 1,
        "persona": {
            "id": 107,
            "nombre": "Aranza",
            "apellidoPaterno": "Guerra",
            "apellidoMaterno": "Hernandez",
            "fechaNacimiento": "04/08/2004",
            "rfc": "AAFE010804A12",
            "curp": "AAFE010804HGTRLMA2",
            "genero": "M",
            "foto": "",
            "domicilio": "Av. Universidad, No. 225",
            "cp": "47000",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "477569876"
        }
    },
    {
        "id": 8,
        "claveCliente": "C8",
        "emailCliente": "Rosario_gomez@gmail.com",
        "fechaRegistro": "2023-04-23",
        "estatus": 0,
        "persona": {
            "id": 108,
            "nombre": "Sara",
            "apellidoPaterno": "Aranda",
            "apellidoMaterno": "Mendez",
            "fechaNacimiento": "04/08/1987",
            "rfc": "ASLP010804A54",
            "curp": "OAYS010804HGTOLMA3",
            "genero": "M",
            "foto": "",
            "domicilio": "Av.Torres Landa, No. 209",
            "cp": "30000",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4775022323"
        }
    },
    {
        "id": 9,
        "claveCliente": "C9",
        "emailCliente": "rocio_maria@gmail.com",
        "fechaRegistro": "2023-07-17",
        "estatus": 0,
        "persona": {
            "id": 109,
            "nombre": "Emilio",
            "apellidoPaterno": "Aranda",
            "apellidoMaterno": "Flores",
            "fechaNacimiento": "04/09/2003",
            "rfc": "AAFE010004A19",
            "curp": "AELE010809HHHRLMA3",
            "genero": "H",
            "foto": "",
            "domicilio": "Agua Azul No. 609",
            "cp": "98765",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4775699350"
        }
    },
    {
        "id": 10,
        "claveCliente": "C10",
        "emailCliente": "raul_luna@gmail.com",
        "fechaRegistro": "2023-07-19",
        "estatus": 0,
        "persona": {
            "id": 110,
            "nombre": "Alonso",
            "apellidoPaterno": "Muñoz",
            "apellidoMaterno": "Fernandez",
            "fechaNacimiento": "09/08/2000",
            "rfc": "AAFE010804A12",
            "curp": "AMOIE010804HGTRLMA2",
            "genero": "H",
            "foto": "",
            "domicilio": "Barranquilla No.306",
            "cp": "35090",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4772322396"
        }
    }

];


//Esta funcion nos sirve para inicializar el modulo
//de clientes.
export function inicializar()
{
    setDetalleClienteVisible(false);
    fillTableCliente();
}

// Insert y Update en el mismo metodo:
export function saveCli()
{
    // Declaramos un objeto donde guardaremos los datos del cliente:
    let cliente = null;

    let posicion = -1; // Para saber si un empleado ya existe o no.
    
    let idCliente = 0; 

    // Revisamos si hay un ID de cliente:
    if (document.getElementById("txtIdCliente").value.trim().length > 0)
    {
        idCliente = parseInt(document.getElementById("txtIdCliente").value.trim());
        posicion = buscarPosicionClientePorId(idCliente);

        // Si posicion es mayor o igual a 0, si encontramos un cliente:
        if (posicion >= 0)
            cliente = clientes[posicion];
        else
        {
            // Si no hay un cliente con el ID descrito,
            // creamos una nueva instancia del Objeto:
            cliente = new Object();
            cliente.id = idCliente;

            cliente.persona = new Object();
            cliente.persona.id = parseInt(document.getElementById("txtIdPersona").value.trim());


            // Insertamos el objeto cliente dentro del arreglo de clientes:
            clientes.push(cliente);
        }

        // Continuamos llenando los datos del objeto:
        // Datos de Persona:
        cliente.persona.nombre = document.getElementById("txtNombre").value;
        cliente.persona.apellidoPaterno = document.getElementById("txtApellidoPaterno").value;
        cliente.persona.apellidoMaterno = document.getElementById("txtApellidoMaterno").value;
        cliente.persona.genero = document.getElementById("cmbGenero").value;
        cliente.persona.fechaNacimiento = document.getElementById("txtFechaNacimiento").value;
        cliente.persona.rfc = document.getElementById("txtRfc").value;
        cliente.persona.curp = document.getElementById("txtCurp").value;
        cliente.persona.domicilio = document.getElementById("txtDomicilio").value;
        cliente.persona.cp = document.getElementById("txtCodigoPostal").value;
        cliente.persona.ciudad = document.getElementById("txtCiudad").value;
        cliente.persona.estado = document.getElementById("txtEstado").value;
        cliente.persona.telefono = document.getElementById("txtTelefono").value;

        // Datos del cliente:
        cliente.claveCliente = document.getElementById("txtClaveCliente").value;
        cliente.emailCliente = document.getElementById("txtEmail").value;
        cliente.fechaRegistro = document.getElementById("txtFechaRegistro").value;
        cliente.estatus = document.getElementById("cmbEstatus").value;



        // Refrescamos el catalogo de clientes:
        fillTableCliente();

        Swal.fire('Movimiento Realizado', 'Datos de Cliente Actualizados correctamente.', 'success');
    } else
    {
        Swal.fire('Verificaci&oacute;n de datos requerida.',
                'Debe agregar un ID al cliente (valor num&eacute;rico).',
                'warning');
    }
}

export function deleteCliente()
{
    let posicion = -1;
    let idCliente = 0;

    // Revisamos si hay un ID de cliente:
    if (document.getElementById("txtIdCliente").value.trim().length > 0)
    {
        // Recuperamos el ID del Cliente que deseamos eliminar:
        idCliente = parseInt(document.getElementById("txtIdCliente").value.trim());

        // Buscamos la posicion del Cliente con ese ID:
        posicion = buscarPosicionClientePorId(idCliente);

        // Si la posicion del Clientes existe, lo quitamos del arreglo:
        if (posicion >= 0)
        {
            clientes.splice(posicion, 1);
            Swal.fire('Movimiento realizado.', 'Registro de cliente Eliminado.', 'success');
            fillTableCliente();
        } else
        {
            Swal.fire('', 'El ID de cliente especificado no existe.', 'warning');
        }
    } else
    {
        Swal.fire('', 'Especifique un ID de cliente.', 'warning');
    }
}

export function getClientes()
{
}

//Llena la tabla de clientes
//con el arreglo.
function fillTableCliente()
{
    //Aqui vamos a ir guardando el contenido del
    //tbody de la tabla de clientes:
    let contenido = '';

    //Recorremos el arreglo elemento por elemento:
    for (let i = 0; i < clientes.length; i++)
    {
        contenido += '<tr>' +
                '<td>' + clientes[i].id + '</td>' +
                '<td>' +
                clientes[i].persona.nombre + ' ' +
                clientes[i].persona.apellidoPaterno + ' ' +
                clientes[i].persona.apellidoMaterno +
                '</td>' +
                '<td>' + clientes[i].persona.rfc + '</td>' +
                '<td>' + clientes[i].emailCliente + '</td>' +
                '<td>' + clientes[i].persona.telefono + '</td>' +
                '<td>' +
                '<a href="#" class="text-info" onclick="cm.cargarDetalleCliente(' + i + ');"><i class="h4 fa-solid fa-circle-info"></i></a>' +
                '</td>' +
                '</tr>';
    }
    document.getElementById("tbodyClientes").innerHTML = contenido;
}

export function cargarDetalleCliente(posicion)
{
    //Recuperamos en el cliente en la posicion indicada:
    let cl = clientes[posicion];

    // LLenamos las cajas de texto y demas controles con los datos del
    // empleado que recuperamos previamente:
    document.getElementById("txtIdCliente").value = cl.id;
    document.getElementById("txtIdPersona").value = cl.persona.id;
    document.getElementById("txtClaveCliente").value = cl.claveCliente;


    // Datos de Persona:
    document.getElementById("txtNombre").value = cl.persona.nombre;
    document.getElementById("txtApellidoPaterno").value = cl.persona.apellidoPaterno;
    document.getElementById("txtApellidoMaterno").value = cl.persona.apellidoMaterno;
    document.getElementById("cmbGenero").value = cl.persona.genero;
    document.getElementById("txtFechaNacimiento").value = cl.persona.fechaNacimiento;
    document.getElementById("txtRfc").value = cl.persona.rfc;
    document.getElementById("txtCurp").value = cl.persona.curp;
    document.getElementById("txtDomicilio").value = cl.persona.domicilio;
    document.getElementById("txtCodigoPostal").value = cl.persona.cp;
    document.getElementById("txtCiudad").value = cl.persona.ciudad;
    document.getElementById("txtEstado").value = cl.persona.estado;
    document.getElementById("txtTelefono").value = cl.persona.telefono;

    // Datos del Cliente:
    
    document.getElementById("txtEmail").value = cl.emailCliente;
    document.getElementById("txtFechaRegistro").value = cl.fechaRegistro;
    document.getElementById("cmbEstatus").value = cl.estatus;




    setDetalleClienteVisible(true);
}

export function clearForm()
{
    document.getElementById("txtIdCliente").value = '';
    document.getElementById("txtIdPersona").value = '';
    document.getElementById("txtClaveCliente").value = '';


    // Datos de Persona:
    document.getElementById("txtNombre").value = '';
    document.getElementById("txtApellidoPaterno").value = '';
    document.getElementById("txtApellidoMaterno").value = '';
    document.getElementById("cmbGenero").value = '';
    document.getElementById("txtFechaNacimiento").value = '';
    document.getElementById("txtRfc").value = '';
    document.getElementById("txtCurp").value = '';
    document.getElementById("txtDomicilio").value = '';
    document.getElementById("txtCodigoPostal").value = '';
    document.getElementById("txtCiudad").value = '';
    document.getElementById("txtEstado").value = '';
    document.getElementById("txtTelefono").value = '';

    // Datos del cliente:
    document.getElementById("txtEmail").value = '';
    document.getElementById("txtFechaRegistro").value = '';
    document.getElementById("cmbEstatus").value = '';




}

// Busca la posicion de un objeto cliente
// con base en la propiedad ID y la devuelve.
// Si no se encuentra el ID buscado,
// el metodo devuelve -1.
function buscarPosicionClientePorId(id)
{       //let pos =1
    for (let i = 0;
    i < clientes.length; i++)
    {
        if (clientes[i].id === id)
            return i;
    }
    return -1;
}

export function setDetalleClienteVisible(valor)
{
    if (valor === true)
    {
        //Ocultamos la seccion del catalogo de cliente.
        document.getElementById('divCatalogoClientes').style.display = 'none';
        //mostramos la seccion del detalle:
        document.getElementById('divDetalleCliente').style.display = '';
    } 
    else
    {
        //Ocultamos la seccion del detalle
        document.getElementById('divDetalleCliente').style.display = 'none';
        //mostramos la seccion del catalogo de cliente.
        document.getElementById('divCatalogoClientes').style.display = '';
    }
}

export function clearAndShowDetalleCliente()
{
    clearForm();
    setDetalleClienteVisible(true);
}