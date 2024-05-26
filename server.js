const express = require('express');
const { ArIO } = require('@ar.io/sdk');

const app = express();
const port = 3333;

const arIOClient = ArIO.init();

app.use(express.static('public'));


app.get('/getBalance', async (req, res) => {
  const walletAddress = req.query.walletAddress;

  try {
    
    const balance = await arIOClient.getBalance({ address: walletAddress });
    res.json({ balance: balance });
  } catch (error) {
    res.status(400).json({ error: 'Wallet balance could not be queried' });
  }
});

app.listen(port, () => {
  console.log(`App http://localhost:${port} run`);
});
