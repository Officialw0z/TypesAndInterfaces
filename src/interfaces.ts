interface person  {
    name: string,
    age: number,
    address: string
}

interface car {
    brand: string,
    model: string,
    year: number
}

interface book {
    title: string,
    author: string,
    pages: number
}

interface computer {
    brand: string,
    processor: string,
    ram: string,
    storage: string
}

interface movie {
    title: string,
    director: string,
    genre: string
}

interface student {
    name: string,
    id: number,
    courses: string[]
}

interface phone {
    brand: string,
    model: string,
    os: string
}

interface customer {
    name: string,
    customerNumber: number,
    purchaseHistory: string[]
}

interface product {
    name: string,
    price: number,
    category: string
}

interface order {
    orderNumber: number,
    productList: string[]
    totalPrice: number
}

export {person, book, computer, movie, student, phone, customer, product, order, car}