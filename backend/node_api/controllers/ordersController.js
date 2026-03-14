const db = require("../database");

exports.getOrders = async (req, res) => {
  try {
    const orders = await db.query("SELECT * FROM orders");
    res.json(orders.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
