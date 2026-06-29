export type RegularDishCategory = {
  id: string;
  label: string;
};

export type RegularDish = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  categoryId: string;
  image?: string;
};

/** Public path for menu item images under /public/menu-items */
export function dishImage(filename: string): string {
  return `/menu-items/${encodeURIComponent(filename)}`;
}

export const regularDishCategories: RegularDishCategory[] = [
  { id: "signature", label: "Signature BBQ" },
  { id: "chicken", label: "Chicken" },
  { id: "ribs-wings", label: "Ribs & Wings" },
  { id: "sides", label: "Sides" },
  { id: "combos", label: "Combos" },
  { id: "drinks", label: "Drinks" },
  { id: "more", label: "More +" },
];

export const regularDishes: RegularDish[] = [
  {
    id: "signature-quarter",
    name: "Quarter BBQ Chicken",
    description:
      "A quarter portion of our flame-grilled chicken with signature smoky glaze.",
    price: 1200,
    rating: 5,
    categoryId: "signature",
    image: dishImage("quater-bbq-chicken.jpeg"),
  },
  {
    id: "signature-half",
    name: "Half BBQ Chicken",
    description:
      "Juicy half chicken marinated in our secret blend and grilled to perfection.",
    price: 1950,
    rating: 5,
    categoryId: "signature",
    image: dishImage("half bbq chicken.jpeg"),
  },
  {
    id: "signature-full",
    name: "Full BBQ Chicken",
    description:
      "A whole bird for sharing — smoky, tender, and packed with KBC flavour.",
    price: 3200,
    rating: 5,
    categoryId: "signature",
    image: dishImage("full-bbq-chicken.jpeg"),
  },
  {
    id: "signature-spicy",
    name: "Spicy BBQ Chicken",
    description:
      "Our classic BBQ chicken with an extra kick of Sri Lankan spice.",
    price: 2100,
    rating: 4,
    categoryId: "signature",
    image: dishImage("spicy-bbq-chicken.jpeg"),
  },
  {
    id: "chicken-burger",
    name: "BBQ Chicken Burger",
    description:
      "Flame-grilled chicken patty with coleslaw and house sauce in a soft bun.",
    price: 950,
    rating: 4,
    categoryId: "chicken",
    image: dishImage("bbq-chicken-burger.jpeg"),
  },
  {
    id: "chicken-wrap",
    name: "BBQ Chicken Wrap",
    description:
      "Shredded BBQ chicken wrapped with fresh greens and garlic mayo.",
    price: 850,
    rating: 4,
    categoryId: "chicken",
    image: dishImage("BBQ Chicken Wrap.jpeg"),
  },
  {
    id: "chicken-strips",
    name: "Grilled Chicken Strips",
    description:
      "Tender chicken strips served with your choice of smoky or honey glaze.",
    price: 1100,
    rating: 4,
    categoryId: "chicken",
  },
  {
    id: "chicken-salad",
    name: "BBQ Chicken Salad",
    description:
      "Mixed greens topped with sliced grilled chicken and citrus dressing.",
    price: 1250,
    rating: 3,
    categoryId: "chicken",
    image: dishImage("BBQ Chicken Salad.jpeg"),
  },
  {
    id: "wings-6pc",
    name: "BBQ Wings (6 pcs)",
    description:
      "Six crispy wings tossed in our house BBQ sauce and flame-finished.",
    price: 980,
    rating: 5,
    categoryId: "ribs-wings",
    image: dishImage("BBQ Wings (6 pcs).jpeg"),
  },
  {
    id: "wings-12pc",
    name: "BBQ Wings (12 pcs)",
    description:
      "A dozen smoky wings — perfect for sharing at the table.",
    price: 1650,
    rating: 5,
    categoryId: "ribs-wings",
    image: dishImage("BBQ Wings (12 pcs).jpeg"),
  },
  {
    id: "ribs-half",
    name: "Half Rack Ribs",
    description:
      "Slow-cooked ribs glazed with honey BBQ sauce until fall-off-the-bone tender.",
    price: 2200,
    rating: 5,
    categoryId: "ribs-wings",
    image: dishImage("Half Rack Ribs.jpeg"),
  },
  {
    id: "ribs-full",
    name: "Full Rack Ribs",
    description:
      "A full rack of our signature ribs — sweet, smoky, and generously sauced.",
    price: 3800,
    rating: 5,
    categoryId: "ribs-wings",
    image: dishImage("Full Rack Ribs.jpeg"),
  },
  {
    id: "fries",
    name: "Crispy Fries",
    description:
      "Golden seasoned fries — the perfect side to any KBC grill plate.",
    price: 450,
    rating: 4,
    categoryId: "sides",
    image: dishImage("Crispy Fries.jpeg"),
  },
  {
    id: "coleslaw",
    name: "Creamy Coleslaw",
    description:
      "Fresh shredded cabbage and carrots in a light, tangy dressing.",
    price: 350,
    rating: 4,
    categoryId: "sides",
    image: dishImage("Creamy Coleslaw.jpeg"),
  },
  {
    id: "corn",
    name: "Grilled Corn",
    description:
      "Charred sweet corn brushed with butter and a hint of smoky spice.",
    price: 400,
    rating: 4,
    categoryId: "sides",
    image: dishImage("Grilled Corn.jpeg"),
  },
  {
    id: "mashed",
    name: "Mashed Potatoes",
    description:
      "Creamy mashed potatoes with a touch of garlic — comfort food done right.",
    price: 420,
    rating: 3,
    categoryId: "sides",
    image: dishImage("Mashed Potatoes.jpeg"),
  },
  {
    id: "combo-duo",
    name: "Duo Combo",
    description:
      "Quarter chicken, fries, and a drink — a satisfying meal for one.",
    price: 1450,
    rating: 5,
    categoryId: "combos",
    image: dishImage("chicken, fries, and a drink.jpeg"),
  },
  {
    id: "combo-family",
    name: "Family Combo",
    description:
      "Full chicken, large fries, coleslaw, and four drinks for the family.",
    price: 4500,
    rating: 5,
    categoryId: "combos",
    image: dishImage("Family comobo.jpeg"),
  },
  {
    id: "combo-wings",
    name: "Wings & Fries Combo",
    description:
      "12 BBQ wings with crispy fries and a chilled soft drink.",
    price: 1850,
    rating: 4,
    categoryId: "combos",
    image: dishImage("Wings & Fries Combo.jpeg"),
  },
  {
    id: "combo-ribs",
    name: "Ribs Combo",
    description:
      "Half rack ribs served with fries, coleslaw, and your choice of drink.",
    price: 2650,
    rating: 5,
    categoryId: "combos",
    image: dishImage("Ribs Combo.jpeg"),
  },
  {
    id: "drink-cola",
    name: "Soft Drink",
    description:
      "Chilled Coca-Cola, Sprite, or Fanta to pair with your BBQ meal.",
    price: 250,
    rating: 4,
    categoryId: "drinks",
    image: dishImage("Coca-Cola, Sprite, or Fanta.jpg"),
  },
  {
    id: "drink-lime",
    name: "Fresh Lime Juice",
    description:
      "Freshly squeezed lime with a touch of sweetness — crisp and refreshing.",
    price: 350,
    rating: 4,
    categoryId: "drinks",
    image: dishImage("Fresh Lime Juice.webp"),
  },
  {
    id: "drink-iced-tea",
    name: "Iced Tea",
    description:
      "House-brewed iced tea served cold — light and perfect with grilled food.",
    price: 300,
    rating: 3,
    categoryId: "drinks",
    image: dishImage("Iced Tea.jpeg"),
  },
  {
    id: "drink-milkshake",
    name: "Chocolate Milkshake",
    description:
      "Thick and creamy chocolate milkshake — a sweet finish to your meal.",
    price: 550,
    rating: 4,
    categoryId: "drinks",
    image: dishImage("Chocolate Milkshake.jpeg"),
  },
  {
    id: "more-brownie",
    name: "Chocolate Brownie",
    description:
      "Warm chocolate brownie served with a drizzle of sauce.",
    price: 480,
    rating: 4,
    categoryId: "more",
    image: dishImage("Chocolate Brownie.jpeg"),
  },
  {
    id: "more-ice-cream",
    name: "Vanilla Ice Cream",
    description:
      "Classic vanilla scoop — simple, cool, and satisfying after BBQ.",
    price: 350,
    rating: 3,
    categoryId: "more",
    image: dishImage("Vanilla Ice Cream.jpeg"),
  },
  {
    id: "more-sauce",
    name: "Extra BBQ Sauce",
    description:
      "A pot of our signature smoky BBQ sauce to take your meal up a notch.",
    price: 200,
    rating: 5,
    categoryId: "more",
    image: dishImage("Extra BBQ Sauce.jpeg"),
  },
  {
    id: "more-garlic",
    name: "Garlic Mayo Dip",
    description:
      "Creamy garlic mayo — ideal for wings, fries, and wraps.",
    price: 180,
    rating: 4,
    categoryId: "more",
    image: dishImage("Garlic Mayo Dip.jpeg"),
  },
];

export function getDishesByCategory(categoryId: string): RegularDish[] {
  return regularDishes.filter((dish) => dish.categoryId === categoryId);
}
