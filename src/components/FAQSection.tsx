import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "無料トライアルはどのように利用できますか？",
      answer: "アカウント登録後、すぐに14日間の無料トライアルをご利用いただけます。クレジットカードの登録は不要で、トライアル期間中は全機能をお試しいただけます。"
    },
    {
      question: "プラン変更は途中でできますか？",
      answer: "はい、いつでもプラン変更が可能です。アップグレードの場合は即座に適用され、ダウングレードの場合は次回更新時に適用されます。"
    },
    {
      question: "技術的なサポートは受けられますか？",
      answer: "全プランでサポートをご用意しています。ライトプランはメールサポート、スタンダードプランはチャットサポート、プレミアムプランは専任担当者による優先サポートをご利用いただけます。"
    },
    {
      question: "作成したLPのデータは安全ですか？",
      answer: "はい、SSL暗号化通信、自動バックアップ���99.9%の稼働率保証により、お客様のデータを確実に保護しています。また、定期的なセキュリティ監査も実施しています。"
    },
    {
      question: "既存のマーケティングツールと連携できますか？",
      answer: "主要なMAツール、CRM、分析ツールとの連携に対応しています。APIやWebhookを利用したカスタム連携も可能です。詳細はお問い合わせください。"
    },
    {
      question: "契約期間の縛りはありますか？",
      answer: "月額プランには契約期間の縛りはありません。いつでも解約が可能で、解約手数料も発生しません。年額プランをお選びいただくと、2ヶ月分お得になります。"
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-lg text-gray-600">
            お客様からよくいただく質問をまとめました
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`size-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 shadow-xl">
            <p className="text-white text-lg lg:text-xl mb-6">
              その他のご質問がございましたら、お気軽にお問い合わせください
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="mr-2">お問い合わせフォームへ</span>
              <ChevronDown className="size-5 rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}