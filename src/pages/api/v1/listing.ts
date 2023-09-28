import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Listings from "@/models/Listing";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const {
        title,
        desc,
        price,
        pet_age,
        location,
        currency,
        country,
        category,
        listing_end_date,
        user_phone,
        user_email,
        plan_type,
      } = req.body;

      const createListing = await Listings.create({
        title,
        desc,
        price,
        pet_age,
        location,
        currency,
        country,
        category,
        listing_end_date,
        user_phone,
        user_email,
        plan_type,
      });

      if (createListing) {
        res.status(200).send({ message: "Listing Created" });
      }
    } catch (error: any) {
      res.status(400).send(error);
    }
  } else if (req.method === "GET") {
    try {
        const getListing: any = await Listings.find({});
  
        if (getListing) {
          res.status(200).send(getListing);
        }
      } catch (error: any) {
        res.status(400).send(error);
      }
  } else if (req.method === "PATCH") {
    try {
        const val = {...req.body}

        const filter = { id: val.id };
        delete val.id
        const update = { ...val };
  
        console.log(filter, update)

        const patchListing = await Listings.findOneAndUpdate(filter, update);
  
        if (patchListing) {
          res.status(200).send({ message: "Listing Updated" });
        }
        console.log(patchListing)
      } catch (error: any) {
        res.status(400).send(error);
      }
  } else if (req.method === "DELETE") {
    try {
        const val = {...req.body}

        const filter = { id: val.id };

        const listingDeleted = await Listings.deleteOne(filter);
  
        if (listingDeleted) {
          res.status(200).send({ message: "Listing Deleted" });
        }
      } catch (error: any) {
        res.status(400).send(error);
      }
  } else {
    // Handle any other HTTP method
  }
}
