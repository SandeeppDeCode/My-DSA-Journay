const test = (nums1, nums2) => {
    const ans = [];
    for(let i = 0; i < nums1.length;i++){
        if(nums2.includes(nums1[i]) && !(ans.includes(nums1[i]))){
            ans.push(nums1[i])
        }
    }
    return ans
}


// O(nums1.length * (nums2.length + ans.length)).

console.log(test([1,2,3,4,5,6],[2,3,5,3,6,7]));


var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let result = new Set();

    for(let num of nums2) {
        if(set1.has(num)) result.add(num)
    }
    return Array.from(result);
};

// O(nums1.length + nums2.length).
// The additional space used is O(nums1.length + min(nums2.length, result.length)), where result.length is at most min(nums1.length, nums2.length).

const intersection = (nums1, nums2) => {
    const result = [];

    // Sort the arrays (optional, but can optimize later checks)
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            // Both elements are equal (intersection found)
            result.push(nums1[i]);
            i++;
            j++;
        }
    }

    return result;
};

// O(nums1.length * log(nums1.length) + nums2.length * log(nums2.length)).
// space O(1)