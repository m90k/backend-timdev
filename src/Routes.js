const express = require('express');

const DevController = require('./App/Controllers/DevController');
const LikeController = require('./App/Controllers/LikeController');
const DeslikeController = require('./App/Controllers/DeslikeControllers');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({message: 'hello'});
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:id/likes', LikeController.store);
routes.post('/devs/:id/deslikes', DeslikeController.store);

module.exports = routes;
