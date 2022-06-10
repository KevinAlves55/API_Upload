const express = require('express')
const app = express()
const fs = require('fs');
const port = 3000

const modelLivro = require('./model/Livro');
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: '5MB'}))

app.post('/testeUpload', (req, res) => {
    let buffer = new Buffer.from(req.body.file, 'base64');
    let imageName = './uploads/' + Date.now().toString() + '.jpg';

    // console.log(req.body.file);

    fs.writeFileSync(imageName, buffer, 'base64', (error)=> {
        if (error) {
            console.log(error);
        }
    })

    res.status(200)
})

app.listen(3000,  () => {
    console.log("Servidor rodando em http://localhost:3000");
})