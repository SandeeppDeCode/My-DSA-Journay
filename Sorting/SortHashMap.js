var obj = {
    "LY": 43,
    "US": 19,
    "IN": 395,
    "IR": 32,
    "EG": 12,
    "SA": 17,
};

var array = [];
for (var key in obj) {
    array.push({
        name: key,
        value: obj[key]
    });
}
console.log(array);
var sorted = array.sort(function(a, b) { return b.value - a.value
    // return (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0);
});

// If a.value is greater than b.value, it will return a positive number.
// If a.value is less than b.value, it will return a negative number.
// If a.value is equal to b.value, it will return 0.
console.log(array);


function compareThings(thing1, thing2) {
    var name1 = thing1["name"].toLowerCase();
    var name2 = thing2["name"].toLowerCase();
    if (name1 < name2) {
        return -1;
        }
    if (name1 > name2) {
        return 1;
        }
    return 0;
}

things.sort(compareThings);

// Sure, the provided sorting function can be simplified by directly subtracting b.value from a.value. This will give the same result because:

