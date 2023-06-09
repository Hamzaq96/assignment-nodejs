const express = require("express");
const router = express.Router();

const {getUsers, getUserByID} = require('../controllers/usersController');

router.get('/', getUsers);
router.get('/:id', getUserByID);

module.exports = router;