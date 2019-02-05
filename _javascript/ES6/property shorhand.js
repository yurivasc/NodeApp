var a = 0; var b = 0; var c = 0;

obj = {a:a, b:b,c:b};

//can be simplified by 

obj = {a, b, c}; //it is the same as {a=a, b=b} 




//how does it work?

//if your property and your varible has the same name, then you don't need to do a:a, you can only write "a" and it will be translated to a:a

var objnew = {
    a,
    b,
    c  
}
