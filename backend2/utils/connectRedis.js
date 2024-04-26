const { createClient } = require("redis");

// Read Redis URL from environment variable or default to localhost
const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
const redisClient = createClient({
  url: redisUrl,
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("Redis client connected...");
  } catch (err) {
    console.error("Error connecting to Redis:", err.message);
    // Retry connection after 5 seconds
    setTimeout(connectRedis, 5000);
  }
};

connectRedis();

// Log Redis errors
redisClient.on("error", (err) => console.error("Redis error:", err));

module.exports = redisClient;
