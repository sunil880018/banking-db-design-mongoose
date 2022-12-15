import { UUID } from "bson";
import { Schema, model } from "mongoose";
const PersonSchema = new Schema(
  {
    person_id: {
      type: UUID,
      unique: true, // unique + not null == unique + required
      required: true,
    },
    person_type_code: {
      type: String, // can be fcm , mobile no , email
      trim: true,
      required: true,
    },
    value: {
      type: String, // fcm value---> 342384u38y54325y2 // mobile no --->9834232424 // email --->gfgf2324@gmail
      required: true,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
const Person = model("Person", PersonSchema);
export { Person };
