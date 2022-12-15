import { Schema, model } from "mongoose";
const NotificationTemplateSchema = new Schema(
  {
    notification_type: {
      type: String, // PUSH , SMS , EMAIL
      trim: true,
      unique: true,
      required: true,
    },
    notification_code: {
      type: String, // ORDER , PAYMENT
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    body: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const NotificationTemplate = model(
  "NotificationTemplate",
  NotificationTemplateSchema
);
export { NotificationTemplate };
