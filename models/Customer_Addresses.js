import { UUID } from "bson";
import { Schema, model } from "mongoose";
const CustomerAddressSchema = new Schema(
  {
    customer_address_id: {
      type: UUID,
      unique: true, // unique + not null == unique + required
      required: true,
    },
    address_id: {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const CustomerAddress = model("CustomerAddress", CustomerAddressSchema);
export { CustomerAddress };
