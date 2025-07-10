'use client';

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface CategoriesProps {
  className?: string;
}

const categories = [
  {id:1, name:"Pizzas"},
  {id:2, name:"Sandwiches"},
  {id:3, name:"Rolls"},
  {id:4, name:"Snacks"},
  {id:5, name:"Salads"},
  {id:6, name:"Burgers"},
  {id:7, name:"Combo Sets"},
  {id:8, name:"Sauces"}
];
const ActiveIndex = 0; // Index of the active category

const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const categoryActiveId = useCategoryStore(state => state.activeId);
  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
       {categories.map((category) => (
  <a
    key={category.id}
    href={`#${category.name}`}
    className={cn(
      "px-4 py-2 rounded-full text-sm cursor-pointer transition-colors",
      {
        "bg-primary text-primary-foreground": category.id === categoryActiveId,
        "text-gray-600 hover:bg-gray-200": category.id !== categoryActiveId,
      }
    )}
  >
    {category.name} {/* ← просто текст, без button */}
  </a>
))}

    </div>
  );
};

export default Categories;