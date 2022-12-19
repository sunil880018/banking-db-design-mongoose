import { Schema, model } from "mongoose";
const TransactionTypeSchema = new Schema(
  {
    transaction_type_code: {
      type: String,
      required: [true , "Please provide transaction_type_code"],
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const TransactionType = model("TransactionType", TransactionTypeSchema);
export { TransactionType };
