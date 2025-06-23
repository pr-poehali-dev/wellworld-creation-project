import Icon from "@/components/ui/icon";

const PaymentMethods = () => {
  const paymentMethods = [
    {
      title: "СБП",
      description: "Система быстрых платежей",
      icon: "Smartphone",
      available: true,
    },
    {
      title: "Карты РФ",
      description: "Visa, MasterCard, МИР",
      icon: "CreditCard",
      available: true,
    },
    {
      title: "Карты Украины",
      description: "Visa, MasterCard",
      icon: "CreditCard",
      available: true,
    },
    {
      title: "Карты Беларуси",
      description: "Visa, MasterCard, Белкарт",
      icon: "CreditCard",
      available: true,
    },
    {
      title: "Тенге",
      description: "Kaspi Pay, банковские карты",
      icon: "Banknote",
      available: true,
    },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        <Icon
          name="Shield"
          size={24}
          className="inline mr-2 text-sunshine-400"
        />
        Способы оплаты
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="bg-slate-700 rounded-lg p-4 border border-slate-600 hover:border-sunshine-500/50 transition-colors"
          >
            <div className="flex items-center mb-2">
              <Icon
                name={method.icon as any}
                size={20}
                className="text-sunshine-400 mr-2"
              />
              <h4 className="font-semibold text-white">{method.title}</h4>
              {method.available && (
                <Icon
                  name="CheckCircle"
                  size={16}
                  className="text-sunshine-400 ml-auto"
                />
              )}
            </div>
            <p className="text-sm text-gray-300">{method.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-sunshine-500/10 border border-sunshine-500/20 rounded-lg">
        <div className="flex items-center text-sunshine-400 mb-2">
          <Icon name="Lock" size={16} className="mr-2" />
          <span className="font-semibold">Безопасные платежи</span>
        </div>
        <p className="text-sm text-gray-300">
          Все платежи обрабатываются через защищенные каналы с SSL-шифрованием
        </p>
      </div>
    </div>
  );
};

export default PaymentMethods;
