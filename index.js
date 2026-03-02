const express = require("express");
require("dotenv").config()
const app = express();
const PORT = process.env.PORT



app.get("/",(req,res)=>{
    res.send("birYanIChai server working ....")
})

app.listen(PORT,()=>{
      console.log(`Server running on port ${PORT}`);
})