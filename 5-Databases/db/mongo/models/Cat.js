const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', { name: String });

const cat = new Cat({ name: 'Diagle' });
cat.save().then(() => console.log('meow'));