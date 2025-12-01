import { Cpu, Rocket, Hexagon, Lightbulb, TrendingUp, Cloud, Database, Shield, Zap, Globe, Gauge, Code, Network, Battery, Eye } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      color: "text-amber-600",
      title: "圧倒的なスピード",
      description: "ドラッグ&ドロップで直感的に操作。テンプレートから選ぶだけで、わずか5分でプロフェッショナルなLPが完成します。"
    },
    {
      icon: Hexagon,
      color: "text-green-600",
      title: "豊富なデザイン",
      description: "100種類以上のテンプレートと、カスタマイズ可能なコンポーネント。ブランドに合わせた自由なデザインが可能です。"
    },
    {
      icon: Database,
      color: "text-indigo-600",
      title: "データドリブン分析",
      description: "リアルタイムのアクセス解析とコンバージョン追跡。A/Bテストで最適なLPを見つけられます。"
    },
    {
      icon: Shield,
      color: "text-emerald-600",
      title: "安心のセキュリティ",
      description: "SSL対応、自動バックアップ、99.9%の稼働率保証。大切なデータを確実に守ります。"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            LeadFlow の特長
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            マーケティング担当者が求める機能を、すべて一つのツールに
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                  <Icon className={`size-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}