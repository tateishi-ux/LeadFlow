export default function BenefitsSection() {
  const benefits = [
    {
      number: "75%",
      label: "作業時間削減",
      description: "従来の制作時間と比較"
    },
    {
      number: "60%",
      label: "制作コスト削減",
      description: "外部委託との比較"
    },
    {
      number: "3.2倍",
      label: "コンバージョン率向上",
      description: "最適化機能活用時"
    },
    {
      number: "24時間",
      label: "サポート対応",
      description: "365日体制でサポート"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            導入で得られる効果
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            多くの企業が実感している、具体的な成果をご紹介します
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center space-y-3"
            >
              <div className="text-5xl lg:text-6xl mb-2">
                {benefit.number}
              </div>
              <div className="text-xl lg:text-2xl text-blue-100">
                {benefit.label}
              </div>
              <p className="text-sm text-blue-200">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
