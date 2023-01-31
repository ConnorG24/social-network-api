const router = require('express').router();
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');

router.use('/users',userRoutes);
router.use('/thoughts',thoughtRoutes);

module.exports = router;