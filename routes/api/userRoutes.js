const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/Users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:UserId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/Users/:UserId/assignments
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// /api/Users/:UserId/assignments/:assignmentId
router.route('/:UserId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
