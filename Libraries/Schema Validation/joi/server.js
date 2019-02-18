const express = require('express');
const app = express();
const Joi = require('joi') //https://github.com/hapijs/joi

app.get('/', (req,res) => {
    res.send('ok')
});


const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email({ minDomainAtoms: 2 })
}).with('username', 'birthyear').without('password', 'access_token');

const result = Joi.validate({ username: 'abc', birthyear: 1994 }, schema);

console.log(result); //{result: null, value: {}}
result.then(res => console.log(res));


app.listen(3000)