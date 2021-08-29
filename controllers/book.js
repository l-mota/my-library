const Book = require('../model/book')

const getAllBook = (req, res) => {
  Book.find({}, (err, data) => {
    if (err) {
      return res.json({Error: err})
    }
    return res.json(data)
  })
}

const newBook = (req, res) => {
  Book.findOne({title:req.body.title}, (data) => {
    if(data===null){
      const newBook = new Book ({
        cover: req.body.cover,
        title: req.body.title,
        subtitle: req.body.subtitle,
        author: req.body.author,
        theme: req.body.theme,
        pages: req.body.pages,
        description: req.body.description,
        publisher: req.body.publisher,
        published: req.body.published,
        isbn: req.body.isbn,
        category: req.body.category,
        quantity: req.body.quantity,
      })

      newBook.save((err, data) => {
        if(err) return res.json({Error: err})
        return res.json(data)
      })
    } else {
      return res.json({message: 'This book already exists!'})
    }
  })
}

const deleteAllBook = (req, res) => {
  Book.deleteMany({}, err => {
    if (err) {
      return res.json({message: 'Ops... Failed to delete all books'})
    }
    return res.json({message: 'Delete all books successfully'})
  })
}

const getOneBook = (req, res) => {
  let title = req.params.title

  Book.findOne({title:title}, (err, data) => {
    if (err || !data) {
      return res.json({message: 'Book does not exist.'})
    }
    else return res.json(data)
  })
}

const newReview = (req, res) => {
  
  let title = req.params.title
  let newReview = req.body.review
  
  const review = {
      text: newReview,
      date: new Date()
  }
  
  Book.findOne({title:title}, (err, data) => {
      if(err || !data || !newReview) {
          return res.json({message: 'Book does not exists.'});
      }
      else {
          data.review.push(review);
          data.save(err => {
              if (err) { 
              return res.json({message: "Failed to add review", error:err});
              }
              return res.json(data);
          })  
      } 
  })
}

const deleteOneBook = (req, res) => {
  let title = req.params.title

  Book.deleteOne({title:title}, (err, data) => {
    if (err || !data) {
      return res.json({message: 'Book does not exist.'})
    }
    else return res.json({message: 'Book deleted!'})
  })
}

module.exports = {
  getAllBook,
  newBook,
  deleteAllBook,
  getOneBook,
  newReview,
  deleteOneBook
}