const customMd =  (req,res,next) => {
   //do some operation..
   next(); //will 
}

app.get('/404', customMd, (req, res) => {
  res.send('.. will this be executed?');
})