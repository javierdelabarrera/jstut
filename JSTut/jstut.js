console.log("Init app");

// pi = 4/1 - 4/3 + 4/5 - 4/7 ...

function calcPI(iterations) {
    let pi = 0;
    let divisor = 1;
    // con este for calculamos pi la cantidad de veces que iterations sea
    for (let i = 0; i < iterations; i++) {
        pi = pi + (4 / divisor) - (4 / (divisor + 2));
        divisor += 4;
    }
    // resultado al front via output1 id
    document.getElementById("output1").value = pi.toFixed(10);
}

// fib = 1 1 2 3 5 8 13 21 34 ...

let fibList = [];
function getFibList(howMany) {
    for (let i = 0; i < howMany; i++) {
        fibList[i] = fib(i);
    }
    // remuevo primer elemento del array para evitar mostrar el 0
    fibList.shift();
    document.getElementById("output1").value = fibList.join(", ");
}

function fib(whichNum){
    let num1 = 1;
    let num2 = 0;
    let temp;
    i = 0;
    while (i < whichNum) {
        temp = num1;
        num1 = num1 + num2;
        num2 = temp;
        i++;
    }
    return num2;

}