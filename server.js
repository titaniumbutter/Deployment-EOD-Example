const express = require('express')
const app = express()
const path = require('path');

app.get('/', function (req,res) {
    res.sendFile( path.join(__dirname, 'public/index.html'))
})

app.get('/styles', function (req,res) {
    res.sendFile( path.join(__dirname, 'public/styles.css'))
})

app.get('/js', function (req, res) {
    res.sendFile( path.join(__dirname, 'public/main.js'))
})

app.get('/cat', function (req, res) {
    res.sendFile( path.join(__dirname, 'public/cat.jpg'))
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Server is running on ${port}`)
})

// Another way of doing the above using the express.static middleware
// documentation: https://expressjs.com/en/starter/static-files.html
// could also use a middleware for the cat if you wanted 

// const express = require('express')
// const path = require('path')

// const app = express()

// app.use(express.static(path.join(__dirname, '/public')))
// app.use('/js', express.static(path.join(__dirname, 'public/main.js')))
// app.use('/styles', express.static(path.join(__dirname, 'public/styles.css')))

// app.get('/', (req, res) => {
//   res.sendFile('index.html')
// })

// app.get('/cat', (req, res) => {
//     res.sendFile( path.join(__dirname, 'public/grumpy_cat.jpg') )
// })

// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`Listening on port ${port}`)
//   })