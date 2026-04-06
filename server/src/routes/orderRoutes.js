import { Router } from "express";
import { updateOrderStatus } from "../controllers/orderController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/orders/:orderId/status").post(authMiddleware, updateOrderStatus);

export default router;