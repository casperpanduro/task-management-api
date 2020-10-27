const express = require('express');
const router = express.Router();

const { asyncHandler } = require('../../middleware/async-handler');
//import {asyncHandler} from '../../middleware/async-handler.js';

console.log(asyncHandler);

router.get('/', asyncHandler(async (req, res) => {
	res.json({test: 'test'});
}));

module.exports = router;