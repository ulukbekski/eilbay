export interface ProductMedia {
    id: number;
    image: string;
    product: number;
}

export interface ProductCategory {
    id:number;
    name: string;
    slug: string;
}

export interface ProductSub_Category{
    id:number;
    name: string;
    slug: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    main_image: string;
    artikul: string;
    sale_price: number | null;
    owner: number;
    price: number;
    currency: {
        id: number;
        name: string;
    };
    user_info: {
        id: number;
        username: string;
        profile_image: string;
    }
    category: ProductCategory;
    sale: boolean;
    media: ProductMedia[] | [];
    sub_category: ProductSub_Category | null;
    rating: number;
    ratingAmount: number;
}


export interface ProductShort{
    id: number;
    name: string;
    main_image: string;
}

export interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    main_image: string;
    price: number;
    rating: number;
    ratingAmount: number;
    sale:boolean;
    sale_price: number | null;
  }