let express = require('express')
let app = express()

let dogs = ['bowser', 'woof', 'dog3']
let cats = ['meow', 'lexington', 'cat3']

// add two new arrays of your choice
let hamsters = ['mr.bonks', 'chirp', 'dwarf']
let humans = ['joolee', 'chin', 'whatsuppup', 'ilovehamsters']

app.get('/dogs', function(req, res) {
  res.json(dogs)
})

app.get('/cats', function(req, res) {
  res.json(cats)
})

// add two new routes of your choice
app.get('/hamsters', function(req, res) {
    res.json(hamsters)
})

app.get('/humans', function(req, res) {
    res.json(humans)
})

app.listen(3000, function() {
  console.log('listening on port 3000')
})
