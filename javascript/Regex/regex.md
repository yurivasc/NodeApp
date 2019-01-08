## https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec and test methods of RegExp, and with the match, replace, search, and split methods of String. This chapter describes JavaScript regular expressions.

Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:

`var re = /ab+c/;`

Regular expression literals provide compilation of the regular expression when the script is loaded. If the regular expression remains constant, using this can improve performance.

Or calling the constructor function of the RegExp object, as follows:

`var re = new RegExp('ab+c');`