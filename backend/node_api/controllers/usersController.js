const db = require("../database");

exports.getUsers = async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM users");
    res.json(users.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
