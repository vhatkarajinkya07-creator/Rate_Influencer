import "dotenv/config";
import express from "express";
import cors from "cors";

import influencerRoutes from "./routes/influencers.js";
import campaignRoutes from "./routes/campaigns.js";
import contentRoutes from "./routes/content.js";
import aiRoutes from "./routes/ai.js";

const app = express();

/*
  🔥 CORS MUST BE FIRST MIDDLEWARE
*/
app.use(cors({
  origin: "https://rate-influencer-cgd0q9eqh-vhatkarajinkya07-creators-projects.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

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
  console.error(err);
  res.status(500).json({ error: err.message });
});

/*
  Start server
*/
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
