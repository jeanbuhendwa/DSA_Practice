const array = ["a", "b", "c", "d", "e"];

array.push("f"); //The time complexity is O(1) because it only takes 1 operation to add an element to the end of the array.

array.pop(); //The time complexity is O(1) because it only takes 2 operations to remove the last element of the array.

array.unshift("A"); // The time complexity is O(n) because it takes n operations to add an element to the beginning of the array.

array.splice(2, 0, "hello"); // The time complexity is O(n) because it takes n operations to add an element to the middle of the array.

console.log(array);
