import jwt from "jsonwebtoken";
import competitionSchema from "@/models/competitionSchema";
import dbConnect from "@/util/mongo.js";

import teamSchema from "@/models/teamSchema";
import playerSchema from "@/models/playerSchema";

const secret = process.env.AUTHENTICATION;

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  // Authenticate user before allowing access to routes
  // const authHeader = req.headers.authorization;
  // if (!authHeader) {
  //   return res
  //     .status(401)
  //     .json({ success: false, message: "Authorization header not found" });
  // }

  // const token = authHeader.split(" ")[1];
  // if (!token) {
  //   return res.status(401).json({ success: false, message: "Token not found" });
  // }

  // try {
  //   const decoded = jwt.verify(token, secret);
  //   req.user = decoded;
  // } catch (error) {
  //   return res.status(401).json({ success: false, message: "Invalid token" });
  // }

  if (method === "POST") {
    const {
      seriesName,
      matchName,
      venue,
      international,
      team1,
      team2,
      sportId,
    } = req.body;

    try {
      const competition = await competitionSchema.create({
        seriesName,
        matchName,
        venue,
        international,
        team1,
        team2,
        sportId,
      });
      await competition.populate("team1.teamid");
      await competition.populate("team1.playersList");
      await competition.populate("team2.teamid");
      await competition.populate("team2.playersList");
      await competition.populate("sportId");
      res.status(200).json({ success: true, data: competition });
    } catch (error) {
      res.status(400).json({ success: false });
      console.log(error);
    }
  } else if (method === "GET") {
    console.log("get req");
    try {
      const competitions = await competitionSchema
        .find({})
        .populate("team1.teamid")
        .populate("team2.teamid")
        .populate("team2.playersList")
        .populate("team1.playersList");

      console.log(competitions);
      res.status(200).json({ success: true, data: competitions });
    } catch (error) {
      res.status(400).json({ success: false });
      console.log(error);
    }
  } else if (method === "DELETE") {
    const { competitionId } = req.body;
    try {
      const competition = await competitionSchema.deleteOne({
        _id: competitionId,
      });
      res.status(200).json({ success: true, data: competition });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method === "PATCH") {
    const {
      competitionId,
      seriesName,
      matchName,
      venue,
      international,
      team1,
      team2,
      sportId,
    } = req.body;
    try {
      let competition = await competitionSchema.findById(competitionId);
      competition.seriesName =
        seriesName === "" ? competition.seriesName : seriesName;
      competition.matchName =
        matchName === "" ? competition.matchName : matchName;
      competition.venue = venue === "" ? competition.venue : venue;
      competition.international =
        international === "" ? competition.international : international;
      competition.team1 = team1 === "" ? competition.team1 : team1;
      competition.team2 = team2 === "" ? competition.team2 : team2;
      competition.sportId = sportId === "" ? competition.sportId : sportId;
      await competition.populate("team1.teamid");
      await competition.populate("team1.playersList");
      await competition.populate("team2.teamid");
      await competition.populate("team2.playersList");
      await competition.populate("sportId");

      competition = await competition.save();
      res.status(200).json({ success: true, data: competition });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
