import { UUID } from "bson";
import { Schema, model } from "mongoose";
const CustomerPurchaseSchema = new Schema(
  {
    purchase_id: {
      type: UUID,
      unique: true, // unique + not null == unique + required
      required: true,
    },
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    service_code: {
      type: Schema.Types.ObjectId,
      ref: "ProductService",
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const CustomerPurchase = model("CustomerPurchase", CustomerPurchaseSchema);
export { CustomerPurchase };
