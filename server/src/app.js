const express = require('express')
const app = express()
const path = require("path");
const port = process.env.port||3001
const mainRoutes = require("./routes/mainRoutes")
const apiRoutes= require('./routes/apiRoutes')
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.set("view engine", "ejs")
app.set('views', path.resolve(__dirname,'../views'))
app.use(express.static(path.resolve(__dirname, "./../public")));

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

app.use('/api',apiRoutes)
app.use(mainRoutes)
