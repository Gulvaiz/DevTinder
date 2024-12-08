const express = require("express")

const app = express()

app.use("/test",(req, res) => {
      res.send("hello")
})

app.listen(7777, () => {
    console.log("server is listening on port 3000")
})