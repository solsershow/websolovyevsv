const express = require('express')
const app = express()
const path = require("path")
const fs = require("fs")
const port = 3000

app.use(express.json())

app.get('*', (req, res) => {
  res.sendFile('reg.html', {root: path.join(__dirname)})
})

app.post("/req-data", (req, res) => {
    console.log(">>>", req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body), (err) => {
        if (err) {
            res.status(500).send("User not added")
        } else {
            res.status(100).send("User added")
        }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

