var redom = require('redom');
const {el, mount} = redom;

console.log("Hello from JavaScript!");
const someString = 'And hello es6!';
const hello = el('h2', `Hello RE:DOM! ${someString}`);
mount(document.body, hello);