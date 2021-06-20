const express = require('express')
const app = express()
const port = 3000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://suhyeon:psh32451@boilerplate.8oegm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connectied...'))//연결 확인
.catch(err => console.log(err))//연결 에러

app.get('/', (req, res) => {  res.send('Hello World!')})

app.listen(port, () => {  console.log(`Example app listening at http://localhost:${port}`)})