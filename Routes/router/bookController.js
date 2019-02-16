
const index = (req,res) => {
  res.send('index')
}

const getBooks = (req,res) => {
  res.send('get books ok ')
}

module.exports = {getBooks, index}