//Ejercicio 1!! Resulto

for(let i = 0; i <= 10; i++) {
    document.write("#" + "<br>");
    if(i == 10) {
        break;  
    }
    for(let j = 0; j <= i; j++) {
        document.write("#");
    }
}
///////////////////////////////////////////////

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