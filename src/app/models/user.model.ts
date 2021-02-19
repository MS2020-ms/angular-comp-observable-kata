

interface Ride {
    origin: string,
    district: string,
    destination: string,
    distance: number,
    time: number,
    price: number,
    energy: number
}

export interface User {
    image: string,
    name: string,
    email: string,
    phone: string,
    location: string,
    ride: Ride,
}