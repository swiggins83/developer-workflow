import path from 'path';
import express from 'express';
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.js';

const app = express();
const port = 8080;

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/price', async (req, res) => {
  const data = await CoinGeckoClient.coins.fetch(coinName);

  res.send(`${data[coinName]}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
