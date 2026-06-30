import "dotenv/config";
import express from "express";
import cors from "cors";

import influencerRoutes from "./routes/influencers.js";
import campaignRoutes from "./routes/campaigns.js";
import contentRoutes from "./routes/content.js";
import aiRoutes from "./routes/ai.js";

const app = express();

/*
  🔥 MUST BE FIRST (before routes)
*/
app.use(cors({
  origin: "https://rate-influencer-cgd0q9eqh-vhatkarajinkya07-creators-projects.vercel.app",
  credentials: true
}));

app.use(express.json());

app.use("/api/influencers", influencerRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("API running on", PORT);
});
