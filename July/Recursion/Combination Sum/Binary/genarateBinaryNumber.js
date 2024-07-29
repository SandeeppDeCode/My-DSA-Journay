function generateBinary(n) {
    const result = [];

    function helper(current) {
        if (current.length === n) {
            result.push(current);
            return;
        }

        helper(current + '0'); // Add '0' and recurse
        helper(current + '1'); // Add '1' and recurse
    }

    helper(''); // Start with an empty string
    return result;
}

console.log(generateBinary(2));
