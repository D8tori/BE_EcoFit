const router = require("express").Router();

router.get('/', (req, res) => {
    res.send('Root');
    console.log("hello world")
});

module.exports = router;