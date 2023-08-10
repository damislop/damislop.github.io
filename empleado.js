let empleados = [
    {
        "id": 4,
        "clave": "dfre565",
        "email": "oski7@gmail.com",
        "fechaContratacion": "15/06/2020",
        "puesto": "A",
        "salarioBruto": 11370.00,
        "estatus": 1,
        "persona": {
            "id": 7,
            "nombre": "Oscar Mauricio",
            "apellidoPaterno": "Villegas",
            "apellidoMaterno": "Guzman",
            "genero": "H",
            "fechaNacimiento": "05/12/1999",
            "rfc": "VIGO99121205H25",
            "curp": "VIGO991205HGTLSZ01",
            "foto": "",
            "domicilio": "Av.Universidad, No.225",
            "cp": "37000",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4626532327"
        },
        "usuario": {
            "id": 21,
            "nombreUsuario": "22001749",
            "contrasenia": "22001749",
            "rol": "ADMC"
        }
    },

    /////////////////////////////////////////////////////////////////
    {
        "id": 5,
        "clave": "dfre566",
        "email": "lalin@gmail.com",
        "fechaContratacion": "16/06/2020",
        "puesto": "A",
        "salarioBruto": 12000.00,
        "estatus": 1,
        "persona": {
            "id": 8,
            "nombre": "Raul Eduardo",
            "apellidoPaterno": "Torres",
            "apellidoMaterno": "Sanchez",
            "genero": "H",
            "fechaNacimiento": "12/10/2004",
            "rfc": "TOSR04101250H80",
            "curp": "TOSR041012HGTRNLA6",
            "foto": "",
            "domicilio": "Monte grineo, No.104",
            "cp": "37520",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4771148730"
        },
        "usuario": {
            "id": 22,
            "nombreUsuario": "22001750",
            "contrasenia": "22001750",
            "rol": "ADMS"
        }
    },

    //////////////////////////////////////////////////////////////////
    {
        "id": 6,
        "clave": "dfre567",
        "email": "damisl@gmail.com",
        "fechaContratacion": "20/06/2020",
        "puesto": "A",
        "salarioBruto": 11350.00,
        "estatus": 1,
        "persona": {
            "id": 9,
            "nombre": "Damian",
            "apellidoPaterno": "López",
            "apellidoMaterno": "Ortega",
            "genero": "H",
            "fechaNacimiento": "16/09/2004",
            "rfc": "LOOD0409162H62",
            "curp": "LOOD040916HGTPRMA1",
            "foto": "",
            "domicilio": "Mezquital de jerez, No.119",
            "cp": "37545",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4773990102"
        },
        "usuario": {
            "id": 23,
            "nombreUsuario": "22001751",
            "contrasenia": "22001751",
            "rol": "ADMS"
        }
    },

    //////////////////////////////////////////////////////////////////
    {
        "id": 7,
        "clave": "dfre568",
        "email": "jukari@gmail.com",
        "fechaContratacion": "25/06/2020",
        "puesto": "E",
        "salarioBruto": 11400.00,
        "estatus": 1,
        "persona": {
            "id": 10,
            "nombre": "Jukari Xoxu",
            "apellidoPaterno": "Barroso",
            "apellidoMaterno": "Martinez",
            "genero": "M",
            "fechaNacimiento": "17/08/2004",
            "rfc": "BAMA0408172H060",
            "curp": "BAMA040817HGTPRMA1",
            "foto": "",
            "domicilio": "Marmol, No.325",
            "cp": "37050",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4772048557"
        },
        "usuario": {
            "id": 24,
            "nombreUsuario": "22001752",
            "contrasenia": "22001752",
            "rol": "EMPS"
        }
    },

    ///////////////////////////////////////////////////////////////////
    {
        "id": 8,
        "clave": "dfre569",
        "email": "lionel@gmail.com",
        "fechaContratacion": "28/06/2020",
        "puesto": "E",
        "salarioBruto": 12100.00,
        "estatus": 1,
        "persona": {
            "id": 11,
            "nombre": "Lionel Andres",
            "apellidoPaterno": "Messi",
            "apellidoMaterno": "Cuccittini",
            "genero": "H",
            "fechaNacimiento": "24/06/1987",
            "rfc": "MECU87062410H30",
            "curp": "MECU870624HGTLSZ10",
            "foto": "",
            "domicilio": "Mezquital de jerez, No.120",
            "cp": "37545",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4771234567"
        },
        "usuario": {
            "id": 25,
            "nombreUsuario": "22001753",
            "contrasenia": "22001753",
            "rol": "EMPS"
        }
    }
];

