import mongoose from "mongoose";

const { Schema } = mongoose;

const outivitySchema = new Schema({
  title: { type: String, required: true },
  area: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  lat: { type: String, required: true },
  lng: { type: String, required: true },
});

const Outivity =
  mongoose.models.Outivity || mongoose.model("Outivity", outivitySchema);

export default Outivity;
