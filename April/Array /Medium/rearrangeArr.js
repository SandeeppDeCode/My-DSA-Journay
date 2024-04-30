function RearrangebySign(A) {
    
    let n = A.length;
    
    // Define 2 arrays, one for storing positive 
    // and other for negative elements of the array.
    let pos = [];
    let neg = [];
    
    // Segregate the array into positives and negatives.
    for(let i=0;i<n;i++){
        
        if(A[i]>0) pos.push(A[i]);
        else neg.push(A[i]);
    }
    
    // If positives are lesser than the negatives.
    if(pos.length < neg.length){
        
      // First, fill array alternatively till the point 
      // where positives and negatives are equal in number.
        for(let i=0;i<pos.length;i++){
            
            A[2*i] = pos[i];
            A[2*i+1] = neg[i];
        }
        
        // Fill the remaining negatives at the end of the array.
        let index = pos.length*2;
        for(let i = pos.length;i<neg.length;i++){
            
            A[index] = neg[i];
            index++;
        }
        }
        
        // If negatives are lesser than the positives.
    else{
            
            // First, fill array alternatively till the point 
            // where positives and negatives are equal in number.
        for(let i=0;i<neg.length;i++){
            
            A[2*i] = pos[i];
            A[2*i+1] = neg[i];
        }
        
        // Fill the remaining positives at the end of the array.
        let index = neg.length*2;
        for(let i = neg.length;i<pos.length;i++){
            
            A[index] = pos[i];
            index++;
        }
    }
    return {neg:neg,pos:pos,A:A}
        
}
    
  // Array Initialisation.
let A = [1,2,-4,-5,3,4];
let ans = RearrangebySign(A);
console.log(ans);