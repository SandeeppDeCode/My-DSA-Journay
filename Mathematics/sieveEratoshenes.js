// JavaScript program to print all primes smaller than or equal to
// n using Sieve of Eratosthenes

/*

The Sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to a given limit. It works by iteratively marking the multiples of each prime number, starting from 2, as composite (not prime). The unmarked numbers that remain are primes. The algorithm efficiently eliminates multiples, making it faster than checking divisibility individually for each number.
*/
function SieveOfEratosthenes(n) {
    const isPrime = new Array(n+1).fill(true);

    for(let i = 2; i*i <= n; i++){
        if(isPrime[i]){
            for(let j = i * i; j <= n; j += i){
                isPrime[j] = false;
            }
        }
    }
    let count = 0
    let allPrime = []
    for(let i = 2; i <= n; i++){
        if(isPrime[i])
        { allPrime.push(i);
            count++;
        }
    }
    return {count:count,allPrime:allPrime}
}

// Driver code
let n = 10;
console.log("Following are the prime numbers smaller than or equal to " + n + ": ");
console.log(SieveOfEratosthenes(n));