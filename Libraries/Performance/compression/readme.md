$ npm install compression
var compression = require('compression')

app.use(compression({filter: shouldCompress}))
