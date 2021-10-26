//Ejercicio 4 calcular rangos!

const range = (a,b,c) => {
    let result = [];
    if (b >= a) {
        //Sigue el flujo normal del codigo
    } else {
       let numMax = a;
       let numMin = b;
       a = numMin;
       b = numMax;  
    }
   while(a <= b) {
       result.push(a);
        if(c > 0) {
            a = a + c;
        } else {
            a++
        }
    }
    return result;
}
// console.log(range(2,10,2));

const suma = (array) => {
    // let someArray = [1,2,3,4,5];
    let sumaTotal = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    // console.log(sumaTotal);
    return sumaTotal;
}
console.log(range(2,10,3));
console.log(suma(range(2,10,3)));


//Ejercicio 4!!

let myArray = [1,2,3,4,5];
const reverseArray = (array) => {
    let newArray = [];
    let current = array.length;
    for (let i = 0; i < current; i++){
        newArray.push(array.pop());
    }
    console.log(newArray);
    return newArray;
}
myArray = reverseArray(myArray);
myArray = reverseArray(myArray);


/// Ejercio 3!!! 
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }