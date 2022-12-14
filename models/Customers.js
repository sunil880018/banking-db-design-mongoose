import { UUID } from "bson";
import { Schema, model } from "mongoose";
const CustomerSchema = new Schema(
  {
    customer_id: {
      type: UUID,
      unique: true, // unique + not null == unique + required
      required: true,
    },
    customer_type_code: {
      type: Schema.Types.ObjectId,
      ref: "CustomerType",
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const Customer = model("Customer", CustomerSchema);
export { Customer };
