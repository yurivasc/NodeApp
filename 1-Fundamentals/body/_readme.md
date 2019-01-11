## expl

we use req.query.something for get requests
we use req.body.something for post requests
we use req.params.something when we have something like:  /user/123  -- and in the server: app.get('/user/:id, (req,res) => {res.send('oi')});