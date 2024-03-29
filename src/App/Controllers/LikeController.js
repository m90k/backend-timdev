const DevModel = require('./../Models/Dev');
module.exports = {
  async store(req, res) {
    const {id} = req.params;
    const {user} = req.headers;

    //Usuario Logado
    const userLogged = await DevModel.findById(user);
    //usuario a dar o like
    const targetUser = await DevModel.findById(id);

    if (!targetUser) {
      return res.status(400).json({error: 'Usuario Nao Existe'});
    }

    if (targetUser.likes.includes(userLogged._id)) {
      console.log('Match ');
    }

    userLogged.likes.push(targetUser._id);

    await userLogged.save();

    return res.json(userLogged);
  },
};
