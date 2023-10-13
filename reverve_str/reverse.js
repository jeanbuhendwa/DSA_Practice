const reverse = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please type any word";
  } else {
    let reversedStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr.push(str[i]);
    }
    console.log(reversedStr);
    return reversedStr.join("");
  }
};

const reverse2 = (str) => str.split("").reverse().join("");

let result = reverse2("Hello");
console.log(result);
