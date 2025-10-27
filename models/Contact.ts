import mongoose, { Schema, type Model } from "mongoose";

export interface IContact {
  fullName: string;
  email: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
    minlength: [10, "Message must be at least 10 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ContactMessage: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default ContactMessage;
