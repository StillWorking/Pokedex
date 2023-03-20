import { PokemonModel } from '@/backend/database/models/Pokemon/Pokemon.model';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const getId = req.query.id as unknown as number

  if (req.method === "GET") {
    try {
        const data = await PokemonModel.findById(getId)
        return res.status(200).json({data})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: 'Something went wrong'})
    }
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}