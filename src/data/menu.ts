import type { MenuCategory, RestaurantInfo } from '../types/restaurant';

export const restaurantInfo: RestaurantInfo = {
  name: "Divan Hane",
  slogan: "L'art de la cuisine turque",
  description: "Découvrez l'authenticité de la gastronomie turque dans un cadre élégant et chaleureux.",
  contact: {
    address: "GASSIOT en face consulat Tunisie - Annaba",
    phone: "+213561806083",
    email: "contact@divanhane.com",
    hours: {
      "Lundi - Vendredi": "12:00 - 14:30, 19:00 - 23:00",
      "Samedi - Dimanche": "12:00 - 15:00, 19:00 - 23:30"
    },
    socialMedia: {
      facebook: "https://facebook.com/divanhane",
      instagram: "https://www.instagram.com/divan_hane23",
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
        price: 2500,
        category: "Plats Traditionnels",
        image: "https://storage.googleapis.com/divanhane/25.webp"
      },
      {
        id: "traditional-2",
        name: "Çömlek Güveç",
        description: "Ragoût de viande et légumes mijoté dans une cocotte en terre.",
        price: 1900,
        category: "Plats Traditionnels",
        image: "https://storage.googleapis.com/divanhane/26.webp"
      },
      {
        id: "traditional-3",
        name: "Kaburga Dolması",
        description: "Côtes d'agneau farcies de riz et rôties au four.",
        price: 6500,
        category: "Plats Traditionnels",
        image: "https://storage.googleapis.com/divanhane/27.webp"
      },
      {
        id: "traditional-4",
        name: "Tavuk Tava",
        description: "Poêlée de poulet mijotée aux légumes.",
        price: 1700,
        category: "Plats Traditionnels",
        image: "https://storage.googleapis.com/divanhane/24.webp"
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
  },
  {
    name: "Cheesecakes",
    dishes: [
      {
        id: "cheesecake-1",
        name: "Cheesecake Chocolat",
        description: "Cheesecake crémeux au chocolat noir, base biscuit.",
        price: 400,
        category: "Cheesecakes"
      },
      {
        id: "cheesecake-2",
        name: "Cheesecake Fraise",
        description: "Cheesecake à la fraise fraîche avec coulis de fraises.",
        price: 400,
        category: "Cheesecakes"
      },
      {
        id: "cheesecake-3",
        name: "Cheesecake Fruits Rouges",
        description: "Cheesecake aux fruits rouges (framboises, myrtilles, fraises).",
        price: 400,
        category: "Cheesecakes"
      },
      {
        id: "cheesecake-4",
        name: "Cheesecake Fruits Tropiques",
        description: "Cheesecake exotique aux fruits tropicaux (mangue, ananas, passion).",
        price: 450,
        category: "Cheesecakes"
      },
      {
        id: "cheesecake-5",
        name: "Cheesecake Pistache",
        description: "Cheesecake à la pistache avec éclats de pistaches torréfiées.",
        price: 550,
        category: "Cheesecakes"
      },
      {
        id: "cheesecake-6",
        name: "Cheesecake Lotus",
        description: "Cheesecake au spéculoos Lotus avec caramel.",
        price: 550,
        category: "Cheesecakes"
      }
    ]
  },
  {
    name: "Fondants",
    dishes: [
      {
        id: "fondant-1",
        name: "Fondant Chocolat Simple",
        description: "Fondant au chocolat noir, cœur coulant et moelleux.",
        price: 450,
        category: "Fondants"
      },
      {
        id: "fondant-2",
        name: "Fondant Fruit",
        description: "Fondant aux fruits de saison avec cœur fruité.",
        price: 550,
        category: "Fondants"
      },
      {
        id: "fondant-3",
        name: "Fondant Divan Hane",
        description: "Fondant signature de la maison, recette secrète.",
        price: 650,
        category: "Fondants"
      }
    ]
  },
  {
    name: "Brownies",
    dishes: [
      {
        id: "brownie-1",
        name: "Brownie Simple",
        description: "Brownie classique au chocolat noir, moelleux et fondant.",
        price: 300,
        category: "Brownies"
      },
      {
        id: "brownie-2",
        name: "Brownie avec Boule de Glace",
        description: "Brownie chaud servi avec une boule de glace vanille.",
        price: 450,
        category: "Brownies"
      }
    ]
  },
  {
    name: "Gaufres",
    dishes: [
      {
        id: "gaufre-1",
        name: "Gaufre Nutella",
        description: "Gaufre belge croustillante garnie de Nutella.",
        price: 450,
        category: "Gaufres"
      },
      {
        id: "gaufre-2",
        name: "Gaufre Chocolat",
        description: "Gaufre au chocolat noir avec sauce chocolat chaude.",
        price: 350,
        category: "Gaufres"
      },
      {
        id: "gaufre-3",
        name: "Gaufre Banane",
        description: "Gaufre garnie de bananes fraîches et caramel.",
        price: 500,
        category: "Gaufres"
      },
      {
        id: "gaufre-4",
        name: "Gaufre Caramel",
        description: "Gaufre nappée de caramel au beurre salé.",
        price: 350,
        category: "Gaufres"
      },
      {
        id: "gaufre-5",
        name: "Gaufre Divan Hane",
        description: "Gaufre signature de la maison avec garniture spéciale.",
        price: 700,
        category: "Gaufres"
      }
    ]
  },
  {
    name: "Pancakes",
    dishes: [
      {
        id: "pancake-1",
        name: "Pancake Nutella",
        description: "Pancakes moelleux garnis de Nutella et noisettes.",
        price: 450,
        category: "Pancakes"
      },
      {
        id: "pancake-2",
        name: "Pancake Chocolat",
        description: "Pancakes au chocolat avec sauce chocolat chaude.",
        price: 350,
        category: "Pancakes"
      },
      {
        id: "pancake-3",
        name: "Pancake Banane",
        description: "Pancakes aux bananes avec sirop d'érable.",
        price: 500,
        category: "Pancakes"
      },
      {
        id: "pancake-4",
        name: "Pancake Caramel",
        description: "Pancakes au caramel avec sauce caramel au beurre salé.",
        price: 350,
        category: "Pancakes"
      },
      {
        id: "pancake-5",
        name: "Pancake Divan Hane",
        description: "Pancakes signature de la maison avec garniture spéciale.",
        price: 700,
        category: "Pancakes"
      }
    ]
  },
  {
    name: "Smoothies",
    dishes: [
      {
        id: "smoothie-1",
        name: "Smoothie Banane",
        description: "Smoothie crémeux à la banane et lait d'amande.",
        price: 500,
        category: "Smoothies"
      },
      {
        id: "smoothie-2",
        name: "Smoothie Fraise",
        description: "Smoothie rafraîchissant aux fraises fraîches.",
        price: 450,
        category: "Smoothies"
      },
      {
        id: "smoothie-3",
        name: "Smoothie Pêche",
        description: "Smoothie doux à la pêche et vanille.",
        price: 450,
        category: "Smoothies"
      },
      {
        id: "smoothie-4",
        name: "Smoothie Fruits de la Passion",
        description: "Smoothie exotique aux fruits de la passion.",
        price: 500,
        category: "Smoothies"
      },
      {
        id: "smoothie-5",
        name: "Smoothie Divan Hane",
        description: "Smoothie signature (grenadine et fruits de la passion).",
        price: 550,
        category: "Smoothies"
      }
    ]
  },
  {
    name: "Milkshakes",
    dishes: [
      {
        id: "milkshake-1",
        name: "Milkshake Nutella",
        description: "Milkshake crémeux au Nutella et noisettes.",
        price: 450,
        category: "Milkshakes"
      },
      {
        id: "milkshake-2",
        name: "Milkshake Banane",
        description: "Milkshake à la banane fraîche et vanille.",
        price: 500,
        category: "Milkshakes"
      },
      {
        id: "milkshake-3",
        name: "Milkshake Fraise",
        description: "Milkshake aux fraises fraîches et crème.",
        price: 450,
        category: "Milkshakes"
      },
      {
        id: "milkshake-4",
        name: "Milkshake Pistache",
        description: "Milkshake à la pistache et amandes.",
        price: 550,
        category: "Milkshakes"
      },
      {
        id: "milkshake-5",
        name: "Milkshake Lotus",
        description: "Milkshake au spéculoos Lotus et caramel.",
        price: 550,
        category: "Milkshakes"
      },
      {
        id: "milkshake-6",
        name: "Milkshake Divan Hane",
        description: "Milkshake signature (noix de coco et ananas).",
        price: 600,
        category: "Milkshakes"
      }
    ]
  },
  {
    name: "Cocktails Istanbul",
    dishes: [
      {
        id: "cocktail-1",
        name: "Cocktail Istanbul",
        description: "Cocktail signature (banane et fraise).",
        price: 500,
        category: "Cocktails Istanbul"
      },
      {
        id: "cocktail-2",
        name: "Cocktail Ankara",
        description: "Cocktail rafraîchissant (citron et menthe).",
        price: 500,
        category: "Cocktails Istanbul"
      },
      {
        id: "cocktail-3",
        name: "Cocktail Izmir",
        description: "Cocktail exotique (ananas, coco, citron et lait).",
        price: 450,
        category: "Cocktails Istanbul"
      },
      {
        id: "cocktail-4",
        name: "Cocktail Antalya",
        description: "Cocktail fruité (citron, orange et grenadine).",
        price: 400,
        category: "Cocktails Istanbul"
      },
      {
        id: "cocktail-5",
        name: "Cocktail Adana",
        description: "Cocktail crémeux (banane et lait).",
        price: 400,
        category: "Cocktails Istanbul"
      }
    ]
  },
  
  {
    name: "Boissons Chaudes",
    dishes: [
      {
        id: "hot-drink-1",
        name: "Cappuccino",
        description: "Cappuccino italien avec mousse de lait crémeuse.",
        price: 300,
        category: "Boissons Chaudes"
      },
      {
        id: "hot-drink-2",
        name: "Chocolat Chaud",
        description: "Chocolat chaud crémeux et onctueux.",
        price: 350,
        category: "Boissons Chaudes"
      },
      {
        id: "hot-drink-3",
        name: "Macchiato Caramel",
        description: "Macchiato avec sirop de caramel.",
        price: 400,
        category: "Boissons Chaudes"
      },
      {
        id: "hot-drink-4",
        name: "Macchiato Vanille",
        description: "Macchiato avec sirop de vanille.",
        price: 400,
        category: "Boissons Chaudes"
      },
      {
        id: "hot-drink-5",
        name: "Café au Lait",
        description: "Café au lait traditionnel français.",
        price: 250,
        category: "Boissons Chaudes"
      },
      {
        id: "hot-drink-6",
        name: "Café Turc",
        description: "Café turc traditionnel préparé au cezve.",
        price: 500,
        category: "Boissons Chaudes"
      },
      {
        id: "hot-drink-7",
        name: "Café Kurd Fruits Secs",
        description: "Café kurde aux fruits secs et épices.",
        price: 500,
        category: "Boissons Chaudes"
      },
      {
        id: "hot-drink-8",
        name: "Café Caps",
        description: "Café en capsules, variété au choix.",
        price: 200,
        category: "Boissons Chaudes"
      },
      {
        id: "hot-drink-9",
        name: "Café Starbucks Caps",
        description: "Café Starbucks en capsules.",
        price: 300,
        category: "Boissons Chaudes"
      },
      {
        id: "hot-drink-10",
        name: "Thé Turc",
        description: "Thé turc traditionnel servi dans un verre.",
        price: 150,
        category: "Boissons Chaudes"
      }
    ]
  },
  {
    name: "Crêpes",
    dishes: [
      {
        id: "crepe-1",
        name: "Crêpe Ankara",
        description: "Crêpe simple au Nutella.",
        price: 450,
        category: "Crêpes"
      },
      {
        id: "crepe-2",
        name: "Crêpe Istanbul",
        description: "Crêpe au chocolat et bananes fraîches.",
        price: 500,
        category: "Crêpes"
      },
      {
        id: "crepe-3",
        name: "Crêpe Dubai",
        description: "Crêpe kunafa avec pistaches et Nutella.",
        price: 600,
        category: "Crêpes"
      },
      {
        id: "crepe-4",
        name: "Crêpe Divan Hane",
        description: "Crêpe signature de la maison avec garniture spéciale.",
        price: 700,
        category: "Crêpes"
      }
    ]
  }
];

// Function to get menu data organized by categories
export const getMenuByCategories = (): MenuCategory[] => {
  return menuData;
}; 