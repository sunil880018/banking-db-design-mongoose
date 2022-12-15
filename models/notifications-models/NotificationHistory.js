import { Schema, model } from "mongoose";
const NotificationHistorySchema = new Schema(
  {
    event_template: {
      type: Schema.Types.ObjectId,
      ref: "EventTemplate",
      required: true,
    },
    person: {
      type: Schema.Types.ObjectId,
      ref: "Person",
      required: true,
    },
    notification_template: {
      type: Schema.Types.ObjectId,
      ref: "NotificationTemplate",
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const NotificationHistory = model(
  "NotificationHistory",
  NotificationHistorySchema
);
export { NotificationHistory };
