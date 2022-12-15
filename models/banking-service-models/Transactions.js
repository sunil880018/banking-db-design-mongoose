import { UUID } from "bson";
import { Schema, model } from "mongoose";
const TransactionSchema = new Schema(
  {
    transaction_id: {
      type: UUID,
      unique: true, // unique + not null == unique + required
      required: true,
    },
    purchase_id: {
      type: Schema.Types.ObjectId,
      ref: "CustomerPurchase",
      required: true,
    },
    account_id: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    transaction_type_code: {
      type: Schema.Types.ObjectId,
      ref: "TransactionType",
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const Transaction = model("Transaction", TransactionSchema);
export { Transaction };
