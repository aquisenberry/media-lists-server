import {formatVideoGameData} from '../utils/mediaHelpers.js'

export const getPopularVideoGames = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const item = await cache.getItem(`${process.env.GAME_API}?key=${process.env.GAME_KEY}`,{},80000)
        const games = formatVideoGameData(item.data.results)
        res.status(200).json(games)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getVideoGames = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const query = req.query.q
        const item = await cache.getItem(`${process.env.GAME_API}?key=${process.env.GAME_KEY}&search=${query}`,{},80000)
        const games = formatVideoGameData(item.data.results)
        res.status(200).json(games)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getVideoGameDetails = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const gameId = req.query.id
        const item = await cache.getItem(`${process.env.GAME_API}/${gameId}?key=${process.env.GAME_KEY}`,{}, 80000)
        res.status(200).json(item)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}