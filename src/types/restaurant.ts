export interface Dish {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

export interface MenuCategory {
  name: string;
  dishes: Dish[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
  };
}

export interface RestaurantInfo {
  name: string;
  slogan: string;
  description: string;
  contact: ContactInfo;
} 