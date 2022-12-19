import { Schema, model } from "mongoose";
const AccountTypeSchema = new Schema(
  {
    account_type_code: {
      type: String,
      trim: true,
      required: [true, 'Please provide account_type_code'],
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const AccountType = model("AccountType", AccountTypeSchema);
export { AccountType };
