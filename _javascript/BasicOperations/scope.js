function a() {

    const x = "ha";
    console.log(x);

    function b() {
        const x = "he"
        console.log(x);
    }

    console.log(x); //ha
}

a();



function b() {
  var y = "ha";
  console.log(y);

  function b() {
    var y = "he";
    console.log(y);
  }

  console.log(y); //he
}

b();