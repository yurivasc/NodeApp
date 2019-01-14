var result = /a/.exec("string a b c");

console.log(result);

//output: [ 'a', index: 7, input: 'string a b c', groups: undefined ]

  // similar to mystring.match(/a/); however,
  // mystring.match(/d(b+)d/g) outputs Array [ "dbbd" ], while 
  // /a/.exec(mystring) outputs Array [ 'a', 'bb', index: 1, input: 'cdbbdbsbz' ].