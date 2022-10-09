import * as helper from '../mediaHelpers.js'
import mocks from './__mocks__/mediaHelpers.mock.json'

describe('Media Helper Utility', () => {
    describe('formatMovieDetails', () => {
        it('has an _id', () => {
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
    describe('formatShowDetails', () => {
        it('has an _id', () => {
            const formatedData = helper.formatShowDetails(mocks.show,mocks.showConfig)
            expect(formatedData._id).toBe(mocks.show.id.toString())
        })
        it('has a type', () => {
            const formatedData = helper.formatShowDetails(mocks.show,mocks.showConfig)
            expect(formatedData.type).toBe('shows')
        })
        it('has a name', () => {
            const formatedData = helper.formatShowDetails(mocks.show,mocks.showConfig)
            expect(formatedData.name).toBe(mocks.show.name)
        })
        it('has a poster', () => {
            const formatedData = helper.formatShowDetails(mocks.show,mocks.showConfig)
            expect(formatedData.poster)
            .toBe(mocks.showConfig.images.base_url
                + mocks.showConfig.images.poster_sizes[2]
                + mocks.show.poster_path)
        })
        it('has an overview', () => {
            const formatedData = helper.formatShowDetails(mocks.show,mocks.showConfig)
            expect(formatedData.overview).toBe(mocks.show.overview)
        })
        it('has genres', () => {
            const formatedData = helper.formatShowDetails(mocks.show,mocks.showConfig)
            expect(formatedData.genres).toContain(mocks.show.genres[0])
        })
        it('has a first aired date', () => {
            const formatedData = helper.formatShowDetails(mocks.show,mocks.showConfig)
            expect(formatedData.firstAiredDate).toBe(mocks.show.first_air_date)
        })
        it('has a list of production companies', () => {
            const formatedData = helper.formatShowDetails(mocks.show,mocks.showConfig)
            expect(formatedData.productionCompanies[0].id).toBe(mocks.show.production_companies[0].id)
            expect(formatedData.productionCompanies[0].logo)
            .toBe(mocks.showConfig.images.base_url
                + mocks.showConfig.images.logo_sizes[2]
                + mocks.show.production_companies[0].logo_path)
            expect(formatedData.productionCompanies[0].name).toBe(mocks.show.production_companies[0].name)
            expect(formatedData.productionCompanies[0].originCountry).toBe(mocks.show.production_companies[0].origin_country)
        })
        it('has a list of networks', () => {
            const formatedData = helper.formatShowDetails(mocks.show,mocks.showConfig)
            expect(formatedData.networks[0].id).toBe(mocks.show.networks[0].id)
            expect(formatedData.networks[0].logo)
            .toBe(mocks.showConfig.images.base_url
                + mocks.showConfig.images.logo_sizes[2]
                + mocks.show.networks[0].logo_path)
            expect(formatedData.networks[0].name).toBe(mocks.show.networks[0].name)
            expect(formatedData.networks[0].originCountry).toBe(mocks.show.networks[0].origin_country)
        })
        it('has a list of seasons', () => {
            const formatedData = helper.formatShowDetails(mocks.show,mocks.showConfig)
            expect(formatedData.seasons[0].id).toBe(mocks.show.seasons[0].id)
            expect(formatedData.seasons[0].airDate).toBe(mocks.show.seasons[0].air_date)
            expect(formatedData.seasons[0].poster)
            .toBe(mocks.showConfig.images.base_url
                + mocks.showConfig.images.poster_sizes[2]
                + mocks.show.seasons[0].poster_path)
            expect(formatedData.seasons[0].name).toBe(mocks.show.seasons[0].name)
            expect(formatedData.seasons[0].seasonNumber).toBe(mocks.show.seasons[0].season_number)
            expect(formatedData.seasons[0].episodeCount).toBe(mocks.show.seasons[0].episode_count)
        })
        it('has a list of episode runtimes', () => {
            const formatedData = helper.formatShowDetails(mocks.show,mocks.showConfig)
            expect(formatedData.episodeRuntime).toBe(mocks.show.episode_run_time)
            
        })
        it('has an indicator of if the show is intended for adults', () => {
            const formatedData = helper.formatShowDetails(mocks.show,mocks.showConfig)
            expect(formatedData.adult).toBe(mocks.show.adult)
            
        })
    })
})