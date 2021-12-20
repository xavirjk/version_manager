const { Update } = require('../models');

exports.postCreateProject = async (req, res, next) => {
  try {
    const { body } = req;
    const project = await Update.createOne(body);
    if (!project) {
      res.status(401).send({ message: 'unable to create  project' });
      return;
    }
    res.status(201).send({ message: 'success' });
  } catch (err) {
    next(err);
  }
};
exports.postUpdateProject = async (req, res, next) => {
  try {
    const { body, files } = req;
    const { version, project } = body;
    const exists = await Update.findById(project);
    if (!exists) {
      res.status(404).send({ message: 'project not found' });
      return;
    }
    if (files === null) {
      res.status(501).send({ message: 'please select file' });
      return;
    }
    const path = await saveFileAndReturnArray(files.update);
    await exists.updateProject({ version, path });
    res.status(200).send({ message: 'updated version' });
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const projects = await Update.find({});
    res.status(200).send({ message: 'success', projects: projects });
  } catch (err) {
    next(err);
  }
};

async function saveFileAndReturnArray(file) {
  var uploadPath = 'zip/' + Math.random() + '-' + file.name;
  await file.mv(uploadPath, function (err) {
    if (err) {
      next(err);
      return false;
    }
  });
  return uploadPath;
}
