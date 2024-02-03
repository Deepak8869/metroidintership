const express = require('express');
const app = express();

const port = 3001;

app.get('/api/students', (req,res) => {
  const data = require(`https://raw.githubusercontent.com/shubhamy-metricoidtech/mern-developer`);
  res.json(data);
});

app.listen(port ,()=>{
  console.log(`Express server listining at http://localhost:${port}`);
}) 