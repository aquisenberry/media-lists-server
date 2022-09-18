
export const formatMovieData = (data,config) => {
    return data.map((entry) => {
          return {
              title: entry.title,
              year: new Date(entry.release_date).getFullYear(),
              poster: `${config.images.base_url}${config.images.poster_sizes[2]}${entry.poster_path}`,
          }
      })
  }
  export const formatTVData = (data,config) => {
    return data.map((entry) => {
          return {
              title: entry.name,
              year: new Date(entry.release_date).getFullYear(),
              poster: `${config.images.base_url}${config.images.poster_sizes[2]}${entry.poster_path}`,
          }
      })
  }
  export const formatVideoGameData = (data) => {
    return data.map((entry) => {
          return {
              title: entry.name,
              year: new Date(entry.released).getFullYear(),
              poster: entry.background_image
          }
      })
  }
  export const formatBoardGameData = (data) => {
    return data.map((entry) => {
          return {
              title: entry.name,
              year: entry.year_published,
              poster: entry.image_url
          }
      })
  }

  export const formatBookListData = (data) => {
    return data.map((entry) => {
          return {
              title: entry.title,
              year: entry.author,
              poster: entry.book_image,
              data: entry
          }
      })
  }
  export const formatBookData = (data) => {
    return data.map((entry) => {
          return {
              title: entry.title,
              year: entry.first_publish_year,
              poster: `https://covers.openlibrary.org/b/ID/${entry.cover_i}-M.jpg`,
              author: entry.author
          }
      })
  }