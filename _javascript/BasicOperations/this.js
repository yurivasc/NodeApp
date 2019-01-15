function a(){
    console.log(this);
    function b(){
        console.log(this);
    }
}

a();