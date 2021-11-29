const removeFromArray = function(array, ...number) {
    for(let i=0; i<number.length;i++){
        let argument = number[i];
        for(let j=0; j<array.length;j++){
            if(array[j] === argument){
                array.splice(j,1);
            }
        }
    }
    return array;

    
}

console.log(removeFromArray([1,2,3,4], 2,4))

// Do not edit below this line
module.exports = removeFromArray;

