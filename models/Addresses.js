import { UUID } from "bson";
import { Schema, model } from "mongoose";
const AddressSchema = new Schema(
  {
    address_id: {
      type: UUID,
      unique: true, // unique + not null == unique + required
      required: true,
    },
    address_type_code: {
      type: Schema.Types.ObjectId,
      ref: "AddressType",
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const Address = model("Address", AddressSchema);
export { Address };
