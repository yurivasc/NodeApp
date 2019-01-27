## https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec and test methods of RegExp, and with the match, replace, search, and split methods of String. This chapter describes JavaScript regular expressions.

Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:

`var re = /ab+c/;`

Regular expression literals provide compilation of the regular expression when the script is loaded. If the regular expression remains constant, using this can improve performance.

Or calling the constructor function of the RegExp object, as follows:

`var re = new RegExp('ab+c');`



/pattern/flags
If specified, flags can have any combination of the following values:

g: global match.
i: ignore case.
m: multiline. Treats beginning (^) and end ($) characters as working over multiple lines.
u: unicode. Treat pattern as a sequence of unicode code points.
y: sticky. Matches only from the index indicated by the lastIndex property of this regular expression in the target string.



Character	Matches
.	The period matches any single character, except line terminators (e.g., a newline).
\d	A single digit character (i.e., [0-9]).
\D	A single non-digit character (i.e., [^0-9]).
\w	A single alphanumeric word character, including the underscore (i.e., [A-Za-z0-9_]).
\W	A single non-word character (i.e., [^A-Za-z0-9_]).
\s	A single whitespace character. This includes space (), tab (\t), form feed, line feed, and other Unicode spaces.
\S	A single non-whitespace character (i.e., [^\w]).



Character Sets
The character set [abcd] will match any one character from the set {a, b, c, d}. This is equivalent to [a-d].
The character set [^abcd]: Matches anything other than the enclosed characters. This is equivalent to [^a-d].
Alteration
We use the | symbol to match one thing or the other. For example, a|b matches either a or b.

Boundaries
Character	Matches
^	Matches beginning of input. If the multiline flag is set to true, also matches immediately after a line break character.
$	Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character.
\b	A zero-width word boundary, such as between a letter and a space.
\B	Matches a zero-width non-word boundary, such as between two letters or between two spaces.