//array
var array = [];
array=[1,2,3,4.5,"Mehar"];
console.log(array);

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

//arraymethods
// 1. Array length()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const size = fruits.length; // Returns 4
console.log(size);

// 2. Array toString()
const fruitString = fruits.toString(); // Returns "Banana,Orange,Apple,Mango"
console.log(fruitString);

// 3.Array at()
const thirdFruit = fruits.at(2); // Returns "Apple"
console.log(thirdFruit);

// 4. Array join()
const joinedString = fruits.join(" | "); // Returns "Banana | Orange | Apple | Mango"
console.log(joinedString);

// 5. Array pop()
const removedFruit = fruits.pop();
console.log(removedFruit);

// 6. Array push()
fruits.push("Mango"); // Adds "Mango" to the end
console.log(fruits);

// 7. Array shift()
const removed = fruits.shift(); // Removes "Mango" and returns it
console.log(removed);

// 8. Array unshift()
fruits.unshift("Mango"); // Adds "Mango" to the beginning
console.log(fruits);

// 9. Array delete()
const arr = ["I", "go", "home"];
delete arr[1]; //(leaves an empty slot)

// 10. Array concat()
// 11. ArraycopyWithin()
const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = originalArray.copyWithin(2,1,3);
console.log(modifiedArray);
// 12. Array flat()
var array =[[1,2],[3,4],[5,6]];
var newarray= array.flat();
console.log(newarray);
// 13. Array splice()
console.log(fruits.splice(2,1,"Lemon","Kiwi"));
// 14. ArraytoSpliced()
const fruits2 = fruits.toSpliced(2,0,"Lemon","Kiwi");
console.log(fruits2);
// 15. Array slice()
const citrus = fruits.slice(1,3);
console.log(citrus);
//function

let n = 5;
var mehar=function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
//console.log(factorial(n));
console.log(mehar(n));
