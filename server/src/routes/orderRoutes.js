import { Router } from "express";
import { getOrderStatus, updateOrderStatus } from "../controllers/orderController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/orders/:orderId/status").post(authMiddleware, updateOrderStatus);
router.route("/orders/:orderId/status").get(getOrderStatus);

export default router;