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