//const filtrador = new mdb.Datatable(document.getElementById('tbodyEmpleados'));

/*ESTA FUNCION NOS SIRVE PARA INICIALIZAR
 EL MODULO DE EMPLEADOS.              */
export function inicializar()
{
    setDetalleEmpleadoVisible(false);
    fillTableEmpleado();
    
}


//INSERT Y UPDATE EN EL MISMO METODO:
export function save()
{
    //UN OBJETO DONDE GUARDEMOS LOS DATOS DEL EMPLEADO:
    let emp = null;

    //PARA SABER SI UN EMPLEADO YA EXISTE O NO.
    let posicion = -1;

    let idEmpleado = 0;

    ///REVISAMOS SI HAY UN ID EMPLEADO:
    if (document.getElementById("txtIdEmpleado").value.trim().length > 0)
    {
        idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value.trim());
        posicion = buscarPosicionEmpleadoPorId(idEmpleado);
        //SI POSISCION ES MAYOR O IGUAL A 0, SI ENCONTRAMOS UN EMPLEADO:
        if (posicion >= 0)
            emp = empleados[posicion];
        else
        {
            /*SI NO HAY UN EMPLEADO CON EL ID ESCRITO,
             CREAMOS UNA NUEVA INSTANCIA DEL OBJETO: */
            emp = new Object();
            emp.id = idEmpleado;

            emp.persona = new Object();
            emp.persona.id = parseInt(document.getElementById("txtIdPersona").value.trim());

            emp.usuario = new Object();
            emp.usuario.id = parseInt(document.getElementById("txtIdUsuario").value.trim());

            //INSERTAMOS EL OBJETO emp DENTRO DEL ARREGLO DE EMPLEADOS:
            empleados.push(emp);


        }

        //CONTINUAMOS LLENANDO LOS DATOS DEL OBJETO//

        //DATOS DEPERSONA:
        emp.persona.nombre = document.getElementById("txtNombre").value;
        emp.persona.apellidoPaterno = document.getElementById("txtApellidoPaterno").value;
        emp.persona.apellidoMaterno = document.getElementById("txtApellidoMaterno").value;
        emp.persona.genero = document.getElementById("cmbGenero").value;
        emp.persona.fechaNacimiento = document.getElementById("txtFechaNacimiento").value;
        emp.persona.rfc = document.getElementById("txtRfc").value;
        emp.persona.curp = document.getElementById("txtCurp").value;
        emp.persona.domicilio = document.getElementById("txtDomicilio").value;
        emp.persona.ciudad = document.getElementById("txtCiudad").value;
        emp.persona.estado = document.getElementById("txtEstado").value;
        emp.persona.telefono = document.getElementById("txtTelefono").value;

        //DATOS DEL EMPLEADO:
        emp.clave = document.getElementById("txtCodigoEmpleado").value;
        emp.fechaContratacion = document.getElementById("txtFechaIngreso").value;
        emp.puesto = document.getElementById("cmbPuesto").value;
        emp.salarioBruto = document.getElementById("txtSalarioBruto").value;
        emp.email = document.getElementById("txtEmail").value;

        //DATOS DEL USUARIO:
        emp.usuario.nombreUsuario = document.getElementById("txtNombreUsuario").value;
        emp.usuario.contrasenia = document.getElementById("txtContrasenia").value;
        emp.usuario.rol = document.getElementById("cmbRol").value;


        //REFRESCAMOS EL CATALOGO DE EMPLEADOS:
        fillTableEmpleado();

        Swal.fire('Movimiento Realizado', 'Datos de Empleado Actualizados correctamente.', 'success');
    } 
    else
    {
        Swal.fire('Verificaci&oacute;n de datos requerida.',
                'Debe agregar un ID al empleado (valor num&eacute;rico).',
                'warning');
    }
}


