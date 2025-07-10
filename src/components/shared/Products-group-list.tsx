'use client';
import React from "react";
import { Title } from "./Title";
import ProductCard from "./Product-card";
import { useIntersection } from "../hooks/Intersection";
import { useCategoryStore } from "@/store/category";


interface Props {
  title: string;
 items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

const ProductsGroupList: React.FC<Props> = ({ title, items, className, listClassName, categoryId }) => {
const setActiveCategoryId = useCategoryStore(state => state.setActiveId);
const intersectionRef = React.useRef<HTMLElement | null>(null);
const isVisible = useIntersection(intersectionRef, {
  threshold: 0.4,
  rootMargin: '0px 0px 0px 0px'
});



  React.useEffect(() => {
    if (isVisible) {
      setActiveCategoryId(categoryId);
    }else{
      console.log(`Category ${categoryId} is not visible`);
    }
  }, [isVisible, categoryId]);
  return (
<div ref={intersectionRef} className="flex flex-col gap-4" id={title}>

      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${listClassName}`}>
        {items.map(product => (
          <ProductCard key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price} 
              text={product.text}
              />
        ))}
      </div>
    </div>
  );
}   

export default ProductsGroupList;