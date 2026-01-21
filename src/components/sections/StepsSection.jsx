import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';

export const StepsSection = () => {
  const steps = [
    {
      number: "1",
      icon: "👤",
      title: "大切な人を登録",
      description: "アプリを開いて、\n「👤 新しい人を追加」をタップ。\n\n名前を入力（例: たろうくん）\n写真を選択（任意）\n関係性（例: 友人）\n\n✨ 人数制限なし！何人でも登録できます。\n\nたった30秒で完了します。",
      tips: "最初は、「一番身近な人」から始めるのがおすすめ。\n毎日会う人なら、美点を見つけやすいからです。"
    },
    {
      number: "2",
      icon: "✍️",
      title: "良いところを記録",
      description: "登録した人をタップして、\n「🖊️ 美点を追加」をタップ。\n\n良いところを、\n15文字程度の短いメモで記録。\n\n「今日、笑顔で挨拶してくれた」\n「困っている時、助けてくれた」\n「いつも優しい言葉をかけてくれる」\n\nどんな小さなことでも、OK。",
      tips: [
        "✅ 具体的な行動を書く",
        "✅ 小さなことでもOK",
        "✅ その日に気づいたことを記録",
        "✅ ポジティブな表現を使う"
      ]
    },
    {
      number: "3",
      icon: "📖",
      title: "振り返る、贈る",
      description: "記録した美点は、\nLINE風のチャット形式で、\nいつでも振り返ることができます。\n\n「こんなにたくさん、\n 良いところがあったんだ」\n\nその実感が、\nあなたの心を、じんわりと満たします。\n\nそして、PDFで出力して、\n相手にプレゼントすることも。",
      tips: "1週間続けると → 見方が変わる\n1ヶ月続けると → 習慣になる\n3ヶ月続けると → 世界が変わる"
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-light-gray">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              使い方は、<wbr />とってもシンプル。<br />
              たった3ステップで、<wbr />習慣が始まります。
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <Card className="overflow-hidden">
                <div className={`grid md:grid-cols-2 gap-8 items-center`}>
                  {/* テキスト */}
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full gradient-warm flex items-center justify-center text-white text-2xl font-bold">
                        {step.number}
                      </div>
                      <div className="text-4xl">{step.icon}</div>
                    </div>

                    <h3 className="text-3xl font-bold mb-4 text-balance">
                      {step.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6 break-keep">
                      {step.description}
                    </p>

                    <div className="bg-accent-pink bg-opacity-20 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0">💡</span>
                        <div>
                          <p className="font-semibold mb-2">ポイント：</p>
                          {Array.isArray(step.tips) ? (
                            <ul className="space-y-2">
                              {step.tips.map((tip, i) => (
                                <li key={i} className="text-gray-700 break-keep">{tip}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line break-keep">
                              {step.tips}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 動画/プレースホルダー */}
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    {step.number === "1" ? (
                      <video
                        controls
                        muted
                        poster="/videos/movstep1image.png"
                        preload="metadata"
                        playsInline
                        className="w-full rounded-2xl shadow-xl"
                      >
                        <source src="/videos/movstep1.mp4" type="video/mp4" />
                        お使いのブラウザは動画再生に対応していません。
                      </video>
                    ) : step.number === "2" ? (
                      <video
                        controls
                        muted
                        poster="/videos/movstep2image.png"
                        preload="metadata"
                        playsInline
                        className="w-full rounded-2xl shadow-xl"
                      >
                        <source src="/videos/movstep2_1.mp4" type="video/mp4" />
                        お使いのブラウザは動画再生に対応していません。
                      </video>
                    ) : step.number === "3" ? (
                      <video
                        controls
                        muted
                        poster="/videos/movstep3image.png"
                        preload="metadata"
                        playsInline
                        className="w-full rounded-2xl shadow-xl"
                      >
                        <source src="/videos/movstep3.mp4" type="video/mp4" />
                        お使いのブラウザは動画再生に対応していません。
                      </video>
                    ) : (
                      <div className="bg-gradient-to-br from-primary-coral to-primary-peach rounded-2xl shadow-xl aspect-video flex items-center justify-center">
                        <p className="text-white text-xl break-keep">ステップ{step.number}動画</p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* 複数デバイス対応 */}
        <ScrollReveal delay={0.6}>
          <div className="mt-20 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-pink-500 to-blue-500 text-white text-center p-12">
              <h3 className="text-3xl font-bold mb-6 text-balance">
                💻 複数のデバイスで使える
              </h3>
              <p className="text-lg leading-relaxed mb-6 break-keep">
                スマホで記録 → PCで確認<br />
                PCで記録 → スマホで確認<br />
                <br />
                自動で同期されるので、<wbr />
                いつでも、<wbr />どこでも、<wbr />
                あなたの美点発見が続きます。
              </p>
              <p className="text-base opacity-90 break-keep">
                オフラインでも記録可能。<wbr />
                オンラインに戻ると自動で同期。
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
