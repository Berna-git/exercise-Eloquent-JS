// Ejercico 1!!!

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays)
let newArray = arrays.reduce((previousValue, currentValue) => previousValue.concat(currentValue));
console.log(newArray)   


/// Exercise 3 

// loop(3, (n => n > 0),( n => n - 1), console.log(n));

//Inicializador
//condicion
//iterador
// bloque de codigo

function repetir(n, accion) {
    for (let i = 0; i < n; i++) {
      accion(i);
    }
}

// repetir(3, console.log);

// function condition(n) {
//     if(n > 0) {
//         return true;
//     } else {
//         return false;
//     }

function iterator(n) {
    if(n > 0) {
        console.log('n es = ' + n)
        n = n - 1; 
        iterator(n); 
    } else {
        
    }
}


function loop(n,iterador,staments) {
       staments(iterador(n));
}
loop(5,iterator,console.log);

// Exercise 3 

const cada = (array, functionFilter) => {
    console.group(array.some(functionFilter));
}

let myArray = [1,2,3,4,10];

cada(myArray, item => item < 10)

