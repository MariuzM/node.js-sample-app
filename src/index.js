const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.use('/', express.static('public'))
app.use('/projects', express.static('projects'))

app.get('/img', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })

  fs.readdir('public/img', (err, files) => {
    files.forEach((file) => {
      res.write(`<img src='${file}' alt="" height="42" width="42"> `)
    })
    res.end()
  })
})

app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')))

const PORT = 5000
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))
