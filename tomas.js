let hora=24;
let frecuencia=6;
let total= 24/frecuencia;
let tom=0;
if(total<6){cantidad=6;}
if(cantidad>13){cantidad=13;}
for(let i=1; i <=frecuencia; i+=1){
    if(hora>23){hora=hora-24;}
console.log("toma:"+i+" || hora:"+hora);
hora=hora+frecuencia;
}
