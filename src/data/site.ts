import type { Category, MenuItem, OrderStatus } from "../types";

export const T = {
  ink: "#171717",
  inkDeep: "#0D0D0D",
  tide: "#C9181F",
  tideLight: "#FDE8E9",
  coral: "#E21D25",
  coralDeep: "#A90F16",
  sand: "#F7F2E8",
  cream: "#FFFDF8",
  foam: "#FFFFFF",
  brass: "#D99A16",
  line: "#E5DCCF",
  ink60: "rgba(23,23,23,0.62)",
  ink40: "rgba(23,23,23,0.42)",
};

export const CATEGORIES: Category[] = [
  { id: "platters", label: "Seafood Platters", icon: "plate" },
  { id: "specials", label: "Bayah Specials & Meals", icon: "plate" },
  { id: "fish-meals", label: "Fish & Seafood Meals", icon: "fish" },
  { id: "soups-salads", label: "Soups & Salads", icon: "bowl" },
  { id: "starters", label: "Starters", icon: "plate" },
  { id: "noodles", label: "Seafood Noodles", icon: "bowl" },
  { id: "rice", label: "Rice", icon: "bowl" },
  { id: "refreshments", label: "Refreshments", icon: "cup" },
];

export const SEED_MENU: MenuItem[] = [
  // Seafood platters
  { id: "platter-small", category: "platters", name: "Seafood Platter Small", desc: "8 pcs grilled prawns & mussels, 1 crab, 2 squids. Served with white or yellow rice and 2 fish fillets. Enough for 2 persons.", price: 129, popular: true, available: true },
  { id: "platter-seabream", category: "platters", name: "Seafood Platter with Seabream", desc: "Grilled or fried seabream, 8 pcs grilled prawns & mussels, 1 crab, fried squids. Served with white or yellow rice and 4 fish fillets. Enough for 2 persons.", price: 153, popular: true, available: true },
  { id: "platter-family", category: "platters", name: "Seafood Family Platter", desc: "A generous family platter with prawns, mussels, crab, squids, seabream, fish fillet and rice. Enough for 3 persons.", price: 240, popular: true, available: true },
  { id: "platter-lobster", category: "platters", name: "Lobster Seafood Platter", desc: "1 lobster, 1 seabream, 10 pcs shrimps, 10 pcs grilled mussels, 2 squids. Served with white or yellow rice. Enough for 2–4 persons.", price: 295, popular: true, available: true },
  { id: "platter-medium", category: "platters", name: "Seafood Platter Medium", desc: "16 pcs prawns, 3 pcs crab, fried squids, 2 pcs grilled seabream, 1 plate jaseed, 4 fish fillets and rice. Enough for 6–8 persons.", price: 368, popular: false, available: true },
  { id: "platter-large", category: "platters", name: "Seafood Platter Large", desc: "2 pcs lobster, 4 slices salmon, 2 plates jaseed, 2 pcs seabream, 40 pcs shrimp, 6 pcs crab, 35 pcs mussels, 6 fried squids. Served with yellow or white rice. Enough for 8–10 persons.", price: 840, popular: true, available: true },
  { id: "platter-extra-large", category: "platters", name: "Seafood Platter Extra Large", desc: "3 lobster, 4 pcs salmon, 3 pcs seabream, 50 pcs shrimp, 6 pcs crab, 1 kg squid, 30 pcs half shell mussels, 1 kg fish fillet, 3 pcs jaseed and fried squids. Served with yellow or white rice. Enough for 12–15 persons.", price: 1050, popular: true, available: true },

  // Bayah specials & meals
  { id: "special-pasta-red", category: "specials", name: "Seafood Pasta – Red Sauce", desc: "Seafood pasta with Bayah red sauce. Printed menu price: AED 31.50 / 63.", price: 31.5, popular: true, available: true },
  { id: "special-pasta-cheese", category: "specials", name: "Seafood Pasta with Cheese", desc: "Creamy seafood pasta finished with cheese. Printed menu price: AED 37 / 70.", price: 37, popular: true, available: true },
  { id: "special-rice-cheese", category: "specials", name: "Bayah Special Rice with Cheese", desc: "Bayah special seafood rice with cheese. Printed menu price: AED 31.50 / 63.", price: 31.5, popular: false, available: true },
  { id: "special-bucket-cajun", category: "specials", name: "Seafood Bucket – Cajun Sauce", desc: "Mixed seafood bucket tossed in Cajun sauce. Printed menu price: AED 90 / 180.", price: 90, popular: true, available: true },
  { id: "special-tilapia-singari", category: "specials", name: "Tilapia Meals – Vegetables Singari", desc: "Tilapia meal with vegetables, Singari style.", price: 30, popular: false, available: true },
  { id: "special-bucket-mix", category: "specials", name: "Seafood Bucket Mix", desc: "Mixed seafood bucket. Printed menu price: AED 84 / 168.", price: 84, popular: true, available: true },
  { id: "special-jasheed", category: "specials", name: "Jasheed", desc: "Bayah-style seasoned seafood dish.", price: 37, popular: false, available: true },
  { id: "special-seabream-singari", category: "specials", name: "Seabream Singari", desc: "Seabream prepared Singari style.", price: 45, popular: false, available: true },
  { id: "special-seabass-lemon", category: "specials", name: "Sea Bass Grilled with Oil & Lemon", desc: "Grilled sea bass finished with oil and fresh lemon.", price: 52, popular: true, available: true },
  { id: "special-fried-sheri", category: "specials", name: "Fried Sheri Meal", desc: "Fried sheri meal served with sides.", price: 44, popular: false, available: true },
  { id: "special-prawns-meal", category: "specials", name: "Prawns Meal", desc: "Prawns meal. Printed menu price: AED 26.50 / 53.", price: 26.5, popular: true, available: true },
  { id: "special-bouri-redha", category: "specials", name: "Bouri Grilled Redha", desc: "Grilled bouri prepared Redha style.", price: 34, popular: false, available: true },
  { id: "special-seabass-tray", category: "specials", name: "Seabass Tray with Potato", desc: "Sea bass tray baked with potato.", price: 60, popular: true, available: true },
  { id: "special-shrimp-butter-cheese", category: "specials", name: "Shrimp Butterfly with Cheese", desc: "Butterflied shrimp topped with cheese.", price: 42, popular: true, available: true },

  // Fish & seafood meals
  { id: "fish-lobster-garlic", category: "fish-meals", name: "Lobster with Garlic", desc: "Lobster prepared with garlic.", price: 130, popular: true, available: true },
  { id: "fish-seabream-oil-lemon", category: "fish-meals", name: "Seabream Grilled with Oil & Lemon", desc: "Grilled seabream with oil and lemon.", price: 47, popular: true, available: true },
  { id: "fish-mixed-seabream", category: "fish-meals", name: "Mixed Mix with Sea Bream", desc: "Mixed seafood served with sea bream.", price: 108, popular: true, available: true },
  { id: "fish-tilapia-singari", category: "fish-meals", name: "Tilapia Singari", desc: "Tilapia prepared Singari style.", price: 26.5, popular: false, available: true },
  { id: "fish-lobster-red", category: "fish-meals", name: "Grilled Lobster with Red Sauce", desc: "Grilled lobster served with Bayah red sauce.", price: 120, popular: true, available: true },
  { id: "fish-salmon-meal", category: "fish-meals", name: "Grilled Salmon Meal", desc: "Grilled salmon meal served with sides.", price: 53, popular: true, available: true },

  // Soups, salads & starters from the printed menu
  { id: "soup-seafood", category: "soups-salads", name: "Seafood Soup", desc: "Bayah seafood soup.", price: 25, popular: true, available: true },
  { id: "soup-cream", category: "soups-salads", name: "Special Soup with Cream", desc: "Special creamy soup.", price: 27, popular: false, available: true },
  { id: "soup-zafran", category: "soups-salads", name: "Bayah Special Zafran Soup", desc: "Bayah special saffron soup.", price: 28, popular: true, available: true },
  { id: "soup-tom-yum", category: "soups-salads", name: "Thai Tom Yum Soup", desc: "Thai-style spicy and sour seafood soup.", price: 31.5, popular: true, available: true },
  { id: "soup-mulukhiyah", category: "soups-salads", name: "Mulukhiyah with Shrimp", desc: "Mulukhiyah prepared with shrimp.", price: 32, popular: false, available: true },
  { id: "salad-hummus", category: "soups-salads", name: "Hummus / Tahina", desc: "Printed menu price: AED 10 / 15.", price: 10, popular: false, available: true },
  { id: "salad-mutabel", category: "soups-salads", name: "Mutabel / Baba Ghanouj", desc: "Printed menu price: AED 10 / 15.", price: 10, popular: false, available: true },
  { id: "salad-green", category: "soups-salads", name: "Green Salad", desc: "Fresh green salad. Printed menu price: AED 10 / 15.", price: 10, popular: false, available: true },
  { id: "salad-tabbouleh", category: "soups-salads", name: "Tabbouleh", desc: "Fresh tabbouleh. Printed menu price: AED 15 / 20.", price: 15, popular: false, available: true },
  { id: "salad-rocca", category: "soups-salads", name: "Rocca Salad", desc: "Fresh rocca salad. Printed menu price: AED 20 / 25.", price: 20, popular: false, available: true },
  { id: "salad-fattoush", category: "soups-salads", name: "Fattoush", desc: "Fresh fattoush salad. Printed menu price: AED 20 / 30.", price: 20, popular: false, available: true },
  { id: "starter-fish-chips", category: "starters", name: "Fish and Chips", desc: "Crispy fish and chips.", price: 26.5, popular: true, available: true },
  { id: "starter-squid-chips", category: "starters", name: "Squid Rings & Chips", desc: "Crispy squid rings with chips.", price: 26.5, popular: true, available: true },
  { id: "starter-shrimp-fajita", category: "starters", name: "Shrimp Fajita", desc: "Seasoned shrimp fajita.", price: 26.5, popular: true, available: true },
  { id: "starter-dynamite-shrimp", category: "starters", name: "Dynamite Shrimp", desc: "Crispy shrimp with creamy spicy sauce.", price: 26.5, popular: true, available: true },
  { id: "starter-seafood-tajin", category: "starters", name: "Seafood Tajin – Cream, Mozzarella & Zafran", desc: "Seafood tajin with cream, mozzarella and saffron. Printed menu price: AED 42.", price: 42, popular: false, available: true },
  { id: "starter-seafood-tajin-white", category: "starters", name: "Seafood Tajin – White Sauce", desc: "Seafood tajin with white sauce. Printed menu price: AED 38.", price: 38, popular: false, available: true },
  { id: "starter-shrimp-tajin-white", category: "starters", name: "Shrimp Tajin – Cream, Mozzarella & Zafran", desc: "Shrimp tajin with cream, mozzarella and saffron. Printed menu price: AED 37.", price: 37, popular: false, available: true },
  { id: "starter-shrimp-tajin-red", category: "starters", name: "Shrimp Tajin – Red Sauce", desc: "Shrimp tajin with red sauce. Printed menu price: AED 32.", price: 32, popular: false, available: true },

  // Noodles
  { id: "noodles-plain", category: "noodles", name: "Seafood Noodles", desc: "Seafood noodles.", price: 32.5, popular: true, available: true },
  { id: "noodles-mozzarella", category: "noodles", name: "Seafood Noodles with Mozzarella", desc: "Seafood noodles finished with mozzarella.", price: 37.5, popular: true, available: true },

  // Rice
  { id: "rice-white", category: "rice", name: "White Rice", desc: "Steamed white rice.", price: 10.5, popular: false, available: true },
  { id: "rice-sayadiya", category: "rice", name: "Sayadiya Rice", desc: "Seasoned Sayadiya rice.", price: 10.5, popular: true, available: true },
  { id: "rice-bayah-yellow", category: "rice", name: "Bayah Yellow Rice", desc: "Bayah-style yellow rice.", price: 13, popular: true, available: true },
  { id: "rice-shrimp", category: "rice", name: "Rice with Shrimp", desc: "Rice prepared with shrimp.", price: 21, popular: true, available: true },

  // Refreshments
  { id: "drink-avocado", category: "refreshments", name: "Avocado", desc: "Fresh avocado juice. Printed menu price: AED 12.50 / 14.50.", price: 12.5, popular: false, available: true },
  { id: "drink-mango", category: "refreshments", name: "Mango", desc: "Fresh mango juice. Printed menu price: AED 12.50 / 14.50.", price: 12.5, popular: true, available: true },
  { id: "drink-lemon", category: "refreshments", name: "Lemon", desc: "Fresh lemon juice. Printed menu price: AED 10.50 / 12.50.", price: 10.5, popular: false, available: true },
  { id: "drink-mint-lemon", category: "refreshments", name: "Mint Lemon", desc: "Fresh mint lemon. Printed menu price: AED 10.50 / 12.50.", price: 10.5, popular: true, available: true },
  { id: "drink-apple", category: "refreshments", name: "Apple", desc: "Fresh apple juice. Printed menu price: AED 12.50 / 14.50.", price: 12.5, popular: false, available: true },
  { id: "drink-orange", category: "refreshments", name: "Orange", desc: "Fresh orange juice. Printed menu price: AED 12.50 / 14.50.", price: 12.5, popular: true, available: true },
  { id: "drink-watermelon", category: "refreshments", name: "Watermelon", desc: "Fresh watermelon juice. Printed menu price: AED 12.50 / 14.50.", price: 12.5, popular: false, available: true },
  { id: "drink-pineapple", category: "refreshments", name: "Pineapple", desc: "Fresh pineapple juice. Printed menu price: AED 12.50 / 14.50.", price: 12.5, popular: false, available: true },
];

