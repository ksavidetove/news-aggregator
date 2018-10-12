const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const newsCtrl = require('../controllers/news.controller');

const router = express.Router({});
module.exports = router;

// router.use(passport.authenticate('bearer', { session: false }, null));

router.get('/headlines', passport.authenticate('bearer', { session: false }), asyncHandler(headLines));

async function headLines(req, res) {
  let articles = await newsCtrl.fetchHeadlines(req.query);
  res.json(articles);
}
