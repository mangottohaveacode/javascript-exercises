const repeatString = function(someString, number) {
    let value="";
    if(number < 0){
        return "ERROR"
    }
    for(let i=1; i<=number;i++){
        value = value + someString;
    }
    return value;
};

console.log(repeatString("Hey",-1))

// Do not edit below this line
module.exports = repeatString;
