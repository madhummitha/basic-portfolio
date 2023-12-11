import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    // required: true,
  },
  // createdAt: {},
  // updatedAt: {},
});

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
