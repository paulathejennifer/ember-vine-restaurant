"use client";

import Image from "next/image";

const dishes = [
  {
    name: "Herb-Grilled Lamb",
    description: "Rosemary, garlic, chimichurri & roasted vegetables",
    price: "$28",
    image: "/images/menu/lamb.jpg",
  },
  {
    name: "Truffle Mushroom Pasta",
    description: "Creamy parmesan sauce, wild mushrooms, truffle oil",
    price: "$22",
    image: "/images/menu/pasta.jpg",
  },
  {
    name: "Seared Salmon",
    description: "Lemon beurre blanc, asparagus, baby potatoes",
    price: "$26",
    image: "/images/menu/salmon.jpg",
  },
  {
    name: "Warm Chocolate Fondant",
    description: "Dark chocolate, vanilla ice cream, salted caramel",
    price: "$12",
    image: "/images/menu/fondant.jpg",
  },
  // duplicated for seamless loop
  {
    name: "Herb-Grilled Lamb",
    description: "Rosemary, garlic, chimichurri & roasted vegetables",
    price: "$28",
    image: "/images/menu/lamb.jpg",
  },
  {
    name: "Truffle Mushroom Pasta",
    description: "Creamy parmesan sauce, wild mushrooms, truffle oil",
    price: "$22",
    image: "/images/menu/pasta.jpg",
  },
  {
    name: "Seared Salmon",
    description: "Lemon beurre blanc, asparagus, baby potatoes",
    price: "$26",
    image: "/images/menu/salmon.jpg",
  },
  {
    name: "Warm Chocolate Fondant",
    description: "Dark chocolate, vanilla ice cream, salted caramel",
    price: "$12",
    image: "/images/menu/fondant.jpg",
  },
];

export default function ChefsFavourites() {
  return (
    <section className="bg-charcoal py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/60" />
            <p className="font-sans text-gold text-xs uppercase tracking-[0.3em]">
              Signature Dishes
            </p>
            <div className="w-12 h-px bg-gold/60" />
          </div>
          <h2 className="font-serif text-ivory text-4xl md:text-5xl">
            Our Chef's Favourites
          </h2>
        </div>
      </div>

      {/* Scrolling strip — full width, bleeds past container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 w-max animate-menu-scroll">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="w-64 flex-shrink-0 flex flex-col gap-3"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1 px-1">
                <h3 className="font-serif text-ivory text-base">
                  {dish.name}
                </h3>
                <p className="font-sans text-stone text-xs leading-relaxed">
                  {dish.description}
                </p>
                <p className="font-sans text-gold text-sm font-semibold mt-1">
                  {dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}