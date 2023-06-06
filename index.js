const express = require("express");
const app = express();
const config = require("./config/mongoose");


const PORT = 8000;
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.use("/", require('./Routes/index'));


app.listen(PORT , () =>{
   console.log(`server running on port ${PORT}`); 
})