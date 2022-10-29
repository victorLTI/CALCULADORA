function calcu(){
//se declaran las variables num(perfectos) y resul(imprimir)//
let num=parseInt(document.getElementById("num").value);
let resul=document.getElementById("resul"); 
//variables para los ciclos for//
let cantidad=1;
let suma= 0;
let i=1;
let contador=1;
//innerhtml que usare referenciado a resul para imprimir los numeros//
resul.innerHTML="";
//inicio del contador para saber cuantos numper debe sacar con if anidados//
 do{
    for(let n=1; n<i;n++){
        if(i%n==0){suma+=n;}   
        }
    if(suma==i){
//imprimir resultado
        resul.innerHTML+=i+", ";
        contador++
    }
    suma=0
    i++
//fin de ciclo while
    }while(contador<=num);
}