import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';

export const BridgeSection = () => {
  return (
    <>
      {/* Part 1: YSメソッドから生まれた「美点発見」 */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-relaxed">
                では、どうすれば、<br />
                満月として見ることができるのか？
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-gradient-to-r from-accent-pink to-accent-blue bg-opacity-20 rounded-3xl p-8 md:p-12 mb-16">
              <div className="text-center space-y-6 text-gray-800">
                <p className="text-xl md:text-2xl leading-loose">
                  佐藤康行氏が、<br />
                  25年の歳月をかけて辿り着いた答え。
                </p>
                <p className="text-xl md:text-2xl leading-loose">
                  それが、
                </p>
                <p className="text-2xl md:text-3xl font-bold leading-loose">
                  「美点発見」
                </p>
                <p className="text-xl md:text-2xl leading-loose">
                  という、シンプルで、<br />
                  誰にでもできる実践法です。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 2カラム: 満月理論 vs 美点発見 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal delay={0.4}>
              <Card className="bg-light-gray h-full">
                <div className="text-center space-y-4">
                  <div className="text-5xl mb-4">🌕</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    満月理論<br />
                    <span className="text-lg font-normal text-gray-600">（理論）</span>
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <p>すべての人は<br />「満月」</p>
                    <p>見方を変えれば<br />満月が見える</p>
                    <p className="font-bold text-primary-coral">でも、<br />「どうやって？」</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <Card className="bg-light-gray h-full">
                <div className="text-center space-y-4">
                  <div className="text-5xl mb-4">✍️</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    美点発見<br />
                    <span className="text-lg font-normal text-gray-600">（実践法）</span>
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <p>相手の<br />「良いところ」<br />を見つけて、記録する。</p>
                    <p>それだけで、<br />見方が変わる。</p>
                    <p>シンプルだから<br />続けられる。</p>
                    <p>続けるから、<br />習慣になる。</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.8}>
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-semibold">
                美点発見は、<br />
                満月理論を「実践」に落とし込んだ、<br />
                50万人が体験したメソッドです。
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Part 2: 紙に書き出す方法の価値 */}
      <section className="py-20 md:py-32 bg-light-gray">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                美点発見の基本は、<br />
                紙に書き出すこと
              </h2>
              <p className="text-lg text-gray-600">
                五感を使って書くことで、<br />
                脳に深く刻まれていく
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 items-start">
            {/* 左側: 書籍画像 */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-48 md:w-64 mb-6">
                  <img
                    src={`${import.meta.env.BASE_URL}images/202402-monday-book.png`}
                    alt="しんどい月曜日の朝がラクになる本"
                    className="w-full rounded-xl shadow-xl"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center md:text-left">
                  佐藤康行 著<br />
                  サンマーク出版
                </p>
              </div>
            </ScrollReveal>

            {/* 右側: 手順説明 */}
            <ScrollReveal delay={0.4}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">1️⃣</span>
                    <p className="text-lg text-gray-800 pt-1">ノートを用意する</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">2️⃣</span>
                    <p className="text-lg text-gray-800 pt-1">相手の名前を書く</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">3️⃣</span>
                    <p className="text-lg text-gray-800 pt-1">良いところを書き出す</p>
                  </div>
                </div>

                <div className="bg-accent-pink bg-opacity-20 rounded-xl p-6 mt-8">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl flex-shrink-0">💡</span>
                    <p className="font-semibold text-gray-800 pt-1">紙の良いところ:</p>
                  </div>
                  <ul className="space-y-2 text-gray-700 ml-10">
                    <li>• 五感を使う</li>
                    <li>• 脳への刺激が強い</li>
                    <li>• 記憶に残る</li>
                  </ul>
                </div>

                {/* 美点発見シート画像 */}
                <div className="bg-white rounded-xl p-6 shadow-md mt-8">
                  <img
                    src={`${import.meta.env.BASE_URL}images/biten_kakidasi_kami.png`}
                    alt="美点発見シート - 紙に書き出す例"
                    className="w-full rounded-lg"
                  />
                  <p className="text-xs text-gray-500 text-center mt-4">
                    ※ 書籍『しんどい月曜の朝がラクになる本』より引用
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.6}>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-base text-gray-700 leading-relaxed">
                実際、読書の研究では、<br />
                紙の書籍とデジタル書籍を比較した時、<br />
                紙の方が記憶に残りやすいという結果も出ています。
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Part 3: ある実践者の驚異的な物語 */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                ある実践者の、驚異的な物語
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-gradient-to-r from-accent-pink to-accent-blue bg-opacity-20 rounded-3xl p-8 md:p-12 mb-12">
              <div className="grid md:grid-cols-4 gap-8 items-center">
                {/* 左側: 写真 */}
                <div className="flex justify-center md:col-span-1">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-coral to-primary-peach flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">谷</span>
                  </div>
                </div>

                {/* 右側: プロフィール */}
                <div className="md:col-span-3 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    谷 光宏<span className="text-lg font-normal text-gray-600 ml-2">(たに みつひろ)</span>
                  </h3>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-1">
                    <p className="font-semibold">全日本空輸株式会社 人事部　ANA人財大学</p>
                    <p className="text-gray-600">ANAエアーサービス松山 元社長</p>
                    <p className="text-xs text-gray-500 mt-2">
                      関西空港支店総務課長、広報室部長、大阪空港支店総務部長、<br />
                      ANAエアポートサービス常務取締役を歴任
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed space-y-4">
              <p>
                谷さんは、松山空港で200名の社員を対象に、美点発見を導入しました。
              </p>
              <p>
                最初は、各社員の美点が思いつかず、ノートが埋まらない状態。
              </p>
              <p>
                そこで、社員一人一人とコミュニケーションを取り、<br />
                ノートに写真を貼って、美点を書き溜めていったのです。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="bg-light-gray rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto relative">
              <div className="text-6xl text-gray-300 absolute top-4 left-4">"</div>
              <div className="text-base text-gray-800 leading-relaxed space-y-4 pl-8">
                <p>
                  だんだんノートが埋まっていくにつれて、どの社員も「会社を愛していること」や「職場の仲間を大切にしていること」がわかってきて、社員に対する感謝の気持ちが自然と湧き上がってきました。
                </p>
                <p>
                  美点発見というのはとてもシンプルな手法ですが、実際にやってみると、<strong className="bg-yellow-100 px-1">年度末の業績がまるで別会社のように上がりはじめ</strong>、<strong className="bg-yellow-100 px-1">社内調査で社員の満足度が急上昇</strong>するなど、そのような成果は<strong className="bg-yellow-100 px-1">これまで経験したことがないくらい驚くべきもの</strong>でした。
                </p>
              </div>
              <p className="text-right text-gray-600 mt-6 font-semibold">— 谷 光宏</p>
            </div>
          </ScrollReveal>

          {/* 成果カード - 1つに集約 */}
          <ScrollReveal delay={0.8}>
            <div className="max-w-md mx-auto mb-12">
              <Card className="text-center">
                <h4 className="text-lg font-bold text-gray-800 mb-4">🎯 驚くべき成果</h4>
                <div className="space-y-3 text-gray-700">
                  <p>📈 従業員満足度 伸び率日本一</p>
                  <p>🏆 次々と受賞ラッシュ</p>
                  <p>💚 メンタル不調者がその場で回復</p>
                </div>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1.4}>
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-800 font-bold leading-relaxed">
                その後、ANAの全社員43,000人に、<br />
                美点発見が導入されました。
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Part 3-2: スマホ時代の課題解決へ */}
      <section className="py-20 md:py-32 bg-light-gray">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                でも、1つの課題がありました
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-3xl mx-auto mb-12 text-center text-gray-700 leading-relaxed space-y-4">
              <p>谷さんの実践は、素晴らしいものでした。</p>
              <p>
                アナログで、手で書き、写真を貼る。<br />
                五感を使った、脳に深く刻まれる方法。
              </p>
              <p>でも、これを真似しようとした時...</p>
            </div>
          </ScrollReveal>

          {/* 課題カード */}
          <ScrollReveal delay={0.4}>
            <div className="max-w-md mx-auto mb-12">
              <Card className="bg-white text-center">
                <div className="space-y-3 text-gray-700">
                  <p className="text-lg">写真を印刷、切り貼りする</p>
                  <p className="text-lg">小さな手間に、つい後回し</p>
                  <p className="text-lg font-semibold text-primary-coral">小さなハードルが大きな壁に</p>
                </div>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <div className="text-center mb-16">
              <p className="text-lg text-gray-700 leading-relaxed">
                そして、今は、<br />
                一人一台スマホを持ち歩く時代。<br />
                <br />
                写真も、データで持ち歩いています。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1.0}>
            <div className="bg-gradient-to-r from-accent-pink to-accent-blue bg-opacity-20 rounded-3xl p-8 md:p-12 mb-16 max-w-4xl mx-auto">
              <div className="text-center space-y-6 text-gray-800">
                <p className="text-2xl md:text-3xl font-bold">だから、</p>
                <p className="text-3xl md:text-4xl font-bold text-primary-coral">
                  「美点発見note 携帯アプリ版」
                </p>
                <p className="text-2xl md:text-3xl font-bold">を開発しました。</p>

                <div className="border-t border-gray-300 my-8"></div>

                <div className="text-base md:text-lg leading-relaxed space-y-4">
                  <p>
                    紙の良さ（五感・脳への刺激）には<br />
                    少し及ばないかもしれません。
                  </p>
                  <p className="font-bold">でも、</p>
                  <p>
                    スマホで、いつでも、どこでも、<br />
                    美点発見を続けられる。<br />
                    写真も、ワンタップで追加でき、
                  </p>
                  <p>
                    満月視点づくりの習慣化が、<br />
                    もっと手軽に手に入る。<br />
                    そう考えたのです。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 比較表 3カラム - 一時非表示（コンテンツ整理のため） */}
          {/*
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <ScrollReveal delay={1.2}>
              <Card className="bg-white">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">📓</div>
                  <h4 className="text-xl font-bold text-gray-800">紙（ノート）</h4>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✅</span>
                    <span>五感を使う</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✅</span>
                    <span>脳に刻まれる</span>
                  </p>
                  <div className="border-t border-gray-200 my-3"></div>
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">❌</span>
                    <span>写真を貼る手間</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">❌</span>
                    <span>持ち歩きにくい</span>
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={1.4}>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-600 mb-2">↔</p>
                  <p className="text-sm text-gray-600">それぞれの良さ</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1.6}>
              <Card className="bg-white">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">📱</div>
                  <h4 className="text-xl font-bold text-gray-800">アプリ</h4>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✅</span>
                    <span>持ち歩きやすい</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✅</span>
                    <span>写真追加が簡単</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✅</span>
                    <span>自動同期</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✅</span>
                    <span>いつでも振り返れる</span>
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
          */}

          <ScrollReveal delay={1.8}>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-semibold space-y-4">
                <span className="block">
                  美点発見の「本質」はそのままに、<br />
                  現代のライフスタイルに合わせた、<br />
                  それが「携帯版・美点発見note」です。
                </span>
                <span className="block mt-6">
                  紙でも、アプリでも、<br />
                  あなたが続けやすい方法で、<br />
                  美点発見を楽しんでください。
                </span>
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
};
