import dbConnect from "@/db/connect";
import Outivity from "@/db/models/Outivities";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const outivity = await Outivity.find();
    return response.status(200).json(outivity);
  }

  if (request.method === "POST") {
    try {
      const outivityData = request.body;
      await Outivity.create(outivityData);

      response.status(201).json({ status: "Outivity created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
