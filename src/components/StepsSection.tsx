import { Mail, MessageSquare, Rocket } from "lucide-react";

export default function StepsSection() {
  const steps = [
    {
      number: "01",
      icon: Mail,
      title: "お問い合わせ",
      description: "フォームからお気軽にお問い合わせください。24時間以内にご返信いたします。"
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "要件ヒアリング",
      description: "専任担当者が、貴社のニーズや課題を丁寧にヒアリングさせていただきます。"
    },
    {
      number: "03",
      icon: Rocket,
      title: "導入開始",
      description: "アカウント設定とオンボーディング完了後、すぐにご利用いただけます。"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            導入までの3ステップ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            シンプルなプロセスで、スムーズに導入いただけます
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection lines - hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="inline-flex items-center justify-center size-16 bg-blue-600 text-white rounded-full mb-6">
                  <step.icon className="size-8" />
                </div>
                
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 size-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm border-4 border-white">
                  {step.number}
                </div>
                
                <h3 className="text-xl text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
