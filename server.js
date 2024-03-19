const express = require('express');

const app = express();
// Set EJS as the view engine
app.set('view engine', 'ejs');


app.get('/result', (req, res) => {
  res.render("result");
});
app.get('/', (req, res) => {
    res.render("input");
  });

  app.get('/solve', (req, res) => {
    res.render("input");
  });
  
  
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
