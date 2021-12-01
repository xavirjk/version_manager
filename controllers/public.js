const { Update } = require('../models');

exports.getSpecified = async (req, res, next) => {
  try {
    const { query } = req;
    console.log('query', query);
    const project = await Update.findOne(query);
    if (!project) {
      res.status(404).send({ message: 'no such Project' });
      return;
    }
    res.status(200).send({ message: 'project', latest: project });
  } catch (err) {
    next(err);
  }
};
