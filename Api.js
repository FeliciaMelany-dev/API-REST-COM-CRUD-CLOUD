import express from 'express'

const app = express()
const PORT = 3000;

const users = []

app.post('/users',(req, res) => {
    console.log('Ok, aqui é o POST');

})
app.get('/users', (req, res) => {
    res.send('Ok, deu bom')

})

app.listen(PORT,() =>{ 
    console.log('Server Running on http://localhos:' +PORT);
} )
