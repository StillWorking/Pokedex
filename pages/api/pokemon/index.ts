import { PokemonModel } from '@/backend/database/models/Pokemon/Pokemon.model'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const data = await PokemonModel.findAll()
            return res.status(200).json({data})
        } catch (error) {
            console.log(error)
            return res.status(500).json({msg: 'Something went wrong'})
        }
    } else {
        return res.status(405).json({msg: 'Method not working'})
    }
}