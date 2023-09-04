const express = require("express");
const app = express();

app.get(
  (req, res, next) => {
    res.send('Hello from container')
  }
)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('server is online')
})

