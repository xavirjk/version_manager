const router = require('express').Router();

const { client } = require('../controllers');

router.post('/create/', client.postCreateProject);
router.post('/update/', client.postUpdateProject);
router.get('/all/', client.getAll);

module.exports = router;
