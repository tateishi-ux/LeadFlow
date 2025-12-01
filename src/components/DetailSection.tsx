import { Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function DetailSection() {
  const details = [
    {
      title: "直感的なエディター",
      description: "コーディング知識は一切不要。ビジュアルエディターで見たまま編集できます。",
      features: [
        "ドラッグ&ドロップで簡単配置",
        "リアルタイムプレビュー機能",
        "レスポンシブ自動調整"
      ],
      imagePosition: "left"
    },
    {
      title: "強力な分析ツール",
      description: "訪問者の行動を可視化し、改善ポイントを明確にします。",
      features: [
        "ヒートマップ解析",
        "コンバージョン率トラッキング",
        "ユーザーフロー分析"
      ],
      imagePosition: "right"
    },
    {
      title: "シームレスな連携",
      description: "既存のマーケティングツールと簡単に連携できます。",
      features: [
        "主要MAツールと連携",
        "CRMへの自動データ送信",
        "Webhook対応"
      ],
      imagePosition: "left"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20 lg:space-y-32">
          {details.map((detail, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                detail.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={detail.imagePosition === 'right' ? 'lg:col-start-2' : ''}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl aspect-[4/3] flex items-center justify-center border border-blue-100">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1551650975-87deedd944c3' :
                      index === 1 ? '1460925895917-afdab827c52f' :
                      '1551288049-bebda4e38f71'
                    }?w=800&q=80`}
                    alt={detail.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              <div className={`space-y-6 ${detail.imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="text-2xl lg:text-3xl text-gray-900">
                  {detail.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {detail.description}
                </p>
                <ul className="space-y-3">
                  {detail.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="size-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="size-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
