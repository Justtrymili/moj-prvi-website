const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')))
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')))

app.listen(port, () =>{ console.log('Server is up on port ' + port)

})