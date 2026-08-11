"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";

const menuData = {
  Starters: [
    { name: "Burrata & Heirloom Tomatoes", description: "Basil pesto, aged balsamic", price: "$14" },
    { name: "Charred Octopus", description: "Smoked paprika, lemon, olive oil", price: "$16" },
    { name: "Truffle Arancini", description: "Parmesan cream, micro herbs", price: "$13" },
    { name: "Butternut Squash Soup", description: "Coconut cream, roasted seeds", price: "$11" },
    { name: "Beef Carpaccio", description: "Truffle aioli, capers, arugula", price: "$15" },
    { name: "Crispy Calamari", description: "Lemon aioli, chili, parsley", price: "$14" },
  ],
  Mains: [
    { name: "Herb-Grilled Lamb", description: "Rosemary, garlic, chimichurri & roasted vegetables", price: "$28" },
    { name: "Seared Salmon", description: "Lemon beurre blanc, asparagus, baby potatoes", price: "$26" },
    { name: "Truffle Mushroom Pasta", description: "Creamy parmesan sauce, wild mushrooms, truffle oil", price: "$22" },
    { name: "Wagyu Beef Sirloin", description: "Red wine jus, bone marrow, seasonal greens", price: "$42" },
    { name: "Roasted Chicken Supreme", description: "Sage butter, root vegetables, pan jus", price: "$24" },
    { name: "Lobster Risotto", description: "Saffron, cherry tomatoes, basil oil", price: "$36" },
  ],
  Desserts: [
    { name: "Warm Chocolate Fondant", description: "Dark chocolate, vanilla ice cream, salted caramel", price: "$12" },
    { name: "Crème Brûlée", description: "Classic vanilla, caramelised sugar crust", price: "$10" },
    { name: "Lemon Tart", description: "Raspberry coulis, toasted meringue", price: "$11" },
    { name: "Cheese Board", description: "Selection of fine cheeses, grapes, crackers", price: "$18" },
  ],
  Drinks: [
    { name: "House Red Wine", description: "Cabernet Sauvignon, Bordeaux blend", price: "$12" },
    { name: "Signature Cocktail", description: "Ember & Vine house mix, seasonal fruits", price: "$14" },
    { name: "Sparkling Water", description: "Still or sparkling, 750ml", price: "$5" },
    { name: "Freshly Brewed Coffee", description: "Single origin, espresso or filter", price: "$6" },
  ],
};

type TabKey = keyof typeof menuData;
const tabs: TabKey[] = ["Starters", "Mains", "Desserts", "Drinks"];

export default function MenuPreview() {
  const [active, setActive] = useState<TabKey>("Starters");
  const items = menuData[active];

  // split into two columns of 3
  const col1 = items.slice(0, 3);
  const col2 = items.slice(3, 6);

  return (
    <section id="menu" className="bg-ivory py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-12 items-start">

        {/* Left — menu content */}
        <div className="flex-1 flex flex-col gap-8">

          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gold/60" />
            <p className="font-sans text-gold text-xs uppercase tracking-[0.3em]">
              Savour Our Menu
            </p>
            <div className="w-12 h-px bg-gold/60" />
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-obsidian/15">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`font-sans text-xs uppercase tracking-[0.2em] pb-3 transition-colors duration-200 border-b-2 -mb-px ${
                  active === tab
                    ? "text-obsidian border-gold"
                    : "text-stone border-transparent hover:text-obsidian"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Menu items — two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {[col1, col2].map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col divide-y divide-obsidian/10">
                {col.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4 py-4"
                  >
                    <div className="flex flex-col gap-0.5">
                      <h3 className="font-sans text-obsidian text-sm font-semibold">
                        {item.name}
                      </h3>
                      <p className="font-sans text-stone text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-sans text-obsidian text-sm font-semibold flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-2">
            <Button href="#" variant="secondary-dark">
              View Full Menu
            </Button>
          </div>
        </div>

        {/* Right — decorative dish image */}
        <div className="hidden lg:block w-72 flex-shrink-0">
          <div className="relative w-full aspect-square">
            <Image
              src="/images/menu-dish.png"
              alt="Ember and Vine signature dish presentation"
              fill
              className="object-contain object-center drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}