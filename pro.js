const express = require('express')
const app = express();
const fs = require('fs')
const formidable = require('formidable')
let path = ''
app.get('/', (req, res) => {

     res.sendFile(__dirname + '/profile.html')
})

app.post('/', (req, res) => {
     const form = new formidable.IncomingForm();
     form.parse(req)

     form.on('fileBegin', (name, file) => {
          file.filepath = __dirname + '/uploads/' + file.originalFilename
          path = file.filepath
     })

     form.on('file', (name, file) => {
          console.log(`uploaded file name is :${file.originalFilename}`);
     })

     res.status(400).json({ name: 'gautam', surname: 'gurjar' })
})


app.listen(8000, (err) => {
     console.log('server is running on port 8000');
})
