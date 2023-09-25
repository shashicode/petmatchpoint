import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

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
      const { email, displayName, phoneNumber, emailVerified, phoneVerified, displayImage } =
        req.body;

      const createListing = await User.create({
        email,
        displayName,
        phoneNumber,
        emailVerified,
        phoneVerified,
        displayImage
      });

      if (createListing) {
        res.status(200).send({ message: "User Created" });
      }
    } catch (error: any) {
      res.status(400).send(error);
    }
  } else if (req.method === "GET") {
    try {
      const { user } = req.query;

      const getUser: any = await User.findById(user).exec();

      if (getUser) {
        res.status(200).send(getUser);
      }
    } catch (error: any) {
      res.status(400).send(error);
    }
  }
  //   } else if (req.method === "PATCH") {
  //     try {
  //       const val = { ...req.body };

  //       const filter = { id: val.id };
  //       delete val.id;
  //       const update = { ...val };

  //       console.log(filter, update);

  //       const patchListing = await User.findOneAndUpdate(filter, update);

  //       if (patchListing) {
  //         res.status(200).send({ message: "Listing Updated" });
  //       }
  //       console.log(patchListing);
  //     } catch (error: any) {
  //       res.status(400).send(error);
  //     }
  //   } else if (req.method === "DELETE") {
  //     try {
  //       const val = { ...req.body };

  //       const filter = { id: val.id };

  //       const listingDeleted = await User.deleteOne(filter);

  //       if (listingDeleted) {
  //         res.status(200).send({ message: "Listing Deleted" });
  //       }
  //     } catch (error: any) {
  //       res.status(400).send(error);
  //     }
  //   } else {
  //     // Handle any other HTTP method
  //   }
}
