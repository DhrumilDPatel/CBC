const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let passSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "user id is required."],
      ref: "users",
    },
    from: { type: String, required: [true, "from which stop?"] },
    to: { type: String, required: [true, "to which stop?"] },
    date: { type: Date, required: [true, "starting from which date?"] },
    validity: {
      type: Number,
      required: [true, "for How many months?"],
      default: 1,
    },
    price: {
      type: Number,
      required: [true, "final price is required"],
      default: 1,
    },
  },
  {
    timestamps: true,
    collection: "passes",
  }
);

module.exports = mongoose.model("Route", passSchema);
