const express = require("express");
const cors = require("cors");
require("dotenv").config();

const usersRoutes = require("./routes/usersRoutes");
const ordersRoutes = require("./routes/ordersRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRoutes);
app.use("/api/orders", ordersRoutes);

app.get("/", (req, res) => {
  res.json({ message: "PinolApp API funcionando" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
