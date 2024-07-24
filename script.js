//Checking array elements
const hasApple = fruits.includes("apple");
const allNumbersGreaterThanZero = numbers.every(num => num > 0);
const someNumbersGreaterThanThree = numbers.some(num => num > 3);
console.log("Has Apple:", hasApple);
console.log("All Numbers Greater Than Zero:", allNumbersGreaterThanZero);
console.log("Some Numbers Greater Than Three:", someNumbersGreaterThanThree);

// Array of object sorting
const people = [
    { name: "saahi", age: 30 },
    { name: "krithi", age: 25 },
    { name: "nivi", age: 35 }
];
people.sort((a, b) => a.age - b.age);
console.log("Sorted People by Age:", people);

// Merging the arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log("Merged Array:", mergedArray);

//Creating new array with a given length
const length = 5;
const newArray = Array.from({ length }, (_, i) => i + 1);
console.log("New Array with Length:", newArray);

//Array deduplication
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const deduplicatedArray = [...new Set(arrayWithDuplicates)];
console.log("Deduplicated Array:", deduplicatedArray);