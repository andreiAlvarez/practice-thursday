var myObject = { 'a': 1, 'b': 2, 'c': 3 };

Object.keys(myObject).map(function(key, index) {
  myObject[key] *= 2;
});

console.log(myObject);
// => { 'a': 2, 'b': 4, 'c': 6 }

let newObj = Object.assign({}, ...Object.keys(obj).map(k => ({[k]: obj[k] * obj[k]})));

let newObj = Object.keys(obj).reduce((p, c) => ({...p, [c]: obj[c] * obj[c]}), {});
