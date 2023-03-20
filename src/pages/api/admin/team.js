import teamSchema from "@/models/teamSchema";
import dbConnect from "@/util/mongo.js";

const secret = process.env.AUTHENTICATION;

export default async function handler(req, res) {
  const { method } = req;

  // console.log(method);

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
    const { name, national, teamflagURL, sportId } = req.body;

    try {
      const team = await teamSchema.create({
        name,
        national,
        teamflagURL,
        sport: sportId,
      });
      await team.populate("sport");
      res.status(200).json({ success: true, data: team });
    } catch (error) {
      res.status(400).json({ success: false });
      console.log(error);
    }
  } else if (method === "GET") {
    let { international } = req.query;

    // console.log("typeof international", typeof international);
    if (international === "false") {
      try {
        const teams = await teamSchema.find({ national: false });
        res.status(200).json({ success: true, data: teams });
      } catch (error) {
        res.status(400).json({ success: false });
      }
    } else {
      try {
        const teams = await teamSchema.find({ national: true });
        res.status(200).json({ success: true, data: teams });
      } catch (error) {
        res.status(400).json({ success: false });
      }
    }
  } else if (method === "DELETE") {
    const { teamId } = req.body;
    try {
      const team = await teamSchema.deleteOne({ _id: teamId });
      res.status(200).json({ success: true, data: team });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method === "PATCH") {
    const { teamId, name, national, teamflagURL, sportId } = req.body;
    try {
      let team = await teamSchema.findById(teamId);

      if (!team) {
        res.status(400).json({ success: false, data: "No such team exists" });
      }

      team.name = name === "" ? team.name : name;
      team.national = national === "" ? team.national : national;
      team.teamflagURL = teamflagURL === "" ? team.teamflagURL : teamflagURL;
      team.sport = sportId === "" ? team.sport : sportId;
      team = await team.save();
      res.status(200).json({ success: true, data: team });
    } catch (error) {
      res.status(400).json({ success: false });
      console.log(error);
    }
  }
}
