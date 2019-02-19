const p = new Promise((res, rej) => {
    if (1 == 1) {
        res('ok');
    } else {
        rej('nok')
    }
})

p.then(res => console.log(res))
    .catch(err => console.log(err))


const p2 = name => {
    return new Promise((req, res) => {
        if (name == "yuri") {
            res('name is ok')
        } else {
            rej('error name')
        }
    })
}

p2("yuri").then(x => console.log(x))
    .catch(x => console.log(x))