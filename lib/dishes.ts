export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  badge: string;
};

export const popularDishes: Dish[] = [
  {
    id: "smoky-wings",
    name: "Smoky BBQ Wings",
    description:
      "Crispy wings tossed in our signature smoky marinade and flame-grilled to juicy perfection.",
    price: 1850,
    rating: 5,
    image: "/smoky-bbq-wings.jpeg",
    badge: "Best Seller",
  },
  {
    id: "flame-grilled",
    name: "Flame-Grilled Platter",
    description:
      "A hearty spread of charred chicken, golden breadsticks, and fresh garden salad for sharing.",
    price: 3200,
    rating: 4,
    image: "/flame-grilled-chicken.jpeg",
    badge: "Family Favourite",
  },
  {
    id: "classic-bbq",
    name: "Classic BBQ Chicken",
    description:
      "Tender half chicken marinated overnight in secret spices, slow-grilled over open flame.",
    price: 2450,
    rating: 5,
    image: "/bbq-chicken.jpeg",
    badge: "Chef's Pick",
  },
  {
    id: "honey-ribs",
    name: "Honey Glazed Ribs",
    description:
      "Fall-off-the-bone ribs glazed with sweet honey BBQ sauce and finished on the grill.",
    price: 2800,
    rating: 5,
    image: "/honey-glazed-ribs.jpeg",
    badge: "Sweet & Smoky",
  },
  {
    id: "kbc-signature",
    name: "KBC Signature BBQ",
    description:
      "Our legendary flame-kissed chicken — the dish that started it all, made with love and care.",
    price: 2200,
    rating: 5,
    image: "/kbc-bbq.jpeg",
    badge: "Signature",
  },
];
