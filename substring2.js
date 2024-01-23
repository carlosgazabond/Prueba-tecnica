function main(cadena){

    length= cadena.length;

    for(i=0; i<length-1;i++){
        if(cadena[i]== cadena[i+1]){

            if(i+2 <length && cadena[i] != cadena[i+2]){
                return true;

                
            }

            else if(i+2 === length){
                return true;
            }
        }

    }
    return false;

}

cadena= "tapaa";
resultado =main(cadena);
console.log(resultado)