import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

const RiderPanel = () => {
  const [orderId, setOrderId] = useState("");
  const [token, setToken] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");

  const updateStatus = async (status) => {
    try {
      const res = await axios.post(
        `${API}/orders/${orderId}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setCurrentStatus(res.data.status);
    } catch (err) {
      console.log(err);
      console.log(err.response);
      console.log(err.response?.data);
      alert(err.response?.data?.error || "Error updating status");
    }
  };

  return (
    <div>
      <h2>Rider Panel</h2>
      <input
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <input
        placeholder="Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <div>
        {["pending", "picked_up", "out_for_delivery", "delivered"].map(
          (status) => (
            <button key={status} onClick={() => updateStatus(status)}>
              {status}
            </button>
          ),
        )}
      </div>
      <p>Current Status: {currentStatus}</p>
    </div>
  );
};

export default RiderPanel;
