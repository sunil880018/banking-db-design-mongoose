import { Schema, model } from "mongoose";
const EventQueueSchema = new Schema(
  {
    person_id: {
      type: Schema.Types.ObjectId,
      ref: "Person",
      required: true,
    },
    event_name: {
      type: String, // order completed , payment Success etc
      trim: true,
      required: true,
    },
    event_attributes: {
      type: {
        title: String,
      },
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const EventQueue = model("EventQueue", EventQueueSchema);
export { EventQueue };
