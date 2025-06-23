import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Icon name="Pickaxe" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">WellWorld</span>
            </div>
            <p className="text-gray-400 mb-4">
              Лучший гриф-сервер Minecraft с уникальными возможностями и честной
              игрой
            </p>
            <div className="flex space-x-4">
              <Icon
                name="MessageCircle"
                size={20}
                className="text-gray-400 hover:text-emerald-400 cursor-pointer"
              />
              <Icon
                name="Users"
                size={20}
                className="text-gray-400 hover:text-emerald-400 cursor-pointer"
              />
              <Icon
                name="Youtube"
                size={20}
                className="text-gray-400 hover:text-emerald-400 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-emerald-400">
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="text-gray-400 hover:text-emerald-400"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-gray-400 hover:text-emerald-400"
                >
                  Корзина
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-gray-400 hover:text-emerald-400"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Сервер</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">IP: wellworld.ru</li>
              <li className="text-gray-400">Версия: 1.16-1.20</li>
              <li className="text-gray-400">Режим: Гриф</li>
              <li className="text-gray-400">Онлайн: 24/7</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Discord: WellWorld</li>
              <li className="text-gray-400">Telegram: @wellworld</li>
              <li className="text-gray-400">Email: admin@wellworld.ru</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 WellWorld. Все права защищены. Minecraft является торговой
            маркой Mojang Studios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
