const palindromes = function (someString) { //Some things to say
    let removeWhitespace = someString.replace(/\W|_/g, '');
    let reversedString = "";
    let isPalindrome = false;
    for(let i=removeWhitespace.length-1; i>=0;i--){
        reversedString = reversedString + removeWhitespace[i];
    }
    if(reversedString.toLowerCase() === removeWhitespace.toLowerCase()){
        isPalindrome = true;
    }else{
        isPalindrome;
    }

    return isPalindrome;
};

console.log(palindromes("A car, a man, a maraca"));

// Do not edit below this line
module.exports = palindromes;
