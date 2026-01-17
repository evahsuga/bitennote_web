import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';

export const DeveloperSection = () => {
  const books = [
    { image: '/images/books/mangetsu-book.jpg', title: '満月の法則' },
    { image: '/images/books/monday-book.jpg', title: 'しんどい月曜の朝がラクになる本' },
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
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* 左側: 写真 + 書籍 (40%) */}
          <ScrollReveal delay={0.2} className="md:col-span-2">
            <div className="flex flex-col items-center md:items-start">
              {/* 写真 */}
              <div className="max-w-xs w-full mb-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary-coral to-primary-peach flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">佐藤</span>
                </div>
              </div>

              {/* 書籍表紙 */}
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                {books.map((book, index) => (
                  <div
                    key={index}
                    className="w-28 h-40 rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-accent-pink to-accent-blue flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  >
                    <span className="text-white text-xs font-bold text-center px-2">
                      {book.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 右側: プロフィール (60%) */}
          <ScrollReveal delay={0.4} className="md:col-span-3">
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

            {/* 動画埋め込み */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="満月瞑想 - 佐藤康行"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* 動画説明 */}
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-accent-pink to-accent-blue bg-opacity-20 rounded-2xl p-8 text-center">
              <p className="text-base text-gray-800 leading-relaxed">
                満月瞑想は、佐藤康行氏が開発した心を整える瞑想法です。<br />
                <br />
                1日5分、満月をイメージしながら、心の奥深くにある「本当の自分」と出会う時間。
              </p>
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
