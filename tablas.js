function Generar() {
let long=parseInt(document.getElementById("long").value);
let tabla = document.getElementById('tabla').value;
let tipo = document.getElementById("tipo").value;

    if(tipo==1){
    for (let i = 0; i < long; i++) {
        document.write(tabla+" X "+i+" = "+(i*tabla)+"<br>");

    }
    }
}