import { Button } from "./ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "ライト",
      price: "¥9,800",
      period: "/月",
      description: "個人・小規模チーム向け",
      features: [
        "公開LP数：3本まで",
        "月間PV：10,000まで",
        "基本テンプレート",
        "メールサポート",
        "SSL対応"
      ],
      buttonText: "このプランで申し込む",
      popular: false
    },
    {
      name: "スタンダード",
      price: "¥29,800",
      period: "/月",
      description: "成長中の企業向け",
      features: [
        "公開LP数：無制限",
        "月間PV：100,000まで",
        "全テンプレート利用可",
        "A/Bテスト機能",
        "チャットサポート",
        "カスタムドメイン",
        "詳細分析レポート"
      ],
      buttonText: "このプランで申し込む",
      popular: true
    },
    {
      name: "プレミアム",
      price: "¥79,800",
      period: "/月",
      description: "大規模運用向け",
      features: [
        "公開LP数：無制限",
        "月間PV：無制限",
        "全機能利用可",
        "専任サポート担当",
        "優先サポート",
        "API連携",
        "カスタム開発相談",
        "SLA保証"
      ],
      buttonText: "このプランで申し込む",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ビジネスの規模に合わせて選べる、3つのプランをご用意
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 ${
                plan.popular 
                  ? 'ring-2 ring-blue-600 shadow-xl relative' 
                  : 'shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  人気No.1
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-end justify-center">
                  <span className="text-4xl lg:text-5xl text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 mb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="size-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="size-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8">
          全プラン14日間の無料トライアル付き・クレジットカード登録不要
        </p>
      </div>
    </section>
  );
}
