const fibonacci = function(indexIWant) {
    let n1 = 0;
    let n2 = 1;
    let nextNumber = 0;
    let myArray = [n1,n2]
    for(let i=1; i<100;i++){
        nextNumber = n1 + n2;
        myArray.push(nextNumber);
        n1 = n2;
        n2 = nextNumber;
    }
    return myArray[indexIWant];
};

console.log(fibonacci(9));

// Do not edit below this line
module.exports = fibonacci;
