const DevModel = require('./../Models/Dev');
const Axios = require('axios');
module.exports = {
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
