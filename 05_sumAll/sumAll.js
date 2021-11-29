const sumAll = function(number1,number2) {
    let sum = 0;

    if((typeof number1 == "string") || (typeof number2 == "string")){
        return "ERROR";
    }

    if((number1 < 0) || (number2 < 0)){
        return "ERROR";
    }else if((isNaN(number1)) || (isNaN(number2))){
        return "ERROR";
    }

    if(number1 < number2){
        for(let i=number1; i<=number2;i++){
            sum = sum + i;
        }
    }else if(number2<number1){
        for(let i=number2; i<=number1;i++){
            sum = sum + i;
        }
    }
    
    return sum;
};

console.log(sumAll(4,7));

// Do not edit below this line
module.exports = sumAll;
