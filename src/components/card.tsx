// components/ProductCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, image }) => {
  return (
    <Link href={`/details/${id}`}>
    <div className="p-4 bg-white shadow-lg rounded-2xl hover:shadow-xl transition max-w-xs mx-auto"
    id="card">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="rounded-t-lg"
      />
      <h2 className="text-lg font-semibold mt-4">{title}</h2>
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
      
        <center><button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Read More...
        </button>
        </center>
     
    </div>
    </Link>
  );
};

export default ProductCard;