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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              「満月理論」という、<br />
              新しい見方
            </h2>
            <p className="text-xl text-gray-600">
              佐藤康行氏が25年をかけて辿り着いた、<br />
              人間関係の本質を捉えた理論
            </p>
          </div>
        </ScrollReveal>

        {/* 満月の図解 */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-20">
            <Card className="gradient-cool p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-white">
                    🌘 三日月として見るか？<br />
                    🌕 満月として見るか？
                  </h3>
                  <p className="text-white leading-relaxed text-lg">
                    月は、いつも「満月」です。<br />
                    ただ、光が当たっていない部分が<br />
                    見えていないだけ。<br /><br />

                    人間も、同じです。<br /><br />

                    目に見える部分（三日月）だけで<br />
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
            <h3 className="text-3xl font-bold text-center mb-12">
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
                      <h4 className="text-xl font-bold mb-4">
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

        {/* 実績 */}
        <ScrollReveal delay={1.0}>
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-12">
              満月理論からの、確かな実績
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
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 text-xl text-gray-700 leading-relaxed">
              なぜ、これほどの実績が生まれたのか？<br />
              <br />
              それは、<br />
              <strong className="text-primary-coral">
                満月理論が、人間の本質を捉えた<br />
                普遍的な真理だから
              </strong>
              です。
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
