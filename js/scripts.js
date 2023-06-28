const formulario = document.getElementById('formulario'); //Obtiene el documento con el ID

formulario.addEventListener('submit', async(e) => { e.preventDefault();//Agrega un evento de escucha al formulario cuando se envía 
await fetch('https://sheet.best/api/sheets/416b4c78-eedc-4a45-b554-a00503304487', { //Accedemos al link de drive con el que se accede
    method: 'POST',//Método que nos va ayudar a enviar los datos
    mode: 'cors',//especifica que la solicitud se realiza utilizando una política de origen cruzado.
    headers: {  // establece las cabeceras de la solicitud.
    'Content-Type': 'application/json' //indica que los datos se enviarán en formato JSON.
    },
    body: JSON.stringify({ //convierte un objeto JavaScript en una cadena JSON
        "Nombre_Dominio": formulario.nombre.value,
        "Direccion_Dominio": formulario.direccion.value,
        "Nombre_Admin": formulario.nombre_admin.value,
        "Ciudad_Admin": formulario.ciudad_admin.value,
        "Organizacion_Admin": formulario.organizacion_admin.value,
        "Telefono_Admin": formulario.telefono_admin.value,
        "Correo_Admin": formulario.correo_admin.value,
        "Nombre_Tec": formulario.nombre_tecnico.value,
        "Ciudad_Tec": formulario.ciudad_tecnico.value,
        "Telefono_Tec": formulario.telefono_tecnico.value,
        "Correo_Tec": formulario.correo_tecnico.value,
        "IP_Tec": formulario.direccion_ip.value,
        "Server_Tec": formulario.nserver.value,
        "Registro_Tec": formulario.tipo_registro.value,
        "Dominio_Tec": formulario.dominio.value
    })
    });

   
});