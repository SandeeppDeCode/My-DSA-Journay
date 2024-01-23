const test = (nums1,nums2) => {
    const ans = new Set();
    for(let i = 0; i < nums1.length; i++){
        ans.add(nums1[i])
    }
    for(let i = 0; i < nums2.length; i++){
        ans.add(nums2[i])
    }
    console.log(ans)

}
console.log(test([1,2,3,7,4,5],[2,4,4,5]))

// Anything unique or remove duplicate use Set Data structure: 


const test1 = (nums1,nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2)


    //not working yet;

    // console.log(set1.intersection(set2));

}
console.log(test1([1,2,3,4,5],[2,4,4,5]))



//Optimal Solution : two pointer method 



const union = (nums1,nums2) => {
    let i = 0;
    let j = 0; 
    const ans = [];
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] <= nums2[j]){
            if(ans.length === 0 || ans[ans.length - 1] !== nums1[i]){
                ans.push(nums1[i]);
            }
            i++;
        }else{
            if(ans.length === 0 || ans[ans.length - 1] !== nums2[j]){
                ans.push(nums2[j]);
            }
            j++;
        }
    }

    //first array got exhaused nums1

    while(j < nums2.length){
        if(ans.length === 0 || ans[ans.length - 1] !== nums2[j]){
            ans.push(nums2[j]);
        }
        j++;
    }

    // second got exhausted

    while(i < nums1.length){
        if(ans.length === 0 || ans[ans.length - 1] !== nums1[i]){
            ans.push(nums1[i]);
        }
        i++;
    }
    return ans

}
console.log("Optimal",union([1,2,3,4,5],[2,4,4,5,6,6]))

console.log([1,2].pop());