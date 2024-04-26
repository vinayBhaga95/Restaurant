import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain at least 3 charecters !"],
    maxLength: [30, "First name must not exceed 30 charecters !"],
  },

  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain at least 3 charecters !"],
    maxLength: [30, "Last name must not exceed 30 charecters !"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "provide a valid email ! "],
  },

  phone: {
    type: String,
    required: true,
    minLength: [10, "Number must contain only 10 digits !"],
    maxLength: [10, "Number must contain only 10 digits ! !"],
  },

  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
