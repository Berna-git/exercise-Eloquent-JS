//Ejercicio 1!! Resuelto

for(let i = 0; i <= 10; i++) {
    document.write("#" + "<br>");
    if(i == 10) {
        break;  
    }
    for(let j = 0; j <= i; j++) {
        document.write("#");
    }
}

document.write("<br>")
///////////////////////////////////////////////
//Ejercicio 2!! Resuelto!
for (let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("fizzBuzz");
        continue;
    } else if ( i % 3 === 0){
        console.log("fizz")
        continue
    } else if (i % 5 === 0) {
        console.log("buzz");
        continue;
    }
    console.log(i);
}

// Ejercicio 3!! Resuelto!
for(let i = 1; i <= 8; i++) {
    for(let j = 1; j <= 8; j++){
        // document.write(j)
        if(i % 2 == 0) {
            if(j % 2 == 0){
                document.write("#");
            } else {
                document.write(` o `);
            }
        } else {
             if( j % 2 == 0) {
                 document.write(` o `);
             } else {
                 document.write("#")
             }  
        }
            if(j == 8) {
                document.write("<br>")
            }
        
    }
}