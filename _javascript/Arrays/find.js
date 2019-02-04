var fruits = [{ a: "Banana" }, { b: "Orange" }, { c: "Apple" }]

fruits.find(x => Object.keys(x) == 'a')
fruits.find(x => Object.values(x) == 'Banana')