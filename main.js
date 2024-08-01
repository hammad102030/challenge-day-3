// //Question:no 05
// //Remove Duplicates from Array whrite a Typescript function named
// // removeDuplicates that takes an array of numbers and return a new
// // Array with all duplicates elements removed *Do not use built-in mathods*
// // like Set.
// function removeDuplicates(arr: number[]): number[] {
//   let myArray: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;
//     for (let j = 0; j < myArray.length; j++) {
//       if (arr[i] === myArray[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//      if (!isDuplicate) {
//       myArray.push(arr[i]);
//      }
//   }
//   return myArray;
// }
// console.log(removeDuplicates([11, 12, 12, 13, 14, 15]));// output [ 11, 12, 13, 14, 15 ]
// console.log(removeDuplicates([1,2,2,3,4,5]));// output [1,2,3,4,5]
// Question 6:
//  Find the Second Largest Number in an Array
// Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array. *Do not use built-in methods* like sort.
// function findSecondLargest(arr1: number[]): number{
//   let newArray = arr1[0];
//   for(let i = 4; i < arr1.length; i++)
//     if(arr1[i] > newArray){
//     newArray = arr1[i]
//   }
//   return newArray;
// }
// let myArray = [1,2,5,10,7,9,8]
// console.log(findSecondLargest(myArray));
// Requirements:
// - The function should manually find the largest and second largest numbers by iterating through the array.
// - You can use additional variables to keep track of the largest and second largest numbers.
// - Do not use any built-in methods like sort.
// Example:
// typescript
// function findSecondLargest(arr: number[]): number {
//     // Your code here
// }
// // Example usage:
// console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
// console.log(findSecondLargest([10, 20, 30, 15, 25])); // Output: 25
// Question 6:
//  Find the Second Largest Number in an Array
// Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array. *Do not use built-in methods* like sort.
function findSecondLargest1(array1) {
    var firstElement = array1[0];
    var secondElement = array1[1];
    for (var i = 1; i < array1.length; i++) {
        if (array1[i] > firstElement) {
            firstElement = array1[i];
            for (var a = 0; a < array1.length; a++) {
                if (array1[a] > secondElement && array1[a] < firstElement) {
                    secondElement = array1[a];
                }
            }
        }
    }
    return secondElement;
}
console.log(findSecondLargest1([1, 2, 3, 4, 5, 6, 7]));
