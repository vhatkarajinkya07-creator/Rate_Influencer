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
  Replace with your frontend URL (Vercel)
*/
const allowedOrigins = [
  "http://localhost:5173",
  "https://rate-influencer-cgd0q9eqh-vhatkarajinkya07-creators-projects.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow tools like Postman
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// IMPORTANT: handle preflight requests
app.options("*", cors());

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
  console.error("Error:", err);
  res.status(500).json({
    success: false,
    error: err.message || "Internal server error"
  });
});

/*
  Start server
*/
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
