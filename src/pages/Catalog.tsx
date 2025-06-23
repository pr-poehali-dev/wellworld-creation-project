import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const [filter, setFilter] = useState("all");

  const products = [
    {
      id: "1",
      name: "VIP",
      price: 299,
      currency: "₽",
      description: "Базовый VIP статус с основными привилегиями",
      features: [
        "Цветной ник",
        "Приват 2 чанка",
        "5 дополнительных /home",
        "VIP чат",
      ],
      category: "vip",
    },
    {
      id: "2",
      name: "Premium",
      price: 599,
      currency: "₽",
      description: "Расширенные возможности для комфортной игры",
      features: [
        "Все из VIP",
        "Приват 5 чанков",
        "10 дополнительных /home",
        "Доступ к /fly",
        "Premium кит",
      ],
      category: "vip",
      popular: true,
    },
    {
      id: "3",
      name: "Ultimate",
      price: 1299,
      currency: "₽",
      description: "Максимальный набор возможностей на сервере",
      features: [
        "Все из Premium",
        "Приват 10 чанков",
        "20 дополнительных /home",
        "/god на 1 час в день",
        "Ultimate кит",
      ],
      category: "vip",
    },
    {
      id: "4",
      name: "Алмазы x64",
      price: 149,
      currency: "₽",
      description: "Стак алмазов для быстрого старта",
      features: [
        "64 алмаза",
        "Мгновенная выдача",
        "Можно купить несколько раз",
      ],
      category: "resources",
    },
    {
      id: "5",
      name: "Стартовый набор",
      price: 99,
      currency: "₽",
      description: "Все необходимое для успешного начала игры",
      features: [
        "Алмазная броня",
        "Алмазные инструменты",
        "32 золотых яблока",
        "16 зелий лечения",
      ],
      category: "kits",
    },
  ];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Каталог донатов
          </h1>
          <p className="text-gray-300">
            Выберите подходящий пакет для улучшения игрового опыта
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "all"
                  ? "bg-sunshine-500 text-white"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              <Icon name="Grid3X3" size={16} className="inline mr-2" />
              Все товары
            </button>
            <button
              onClick={() => setFilter("vip")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "vip"
                  ? "bg-sunshine-500 text-white"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              <Icon name="Crown" size={16} className="inline mr-2" />
              VIP статусы
            </button>
            <button
              onClick={() => setFilter("resources")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "resources"
                  ? "bg-sunshine-500 text-white"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              <Icon name="Gem" size={16} className="inline mr-2" />
              Ресурсы
            </button>
            <button
              onClick={() => setFilter("kits")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "kits"
                  ? "bg-sunshine-500 text-white"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              <Icon name="Package" size={16} className="inline mr-2" />
              Наборы
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
