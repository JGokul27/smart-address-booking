import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  addressLine1: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, default: 'India' },
  pinCode: { type: String, required: true },
});

export default mongoose.model('Address', AddressSchema);