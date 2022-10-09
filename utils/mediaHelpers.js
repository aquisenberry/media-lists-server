
export const formatMovieData = (data,config) => {
  return data.map((entry) => {
        return {
            _id: `${entry.id}`,
            type:'movies',
            title: entry.title,
            year: new Date(entry.release_date).getFullYear(),
            poster: `${config.images.base_url}${config.images.poster_sizes[2]}${entry.poster_path}`,
            creator: [
              "data unavailable"
            ]
        }
    })
}
export const formatTVData = (data,config) => {
  return data.map((entry) => {
        return {
            _id: `${entry.id}`,
            type: 'shows',
            title: entry.name,
            year: new Date(entry.release_date).getFullYear(),
            poster: `${config.images.base_url}${config.images.poster_sizes[2]}${entry.poster_path}`,
            creator: [
              "data unavailable"
            ]
        }
    })
}
export const formatVideoGameData = (data) => {
  return data.map((entry) => {
        return {
            _id: `${entry.id}`,
            type: 'video-games',
            title: entry.name,
            year: new Date(entry.released).getFullYear(),
            poster: entry.background_image,
            creator:[
              "data unavailable"
            ]
        }
    })
}
export const formatBoardGameData = (data) => {
  return data.map((entry) => {
        return {
            _id: `${entry.id}`,
            type: 'board-games',
            title: entry.name,
            year: entry.year_published,
            poster: entry.image_url,
            creator: [
                  entry.primary_publisher?.name ? entry.primary_publisher.name : "data unavailable",
                  entry.primary_designer?.name ? entry.primary_designer?.name : "data unavailable"
              ]
        }
    })
}
export const formatBookData = (data) => {
  return data.filter((entry) => entry.cover_i).map((entry) => {
      return {
          _id: `${entry.cover_edition_key}`,
          type: 'books',
          title: entry.title,
          year: entry.first_publish_year,
          poster: `https://covers.openlibrary.org/b/ID/${entry.cover_i}-M.jpg`,
          creator: entry.author
      }
    })
}
export const formatMovieDetails = (data,config) => {
  return {
    _id: `${data.id}`,
    type: 'movies',
    title: data.title,
    poster: `${config.images.base_url}${config.images.poster_sizes[2]}${data.poster_path}`,
    overview: data.overview,
    genres: data.genres,
    releaseDate: data.release_date,
    productionCompanies: data.production_companies.map((pc) => {
      return {
        id: pc.id,
        logo: `${config.images.base_url}${config.images.logo_sizes[2]}${pc.logo_path}`,
        name: pc.name,
        originCountry: pc.origin_country
      }
    }),
    adult: data.adult
  }
}
export const formatShowDetails = (data,config) => {
  return {
    _id: `${data.id}`,
    type: 'shows',
    name: data.name,
    poster: `${config.images.base_url}${config.images.poster_sizes[2]}${data.poster_path}`,
    overview: data.overview,
    genres: data.genres,
    firstAiredDate: data.first_air_date,
    productionCompanies: data.production_companies.map((pc) => {
      return {
        id: pc.id,
        logo: `${config.images.base_url}${config.images.logo_sizes[2]}${pc.logo_path}`,
        name: pc.name,
        originCountry: pc.origin_country
      }
    }),
    networks: data.networks.map((n) => {
      return {
        id: n.id,
        logo: `${config.images.base_url}${config.images.logo_sizes[2]}${n.logo_path}`,
        name: n.name,
        originCountry: n.origin_country
      }
    }),
    seasons: data.seasons.map((s) => {
      return {
        id: s.id,
        name: s.name,
        seasonNumber: s.season_number,
        episodeCount: s.episode_count,
        airDate: s.air_date,
        poster: `${config.images.base_url}${config.images.poster_sizes[2]}${s.poster_path}`,
      }
    }),
    episodeRuntime: data.episode_run_time,
    adult: data.adult
  }
}