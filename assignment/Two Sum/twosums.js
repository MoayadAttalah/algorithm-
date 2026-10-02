// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



function twoSum(arr,target){
 
  let rem=0
  for (let i = 0; i < arr.length; i++) {
    rem = target - arr[i];
    if (arr.includes(rem)) {
      return [i,arr.indexOf(rem)];
    }
  }
}
console.log(twoSum([2,15,7,15],9));
