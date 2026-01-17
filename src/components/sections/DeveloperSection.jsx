import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';

export const DeveloperSection = () => {
  const books = [
    { image: '/images/201610満月の法則.png', title: '満月の法則' },
    { image: '/images/202402-monday-book.png', title: 'しんどい月曜日の朝がラクになる本' },
    { image: '/images/202510-mangetsu-counseling.png', title: '満月カウンセリング' },
  ];

  return (
    <section className="py-20 md:py-32">
      <Container>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            美点発見メソッド開発者のご紹介
          </h2>
          <p className="text-base text-center text-gray-600 mb-16">
            このメソッドを開発した佐藤康行氏について、もっと知りたい方へ。
          </p>
        </ScrollReveal>

        {/* プロフィールエリア */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          {/* 左側: 写真 + 書籍 */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center md:items-start">
              {/* 写真 */}
              <div className="w-full max-w-sm mb-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/sato-yasuyuki.png"
                    alt="佐藤康行氏のプロフィール写真"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 書籍表紙 */}
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                {books.map((book, index) => (
                  <div
                    key={index}
                    className="w-28 h-40 rounded-lg overflow-hidden shadow-md bg-white hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        console.error('Image failed to load:', book.image);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 右側: プロフィール */}
          <ScrollReveal delay={0.4}>
            <div>
              {/* 名前・肩書き */}
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                佐藤康行
                <span className="text-lg text-gray-600 ml-2">(さとう やすゆき)</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                一般財団法人YS心の再生医療研究所 代表理事<br />
                心の学校グループ 創始者
              </p>

              {/* 境界線 */}
              <div className="w-full h-px bg-gray-300 mb-6"></div>

              {/* 経歴 */}
              <p className="text-base text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                {`1951年、北海道美唄市生まれ

15歳で単身上京、皿洗いからスタート

1980年「ステーキのくいしんぼ」創業、8年で年商50億円（70店舗）達成

1991年「心の学校」創立

2014年「YSこころのクリニック」開院、うつ病90日以内寛解率90%以上`}
              </p>

              {/* 実績エリア */}
              <div className="bg-light-gray rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">🎯 実績:</h4>
                <ul className="space-y-2 text-sm text-gray-800 leading-relaxed">
                  <li>• 研修参加者50万人以上</li>
                  <li>• ANA 43,000人全社員対象研修実施</li>
                  <li>• 著書350冊以上、累計250万部</li>
                  <li>• 全国16,000校に美点発見資料配布</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* YouTube動画エリア */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              佐藤康行氏の「満月瞑想」を体験してみませんか？
            </h3>

            {/* 満月瞑想画像リンク */}
            <div className="max-w-3xl mx-auto mb-8">
              <a
                href="https://pay.ioe.jp/mmst_0821_limited-release/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity duration-300"
              >
                <img
                  src="/images/mangetsu-meditation-start.png"
                  alt="満月瞑想スタートエディション - クリックして詳細を見る"
                  className="w-full rounded-2xl shadow-xl"
                />
              </a>
            </div>

            {/* 瞑想説明 */}
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-accent-pink to-accent-blue bg-opacity-20 rounded-2xl p-8">
              <div className="text-base text-gray-800 leading-relaxed space-y-4">
                <p className="font-bold text-lg text-gray-900">
                  今、あなたはどんな心で毎日をすごしているでしょうか。<br />
                  愛と喜びと感謝にあふれて「本当の自分」で生きていけたらいいと思っていても
                </p>
                <p>
                  過去のトラウマを思い出して心が苦しくなったり<br />
                  誰かの一言で傷ついて落ち込んだり<br />
                  人を責め、自分を責めて辛くなったり<br />
                  そんな心が出てくることはないでしょうか。
                </p>
                <p className="font-bold text-lg text-gray-900">
                  「満月瞑想」は、このような欠けた部分を消そうとするのではなく<br />
                  その"陰"さえ光に変えることで<br />
                  「満月」のように完全に満たされた心になれる瞑想法です。
                </p>
                <p>
                  一般的な瞑想が「心を静める」ものだとしたら、満月瞑想は<strong className="font-bold text-gray-900">「心を満たす」</strong>瞑想法です。<br />
                  「満月瞑想」は、雑念や感情を「手放そう」とするのではなく、それらを利用して深く瞑想に入ります。多くの瞑想とは一線を画します。<br />
                  良かったことも、過去の辛かったことも、すべてを「おかげさま」にすることができ、「満月の心」を開いていきます。
                </p>
                <p className="font-bold text-lg text-gray-900">
                  「満月瞑想」であなたの手に入るもの、
                </p>
                <p>
                  <strong className="font-bold text-gray-900">それは、一時的な安らぎではなく、世界の見え方そのものの変化です。</strong><br />
                  過去の苦しみも、現在の逆境も、すべてを「おかげさま」として<br />
                  <strong className="font-bold text-gray-900">「満月の視点」</strong>で捉えることができれば、人生の達人になれます。
                </p>
                <p>
                  これは、努力のいらない世界です。
                </p>
                <p>
                  なぜなら、あなたは<strong className="font-bold text-gray-900">「もともと満月」</strong>だからです。<br />
                  三日月という月はありません。月はもともと「まんまる」です。<br />
                  あなたは、そのことに気づいていけばいいだけなのです。
                </p>
                <p className="font-bold text-lg text-gray-900">
                  「満月瞑想」は、毎日続けていくことで、自分も、他人も、過去も、すべてを「満月」として、"まるごと光"にすることができる瞑想法です。
                </p>
                <p>
                  この「満月瞑想スタートエディション」を活用して<br />
                  「満月瞑想」をあなたの人生に活かしていってください。
                </p>
                <p className="text-xs text-gray-600 mt-6 pt-4 border-t border-gray-300">
                  【無料公開】『満月瞑想スタートエディション』視聴ページより<br />
                  <a
                    href="https://pay.ioe.jp/mmst_0821_limited-release/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-gray-600"
                  >
                    https://pay.ioe.jp/mmst_0821_limited-release/
                  </a>
                </p>
              </div>
            </div>

            {/* 公式サイトリンク */}
            <div className="text-center mt-12">
              <p className="text-sm text-gray-600 mb-2">もっと詳しく知りたい方は:</p>
              <a
                href="https://ys-method.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-primary-coral font-semibold hover:underline hover:text-opacity-80 transition-all"
              >
                公式サイトへ →
              </a>
            </div>

            {/* 注意書き */}
            <p className="text-xs text-gray-500 text-center mt-8">
              ※ 佐藤康行氏の情報は、公式サイトより引用しています
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
