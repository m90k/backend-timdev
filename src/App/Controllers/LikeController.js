const DevModel = require('./../Models/Dev');
module.exports = {
  store(req, res) {
    const {id} = req.params;

    console.log(id);

    return res.json(id);
  },
};
