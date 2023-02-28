const router = require('express').Router()
const multer = require('multer')
const db = require('../config/mongodb')

router.get('/product', (req, res) => {
    db.collection('identity').find()
    .toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error))
})

module.exports = router