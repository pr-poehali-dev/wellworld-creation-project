import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Контакты и поддержка
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">
                <Icon
                  name="Server"
                  size={24}
                  className="inline mr-2 text-emerald-400"
                />
                Информация о сервере
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Globe" size={20} className="text-emerald-400" />
                  <div>
                    <p className="text-white font-semibold">IP адрес</p>
                    <p className="text-gray-300">wellworld.ru:25565</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} className="text-emerald-400" />
                  <div>
                    <p className="text-white font-semibold">Онлайн</p>
                    <p className="text-gray-300">24/7, до 1000 игроков</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon
                    name="Gamepad2"
                    size={20}
                    className="text-emerald-400"
                  />
                  <div>
                    <p className="text-white font-semibold">Версии</p>
                    <p className="text-gray-300">1.16.5 - 1.20.4</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={20} className="text-emerald-400" />
                  <div>
                    <p className="text-white font-semibold">Режим</p>
                    <p className="text-gray-300">Гриф, выживание</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">
                <Icon
                  name="MessageCircle"
                  size={24}
                  className="inline mr-2 text-emerald-400"
                />
                Связь с нами
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="MessageSquare"
                    size={20}
                    className="text-emerald-400"
                  />
                  <div>
                    <p className="text-white font-semibold">Discord</p>
                    <p className="text-gray-300">discord.gg/wellworld</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Send" size={20} className="text-emerald-400" />
                  <div>
                    <p className="text-white font-semibold">Telegram</p>
                    <p className="text-gray-300">@wellworld_support</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-emerald-400" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">admin@wellworld.ru</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-emerald-400" />
                  <div>
                    <p className="text-white font-semibold">Время ответа</p>
                    <p className="text-gray-300">До 24 часов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">
              <Icon
                name="HelpCircle"
                size={24}
                className="inline mr-2 text-emerald-400"
              />
              Часто задаваемые вопросы
            </h2>

            <div className="space-y-4">
              <div className="border border-slate-700 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">
                  Как получить донат после покупки?
                </h3>
                <p className="text-gray-300">
                  После успешной оплаты донат автоматически активируется на
                  вашем аккаунте в течение 5-10 минут.
                </p>
              </div>

              <div className="border border-slate-700 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">
                  Какие способы оплаты доступны?
                </h3>
                <p className="text-gray-300">
                  Мы принимаем СБП, банковские карты России, Украины, Беларуси,
                  а также платежи в тенге.
                </p>
              </div>

              <div className="border border-slate-700 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">
                  Можно ли вернуть деньги?
                </h3>
                <p className="text-gray-300">
                  Возврат средств возможен только в случае технических ошибок.
                  Обратитесь в поддержку с описанием проблемы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
