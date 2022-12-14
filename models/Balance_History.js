import { UUID } from "bson";
import { Schema, model } from "mongoose";
const BalanceHistorySchema = new Schema(
  {
    balance_date: {
      type: Date,
      required: true,
    },
    account_id: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const BalanceHistory = model("BalanceHistory", BalanceHistorySchema);
export { BalanceHistory };
