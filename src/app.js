const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

app.use("/api/tasks", taskRoutes); // Mount task routes

app.use(errorHandler); // Error handling middleware

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
