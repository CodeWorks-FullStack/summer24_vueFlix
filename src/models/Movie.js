


export class Movie {
  constructor(data) {
    this.id = data.id
    this.title = data.title || data.original_title
    this.overview = data.overview
    this.releaseDate = new Date(data.release_date.replaceAll('-', '/'))
    this.reviewScore = data.vote_average
    this.reviewCount = data.vote_count
    this.poster = `https://media.themoviedb.org/t/p/original${data.poster_path}` //FIXME no image here
  }
}

/**!SECTION
 *
 * {
    "adult": false,
    "backdrop_path": "/fDmci71SMkfZM8RnCuXJVDPaSdE.jpg",
    "genre_ids": [
        16,
        10751,
        35,
        28
    ],
    "id": 519182,
    "original_language": "en",
    "original_title": "Despicable Me 4",
    "overview": "Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
    "popularity": 5039.313,
    "poster_path": "/3w84hCFJATpiCO5g8hpdWVPBbmq.jpg",
    "release_date": "2024-06-20",
    "title": "Despicable Me 4",
    "video": false,
    "vote_average": 7.542,
    "vote_count": 274
}
 */