export const RESTAURANT = {
  name: "Bayah",
  sub: "Seafood Restaurant",
  tagline: "Off the boat, onto the grill — today's catch, plated simply.",
  phone: "+971 56 777 1204",
  whatsapp: "+971 56 777 1204",
  address: "Al Lisaily Shabiya, Khalifa Building - الليسيلي Shop3 - Al Marmoum - Dubai",
  hours: [
    { d: "Monday – Thursday", h: "09:00 AM – 12:00 PM" },
    { d: "Friday – Saturday", h: "09:00 AM – 12:00 PM" },
    { d: "Sunday", h: "09:00 AM – 12:00 PM" },
  ],
  mapQuery: "Bayah Seafood Restaurant, Al Lisaily Shabiya, Khalifa Building - الليسيلي Shop3 - Al Marmoum - Dubai",
  instagram: "https://www.instagram.com/bayah_seafood/",
  facebook: "https://www.facebook.com/BayahSeafoodRestaurant/",
};



export const DELIVERY_FEE = 15;
export const STATUS_FLOW: OrderStatus[] = ["New", "Pending", "Preparing", "Ready", "Completed", "Cancelled"];
export const STATUS_COLOR: Record<OrderStatus, string> = {
  New: T.coral, Pending: T.brass, Preparing: "#3E7CB1",
  Ready: T.tide, Completed: "#4B8F5C", Cancelled: "#9A5555",
};
