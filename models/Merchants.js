import { UUID } from "bson";
import { Schema, model } from "mongoose";
const MerchantSchema = new Schema(
  {
    merchant_id: {
      type: UUID,
      unique: true, // unique + not null == unique + required
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const Merchant = model("Merchant", MerchantSchema);
export { Merchant };
