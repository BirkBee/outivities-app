import dbConnect from "@/db/connect";
import Outivity from "@/db/models/Outivities";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const outivity = await Outivity.findById(id);

    if (!outivity) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(outivity);
  }

  if (request.method === "PUT") {
    await Outivity.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ message: "Success!" });
  }

  if (request.method === "DELETE") {
    await Outivity.findByIdAndDelete(id);

    response.status(200).json({ message: "Success!" });
  }
}
