const router = require('express').Router();

const {
    thoughtGetAll,
    thoughtGetOne,
    thoughtCreate,
    thoughtUpdate,
    thoughtDelete,
    addReact,
    deleteReact
} =require('../../controller/thought-controller');

router.route('/').get(thoughtGetAll).post(thoughtCreate);
router.route('/:id').get(thoughtGetOne).put(thoughtUpdate).delete(thoughtDelete);
router.route('/:id/reactions').post(addReact);
router.route('/:id/reactions/:reactionId').delete(deleteReact);

module.exports = router;