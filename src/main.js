// Importing local JavaScript files
import './js/sample';
import * as foo from './js/module.sample';

// Importing CSS file
import './css/style.css';

// Using imported module and logging the return value
const returnValue = foo.default('text', 5, true, null, undefined, {
  name: 'jane',
  age: 24,
});
console.log(returnValue);
