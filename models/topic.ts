import mongoose, { Schema } from "mongoose";

// you should restart server if you edited this file !

const topicSchema = new Schema(
  {
    title: { type: String },
    des: { type: String },
    edited: { type: Boolean, default: false, require: true },
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
