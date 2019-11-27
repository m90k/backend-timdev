const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes');
const server = express();

mongoose.connect(
  'mongodb+srv://timdev:timdev@server-timdev-olcd3.mongodb.net/timdev?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

server.use(express.json());
server.use(routes);

server.listen(8001);
