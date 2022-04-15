// 1 - make an array that contains theses values:
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// 1a - Subtract the first element from the last element:
console.log(ages[ages.length - 1] - ages[0]);

//1b - Add a new age to teh end of array and repeats the subration step from above:
ages.push(66);
console.log(ages[ages.length - 1] - ages[0]);

//1c - use a loop to iterate through the array to get a total:
let totalAge = 0;
for(let i = 0; i < ages.length; i++)
{
    totalAge += ages[i];
}
//Creates and prints out the variable for the average age using the total above:
let averageAge = totalAge / ages.length;
console.log(averageAge);

//2 - Create an Array of Names:
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//2a - create a variable for the total amount of letters for each name
// that will loop throughthe array and add the length of was name to the total:
let nameLetters = 0;

for(let i = 0; i < names.length; i++)
{
    nameLetters += names[i].length;
}
//create a variable for the avarage number of letters and calcualtes the average:
let averageLetters = nameLetters / names.length;
console.log(averageLetters);

//2b - creates a variable to hold the concatenation of all the names and loops through the array and adds to the variable:
let totalNames = "";

for(let i = 0; i < names.length; i++){
    totalNames += (names[i] + " ");
}
console.log(totalNames);

//3 - How do you access the last element of an array?
// Use the array name then square brackets, array name.length -1.
//Example: arrayName[arrayNames.length - 1]

//4 - How do you access the first element of an array?
//You need to referance the poition of the very first element which is 0. Arrays always start at 0.
//Example: arrayName[0] will return the first element of the array.

//5 - Create a new array and write a loop over the previous names array and add the length of each name to the new array:
let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    
}
    console.log(nameLengths);

//6 - write a loop to iterate over the nameLengths array and calculate the sum of tall the elements in the array: 
let sumLength = nameLengths.reduce(function(acc, currentValue){
    return acc + currentValue;
});
console.log(sumLength);

//7 - Write a function to that takes two parameters as arguments and returns the cord concatenated to itself n amount of times:
// If you want you can add a space right after the ! inside the quotes that will space out the repeated word(s).
function speak(word, n) {
    let words= "";
    for (let i = 0; i < n; i++) {
        words = words + word;
              
    }
    return words;
}
console.log(speak("Hey Listen!", 6));

//8 - Create a function that takes a first and last name and returns it as a full name with a space in between:
function fullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}
fullName("Cloud", "Strife");

//9 - Create a function that takes the total sum of all the number in an array and returns true if the sum is more than 100.
//But it will return false if less than 100:
function isBigEnough(array){
    let sum = array.reduce(function(acc, currentValue){
        return acc + currentValue;
    });
    if(sum > 100){
        return true;
    }
    return false;
}
console.log(isBigEnough([23, 5, 6, 90]));

//10 - Create a function that takes an array of numbers and returns the average of all the elements in the array:
function averageNumbers(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
        return sum / array.length;
}
console.log(averageNumbers([56, 7, 40, 17]));

//11 - Create a function that takes two array of numbers and if the avarage of the first array is greater than the avrage of the second array
// than it will return true.
function compareNumbers(first, last){
    let sumFirst = 0;
    let sumLast = 0;
    for (let i = 0; i < first.length; i++) {
        sumFirst = sumFirst + first[i];
    }
    for (let i = 0; i < last.length; i++) {
        sumLast = sumLast + last[i];
    }
    if ((sumFirst / first.length) > (sumLast / last.length)){
        return true;
    }
    return false;
}
console.log(compareNumbers([3,6,72], [3,4,40]));

//12 - Create a function calls willBuyDrink that takes a boolean isHotOutside and moneyInPocket hat returns true if it is hot oustside and money is greater than 10.50.
function willBuyDrink(isHotOustside, moneyInPocket){
    if (isHotOustside > 80 && moneyInPocket > 10.50){
        return true;
    }    
    return false;
}
console.log(willBuyDrink(95, 17.50));

//13 - make your own
