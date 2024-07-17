
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