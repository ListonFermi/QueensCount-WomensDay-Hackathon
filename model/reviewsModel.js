const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  companyId: { type: mongoose.Types.ObjectId, ref: "company" },
  userId: { type: mongoose.Types.ObjectId, ref: "reviews" },
  ratings: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
  reviews: { type: String, required: true },
});

const companyCollection = mongoose.model("reviews", reviewSchema);

module.exports = companyCollection;