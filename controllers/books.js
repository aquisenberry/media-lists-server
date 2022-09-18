import {formatBookData} from '../utils/mediaHelpers.js'

export const getPopularBooks = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const item = await cache.getItem(`${process.env.BOOK_LIST_API}lists/full-overview.json?api-key=${process.env.BOOK_LIST_KEY}`,{},80000)
        let b = []
        let query = ""
        item.data.results.lists.forEach((list) => b = b.concat(list.books))
        query += `"${b.filter((book) => book['primary_isbn10'] && book['primary_isbn10'] !== "None")
            .map((book) =>book['primary_isbn10']).slice(0,99)
            .join('"OR"')}"`
        const books = await cache.getItem(`${process.env.BOOK_DATA_API}?q=${query}&fields=title,first_publish_year,cover_i,author_name`)
        const formattedBooks = formatBookData(books.data.docs)
        res.status(200).json(formattedBooks)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getBooks = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const query = req.query.q
        const item = await cache.getItem(`${process.env.BOOK_DATA_API}?q=${query}&fields=title,first_publish_year,cover_i,author_name`,{},80000)
        // let books = item.data.docs
        const formattedBooks = formatBookData(item.data.docs)
        res.status(200).json(formattedBooks)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}