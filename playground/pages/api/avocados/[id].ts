import DB from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const db = new DB();

const getAvocado = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;        

    const avocado = await db.getById(id as string);

    if(!avocado) return res.status(404).json({msg: "No avocado was found with the id provided"});

    res.status(200).json({data: avocado});
}

export default getAvocado;