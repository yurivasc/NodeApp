const express = require('express');
const app = express();
const path = require('path');



const mypath = path.join("c:", "abc");

console.log(mypath);
//output c:\abc

console.log(__dirname, __filename); 
//output: C:\Projects\Node\Node\Libraries\path C:\Projects\Node\Node\Libraries\path\server.js


console.log(path.parse('c:\projects'));
/*
{ root: 'c:',
  dir: 'c:',
  base: 'projects',
  ext: '',
  name: 'projects' }
*/


app.listen(3000)