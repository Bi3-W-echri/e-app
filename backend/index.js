const express = require('express');
const appRouter=require("./routers/index.js")
const PORT = 3000;
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use("/",appRouter)

app.get('/get', (req, res) => {
  res.json('Hello from the server!');
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

