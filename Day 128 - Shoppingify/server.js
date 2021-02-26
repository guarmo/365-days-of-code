const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/items", require("./routes/items"));
app.use("/api/shoppingList", require("./routes/shoppingList"));
app.use("/api/historyLists", require("./routes/historyLists"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
