import "dotenv/config";
import express from "express";
import cors from "cors";

import influencerRoutes from "./routes/influencers.js";
import campaignRoutes from "./routes/campaigns.js";
import contentRoutes from "./routes/content.js";
import aiRoutes from "./routes/ai.js";

const app = express();

/*
  ✅ CORS FIX (PRODUCTION SAFE)
  Make sure your CURRENT Vercel URL is here
*/
const allowedOrigins = [
  "http://localhost:5173",
  "https://rate-influencer-git-main-vhatkarajinkya07-creators-projects.vercel.app"
];

app.use(cors({
  origin: true,
  credentials: true
}));

// Handle preflight requests
app.options("*", cors());

/*
  Middleware
*/
app.use(express.json());

/*
  Routes
*/
app.use("/api/influencers", influencerRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/ai", aiRoutes);

/*
  Error handler
*/
app.use((err, _req, res, _next) => {
  console.error("Server Error:", err);
  res.status(500).json({
    success: false,
    error: err.message || "Internal server error"
  });
});

/*
  Start server (Render requires this)
*/
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
