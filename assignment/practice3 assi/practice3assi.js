function welcome(){
  console.log("Welcome to coding!");
}
function square(num){
console.log(num**2);
}
function convertToCelsius(f){
  return (f-32)*5/9;

}
function isEven(num){
if(num%2==0){
return true;
}else{
  return false;
}
}
welcome();
square(2);
let t=convertToCelsius(100);
let y=isEven(9);
console.log(t);
console.log(y);