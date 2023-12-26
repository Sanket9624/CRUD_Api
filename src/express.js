const express = require('express')
const app = express()
const useRoutes = require('../useRoutes.js')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const result = dotenv.config()
if(result.error){
            throw result.error
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/",useRoutes)

const port = process.env.PORT
app.listen(port,()=>{
            console.log(`Port is listening on http://localhost:${port}`);
})