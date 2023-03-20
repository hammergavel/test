import auctionSchema from "@/models/auctionSchema";
import dbConnect from "@/util/mongo";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const {
        body: { auction, competitionId },
      } = req;

      await dbConnect();

      try {
        const existingAuction = await auctionSchema.findOne({
          competitionID: competitionId,
        });

        if (existingAuction) {
          existingAuction.auctionList.push(auction);
          await existingAuction.save();
          res
            .status(200)
            .json({ message: "Auction added to existing document." });
        } else {
          const newAuction = new auctionSchema({
            competitionID: competitionId,
            auctionList: [auction],
          });
          await newAuction.save();
          res
            .status(200)
            .json({ message: "New document created with auction." });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong." });
      }
    case "GET":
      try {
        const { competitionId } = req.query;

        // Find all auction documents with the provided competitionId

        if (competitionId) {
          const auctionList = await auctionSchema.find({
            competitionID: competitionId,
          });
          res.status(200).json({ success: true, data: auctionList });
        } else {
          const auctionList = await auctionSchema.find({});
          res.status(200).json({ success: true, data: auctionList });
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, message: "Invalid request method." });
      break;
  }
}
