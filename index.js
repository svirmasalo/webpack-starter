var redom = require('redom');
const {el, mount} = redom;

console.log("Hello from JavaScript!");
const someString = 'Oletko siellä watcher?';
const hello = el('h2', `Hello RE:DOM! ${someString}`);
mount(document.body, hello);