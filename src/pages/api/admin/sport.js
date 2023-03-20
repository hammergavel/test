import sportSchema from "@/models/sportSchema";
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
    const { sportName, statsFormat } = req.body;
    try {
      const sport = await sportSchema.create({
        sportName: sportName,
        statsFormat: statsFormat,
      });
      res.status(201).json({ success: true, data: sport });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method === "GET") {
    try {
      const sport = await sportSchema.find({});
      res.status(201).json({ success: true, data: sport });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method === "DELETE") {
    const { sportId } = req.body;
    try {
      const sport = await sportSchema.deleteOne({
        _id: sportId,
      });

      res.status(201).json({ success: true, data: sport });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method === "PATCH") {
    const { sportId, sportName, statsFormat } = req.body;
    try {
      let sport = await sportSchema.findOne({
        _id: sportId,
      });
      if (!sport) {
        return res
          .status(400)
          .json({ success: false, data: "No sport was found to update" });
      }
      sport.sportName = sportName;
      sport.statsFormat = statsFormat;
      sport = await sport.save();
      res.status(201).json({ success: true, data: sport });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
