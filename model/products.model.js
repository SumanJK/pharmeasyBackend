const mongoose = require('mongoose')
const ProductsSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true},
    company: { type: String, required: true},
    img1: { type: String, required: false },
    img2: { type: String, required: false },
    img3: { type: String, required: false },
    img4: { type: String, required: false },
    img5: { type: String, required: false },
    desc: { type: String, required: true },
    newPrice: { type: Number, required: false },
    originalPrice: { type: Number, required: false },
    ratings: { type: Number, required: false },
    offer: { type: Number, required: false },
    about: { type: String, required: false },
  },
  {
    timestamp: true,
    versionKey: false,
  },
)

module.exports = mongoose.model('Products', ProductsSchema)