// Ejercicio 1

function min (a,b) {
    if( a > b) {
        return console.log(b);
    } else if (a === b) {
        return console.log("son iguales")
    } else { 
        return console.log(a);
    }
}
min(2,3)
min(0,-10)
min(3,3)

//Ejercico 2

function esPar(n){
    if ( n < 0) {
        console.log("tu numero no es positivo");
    } else {
    let history = n;
    if (history === 0) {
        console.log(true);
    } else if ( history === 1) {
        console.log(false);
    } else {
        history -= 2;
        esPar(history)
    }
}
}
esPar(-1)
esPar(30)
esPar(50)
esPar(75)

// Ejercico 3!!

function contarFs(str) {
    let  contardor = 0;
    for(let i = 0; str.length > i; i++) {
        if(str[i] === "F"){
             contardor += 1;
        }
    }
    console.log("EL numero de f Es: " + contardor);
}
contarFs("FFFFaa");

function contarCaracteres(cadena,letra) {
    let  contardor = 0;
    for(let i = 0; cadena.length > i; i++) {
        if(cadena[i] === letra){
             contardor += 1;
        }
    }
    console.log("EL numero de "+ "(" + letra+ ")" + "    Es: " + contardor);
}

contarCaracteres("golaaaasasqweqaaa","a");
