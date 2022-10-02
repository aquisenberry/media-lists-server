import * as helper from '../mediaHelpers.js'
import mocks from './__mocks__/mediaHelpers.mock.json'

describe('Media Helper Utility', () => {
    describe('formatMovieDetails', () => {
        it('has an id', () => {
            const formatedData = helper.formatMovieDetails(mocks.movie,mocks.movieConfig)
            expect(formatedData._id).toBe(mocks.movie.id.toString())
        })
        it('has a type', () => {
            const formatedData = helper.formatMovieDetails(mocks.movie,mocks.movieConfig)
            expect(formatedData.type).toBe('movies')
        })
        it('has a title', () => {
            const formatedData = helper.formatMovieDetails(mocks.movie,mocks.movieConfig)
            expect(formatedData.title).toBe(mocks.movie.title)
        })
        it('has a poster', () => {
            const formatedData = helper.formatMovieDetails(mocks.movie,mocks.movieConfig)
            expect(formatedData.poster)
            .toBe(mocks.movieConfig.images.base_url
                + mocks.movieConfig.images.poster_sizes[2]
                + mocks.movie.poster_path)
        })
        it('has an overview', () => {
            const formatedData = helper.formatMovieDetails(mocks.movie,mocks.movieConfig)
            expect(formatedData.overview).toBe(mocks.movie.overview)
        })
        it('has genres', () => {
            const formatedData = helper.formatMovieDetails(mocks.movie,mocks.movieConfig)
            expect(formatedData.genres).toContain(mocks.movie.genres[0])
        })
        it('has a release date', () => {
            const formatedData = helper.formatMovieDetails(mocks.movie,mocks.movieConfig)
            expect(formatedData.releaseDate).toBe(mocks.movie.release_date)
        })
        it('has a list of production companies', () => {
            const formatedData = helper.formatMovieDetails(mocks.movie,mocks.movieConfig)
            expect(formatedData.productionCompanies[0].id).toBe(mocks.movie.production_companies[0].id)
            expect(formatedData.productionCompanies[0].logo)
            .toBe(mocks.movieConfig.images.base_url
                + mocks.movieConfig.images.logo_sizes[2]
                + mocks.movie.production_companies[0].logo_path)
            expect(formatedData.productionCompanies[0].name).toBe(mocks.movie.production_companies[0].name)
            expect(formatedData.productionCompanies[0].originCountry).toBe(mocks.movie.production_companies[0].origin_country)
        })
        it('has an indicator of if the movie is intended for adults', () => {
            const formatedData = helper.formatMovieDetails(mocks.movie,mocks.movieConfig)
            expect(formatedData.adult).toBe(mocks.movie.adult)
            
        })

    })
})