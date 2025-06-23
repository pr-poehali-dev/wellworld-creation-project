import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import PaymentMethods from "@/components/PaymentMethods";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredProducts = [
    {
      id: "2",
      name: "Premium",
      price: 599,
      currency: "₽",
      description: "Самый популярный статус среди игроков",
      features: [
        "Цветной ник",
        "Приват 5 чанков",
        "10 дополнительных /home",
        "Доступ к /fly",
      ],
      popular: true,
    },
    {
      id: "3",
      name: "Ultimate",
      price: 1299,
      currency: "₽",
      description: "Максимальные возможности на сервере",
      features: [
        "Все из Premium",
        "Приват 10 чанков",
        "/god на 1 час в день",
        "Ultimate кит",
      ],
    },
    {
      id: "5",
      name: "Стартовый набор",
      price: 99,
      currency: "₽",
      description: "Идеальное начало для новичков",
      features: [
        "Алмазная броня",
        "Алмазные инструменты",
        "32 золотых яблока",
        "Зелья лечения",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-montserrat">
              <span className="text-sunshine-400">Well</span>World
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Лучший гриф-сервер Minecraft
            </p>
            <p className="text-sunshine-400 font-semibold">
              🎯 Копия ReallyWorld • 🌍 IP: wellworld.ru
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <Icon
                name="Users"
                size={32}
                className="text-sunshine-400 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                1000+ игроков
              </h3>
              <p className="text-gray-300">Активное сообщество</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <Icon
                name="Clock"
                size={32}
                className="text-sunshine-400 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">24/7 онлайн</h3>
              <p className="text-gray-300">Стабильная работа</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
              <Icon
                name="Shield"
                size={32}
                className="text-sunshine-400 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Защита от читов
              </h3>
              <p className="text-gray-300">Честная игра</p>
            </div>
          </div>

          <Link
            to="/catalog"
            className="inline-flex items-center bg-sunshine-500 hover:bg-sunshine-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            <Icon name="ShoppingBag" size={24} className="mr-2" />
            Купить донат
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Популярные донаты
            </h2>
            <p className="text-gray-300 text-lg">
              Улучшите свой игровой опыт уже сегодня
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/catalog"
              className="inline-flex items-center text-sunshine-400 hover:text-sunshine-300 font-semibold"
            >
              Посмотреть все товары
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <PaymentMethods />
        </div>
      </section>

      {/* Server Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-sunshine-500/10 to-sunset-500/10 rounded-2xl p-8 border border-sunshine-500/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Присоединяйся к WellWorld!
              </h2>
              <p className="text-gray-300">
                Скопируй IP и заходи на сервер прямо сейчас
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
                <div className="flex items-center space-x-3">
                  <Icon name="Server" size={24} className="text-sunshine-400" />
                  <div>
                    <p className="text-sm text-gray-400">IP адрес сервера</p>
                    <p className="text-lg font-mono text-white">wellworld.ru</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="Gamepad2"
                    size={24}
                    className="text-sunshine-400"
                  />
                  <div>
                    <p className="text-sm text-gray-400">Версии</p>
                    <p className="text-lg text-white">1.16 - 1.20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
