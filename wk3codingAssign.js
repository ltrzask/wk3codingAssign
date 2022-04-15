// Step 1  make an array that contains theses values:
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//Step 1a - Subtract the first element from the last element:
console.log(ages[ages.length - 1] - ages[0]);

//Step 1b - Add a new age to teh end of array and repeats the subration step from above:
ages.push(66);
console.log(ages[ages.length - 1] - ages[0]);

//Step 1c - use a loop to iterate through the array to gert a total:
let totalAge = 0;
for(let i = 0; i < ages.length; i++)
{
    totalAge += ages[i];
}
//Creates and prints out the variable for the average age using the total above:
let averageAge = totalAge / ages.length;
console.log(averageAge);

//Step 2
