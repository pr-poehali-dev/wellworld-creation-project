import { useState } from "react";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  popular?: boolean;
  image?: string;
}

const ProductCard = ({
  name,
  price,
  currency,
  description,
  features,
  popular,
}: ProductCardProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div
      className={`relative bg-slate-800 rounded-xl p-6 border transition-all hover:scale-105 ${
        popular
          ? "border-sunset-500 shadow-sunset-500/20 shadow-lg"
          : "border-slate-700 hover:border-sunshine-500/50"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-sunset-500 text-white px-4 py-1 rounded-full text-sm font-bold">
            ⭐ Популярный
          </span>
        </div>
      )}

      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-sunshine-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <Icon name="Crown" size={32} className="text-sunshine-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <div className="text-3xl font-bold text-sunshine-400 mb-2">
          {price} <span className="text-lg">{currency}</span>
        </div>
      </div>

      <p className="text-gray-300 text-center mb-4">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Icon
              name="Check"
              size={16}
              className="text-sunshine-400 mr-2 flex-shrink-0"
            />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleAddToCart}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          isAdded
            ? "bg-sunshine-600 text-white"
            : "bg-sunshine-500 hover:bg-sunshine-600 text-white"
        }`}
      >
        {isAdded ? (
          <span className="flex items-center justify-center">
            <Icon name="Check" size={20} className="mr-2" />
            Добавлено!
          </span>
        ) : (
          "Добавить в корзину"
        )}
      </button>
    </div>
  );
};

export default ProductCard;
