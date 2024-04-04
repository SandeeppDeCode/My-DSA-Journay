const arr = [9,1,22,1];

let max = Number.MIN_VALUE;

for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length;j++){
        let sum = 0;
        for(let k = i; k <= j; k++){
            sum += arr[k];
        }
        max = Math.max(max,sum);
    }
}
console.log(max);

let max2 = Number.MIN_VALUE;

for(let i = 0; i < arr.length; i++){
    let sum = 0;
    for(let j = i; j < arr.length;j++){
        sum += arr[j];
        max2 = Math.max(max,sum);
       
    }
    
}
console.log(max2);


//Kadane Algorithm

let sum = 0;
let maxi = arr[0]

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    maxi = Math.max(sum,maxi)
    if(sum < 0){
        sum = 0;
    }
}
console.log(maxi);