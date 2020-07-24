import User from '../models/User';

class UserController {
  async store(req, res) {
    // const teste = await User.create(req.body);

    const { email } = req.body;

    // const checkEmail = await User.findOne({ where: { email } });

    // if (checkEmail) {
    // return res.status(400).json({ error: 'PRoblema' });
    // }

    console.log('teste');

    return res.json(teste);
  }
}

export default new UserController();
