import path from 'path';
import express from 'express';
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.js';
import CoinGecko from 'coingecko-api';


const CoinGeckoClient = new CoinGecko();
const app = express();
const port = 8080;

const coinName = 'bitcoin';

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/price', async (req, res) => {
  const coinData = await CoinGeckoClient.coins.fetch(coinName);
  const marketData = coinData.data.market_data;
  const usdValue = marketData.current_price.usd;

  res.send(`${usdValue}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
