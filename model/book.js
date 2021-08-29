const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  cover: String,
  title: {type:String, required: true},
  subtitle: String,
  author: String,
  theme: String,
  pages: Number,
  description: String,
  publisher: String,
  published: Date,
  isbn: String,
  category: [{type:String, required: true}],
  quantity: Number,
  review: [{ text: String, date: {type:String, default: new Date()} }]
})

const Book = mongoose.model('Book', BookSchema)
module.exports = Book