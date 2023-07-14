import { Router } from "express";
import {
  getRestaurantsFood,
  getRestaurantByIdFood,
  postRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../controllers/restaurant.js";

const router = Router();

router.post("/", postRestaurant);
router.get("/", getRestaurantsFood);
router.get("/:id", getRestaurantByIdFood);
router.put("/:id", updateRestaurant);
router.delete("/:id", deleteRestaurant);

export default router;
