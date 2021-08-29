const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book')
const multer = require('multer')
const upload = multer()

router.get('/book', bookController.getAllBook)
router.post('/book', upload.none(), bookController.newBook)
router.delete('/book', bookController.deleteAllBook)

router.get('/book/:title', bookController.getOneBook)
router.post('/book/:title', bookController.newReview)
router.delete('/book/:title', bookController.deleteOneBook)

module.exports = router