const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  updateUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/Users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:UserId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/Users/:UserId/friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// /api/Users/:UserId/assignments/:friendId
router.route('/:UserId/friends/:friendId').delete(removeFriend);

module.exports = router;
