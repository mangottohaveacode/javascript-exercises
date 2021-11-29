const reverseString = function(str) {
    //kazumi
    let reversed = "";
    for(let i=str.length; i>=0;i--){
        reversed = reversed + str.charAt(i);
        
    }
    return reversed;
};
console.log(reverseString("Hello"))

// Do not edit below this line
module.exports = reverseString;
