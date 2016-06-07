const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);

app.use(require('morgan')('short'));

// Step 1: Create & configure a webpack compiler
const webpack = require('webpack');
const webpackConfig = require('../webpack.express.config');
const compiler = webpack(webpackConfig);

// Step 2: Attach the dev middleware to the compiler & the server
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  stats: { colors: true },
  publicPath: webpackConfig.output.publicPath
}));

// Step 3: Attach the hot middleware to the compiler & the server
app.use(require('webpack-hot-middleware')(compiler, {
  stats: { colors: true },
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

// Do anything you like with the rest of your express application.
app.get('/api', (req, res) => {
  res.send('GET request to /api');
});

if (require.main === module) {
  server.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on http://localhost:${server.address().port}`);
  });
}
