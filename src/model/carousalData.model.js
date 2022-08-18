const mongoose = require('mongoose')
const CarousalDataSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: false },
    OrigionalPrice: { type: Number, required: false },
    name: { type: String, required: true },
    offer: { type: Number, required: false }
  },
  {
    timestamp: true,
    versionKey: false,
  },
)

module.exports = mongoose.model('CarousalData', CarousalDataSchema)