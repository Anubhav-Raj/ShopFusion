const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const jwt = require("jsonwebtoken");
const User = require("./modal");
const app = express();
const port = 5000;

app.use(cors());
// Add this middleware
app.use(express.json());
connectDB();
// Define routes
app.post("/new", async (req, res) => {
  try {
    const { _id, name, email, photo, role } = req.body;

    let user = await User.findById(_id);

    if (user) {
      // Generate JWT token
      const token = jwt.sign({ _id, name, email, role }, "ZoneHub", {
        expiresIn: "1h",
      });

      res.status(200).json({
        success: true,
        message: `Welcome, ${user.name}`,
        token,
      });
    } else {
      const newUser = new User({ _id, name, email, photo, role });
      const savedUser = await newUser.save();

      // Generate JWT token for the new user
      const token = jwt.sign({ _id, name, email, role }, "ZoneHub", {
        expiresIn: "1h",
      });

      res.json({
        savedUser,
        message: "Login Sucessfully",
        token, // Include the generated token in the response
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Login Faild",
    });
  }
});
// Update a user by ID
app.get("/users/:id", async (req, res) => {
  try {
    //Extract token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1]; // Assuming Bearer token format

    // Verify token
    const decoded = jwt.verify(token, "ZoneHub");

    // Proceed with request only if token is valid
    const user = await User.findById(req.params.id);
    console.log(req.params.id, user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: "Invalid token" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
