const router = require('express').Router();

const{
userGetAll,
userGetOne,
userCreate,
userUpdate,
userDelete,
addFriend,
deleteFriend
} = require('../../controller/user.controller');


router.route('/').get(userGetAll).post(userCreate);
router.route('/:id').get(userGetOne).put(userUpdate).delete(userDelete);
router.route('/:id/friends/:friendsId').post(addFriend).delete(deleteFriend);

module.exports = router;
