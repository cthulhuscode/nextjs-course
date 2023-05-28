import DB from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const db = new DB();

const getAllAvocados = async (req: NextApiRequest, res: NextApiResponse<{data: TProduct[], length: number}>) => {
    const entries = await db.getAll();
    
    res.status(200).json({data: entries, length: entries.length});
}

export default getAllAvocados;