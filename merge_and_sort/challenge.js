// The solution using builtin functions
const array1 = [2, 3, 14, 5];
const array2 = [8, 3, 4, 5];

const bigArr = array1.concat(array2);

bigArr.sort((a, b) => a - b);

console.log(bigArr);

// The below solution does not use builtin functions

const mergeAndSort = (arr1, arr2) => {
  let mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
};

const arr1 = [4, 3, 5, 2, 3];
const arr2 = [1, 2, 6, 7, 8];

let result = mergeAndSort(arr1, arr2);
console.log(result);
