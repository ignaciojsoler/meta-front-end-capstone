export interface Product {
    id: number;
    name: string;
    imageSrc: string;
    price: string;
    description: string;
}

export interface Testimonial {
    id: number;
    rating: number;
    name: string;
    review: string;
}

export interface UserData {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
}