export function deleteEmpleado()
{
    let posicion = -1;
    let idEmpleado = 0;

    //REVISAMOS QUE SI HAY UN ID EMPLEADO:
    if (document.getElementById("txtIdEmpleado").value.trim().length > 0)
    {
        //RECUPERAMOS EL ID DEL EMPLEADO QUE DESEAMOS ELIMINAR:
        idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value.trim());

        //BUSCAMOS LA POSICION DEL EMPLEADO CON ESE ID:
        posicion = buscarPosicionEmpleadoPorId(idEmpleado);

        //SI LA POSICION DEL EMPLEADO EXISTE, LO QUITAMOS DEL ARREGLO:
        if (posicion >= 0)
        {
            empleados.splice(posicion, 1);
            Swal.fire('Movimiento realizado.', 'Registro de empleado Eliminado.', 'success');
            fillTableEmpleado();

        } 
        else
        {
            Swal.fire('', 'El ID de empleado especificado no existe.', 'warning');
        }
    } 
    else
    {
        Swal.fire('', 'Especifique un ID de empleado', 'warning');
    }
}

export function getEmpleados()
{

}


/*LLENA LA TABLA DE EMPLEADOS
 CON EL ARREGLO.           */
function fillTableEmpleado()
{
    /*AQUI VAMOS A IR GUARDANDO EL CONTENIDO
     DEL TBODY DE LA TABLA EMPLEADOS:     */
    let contenido = '';

    /*RECORREMOS EL ARREGLO ELEMENTO POR ELEMENTO: */
    for (let i = 0; i < empleados.length; i++)
    {
        contenido += '<tr>' +
                '<td>' +
                empleados[i].persona.nombre + ' ' +
                empleados[i].persona.apellidoPaterno + ' ' +
                empleados[i].persona.apellidoMaterno +
                '</td>' +
                '<td>' + empleados[i].clave + '</td>' +
                '<td>' + empleados[i].persona.rfc + '</td>' +
                '<td>' + empleados[i].email + '</td>' +
                '<td>' + empleados[i].persona.telefono + '</td>' +
                '<td>' +
                '<a href="#" class="text-info" onclick="cm.cargarDetalleEmpleado(' + i + ');"><i class="h4 fa-solid fa-street-view"></i></a>' +
                '</td>' +
                '</tr>';
    }

    document.getElementById("tbodyEmpleados").innerHTML = contenido;
}


