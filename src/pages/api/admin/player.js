import playerSchema from "@/models/playerSchema";

import dbConnect from "@/util/mongo.js";
// import mongoose from "mongoose";

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
      sportId,
      playerName,
      playerPhotoURL,
      nationality,
      playerRole,
      playerBasePrice,
      playerStats,
    } = req.body;
    try {
      const player = await playerSchema.create({
        sportId: sportId,
        playerName: playerName,
        playerPhotoURL: playerPhotoURL,
        nationality: nationality,
        playerRole: playerRole,
        playerBasePrice: playerBasePrice,
        playerStats: playerStats,
      });
      await player.populate("sportId");
      await player.populate("nationality");
      res.status(201).json({ success: true, data: player });
    } catch (error) {
      res.status(400).json({ success: false });
      console.log(error);
    }
  } else if (method === "GET") {
    const { playerId } = req.query;
    const { international } = req.query;
    const { nationality } = req.query;

    if (international === "true") {
      if (!playerId) {
        console.log("This will run 1");
        try {
          // console.log(mongoose.models);
          const players = await playerSchema
            .find({ nationality })
            .populate("sportId")
            .populate("nationality");
          res.status(201).json({ success: true, data: players });
        } catch (error) {
          res.status(400).json({ success: false });
          console.log("axy", error);
        }
      } else {
        console.log("This will run 2");
        try {
          const player = await playerSchema
            .findOne({ playerId, nationality })
            .populate("sportId")
            .populate("nationality");

          if (!player) {
            return res
              .status(404)
              .json({ success: false, data: "No Player found" });
          }

          res.status(201).json({ success: true, data: player });
        } catch (error) {
          console.log(error);
          res.status(400).json({ success: false });
        }
      }
    } else {
      if (!playerId) {
        console.log("This will run 3");
        try {
          const players = await playerSchema
            .find({})
            .populate("sportId")
            .populate("nationality");
          res.status(201).json({ success: true, data: players });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      } else {
        console.log("This will run 4");
        try {
          const player = await playerSchema
            .findOne({ playerId })
            .populate("sportId")
            .populate("nationality");

          if (!player) {
            return res
              .status(404)
              .json({ success: false, data: "No Player found" });
          }

          res.status(201).json({ success: true, data: player });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      }
    }
  } else if (method === "DELETE") {
    const { playerId } = req.body;
    try {
      const player = await playerSchema.deleteOne({
        _id: playerId,
      });

      res.status(201).json({ success: true, data: player });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method === "PATCH") {
    const {
      playerId,
      sportId,
      playerName,
      playerPhotoURL,
      nationality,
      playerRole,
      playerBasePrice,
      playerStats,
    } = req.body;
    try {
      let player = await playerSchema.findOne({
        _id: playerId,
      });
      if (!player) {
        return res
          .status(400)
          .json({ success: false, data: "No player was found to update" });
      }
      player.sportId = sportId === "" ? player.sportId : sportId;
      player.playerName = playerName === "" ? player.playerName : playerName;
      player.playerPhotoURL =
        playerPhotoURL === "" ? player.playerPhotoURL : playerPhotoURL;
      player.nationality =
        nationality === "" ? player.nationality : nationality;
      player.playerRole = playerRole === "" ? player.playerRole : playerRole;
      player.playerBasePrice =
        playerBasePrice === "" ? player.playerBasePrice : playerBasePrice;
      player.playerStats =
        playerStats === "" ? player.playerStats : playerStats;
      player = await player.save();
      await player.populate("sportId");
      await player.populate("nationality");
      res.status(201).json({ success: true, data: player });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
