type trip = {
    destination: string,
    departureDate: number,
    returnDate: number,
}

type house = {
    adress: number | string,
    rooms: number,
    price: number
}

type game = {
    title: string,
    platform: string,
    genre: string
}

type musicAlbum = {
    title: string,
    artist: string,
    numberOfTracks: number
}

type restaurant = {
    name: string,
    adress: number | string,
    menu: string[]
}

type movieCharacter = {
    name: string,
    actor: string,
    movie: string
}

type teacher = {
    name: string,
    subject: string,
    classroom: string | number
}

type library = {
    name: string,
    location: string,
    numberOfBooks: number
}

type conference = {
    name: string | number,
    date: number,
    participants: string[]
}

type weatherForecast = {
    date: number,
    temperature: number,
    precipitation: string
}

export {trip, house, game, musicAlbum, restaurant, movieCharacter, teacher, library, conference, weatherForecast}