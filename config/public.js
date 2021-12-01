const router = require('express').Router();

const { public } = require('../controllers');

router.get('/specified/', public.getSpecified);

module.exports = router;
