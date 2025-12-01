import { Button } from "./ui/button";
import { ChevronDown, Sparkles, Zap, BarChart3 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-24 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1642522029686-5485ea7e6042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZSUyMHByb2Zlc3Npb25hbCUyMHdvcmtpbmd8ZW58MXx8fHwxNzY0MDUwNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Business professionals working in modern office"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-white/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Text Content */}
        <div className="max-w-3xl mx-auto text-center space-y-6 lg:space-y-8 mb-12 lg:mb-16 bg-white/80 p-[30px] rounded-2xl">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            <Sparkles className="size-4" />
            <span className="text-sm">新しいリード獲得の形</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-gray-900">
            ノーコードで<br />
            <span className="text-blue-600">LP を量産</span>できる
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            中小企業のマーケティング担当者のために設計された、
            直感的なランディングページ作成ツール。
            コーディング不要で、プロフェッショナルなLPを数分で公開できます。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              無料で試してみる
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8"
            >
              資料をダウンロード
            </Button>
          </div>
        </div>

        {/* Dashboard - Full Width */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-200 mb-12 lg:mb-16">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <span className="text-gray-900">Dashboard</span>
              <div className="flex space-x-2">
                <div className="size-3 rounded-full bg-red-400"></div>
                <div className="size-3 rounded-full bg-yellow-400"></div>
                <div className="size-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                <BarChart3 className="size-6 text-blue-600" />
                <p className="text-2xl text-gray-900">2,547</p>
                <p className="text-sm text-gray-600">総リード数</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 space-y-2">
                <Zap className="size-6 text-green-600" />
                <p className="text-2xl text-gray-900">87%</p>
                <p className="text-sm text-gray-600">成約率</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 space-y-2">
                <Sparkles className="size-6 text-purple-600" />
                <p className="text-2xl text-gray-900">24</p>
                <p className="text-sm text-gray-600">公開LP数</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between col-span-1">
                <span className="text-gray-700">キャンペーンA</span>
                <span className="text-green-600">+24%</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between col-span-1">
                <span className="text-gray-700">キャンペーンB</span>
                <span className="text-green-600">+18%</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between col-span-1">
                <span className="text-gray-700">キャンペーンC</span>
                <span className="text-green-600">+32%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center bg-white/80 px-6 py-3 rounded-full">
          <p className="text-sm text-gray-700 mb-2">スクロールして詳細を見る</p>
          <ChevronDown className="size-6 text-gray-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
}