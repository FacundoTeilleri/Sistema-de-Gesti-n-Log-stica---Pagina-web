async function sweet() {

    let { value: destino } = await Swal.fire({
        title: "Seleccione el destino Local / Nacional",
        text: "Destino",
        theme: "dark",
        input: "select",
        inputOptions: {
            lo: "local",
            na: "nacional"
        },
        inputPlaceholder: "Seleccione el envio deseado.",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        icon: "question",
        
        allowOutsideClick:false,
        allowEscapeKey:false

    });

    if (destino == "na") {

        await Swal.fire({
            title: "Elegiste Nacional",
            icon: "success",
            theme: "dark",
            
        allowOutsideClick:false,
        allowEscapeKey:false

        });

    } else {

        await Swal.fire({
            title: "Elegiste Local",
            icon: "success",
            theme: "dark",
            
        allowOutsideClick:false,
        allowEscapeKey:false

        });
    }

    let { value: peso } = await Swal.fire({
        title: "Ingrese el peso de su paquete",
        input: "number",
        inputPlaceholder: "Escriba el peso total de su paquete",
        theme: "dark",
        showConfirmButton: true,
        confirmButtonText: "Confirmar",
        
        allowOutsideClick:false,
        allowEscapeKey:false

    });

    if (peso <= 5) {

        precio = 1500 + (peso * 200);

    } else {

        precio = 1500 + (peso * 400);
    }

    if (destino == "na") {
        precio = precio + 1000;
    }

    let { value: express } = await Swal.fire({
        title: "¿Desea envio Express?",
        input: "select",
        inputOptions: {
            si: "SI",
            no: "NO",
            
    allowOutsideClick:false,
        allowEscapeKey:false

        },
        inputPlaceholder: "Seleccione una opcion",
        theme: "dark",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        
        allowOutsideClick:false,
        allowEscapeKey:false

    });

    if (destino == "na" && express == "si") {
        precio = precio + 800;
    }

    await Swal.fire({
        title: "Presupuesto final",
        text: `El costo final de su envio es de $${precio}`,
        icon: "success",
        theme: "dark",
        
        allowOutsideClick:false,
        allowEscapeKey:false,

        imageUrl:"Imagenes/like.png",
        width:"200",
        height:"200"
    });
}


