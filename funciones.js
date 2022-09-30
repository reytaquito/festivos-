function calcularFecha() {
    const dia=parseInt(document.getElementById("dia").value);
    const mes= parseInt(document.getElementById("mes").value)-1;
    const anio=parseInt(document.getElementById("anio").value);
    const resultado=document.getElementById("respuesta");
    const date=new Date(anio, mes, dia);
    const diaSemana= date.getDay();
    let diaSemanaTexto=""
    switch (diaSemana) {
        case 0: case 6:
            diaSemanaTexto="No se laboro"
            break;
        default:
            diaSemanaTexto="Se laboro"
            break;
    }
    resultado.value=diaSemanaTexto;
    console.log(diaSemanaTexto);
}



