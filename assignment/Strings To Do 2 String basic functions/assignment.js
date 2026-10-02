function reverseString(str) {
  let str2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }
  return str2;
}
console.log(reverseString("hello"));
//-----------------------------------------------------------

function removeEvenLengthStrings(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 !== 0) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

console.log(removeEvenLengthStrings(["hello", "hi", "how"]));
//-----------------------------------------------------------

function intToRomain(num) {
  let numThousends = Math.floor(num / 1000);
  num = num % 1000;
  let numHundreds = Math.floor(num / 100);
  num = num % 100;
  let numTens = Math.floor(num / 10);
  num = num % 10;
  let numOnes = num;
  let str = "";
  for (let i = 0; i < numThousends; i++) {
    str = str + "M";
  }
  do {
    if (numHundreds == 9) {
      str = str + "CM";
      numHundreds = numHundreds - 9;
    } else if (numHundreds >= 5) {
      str = str + "D";
      numHundreds = numHundreds - 5;
    } else if (numHundreds >= 4) {
      str = str + "CD";
      numHundreds = numHundreds - 4;
    } else if (numHundreds >= 1) {
      str = str + "C";
      numHundreds = numHundreds - 1;
    }
  } while (numHundreds != 0);

  do {
    if (numTens == 9) {
      str = str + "XC";
      numTens = numTens - 9;
    } else if (numTens >= 5) {
      str = str + "L";
      numTens = numTens - 5;
    } else if (numTens >= 4) {
      str = str + "XL";
      numTens = numTens - 4;
    } else if (numTens >= 1) {
      str = str + "X";
      numTens = numTens - 1;
    }
  } while (numTens != 0);

  do {
    if (numOnes == 9) {
      str = str + "IX";
      numOnes = numOnes - 9;
    } else if (numOnes >= 5) {
      str = str + "V";
      numOnes = numOnes - 5;
    } else if (numOnes >= 4) {
      str = str + "IV";
      numOnes = numOnes - 4;
    } else if (numOnes >= 1) {
      str = str + "I";
      numOnes = numOnes - 1;
    }
  } while (numOnes != 0);

  return str;
}

console.log(intToRomain(444));
//-----------------------------------------------------------

function romainToInt(str) {
    let int=0;
    for (let i = 0; i < str.length; i++) {
        if(str[i]=="M"){
            int=int+1000;
        }
        else if(str[i]=="C"&&str[i+1]=="M"){
            int=int+900;
            i++;
        }
        else if(str[i]=="D"){
            int=int+500;
        }
        else if(str[i]=="C"&&str[i+1]=="D"){
            int=int+400;
            i++;
        }
         else if(str[i]=="C"){
            int=int+100;
        }
        else if(str[i]=="X"&&str[i+1]=="C"){
            int=int+90;
            i++;
        }
          else if(str[i]=="L"){
            int=int+50;
        }
          else if(str[i]=="X"&&str[i+1]=="L"){
            int=int+40;
            i++;
        }
          else if(str[i]=="X"){
            int=int+10;
        }
          else if(str[i]=="I"&&str[i+1]=="X"){
            int=int+9;
            i++;
        }
            else if(str[i]=="V"){
            int=int+5;
        }
            else if(str[i]=="I"&&str[i+1]=="V"){
            int=int+4;
            i++;
        }
         else if(str[i]=="I"){
            int=int+1;
        }
        
    }
   return int 
}

console.log(romainToInt("III"));
