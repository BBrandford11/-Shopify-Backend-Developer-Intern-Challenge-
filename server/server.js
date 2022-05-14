const express = require("express")

const app = express()
const port = 3001


app.get("/", (req,res) => {
  console.log("hello")
})

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});