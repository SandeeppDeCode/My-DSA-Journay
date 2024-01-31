/*
Selection Sort -> Select the minimum and swap
Array to Sort = [13,46,24,52,20,9]
Step 0 ---- [ 9, 46, 24, 52, 20, 13 ]
Step 1 ---- [ 9, 13, 24, 52, 46, 20 ]
Step 2 ---- [ 9, 13, 20, 52, 46, 24 ]
Step 3 ---- [ 9, 13, 20, 24, 52, 46 ]
Step 4 ---- [ 9, 13, 20, 24, 46, 52 ]
*/

const selectionSort = (nums) => {
    for(let i = 0; i < nums.length-1;i++){
        let mini = i;
        for(let j = i; j < nums.length;j++){
            if(nums[j] < nums[mini]){
                mini = j;
            }
            [nums[mini],nums[i]] = [nums[i],nums[mini]];
        }
        console.log(i,"----" ,nums);
    }
    return nums;
}
console.log(selectionSort([13,46,24,52,20,9]))