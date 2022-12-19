import { Schema, model } from "mongoose";
const ProductServiceSchema = new Schema(
  {
    service_code: {
      type: String,
      unique: true, // unique + not null == unique + required
      required: [true, 'Please provide service code'],
    },
    merchant_id: {
      type: Schema.Types.ObjectId,
      ref: "Merchant",
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const ProductService = model("ProductService", ProductServiceSchema);
export { ProductService };
