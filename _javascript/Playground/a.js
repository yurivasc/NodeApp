function a() {

    const x = "ha";
    console.log(x);

    function ain() {
        const x = "he"
        console.log(x);
    }

    console.log(x); //ha
}

a();



function c() {
    var y = "ba";
    console.log(y);

    function cin() {
        var y = "be";
        console.log(y);
    }

    console.log(y); //he
}

c();