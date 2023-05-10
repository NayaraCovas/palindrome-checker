/* Palindrome Checker
Declare a function isPalindrome(str) that takes a string as an input.

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. */

//PSEUDOCODE
//Write a function checkPalindrome(str)
//For loop
//Check (if) Palindrome => true  if not=>false




var checkPalindrome = function(word){
    var inputWord = word;
    var checkString = inputWord.split(" ").join("").toLowerCase();//<3
        for(var i = 0; i < checkString.length/2; i++){
        if(checkString[i] != checkString[checkString.length-i-1]){//
          return "Is not palindrome"; 
        }
    }
    return "Is palindrome";
}
    var output = checkPalindrome("rasecar");
    console.log(output);


    /* OR:


     //Using length
     function isPalindrome(str){
        const len = str.length;

        for (let i=0; i<len/2; i++){ //len/2 is used so it id not necessary to change the value eveytime that change the word  


            if(str[i]===str[len-1-i]){
                return "Its is a palindrome word"
            }
        }
        return "it is not a palindrome word"
    }

    const str = "madam";
    const result = isPalindrome(str);
    console.log(result)



    //With function
    function isPalindrome2(str){
        const str2 = str.replace(/\W+|_/g, "").toLowerCase();
        const arrayValues = string2.split('');
        const reverseArray = arrayValues.reverse();
    
        const reverseString = reverseArray.join('');//.join to make the result a string
    
        if(str2 ==reverseString){
            consol.log("Its is a palindrome word")
        }else{
            console.log("it is not a palindrome word")
        }
    }
    
    const str ="madam";
    
    const result = isPalindrome2(str);   

 */

