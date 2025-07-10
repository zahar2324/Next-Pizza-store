import { Plus } from "lucide-react";
import React from "react";
import { Title } from "./Title";
import { Button } from "../ui/button";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  className?: string;
  text: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  className,
  text,
}) => {
  return (
    <div
      className={`flex flex-col justify-between bg-white rounded-xl shadow-sm overflow-hidden h-full ${className}`}
    >
      {/* Image block */}
      <Link href={`/product/${id}`} className="block bg-secondary p-4 h-[260px] flex items-center justify-center">
        <img
          className="w-[215px] h-[215px] object-contain"
          src={imageUrl}
          alt={name}
        />
      </Link>

      {/* Content block */}
      <div className="flex flex-col flex-grow p-4">
        <Title text={name} size="sm" className="mb-1 font-bold" />

        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{text}</p>

        <div className="flex justify-between items-center mt-auto">
          <span className="text-[18px] text-black">
            от <b>{price} $</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus className="w-5 h-5 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
