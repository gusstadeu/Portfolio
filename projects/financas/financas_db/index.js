const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.listen(5500, () => {
    console.log('listening on port 5500');
})

const data = require("./data.json")

app.get('/financas', (req, res) => {
    res.send(data)
})


app.post("/financas/add", (req, res) => {
    const { description, price, tipo } = req.body
    const lastID = data[data.length - 1].id

    if(!description || !price || !tipo){
        console.log("Dados faltando por favor preencher todos")
    } else {

        
        data.push({
            id: lastID + 1,
            description: description,
            price:  price,
            tipo: tipo
        })
        
    }
    res.json(data)

})