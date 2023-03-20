import auctionSchema from "@/models/auctionSchema";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const {
          competitionId,
          purseAmount,
          spots,
          startTime,
          entryFee,
          prizePool,
        } = req.body;

        // Check if auction document with provided competitionId already exists
        const auctionDocument = await auctionSchema.findOne({
          competitionID: competitionId,
        });

        if (!auctionDocument) {
          return res.status(400).json({
            success: false,
            message: "Competition doesn't exist",
          });
        }

        auctionDocument.auctionList.push({
          membersList: [],
          purseAmount: purseAmount,
          membersAccount: [],
          purchaseList: [],
          entryFee: entryFee,
          prizePool: prizePool,
          auctionStartTime: startTime,
          spots: spots,
        });

        // Save new auction document to database
        await auctionDocument.save();

        res.status(201).json({
          success: true,
          message: "Auction document created successfully.",
        });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case "GET":
      try {
        const { competitionId } = req.query;

        // Find all auction documents with the provided competitionId
        const auctionList = await Auction.find({
          competitionID: competitionId,
        });

        res.status(200).json({ success: true, auctionList: auctionList });
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
