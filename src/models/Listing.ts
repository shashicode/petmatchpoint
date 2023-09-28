import mongoose from 'mongoose'

export interface Listings extends mongoose.Document {
  title: string,
  desc: string,
  price: Number,
  pet_age: Number,
  location: string,
  user_phone: string,
  user_email: string,
  plan_type: string,
  currency: string,
  country: String,
  category: String,
  is_active: boolean,
  is_deleted: boolean,
  img_urls: Array<string>,
  listing_end_date: {},
  created_at: {},
  updated_at: {},
}

const ListingSchema = new mongoose.Schema<Listings>(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    pet_age: { // in months
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      default: "usd"
    },
    country: {
      type: String,
      default: "usa"
    },
    listing_end_date: {
      type: Date,
      required: true,
    },
    user_phone: {
      type: String,
      required: true,
    },
    user_email: {
      type: String,
      required: true,
    },
    plan_type: {
      type: String,
      default: "lifetime",
    },
    is_active: {
      type: Boolean,
      default: true
    },
    is_deleted: {
      type: Boolean,
      default: false
    },
    category: {
      type: String,
      required: false
    },
    img_urls: {
      type: [],
      default: [],
      required: false
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  }
);

export default mongoose.models.Listings || mongoose.model<Listings>('Listings', ListingSchema);
