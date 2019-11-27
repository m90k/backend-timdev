const express = require('express');

const DevController = require('./App/Controllers/DevController');
const LikeController = require('./App/Controllers/LikeController');

const route = express.Router();

route.get('/', (req, res) => {
  return res.json({message: 'hello'});
});

route.post('/dev', DevController.store);
route.post('/dev/:id/likes', LikeController.store);

module.exports = route;
