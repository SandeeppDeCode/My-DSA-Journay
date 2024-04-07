let map = new Map();
map.set([1,2], 1,1);
map.set('b', 2);
map.set('c', 3);
console.log(map);

for (let [key, value] of map) {
  console.log(`Key: ${key}, Value: ${value}`);
}
const obj = {a:1,b:2,c:3}

for(let key in obj){
  console.log(obj[key]);
}

