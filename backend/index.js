const express = require('express');
const PORT = 3000;
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
  res.json('Hello from the server!');
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

