function calcu(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=parseInt(document.getElementById("select").value);
    let resul=document.getElementById("resul");
    
    if(op==1){
        resul.value=num1+num2;
    }