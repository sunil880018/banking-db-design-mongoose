import { Schema, model } from "mongoose";
const AddressTypeSchema = new Schema(
  {
    address_type_code: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const AddressType = model("AddressType", AddressTypeSchema);
export { AddressType };
