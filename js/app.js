var numbertarjet= prompt("Ingrese el número de su tarjeta");
function isValidCrad(numbertarjet){
    var newarr =[];
    var sum =0;
    var sumimp=0;
   
    for(i=0; i< numbertarjet.length; i++){
       newarr.push(numbertarjet[i]);   
    }
    newarr.reverse();

   // console.log(newarr); 3,2,1
    for(j=1;j< newarr.length;j=j+2){ 
        var mulpar= newarr[j]*2 ;
        if(mulpar >=10){
            var cadena =mulpar.toString();
            cadena.split("");
            for(k=0; k< cadena.length;k++)
            
            sum= parseInt(cadena[k]) +sum;
            
        }
        else{
            newarr[j]=mulpar;
           sum = newarr[j] + sum
        }
    }
    for(l=0; l<newarr.length;l=l+2){
     
       var sumimp= sumimp + parseInt(newarr[l]);

    }
       

    var validar=(sumimp + sum)%10
    if(validar ==0){
    alert("El número de tarjeta es valido")
}
else{
    alert("El número de tarjeta es invalido")
}
}
isValidCrad(numbertarjet);
