import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl mb-6">
          今すぐリード獲得を<br className="sm:hidden" />始めましょう
        </h2>
        
        <p className="text-lg lg:text-xl text-blue-100 mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
          14日間の無料トライアルで、LeadFlowの全機能をお試しください。
          クレジットカードの登録は不要です。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 group"
          >
            無料で始める
            <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            資料をダウンロード
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-100">
          <div className="flex items-center space-x-2">
            <svg className="size-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>クレジットカード不要</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="size-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>いつでもキャンセル可能</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="size-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>24時間サポート</span>
          </div>
        </div>
      </div>
    </section>
  );
}