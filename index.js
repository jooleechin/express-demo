let express = require('express')
let app = express()

let dogs = ['bowser', 'woof', 'dog3']
let cats = ['meow', 'lexington', 'cat3']

// add two new arrays of your choice

app.get('/dogs', function(req, res) {
  res.json(dogs)
})

app.get('/cats', function(req, res) {
  res.json(cats)
})

// add two new routes of your choice

app.listen(3000, function() {
  console.log('listening on port 3000')
})
