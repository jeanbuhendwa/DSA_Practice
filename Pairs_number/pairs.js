const arrNum = [1, 2, 5, 6, 7, 8, 9, 10];

const pairNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
};

pairNumbers(arrNum);

// Big O notation of this arr is O(n*n) => O(n^2) because of nested loops.

const arr1 = [1, 2, 3, 56, 7];
const arr2 = [0, 9, 8, 7];
const containingCommonItem = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

containingCommonItem(arr1, arr2);

// The big 0 notation of the above function is O(n^2) because of nested loops
