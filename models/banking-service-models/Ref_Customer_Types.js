import { Schema, model } from "mongoose";
const CustomerTypeSchema = new Schema(
  {
    customer_type_code: {
      type: String,
      trim: true,
      required: [true , "Please provide customer_type_code"],
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const CustomerType = model("CustomerType", CustomerTypeSchema);
export { CustomerType };
