export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    thumbnail: string;
    images: string[]
    rating:number;
    ratingAmount:number;
}


export interface ProductShort{
    id: number;
    title: string;
    thumbnail: string;
    rating:number;
}