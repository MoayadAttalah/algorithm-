
function removeBlanks(str) {
  let strWithoutBlanks = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      strWithoutBlanks += str[i];
    }
  }
  return strWithoutBlanks;
}
console.log(removeBlanks("  my na me  is m o a yad"));

// ........................................................................

function getDigits(str) {
  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    // if(str[i]=="0"||"1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"){
    if (str[i] >= "0" && str[i] <= "9") {
      str2 = str2 + str[i];
    }
  }
  return +str2;
}
console.log(getDigits("abc123"));

console.log(typeof getDigits("abc123"));

// ........................................................................

function acronym(str) {
  let str1 = str.toUpperCase().trim();
  let arr2 = str1.split(" ");
  let arr3 = [];

  for (let i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i][0]);
  }
  let str2 = arr3.join("");
  return str2;
}
let y = acronym("  gg there is  no  fr ee coffe ");

console.log(y);
// ........................................................................

function countNonSpace(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      count++;
    }
  }
  return count;
}
console.log(countNonSpace(" hello world  ! "));
// ........................................................................

function removeShorterStrings(arr, minLenght) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= minLenght) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

console.log(
  removeShorterStrings(["hellooo", "ali", "how", "are you doing"], 6),
);
// ........................................................................
