function imagen(){
    let op = parseInt(document.getElementById("num").value);
    let img = document.getElementById("imagen");
    switch (option) {
        case 1:
            img.src="EVIDENCIA-3/recursos/tilin.jpg";
            break;
        case 2:
            img.src="EVIDENCIA-3/recursos/tilin2.jpg";
            break;
        case 3:
            img.src="EVIDENCIA-3/recursos/tilin3.jpeg";
            break;
}
}