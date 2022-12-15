import { Schema, model } from "mongoose";
const EventTemplateSchema = new Schema(
  {
    event_name: {
      type: String, // Order,payment success
      required: true,
    },
    notification_template_id: {
      type: Schema.Types.ObjectId,
      ref: "NotificationTemplate",
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const EventTemplate = model("EventTemplate", EventTemplateSchema);
export { EventTemplate };
