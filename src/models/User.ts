import mongoose from "mongoose";

export interface Users extends mongoose.Document {
  email: string;
  displayName: string;
  phoneNumber: string;
  emailVerified: Boolean;
  phoneVerified: Boolean;
  displayImage: string;
  isActive: Boolean;
  created_at: {};
  updated_at: {}
}

const UserSchema = new mongoose.Schema<Users>({
  email: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    default: "",
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  phoneVerified: {
    type: Boolean,
    default: false,
  },
  displayImage: {
    type: String,
    required: false
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Users || mongoose.model<Users>("Users", UserSchema);
