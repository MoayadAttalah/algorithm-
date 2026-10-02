let colors=["red","blue","green","yellow","purple"];
console.log(colors[0]+" "+colors[colors.length-1]);
console.log(colors[1]);
colors[2]="orange";
console.log(colors);

// ----------------------------------------------------

let numbers=[10,20,30,40,50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    
}

let numbers=[10,20,30,40,50];
for (let i = numbers.length-1; i >=0; i--) {
    console.log(numbers[i]);
    
}

// ----------------------------------------------------



let numbers=[5,10,15,20,25];
let position;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]==25) {
        position=i;
        break
    }
      }  
      if (position!==undefined) {
         console.log("25 found in position "+position);
      } else {
         console.log("25 is not found");
      }
       
   // ----------------------------------------------------



let score=[50,20,70,10,40];
let swap
do {
  swap=false;
for (let i = 0; i < score.length-1; i++) {
   if(score[i]>score[i+1]){
let temp=score[i];
score[i]=score[i+1];
score[i+1]=temp;
swap=true
   }
   
}

} while (swap==true);

console.log(score)


// let score=[50,20,70,10,40];
// let swap
// do {
//   swap=false;
// for (let i = 0; i < score.length-1; i++) {
//    if(score[i]<score[i+1]){
// let temp=score[i];
// score[i]=score[i+1];
// score[i+1]=temp;
// swap=true
//    }
   
// }

// } while (swap==true);

// console.log(score)



let names =["shatha","sara","lina","sami","dalia"];
let swapped;
do {
   swapped=false
  for (let i = 0; i < names.length-1; i++) {
 if((names[i+1].localeCompare(names[i]))<0){
let temp=names[i];
names[i]=names[i+1];
names[i+1]=temp;
swapped=true

 } 
}
} while (swapped);

console.log(names);

console.log(names.sort());






// ----------------------------------------------------

let animals=["dog","cat","rabbit"];
let animals2=[...animals,"elephent"];
animals2=["lion",...animals2]

animals2.splice(2,0,"tiger");
console.log(animals2);


// ----------------------------------------------------
let fruits=["apple","banana","cherry","date"];
let fruits2=[];
for (let i = 0; i < fruits.length-1; i++) {                //replacment of shift
   fruits2[i]=fruits[i+1]
}
console.log(fruits2);

fruits2.length=fruits2.length-1;
console.log(fruits2);
let fruits3=[]
for (let i = 0; i < fruits2.length; i++) {
if(fruits2[i]!=="banana"){
   fruits3.push(fruits2[i])
}
   
}
console.log(fruits3);

// ----------------------------------------------------

let array1=[1,2,3];
let array2=[4,5,6];
let array3=[array1 ,array2];
console.log(array3);
let array4=[];
for (let i = 0; i < array3.length; i++) {
    for (let j = 0; j < array3[i].length; j++) {
        array4.push(array3[i][j]);
    }
}
console.log(array4);
// ----------------------------------------------------


let items=["a","b","c","d","e"];
// let array1=[items[0],items[1],items[2]];
// let array2=[items[3],items[4]];
let array1=[];
let array2=[];
for (let i = 0; i < items.length; i++) {
    if(i<=2){
        array1.push(items[i]);
    }
    else{
        array2.push(items[i]);
    }
    
}
console.log(array1);
console.log(array2);

// ----------------------------------------------------

// let numbers=[1,5,10,15,20,25,30];
// let arrayNew=[];
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i]>15){
//         arrayNew.push(numbers[i]);
//     }
    
// }
// console.log(arrayNew);
// ----------------------------------------------------

function removeDublicate(a){
let newArr=[];
for (let i = 0; i <a.length; i++) {
    if(newArr.includes(a[i])==false)
    {
        newArr.push(a[i]);
    }
    
}
return newArr;
}
console.log(removeDublicate([1,2,2,3,4,4,5]));

// function rotate(a,n){
// for (let i = 0; i < n; i++) {
//     a.splice(0,0,a[a.length-1]);
//     a.pop();
// }
// return a;

// }
// console.log(rotate([1,2,3,4,5],2));






// ----------------------------------------------------

function oneSortedArrayToTwoSortedArray(arr0,arr1) {
   let arr3=[...arr0,...arr1];
let swap
do {
  swap=false;
for (let i = 0; i < arr3.length-1; i++) {
   if(arr3[i]>arr3[i+1]){
let temp=arr3[i];
arr3[i]=arr3[i+1];
arr3[i+1]=temp;
swap=true
   }
   
}

} while (swap==true);
return arr3;

}

console.log(oneSortedArrayToTwoSortedArray([1,3,5],[2,4,6]));
