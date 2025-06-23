import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaymentMethods from "@/components/PaymentMethods";
import Icon from "@/components/ui/icon";

const Cart = () => {
  const cartItems = [
    {
      id: "2",
      name: "Premium",
      price: 599,
      currency: "₽",
      quantity: 1,
    },
    {
      id: "4",
      name: "Алмазы x64",
      price: 149,
      currency: "₽",
      quantity: 2,
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Корзина</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">
                Товары в корзине
              </h2>

              {cartItems.length > 0 ? (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-slate-700 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-sunshine-500/20 rounded-lg flex items-center justify-center">
                          <Icon
                            name="Crown"
                            size={20}
                            className="text-sunshine-400"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">
                            {item.name}
                          </h3>
                          <p className="text-sunshine-400">
                            {item.price} {item.currency}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <button className="w-8 h-8 bg-slate-600 rounded flex items-center justify-center text-white hover:bg-slate-500">
                            <Icon name="Minus" size={16} />
                          </button>
                          <span className="text-white w-8 text-center">
                            {item.quantity}
                          </span>
                          <button className="w-8 h-8 bg-slate-600 rounded flex items-center justify-center text-white hover:bg-slate-500">
                            <Icon name="Plus" size={16} />
                          </button>
                        </div>

                        <button className="text-red-400 hover:text-red-300">
                          <Icon name="Trash2" size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon
                    name="ShoppingCart"
                    size={48}
                    className="text-gray-500 mx-auto mb-4"
                  />
                  <p className="text-gray-400">Корзина пуста</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Итого</h2>

              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-gray-300"
                  >
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>{item.price * item.quantity} ₽</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-600 pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Общая сумма:</span>
                  <span className="text-sunshine-400">{total} ₽</span>
                </div>
              </div>

              <button className="w-full bg-sunshine-500 hover:bg-sunshine-600 text-white font-semibold py-3 rounded-lg transition-colors">
                Перейти к оплате
              </button>
            </div>

            <PaymentMethods />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
