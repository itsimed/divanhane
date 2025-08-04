import type { MenuCategory, RestaurantInfo } from '../types/restaurant';

export const restaurantInfo: RestaurantInfo = {
  name: "Divan Hane",
  slogan: "L'art de la cuisine turque",
  description: "Découvrez l'authenticité de la gastronomie turque dans un cadre élégant et chaleureux.",
  contact: {
    address: "123 Rue de la Paix, 75001 Paris",
    phone: "+33 1 42 86 17 23",
    email: "contact@divanhane.fr",
    hours: {
      "Lundi - Vendredi": "12:00 - 14:30, 19:00 - 23:00",
      "Samedi - Dimanche": "12:00 - 15:00, 19:00 - 23:30"
    },
    socialMedia: {
      facebook: "https://facebook.com/divanhane",
      instagram: "https://instagram.com/divanhane",
      twitter: "https://twitter.com/divanhane",
      tiktok: "https://tiktok.com/@divanhane"
    }
  }
};

export const menuData: MenuCategory[] = [
  {
    name: "Petit-déjeuner",
    dishes: [
      {
        id: "breakfast-1",
        name: "Serpme Kahvaltı",
        description: "Petit déjeuner turc pour deux, avec fromages, olives, confitures, œufs, légumes, pâtisseries et thé.",
        price: 2200,
        category: "Petit-déjeuner",
        image: "https://storage.googleapis.com/divanhane/1.webp"
      },
      {
        id: "breakfast-2",
        name: "Kahvaltı Tabağı",
        description: "Assiette individuelle du petit déjeuner turc, complète et équilibrée.",
        price: 1200,
        category: "Petit-déjeuner",
        image: "https://storage.googleapis.com/divanhane/2.webp"
      }
    ]
  },
  {
    name: "Soupes",
    dishes: [
      {
        id: "soup-1",
        name: "Mercimek Çorbası",
        description: "Soupe de lentilles rouges, veloutée et légèrement épicée.",
        price: 500,
        category: "Soupes",
        image: "https://storage.googleapis.com/divanhane/3.webp"
      },
      {
        id: "soup-2",
        name: "Tavuk Çorbası",
        description: "Bouillon chaud de poulet avec morceaux tendres et vermicelles.",
        price: 500,
        category: "Soupes",
        image: "https://storage.googleapis.com/divanhane/4.webp"
      }
    ]
  },
  {
    name: "Salades & Pâtes",
    dishes: [
      {
        id: "salad-1",
        name: "Çoban Salata",
        description: "Salade fraîche avec tomates, concombres, oignons, persil et huile d'olive.",
        price: 500,
        category: "Salades & Pâtes",
        image: "https://storage.googleapis.com/divanhane/5.webp",
        isVegetarian: true
      },
      {
        id: "salad-2",
        name: "Kaşarlı Salata",
        description: "Salade de légumes nappée de fromage kaşar fondu.",
        price: 500,
        category: "Salades & Pâtes",
        image: "https://storage.googleapis.com/divanhane/6.webp"
      },
      {
        id: "salad-3",
        name: "Sezar Salata",
        description: "Salade César au poulet grillé, croûtons, parmesan et sauce classique.",
        price: 800,
        category: "Salades & Pâtes",
        image: "https://storage.googleapis.com/divanhane/7.webp"
      },
      {
        id: "pasta-1",
        name: "Makarna La Crema",
        description: "Pâtes servies avec une sauce crémeuse douce et onctueuse.",
        price: 1000,
        category: "Salades & Pâtes",
        image: "https://storage.googleapis.com/divanhane/8.webp"
      }
    ]
  },
  {
    name: "Pizzas Turques",
    dishes: [
      {
        id: "pizza-1",
        name: "Lahmacun",
        description: "Pizza turque fine garnie de viande hachée épicée, tomates et oignons.",
        price: 600,
        category: "Pizzas Turques",
        image: "https://storage.googleapis.com/divanhane/9.webp",
        isSpicy: true
      },
      {
        id: "pizza-2",
        name: "Kaşarlı Pide",
        description: "Pide au fromage kaşar fondu, cuit au four.",
        price: 900,
        category: "Pizzas Turques",
        image: "https://storage.googleapis.com/divanhane/10.webp"
      },
      {
        id: "pizza-3",
        name: "Karışık Pide",
        description: "Pide mixte avec viandes, légumes et fromage.",
        price: 1200,
        category: "Pizzas Turques",
        image: "https://storage.googleapis.com/divanhane/11.webp"
      }
    ]
  },
  {
    name: "Grillades Viande Rouge",
    dishes: [
      {
        id: "red-meat-1",
        name: "Et Döner Pilav Üstü",
        description: "Viande döner servie sur un lit de riz pilaf parfumé.",
        price: 2250,
        category: "Grillades Viande Rouge",
        image: "https://storage.googleapis.com/divanhane/12.webp"
      },
      {
        id: "red-meat-2",
        name: "İskender",
        description: "Döner sur pain pita avec sauce tomate, beurre fondu et yaourt.",
        price: 2250,
        category: "Grillades Viande Rouge",
        image: "https://storage.googleapis.com/divanhane/13.webp"
      },
      {
        id: "red-meat-3",
        name: "Et Pirzola Mangal",
        description: "Côtes d'agneau grillées, marinées et cuites au charbon.",
        price: 2800,
        category: "Grillades Viande Rouge",
        image: "https://storage.googleapis.com/divanhane/14.webp"
      },
      {
        id: "red-meat-4",
        name: "Terbiyeli Kuzu Şiş",
        description: "Brochettes d'agneau marinées et grillées.",
        price: 2000,
        category: "Grillades Viande Rouge",
        image: "https://storage.googleapis.com/divanhane/15.webp"
      }
    ]
  },
  {
    name: "Grillades de Volaille",
    dishes: [
      {
        id: "poultry-1",
        name: "Antrikot Izgara",
        description: "Entrecôte de bœuf grillée à la braise.",
        price: 1800,
        category: "Grillades de Volaille",
        image: "https://storage.googleapis.com/divanhane/16.webp"
      },
      {
        id: "poultry-2",
        name: "Tavuk Şiş",
        description: "Brochettes de poulet marinées, tendres et juteuses.",
        price: 1500,
        category: "Grillades de Volaille",
        image: "https://storage.googleapis.com/divanhane/17.webp"
      },
      {
        id: "poultry-3",
        name: "Pirzola Tavuk",
        description: "Côtelettes de poulet désossées et grillées.",
        price: 1500,
        category: "Grillades de Volaille",
        image: "https://storage.googleapis.com/divanhane/18.webp"
      },
      {
        id: "poultry-4",
        name: "Kanat Tavuk",
        description: "Ailes de poulet grillées et épicées.",
        price: 1500,
        category: "Grillades de Volaille",
        image: "https://storage.googleapis.com/divanhane/19.webp"
      }
    ]
  },
  {
    name: "Kebabs",
    dishes: [
      {
        id: "kebab-1",
        name: "Adana Kebap",
        description: "Kebab épicé d'Adana à base de viande hachée grillée.",
        price: 2200,
        category: "Kebabs",
        image: "https://storage.googleapis.com/divanhane/20.webp",
        isSpicy: true
      },
      {
        id: "kebab-2",
        name: "Babagannuç Kebap",
        description: "Kebab servi sur purée d'aubergines fumées (baba ghanoush).",
        price: 2000,
        category: "Kebabs",
        image: "https://storage.googleapis.com/divanhane/21.webp"
      },
      {
        id: "kebab-3",
        name: "Beyti Kebap",
        description: "Kebab roulé dans lavash avec sauce tomate et yaourt.",
        price: 1800,
        category: "Kebabs",
        image: "https://storage.googleapis.com/divanhane/22.webp"
      },
      {
        id: "kebab-4",
        name: "Patlıcan Kebap",
        description: "Kebab d'aubergine et de viande en brochette.",
        price: 1900,
        category: "Kebabs",
        image: "https://storage.googleapis.com/divanhane/23.webp"
      }
    ]
  },
  {
    name: "Plats Traditionnels",
    dishes: [
      {
        id: "traditional-1",
        name: "Sac Tava",
        description: "Viande et légumes sautés dans une poêle en fonte.",
        price: 1700,
        category: "Plats Traditionnels",
        image: "https://storage.googleapis.com/divanhane/24.webp"
      },
      {
        id: "traditional-2",
        name: "Çömlek Güveç",
        description: "Ragoût de viande et légumes mijoté dans une cocotte en terre.",
        price: 2500,
        category: "Plats Traditionnels",
        image: "https://storage.googleapis.com/divanhane/25.webp"
      },
      {
        id: "traditional-3",
        name: "Kaburga Dolması",
        description: "Côtes d'agneau farcies de riz et rôties au four.",
        price: 1900,
        category: "Plats Traditionnels",
        image: "https://storage.googleapis.com/divanhane/26.webp"
      },
      {
        id: "traditional-4",
        name: "Tavuk Tava",
        description: "Poêlée de poulet mijotée aux légumes.",
        price: 6500,
        category: "Plats Traditionnels",
        image: "https://storage.googleapis.com/divanhane/27.webp"
      }
    ]
  },
  {
    name: "Plats Spéciaux",
    dishes: [
      {
        id: "special-1",
        name: "Karışık Vali Kebap",
        description: "Mélange royal de kebabs d’agneau, poulet et bœuf, avec légumes grillés et riz pilaf.",
        price: 5800,
        category: "Plats Spéciaux",
        image: "https://storage.googleapis.com/divanhane/KARISLIK.webp"
      },
      {
        id: "special-2",
        name: "İncik Fırın Tava",
        description: "Jarret d'agneau mijoté au four avec légumes.",
        price: 5800,
        category: "Plats Spéciaux",
        image: "https://storage.googleapis.com/divanhane/28.webp"
      },
      {
        id: "special-3",
        name: "Et Döner Dürüm",
        description: "Döner roulé dans lavash avec crudités.",
        price: 1000,
        category: "Plats Spéciaux",
        image: "https://storage.googleapis.com/divanhane/29.webp"
      },
      {
        id: "special-4",
        name: "Ciğer Şiş",
        description: "Brochettes de foie d'agneau mariné et grillé.",
        price: 3000,
        category: "Plats Spéciaux",
        image: "https://storage.googleapis.com/divanhane/30.webp"
      },
      {
        id: "special-5",
        name: "Tavuk Dürüm",
        description: "Wrap de poulet grillé, crudités et sauce dans lavash.",
        price: 600,
        category: "Plats Spéciaux",
        image: "https://storage.googleapis.com/divanhane/31.webp"
      }
    ]
  },
  {
    name: "Desserts",
    dishes: [
      {
        id: "dessert-1",
        name: "Baklava",
        description: "Pâtisserie à la pâte filo, pistaches et sirop.",
        price: 600,
        category: "Desserts",
        image: "https://storage.googleapis.com/divanhane/32.webp"
      },
      {
        id: "dessert-2",
        name: "Künefe",
        description: "Dessert chaud au fromage et cheveux d'ange, nappé de sirop.",
        price: 700,
        category: "Desserts",
        image: "https://storage.googleapis.com/divanhane/33.webp"
      }
    ]
  }
];

// Function to get menu data organized by categories
export const getMenuByCategories = (): MenuCategory[] => {
  return menuData;
}; 