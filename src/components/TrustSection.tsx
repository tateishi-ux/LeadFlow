import { Cpu, Rocket, Hexagon, Lightbulb, TrendingUp, Cloud, Database, Shield, Zap, Globe, Gauge, Code, Network, Battery, Eye } from "lucide-react";

export default function TrustSection() {
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
    <section className="py-12 lg:py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-[32px]">
            <span className="text-blue-600 text-2xl text-[40px]">500社以上</span>に導入されています
          </p>
        </div>
        
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
    </section>
  );
}