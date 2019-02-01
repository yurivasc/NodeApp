/*
A palindrome is a word that reads the same backward or forward.

Write a function that checks if a given word is a palindrome. Character case should be ignored.

For example, isPalindrome("Deleveled") should return true as character case should be ignored, resulting in "deleveled", which is a palindrome since it reads the same backward and forward.
*/

const isPalindrome = (str) => {
    if (str.toLowerCase().split('').reverse().join('') == str.toLowerCase()){
        return true;
    }else{
        return false;
    }
}


var is = isPalindrome('dalad')
console.log(is);