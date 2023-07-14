import restaurantModel from "../models/restaurantModel.js";

export const getRestaurantsFood = async (req, res) => {
  try {
    const { name, region, status } = req.query;
    const restaurants = await restaurantModel.find({
      foodName: { $regex: name || "", $options: "i" },
      region: { $regex: region || "", $options: "i" },
      status: { $regex: status || "", $options: "i" },
    });
    if (restaurants.length === 0)
      return res.status(404).json({
        status: "failed",
        message: "Restaurant not found",
      });
    res.status(200).json({
      status: "success",
      data: restaurants,
      totalItems: restaurants.length,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

export const getRestaurantByIdFood = async (req, res) => {
  try {
    const restaurant = await restaurantModel.findById(req.params.id);

    if (!restaurant)
      return res.status(404).json({
        status: "failed",
        message: "Restaurant not found",
      });
    res.status(200).json({
      status: "success",
      data: restaurant,
    });
  } catch (err) {
    console.log(err);
  }
};

export const postRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantModel.create({
      foodName: req.body.foodName,
      goFoodLink: req.body.goFoodLink,
      grabFoodLink: req.body.grabFoodLink,
      foodImage: req.body.foodImage,
      foodType: req.body.foodType,
      region: req.body.region,
      status: req.body.status,
      rating: req.body.rating,
    });
    res.status(201).json({
      status: "success",
      data: restaurant,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const {
    foodName,
    foodImage,
    grabFoodLinks,
    foodType,
    region,
    status,
    rating,
  } = req.body;
  try {
    const updatedRestaurant = await restaurantModel.findByIdAndUpdate(
      id,
      {
        foodName,
        foodImage,
        grabFoodLinks,
        foodType,
        region,
        status,
        rating,
      },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      message: "User Berhasil di Update",
      data: updatedRestaurant,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "User Berhasil di Delete",
      data: restaurant,
    });
  } catch (err) {
    console.log(err);
  }
};
