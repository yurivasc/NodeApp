const app = require('express')();

app.get('/', (req, res) => {
    res.status(404).send('error found..render error page.');
})

app.post('/post', (req, res) => {
    res.status(200).send('post success');
});


app.listen('3000')