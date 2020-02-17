






import User from '../models/User';
function getUser(req, res, next) {
  const username = req.params.username;
  if (username === '') {
    return res.status(500).json({ error: 'Username can\'t be blank' });
  }
  try {
    const user = await User.find({ username }).exec();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}