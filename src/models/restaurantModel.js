import mongoose from "mongoose";

const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
  foodName: {
    type: String,
    required: true,
  },
  goFoodLink: {
    type: String,
    required: true,
  },
  grabFoodLink: {
    type: String,
    required: true,
  },
  foodImage: {
    type: String,
    required: true,
  },
  foodType: {
    type: Object,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
