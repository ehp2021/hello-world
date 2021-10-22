export interface MovieDetails {
    adult: boolean,
    backdrop_path: string, 
    belongs_to_collection: null,
    budget: number,
    genres: Genre[],
    homepage: string, //url
    id: number,
    imdb_id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number, //float
    poster_path: string, //link to poster
    production_companies: ProductionCompanies[],
    production_countries: ProductionCountries[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: SpokenLanguages[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

interface Genre {
    id: number,
    name: string
}

interface ProductionCompanies {
    id: number,
    logo_path:string,
    name:string,
    origin_country: string
}

interface SpokenLanguages {
    english_name:string,
    iso_639_1: string,
    name: string,
}

interface ProductionCountries {
        iso_3166_1: string,
        name: string
}
