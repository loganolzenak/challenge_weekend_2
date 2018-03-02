const express = require('express');
const router = express.Router();

const history = [];

router.post('/', (request , response) => {
    response.sendStatus(200)
})




module.exports = router;