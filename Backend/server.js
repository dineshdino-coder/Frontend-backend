require("dotenv").config();

const cors = require("cors");
const express = require("express");
const { connectDatabase } = require("./db");

function createApp() {
  const app = express();

  app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ name: "dinesh" });
  });

  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  return app;
}

async function startServer() {
  const port = Number(process.env.PORT || 5000);
  const client = process.env.MONGO_URI
    ? await connectDatabase(
        process.env.MONGO_URI,
        process.env.MONGO_DB || "sample_mflix",
      )
    : null;

  if (client) {
    console.log("MongoDB connected successfully");
  } else {
    console.log("MONGO_URI is not configured; starting without MongoDB");
  }

  const server = createApp().listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  const shutdown = () => {
    server.close(async (error) => {
      if (error) {
        console.error("HTTP server shutdown failed:", error);
        process.exitCode = 1;
      }

      if (client) {
        await client.close();
      }
    });
  };

  process.once("SIGINT", shutdown);
  process.once("SIGTERM", shutdown);
}

if (require.main === module) {
  startServer().catch((error) => {
    console.error("Backend startup failed:", error);
    process.exitCode = 1;
  });
}

module.exports = { createApp, startServer };
