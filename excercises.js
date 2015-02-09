/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    
    if (num1 > num2) {
        return num1;
    }
    else if (num2 > num1) {
        return num2;
    }
    else {
        return "they are equal or can't be compared";
    };
}



// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){

    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else if (num3 > num1 && num3 > num2) {
        return num3;
    }
    else {
        return "at least 2 are equal or can't be compared";
    }
};



// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------


// how I originally did it
function isVowel(char) {

    var vowels = ["a", "e", "i", "o", "u"];
    return !!vowels.filter(function(vowel){
        return vowel === char;
    }).length;
};


// how you showed us in class
function isVowel(char){

    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < vowels.length; i++) {
        if (vowels[i] === char) {
            return true;  // can do true here because it's within the isVowel function
        }
    };
    return false;

};


function isVowel(char) {

    var vowels = ["a", "e", "i", "o", "u"];
    var hasVowel = "false";
    vowels.forEach(function(vowel) {
        if (char === vowel) {
            hasVowel = true; // can't return true here because then the loop would stop
        }
    });
    return hasVowel;
};



// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(arr){

    return arr.reduce(function(finalSum, num) {
        finalSum += num;
        return finalSum;
    });
};

function multiply(arr){

    return arr.reduce(function(finalSum, num) {
        finalSum *= num;
        return finalSum;
    });
};



// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){

    var stringArray = string.split("");
    stringArray.reverse();
    return stringArray.join("");
}



// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
var words = ["test", "words", "gobbledygook"];


function findLongestWord(words) {

    var wordLongest = 0; // set a variable that will have the longest length in it
    words.forEach(function(word) {
        var wordCurrent = word.length;  // set the current word's length to a new variable
        if (wordCurrent > wordLongest) { // compare the current length to the longest length
            wordLongest = wordCurrent; // if the current length is longer than the longest, set the current to the longest
        }
    });
    return wordLongest;
}





// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){

    return words.filter(function(word) {
        return word.length > i;
    });
};

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

var rando = "abbabcbdbabdbdbabababcbcbab";

function charFreq(string){

    var newArray = string.split("");
    var frequencies = {};
    newArray.forEach(function(currentChar){
        if ( frequencies[currentChar]) {
            frequencies[currentChar]++;
        }
        else {
            frequencies[currentChar] = 1;
        }
    });

    return frequencies;


};