export function cargarDetalleEmpleado(posicion)
{
    //RECUPERAMOS EL EMPLEADO EN LA POSICION INDICADA:
    let emp = empleados[posicion];


    /*LLENAMOS LAS CAJAS DE TEXTO Y DEMAS CONTROLES CON LOS DATOS 
     DEL EMPLEADO QUE RECUPERAMOS PREVIAMENTE:               */
    document.getElementById("txtIdEmpleado").value = emp.id;
    document.getElementById("txtIdPersona").value = emp.persona.id;
    document.getElementById("txtIdUsuario").value = emp.usuario.id;

    //DATOS DEPERSONA:
    document.getElementById("txtNombre").value = emp.persona.nombre;
    document.getElementById("txtApellidoPaterno").value = emp.persona.apellidoPaterno;
    document.getElementById("txtApellidoMaterno").value = emp.persona.apellidoMaterno;
    document.getElementById("cmbGenero").value = emp.persona.genero;
    document.getElementById("txtFechaNacimiento").value = emp.persona.fechaNacimiento;
    document.getElementById("txtRfc").value = emp.persona.rfc;
    document.getElementById("txtCurp").value = emp.persona.curp;
    document.getElementById("txtDomicilio").value = emp.persona.domicilio;
    document.getElementById("txtCodPos").value = emp.persona.cp;
    document.getElementById("txtCiudad").value = emp.persona.ciudad;
    document.getElementById("txtEstado").value = emp.persona.estado;
    document.getElementById("txtTelefono").value = emp.persona.telefono;

    //DATOS DEL EMPLEADO:
    document.getElementById("txtCodigoEmpleado").value = emp.clave;
    document.getElementById("txtFechaIngreso").value = emp.fechaContratacion;
    document.getElementById("cmbPuesto").value = emp.puesto;
    document.getElementById("txtSalarioBruto").value = emp.salarioBruto;
    document.getElementById("txtEmail").value = emp.email;
    document.getElementById("txtEstatus").value = emp.estatus;

    //DATOS DEL USUARIO:
    document.getElementById("txtNombreUsuario").value = emp.usuario.nombreUsuario;
    document.getElementById("txtContrasenia").value = emp.usuario.contrasenia;
    document.getElementById("cmbRol").value = emp.usuario.rol;
    
    setDetalleEmpleadoVisible(true);


}

export function clearForm()
{
    document.getElementById("txtIdEmpleado").value = '';
    document.getElementById("txtIdPersona").value = '';
    document.getElementById("txtIdUsuario").value = '';

    //DATOS DE PERSONA:
    document.getElementById("txtNombre").value = '';
    document.getElementById("txtApellidoPaterno").value = '';
    document.getElementById("txtApellidoMaterno").value = '';
    document.getElementById("cmbGenero").value = '';
    document.getElementById("txtFechaNacimiento").value = '';
    document.getElementById("txtRfc").value = '';
    document.getElementById("txtCurp").value = '';
    document.getElementById("txtDomicilio").value = '';
    document.getElementById("txtCodPos").value = '';
    document.getElementById("txtCiudad").value = '';
    document.getElementById("txtEstado").value = '';
    document.getElementById("txtTelefono").value = '';

    //DATOS DEL EMPLEADO:
    document.getElementById("txtCodigoEmpleado").value = '';
    document.getElementById("txtFechaIngreso").value = '';
    document.getElementById("cmbPuesto").value = '';
    document.getElementById("txtSalarioBruto").value = '';
    document.getElementById("txtEmail").value = '';

    //DATOS DEL USUARIO:
    document.getElementById("txtNombreUsuario").value = '';
    document.getElementById("txtContrasenia").value = '';
    document.getElementById("cmbRol").value = '';
}


/*BUSCA LA POSICION DE UN OBJETO EMPLEADO CON BASE
 CON BASE EN LA PROPIEDAD ID Y LA DEVUELVE.
 SI NO SE ENCUENTRA EL ID BUSCADO, EL METODO DEVUELVE -1.  */
function buscarPosicionEmpleadoPorId(id)
{
    //let pos = -1;

    for (let i = 0; i < empleados.length; i++)
    {
        if (empleados[i].id === id)
            return i;
    }
    return -1;
}


export function setDetalleEmpleadoVisible(valor)
{
    if(valor === true)
    {
        //OCULTAMOS LA SECCION DEL CATALOGO DE EMPLEADOS:
        document.getElementById('divCatalogoEmpleados').style.display = 'none';
        
        //MOSTRAMOS LA SECCION DEL DETALLE:
        document.getElementById('divDetalleEmpleado').style.display = '';
    }
    else
    {
        //OCULTAMOS LA SECCION DEL DETALLE:
        document.getElementById('divDetalleEmpleado').style.display = 'none';
        
        //MOSTRAMOS LA SECCION DEL CATALOGO DE EMPLEADOS:
        document.getElementById('divCatalogoEmpleados').style.display = '';
    }
}

export function clearAndShowDetalleEmpleado()
{
    clearForm();
    setDetalleEmpleadoVisible(true);
}

