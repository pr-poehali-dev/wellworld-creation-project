import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-slate-900 shadow-lg border-b border-emerald-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Icon name="Pickaxe" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white font-montserrat">
                WellWorld
              </h1>
              <p className="text-sm text-emerald-400">Гриф-сервер</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors"
            >
              <Icon name="ShoppingCart" size={20} />
              <span>Корзина</span>
            </Link>
            <Link
              to="/contacts"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Контакты
            </Link>
          </nav>

          <div className="md:hidden">
            <Icon name="Menu" size={24} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
