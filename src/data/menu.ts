export type Donut = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

// Dollar version (matches the design)
// export const money = (n: number) => `${n} $`;

// For naira instead, delete the line above and use this one:
export const money = (n: number) => `₦${n.toLocaleString()}`;


export const donuts: Donut[] = [
  { id: "d1", name: "Ice Cream Donut", price: 27, image: "/images/icecream-donuts.png",
    description: "Sea salt and garlic, sweet cream, poppy seeds" },
  { id: "d2", name: "Everything Donut", price: 26, image: "/images/everything-donut.png",
    description: "Sweet cream cheese frosting, poppy seeds, sesame seeds" },
  { id: "d3", name: "Chocolate Icing Donut", price: 22, image: "/images/donut3.png",
    description: "Donut with ice cream and cream filling" },
  { id: "d4", name: "Matcha Latte Donut", price: 23, image: "/images/matcha.png",
    description: 'This taste has a strange name "oh, captain, my captain"' },
  { id: "d5", name: "Creme Brulee Donut", price: 24, image: "/images/creme.png",
    description: "Sweet cream cheese frosting, poppy seeds, sesame seeds" },
  { id: "d6", name: "Donut with Chewing Gum", price: 32, image: "/images/krispy creme.png",
    description: "Sweet cream cheese frosting, poppy seeds, sesame seeds" },
  { id: "d7", name: "Donut with Glaze", price: 27, image: "/images/doughnuts.png",
    description: "Donut with ice cream and cream filling" },
  { id: "d8", name: "Donut with Lollipop", price: 26, image: "/images/lolipop.png",
    description: "Sweet cream cheese frosting, poppy seeds, sesame seeds" },
  { id: "d9", name: "Chocolate Donut", price: 22, image: "/images/chocolate-donut.png",
    description: "Sea salt and garlic, sweet cream, poppy seeds" },
];

export const drinks: { name: string; price: number }[] = [
  { name: "Espresso", price: 22 },
  { name: "Strawberry ice coffee", price: 25 },
  { name: "Cappuccino", price: 20 },
  { name: "Coffee orange lemonade", price: 22 },
  { name: "Americano", price: 32 },
  { name: "Latte", price: 42 },
  { name: "Ice-coffee mocha with mint", price: 12 },
  { name: "Caramel frappe", price: 28 },
  { name: "Raspberry frappe", price: 22 },
  { name: "Bumble coffee", price: 25 },
  { name: "Matcha latte", price: 20 },
  { name: "Americano", price: 22 },
  { name: "Frappe", price: 32 },
  { name: "Coffee with milk", price: 42 },
  { name: "Iced coffee", price: 12 },
  { name: "Irish coffee", price: 28 },
];