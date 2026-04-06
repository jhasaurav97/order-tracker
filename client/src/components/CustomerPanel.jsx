import axios from 'axios';
import { useEffect, useState } from 'react'

const API = "http://localhost:5000/api";

const CustomerPanel = () => {
    const [orderId, setOrderId] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (!orderId) return;
        
        const interval = setInterval(async () => {
            try {
                const res = await axios.get(
                    `${API}/orders/${orderId}/status`
                );
                setStatus(res.data.status);
            } catch (err) {
                console.log(err.response?.data?.error);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [orderId]);

  return (
    <div>
      <h2>Customer Panel</h2>
      <input
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
          <p>Status: {status}</p>
    </div>
  );
}

export default CustomerPanel
