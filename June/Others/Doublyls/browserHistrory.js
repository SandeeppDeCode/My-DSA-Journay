class Node{
    constructor(url){
        this.data = url;
        this.next = null;
        this.prev = null;
    }
}
class BrowserHistory{
    constructor(homepage) {
        this.current = new Node(homepage);
    }
    visit(url){
        const newNode = new Node(url);
        newNode.prev = this.current;
        this.current.next = newNode;
        this.current = newNode;
    }
    back(steps){
        while(steps){
            if(this.current.prev !== null){
                this.current = this.current.prev
            }else{
                break;
            }
            steps--;
        }
        return this.current.data;
    }
    forward(steps){
        while(steps){
            if(this.current.next !== null){
                this.current = this.current.next;
            }else{
                break;
            }
            steps--;
        }
        return this.current.data;
    }
}

const obj = new BrowserHistory("LeeetCode.com")
// var obj = new BrowserHistory("leetcode.com");
obj.visit("google.com");
obj.visit("facebook.com");
obj.visit("youtube.com");
console.log(obj.back(1)); // Output: "facebook.com"
console.log(obj.back(1)); // Output: "google.com"
console.log(obj.forward(1)); // Output: "facebook.com"
obj.visit("linkedin.com");
console.log(obj.forward(2)); // Output: "linkedin.com"
console.log(obj.back(2)); // Output: "google.com"
console.log(obj.back(7)); // Output: "leetcode.com"

// /**
//  * @param {string} homepage
//  */
// class Node{
//     constructor(url){
//         this.data = url;
//         this.next = null;
//         this.prev = null;
//     }
// }
// var BrowserHistory = function(homepage) {
//     this.current = new Node(homepage)
// };

// /** 
//  * @param {string} url
//  * @return {void}
//  */
// BrowserHistory.prototype.visit = function(url) {

//     const newNode = new Node(url);
//     newNode.prev = this.current;
//     this.current.next = newNode;
//     this.current = newNode;

// };

// /** 
//  * @param {number} steps
//  * @return {string}
//  */
// BrowserHistory.prototype.back = function(steps) {
//         while(steps){
//             if(this.current.prev !== null){
//                 this.current = this.current.prev;
//             }else{
//                 break;
//             }
//             steps--;
//         }
//         return this.current.data;
// };

// /** 
//  * @param {number} steps
//  * @return {string}
//  */
// BrowserHistory.prototype.forward = function(steps) {
//         while(steps){
//             if(this.current.next !== null){
//                 this.current = this.current.next;
//             }else{
//                 break;
//             }
//             steps--;
//         }
//         return this.current.data;
// };

// /** 
//  * Your BrowserHistory object will be instantiated and called as such:
//  * var obj = new BrowserHistory(homepage)
//  * obj.visit(url)
//  * var param_2 = obj.back(steps)
//  * var param_3 = obj.forward(steps)
//  */