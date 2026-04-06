import { orders } from "../data/orderStore.js";
import { VALID_STATUS } from "../data/constants.js";

export const updateOrderStatus = (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    // Validate status
    if (!status || !VALID_STATUS.includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }

    // Update orders
    orders[orderId] = {
        status,
        updatedAt: new Date(),
    }

    return res.json({
        orderId,
        status,
        updatedAt: orders[orderId].updatedAt,
    })
}