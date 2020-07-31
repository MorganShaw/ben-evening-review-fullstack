const express = require('express')

const app = express()
const port = 3333

//Controllers
const foodCtrl = require('./controllers/foodController')
// const con = require('./controllers/allController')

//Middleware
app.use(express.json())


//Endpoints
// http://localhost:3333/api/food
app.get('/api/food', foodCtrl.getFood)
// app.get('/api/food', con.food.getFood)
app.delete('/api/food/:id', foodCtrl.deleteFood)
app.put('/api/food/:id', foodCtrl.editFood)
app.post('/api/food', foodCtrl.addFood)

app.listen(port, () => console.log(`Listening on ${port}`))