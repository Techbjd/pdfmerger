const express = require('express')
const path = require('path')
const app = express()
const multer =require('multer')
const mergePDF=require('mergePDF')
const upload=multer({dest: 'uploads/' })
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})
app.post('/merge',upload.array('pdfs',12), function(req, res, next)  {
console.log(req.files)
mergePDF(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
res.redirect
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})