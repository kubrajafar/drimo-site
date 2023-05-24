const express = require("express")
const cors = require("cors")
const data =require("./data.js")
const app = express()

app.use(cors())
app.use(express.static("public"))

app.get("/",(req,res)=>{
   res.send("salam")
})

app.get("/ourService", (req,res)=>{
   res.json(data)
})

app.listen(5000,()=>{
   console.log(`http://localhost:5000 adresinden gelen istekler `);
})