const DevModel = require('./../Models/Dev');
const Axios = require('axios');
module.exports = {
  async index(req, res) {
    const {user} = req.headers;

    const userLogged = await DevModel.findById(user);

    const users = await DevModel.find({
      $and: [
        {_id: {$ne: user}},
        {_id: {$nin: userLogged.likes}},
        {_id: {$nin: userLogged.deslikes}},
      ],
    });

    return res.json(users);
  },

  async store(req, res) {
    const {username} = req.body;

    console.log(username);

    const response = await Axios.get(
      `https://api.github.com/users/${username}`,
    );

    const userExists = await DevModel.findOne({user: username});

    if (userExists) {
      return res.json(userExists);
    }

    const {name, bio, avatar_url} = response.data;

    const dev = await DevModel.create({
      name,
      user: username,
      bio,
      avatar: avatar_url,
    });

    return res.json(dev);
  },
};
