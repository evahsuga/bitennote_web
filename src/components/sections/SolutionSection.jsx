import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';

export const SolutionSection = () => {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              「満月理論」という、<wbr />
              新しい見方
            </h2>
            <p className="text-xl text-gray-600">
              佐藤康行氏が25年をかけて辿り着いた、<wbr />
              人間関係の本質を捉えた理論
            </p>
          </div>
        </ScrollReveal>

        {/* 満月の図解 */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-20">
            <Card className="bg-gradient-to-br from-pink-500 to-blue-500 p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-white text-balance">
                    🌘 三日月として見るか？<br />
                    🌕 満月として見るか？
                  </h3>
                  <p className="text-white leading-relaxed text-lg">
                    月は、<wbr />いつも「満月」です。<br />
                    ただ、<wbr />光が当たっていない部分が<wbr />
                    見えていないだけ。<br /><br />

                    人間も、<wbr />同じです。<br /><br />

                    目に見える部分（三日月）だけで<wbr />
                    判断していませんか？
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="/images/sato_満月三日月説明.png"
                    alt="満月理論の図解 - 三日月として見るか満月として見るか"
                    className="w-full rounded-2xl"
                  />
                  <p className="text-xs text-white text-opacity-80 mt-4 leading-relaxed">
                    写真：開発者・佐藤康行（さとうやすゆき）<br />
                    【無料公開】『満月瞑想スタートエディション』視聴ページより<br />
                    <a
                      href="https://pay.ioe.jp/mmst_0821_limited-release/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-white text-opacity-90"
                    >
                      https://pay.ioe.jp/mmst_0821_limited-release/
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        {/* 満月理論の3つのポイント */}
        <ScrollReveal delay={0.4}>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-balance">
              満月理論の3つの核心
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "1",
                  title: "すべての人は「満月」",
                  description: "誰もが完全で完璧な存在。\nただ、光が当たっていない部分が見えていないだけ。"
                },
                {
                  number: "2",
                  title: "三日月を見ているのは自分",
                  description: "相手の欠点が見える時、\nそれは自分の「見方」の問題。\n見方を変えれば、満月が見える。"
                },
                {
                  number: "3",
                  title: "相手を満月として見ると",
                  description: "相手を満月として認める時、\n自分自身も満月であることに気づく。"
                },
              ].map((point, index) => (
                <ScrollReveal key={index} delay={0.6 + index * 0.2}>
                  <Card>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full gradient-warm flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                        {point.number}
                      </div>
                      <h4 className="text-xl font-bold mb-4 text-balance">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {point.description}
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 実績 - 一時非表示（誇大広告的な印象を避けるため再検討中） */}
        {/*
        <ScrollReveal delay={1.0}>
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-12 text-balance">
              満月理論からの、<wbr />確かな実績
            </h3>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { number: "50万人+", label: "研修参加者" },
                { number: "43,000人", label: "ANA全社員実践" },
                { number: "450万円", label: "CF達成" },
                { number: "16,000校", label: "資料配布" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary-coral mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 break-keep">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 text-xl text-gray-700 leading-relaxed break-keep">
              なぜ、<wbr />これほどの実績が生まれたのか？<br />
              <br />
              それは、<wbr />
              <strong className="text-primary-coral">
                満月理論が、<wbr />人間の本質を捉えた<wbr />
                普遍的な真理だから
              </strong>
              です。
            </p>

            <div className="mt-16 max-w-3xl mx-auto">
              <a
                href="https://camp-fire.jp/projects/656368/view"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src="/images/campfire_美点発見.png"
                  alt="クラウドファンディング - 美点発見プロジェクト"
                  className="w-full rounded-2xl shadow-lg"
                />
              </a>
              <p className="text-sm text-gray-500 text-center mt-4 break-keep">
                クラウドファンディング詳細はこちら →{' '}
                <a
                  href="https://camp-fire.jp/projects/656368/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-coral hover:underline"
                >
                  CAMPFIRE プロジェクトページ
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>
        */}
      </Container>
    </section>
  );
};
