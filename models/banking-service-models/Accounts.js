import { Schema, model } from "mongoose";
const AccountSchema = new Schema(
  {
    account_id: {
      type: Number,
      trim: true,
      unique: true, // unique + not null == unique + required
      required: true,
      min:11,
      max:11,
    },
    account_type_code: {
      type: Schema.Types.ObjectId,
      ref: "AccountType",
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
const Account = model("Account", AccountSchema);
export { Account };
