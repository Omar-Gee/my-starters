import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
	console.log("==============");
	// Get data from your database
	res.status(200).json("hello");
}
