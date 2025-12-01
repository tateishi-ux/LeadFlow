import { Quote, Cpu, Rocket, Hexagon, Lightbulb, TrendingUp, Cloud, Database, Shield, Zap, Globe, Gauge, Code, Network, Battery, Eye } from "lucide-react";

export default function CaseStudySection() {
  const testimonials = [
    {
      name: "田中 太郎",
      position: "マーケティング部長",
      company: "株式会社テックイノベーション",
      comment: "導入後、LP制作の工数が劇的に減少しました。以前は外部に依頼していたため、1本あたり2週間かかっていましたが、今では数時間で完成します。コストも大幅に削減できました。",
      avatar: "TT"
    },
    {
      name: "佐藤 花子",
      position: "代表取締役",
      company: "株式会社スタートアップX",
      comment: "デザインの知識がなくても、プロフェッショナルなLPが作れるのが素晴らしいです。A/Bテスト機能を活用して、コンバージョン率が3倍になりました。",
      avatar: "SH"
    }
  ];

  const companies = [
    { name: "TechCorp", icon: Cpu, color: "text-blue-600" },
    { name: "StartupX", icon: Rocket, color: "text-purple-600" },
    { name: "Digital Solutions", icon: Hexagon, color: "text-green-600" },
    { name: "Innovation Lab", icon: Lightbulb, color: "text-yellow-600" },
    { name: "Growth Partners", icon: TrendingUp, color: "text-red-600" },
    { name: "CloudVentures", icon: Cloud, color: "text-sky-600" },
    { name: "DataFlow", icon: Database, color: "text-indigo-600" },
    { name: "SecureNet", icon: Shield, color: "text-emerald-600" },
    { name: "SmartAI", icon: Zap, color: "text-amber-600" },
    { name: "GlobalTech", icon: Globe, color: "text-cyan-600" },
    { name: "FastTrack", icon: Gauge, color: "text-orange-600" },
    { name: "CodeMasters", icon: Code, color: "text-violet-600" },
    { name: "NetWork Pro", icon: Network, color: "text-teal-600" },
    { name: "PowerApps", icon: Battery, color: "text-lime-600" },
    { name: "VisionSoft", icon: Eye, color: "text-pink-600" },
  ];

  return (
    <section id="cases" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            導入事例・お客様の声
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            実際にご利用いただいているお客様からの声をご紹介します
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 relative"
            >
              <Quote className="size-10 text-blue-200 mb-4" />
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {testimonial.comment}
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="size-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span>{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div>
          <p className="text-center text-gray-600 mb-8 text-[36px]">導入企業様</p>
          <div className="relative overflow-hidden">
            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll {
                  animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `
            }} />
            
            <div className="flex animate-scroll">
              {[...companies, ...companies].map((company, index) => {
                const Icon = company.icon;
                return (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-32 h-20 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center gap-2 px-3 py-3 hover:border-gray-300 transition-colors mx-4"
                  >
                    <Icon className={`size-8 ${company.color}`} />
                    <span className="text-gray-700 text-xs whitespace-nowrap">{company.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}