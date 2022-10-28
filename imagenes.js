function imagen(){
    let op = parseInt(document.getElementById("num").value);
    let img = document.getElementById("imagen");
    switch (option) {
        case 1:
            img.src="Recursos/tilin.jpg";
            break;
        case 2:
            img.src="Recursos/tilin2.jpg";
            break;
        case 3:
            img.src="Recursos/tilin3.jpeg";
            break;
}
}