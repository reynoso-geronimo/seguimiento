const express = require('express')
const app = express()
const port = 3001
const apiRoutes= require('./routes/apiRoutes')
const cors=require('cors')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use('/api',apiRoutes)

