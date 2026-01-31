const express = require('express');
const gemel = require('./justification/gemel');

const app = express();

app.get('/api/demo/gemel', (req, res) => {
  res.json({
    product: gemel.product,
    justification: gemel.justificationText
  });
});

app.get('/health', (req, res) => {
  res.send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
