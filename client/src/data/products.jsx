// src/data/products.js (optional data file)
import Elixer from "../assets/elixer.jpg"
import Berry from "../assets/berry.jpeg"
import Gold from "../assets/gold.jpg"
import Tropical from "../assets/tropical.jpg"
import Green from "../assets/green.jpeg"
const products = [
  {
    id: 1,
    name: "Royal Mango Elixir",
    price: "₹299",
    image: Elixer,
    description: "Premium Alphonso mango juice with a hint of saffron.",
  },
  {
    id: 2,
    name: "Berry Luxe Blast",
    price: "₹349",
    image: Berry,
    description: "Mixed berry fusion with antioxidant-rich ingredients.",
  },
  {
    id: 3,
    name: "Citrus Gold Rush",
    price: "₹279",
    image: Gold,
    description: "Refreshing orange and lime blend.",
  },
  {
    id: 4 ,
    name: "Tropical Velvet",
    price: "₹319",
    image: Tropical,
    description: "Smooth pineapple and coconut juice.",
  },
  {
    id: 5,
    name: "Green Supreme",
    price: "₹299",
    image: Green,
    description: "Spinach, apple, and kiwi detox drink.",
  },
];

export default products;
