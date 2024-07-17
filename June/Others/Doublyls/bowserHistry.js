class BrowserHistory {
    constructor(homepage) {
        this.history = [homepage];
        this.currentIndex = 0;
    }

    visit(url) {
        // Clear forward history and add new URL
        this.history = this.history.slice(0, this.currentIndex + 1);
        this.history.push(url);
        this.currentIndex++;
    }

    back(steps) {
        // Move back the specified number of steps
        this.currentIndex = Math.max(0, this.currentIndex - steps);
        return this.history[this.currentIndex];
    }

    forward(steps) {
        // Move forward the specified number of steps
        this.currentIndex = Math.min(this.history.length - 1, this.currentIndex + steps);
        return this.history[this.currentIndex];
    }
}

// Testing the BrowserHistory class
let browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");       // Visit "google.com"
browserHistory.visit("facebook.com");     // Visit "facebook.com"
browserHistory.visit("youtube.com");      // Visit "youtube.com"
console.log(browserHistory.back(1));      // Move back to "facebook.com", output: "facebook.com"
console.log(browserHistory.back(1));      // Move back to "google.com", output: "google.com"
console.log(browserHistory.forward(1));   // Move forward to "facebook.com", output: "facebook.com"
browserHistory.visit("linkedin.com");     // Visit "linkedin.com"
console.log(browserHistory.forward(2));   // Can't move forward, output: "linkedin.com"
console.log(browserHistory.back(2));      // Move back to "google.com", output: "google.com"
console.log(browserHistory.back(7));      // Move back to "leetcode.com", output: "leetcode.com"
