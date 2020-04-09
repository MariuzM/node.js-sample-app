const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static('public'))
app.use('/project', express.static('project'))

app.get('/project', (req, res) => res.sendFile(path.join(__dirname, '../project', 'index.html')))
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')))

const PORT = 5000
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))
