import express from 'express';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { mergePDF } from './merge.js';

const app = express();
const upload = multer({ dest: 'uploads/' });
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})
app.post('/merge',upload.array('pdfs',2), async(req, res, next)=>  {
console.log(req.files)
 await mergePDF(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
res.redirect("http://localhost:3000/static/merged.pdf")
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})