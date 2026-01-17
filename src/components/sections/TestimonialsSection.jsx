import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      photo: '/images/testimonials/user1.jpg',
      quote: '美点発見を始めて、人生が変わりました。',
      content: `以前は、職場の人間関係に悩んでいました。
上司の厳しい言い方が気になり、同僚の些細な行動にもイライラしてしまう日々。

でも、美点発見noteを使い始めて1ヶ月。

相手の「良いところ」を意識的に探すようになったら、不思議なことに、相手の見え方が変わってきたんです。

上司の厳しさは「成長を願ってくれている」からだと気づき、同僚の行動も「その人なりの配慮」だと思えるように。

今では、職場に行くのが楽しみになりました。

美点発見は、人間関係を変える魔法のようなツールです。`,
      name: 'A.Tさん',
      info: '28歳・会社員\n東京都'
    },
    {
      photo: '/images/testimonials/user2.jpg',
      quote: 'パートナーとの関係が、劇的に変わりました。',
      content: `結婚5年目。
マンネリ化して、喧嘩も増えていました。

夫の悪いところばかりが目について、「なんでこの人と結婚したんだろう」と思う日も。

でも、美点発見noteを始めてから、変化が起きました。

夫の「当たり前にやってくれていること」に、初めて気づいたんです。

毎日ゴミ出しをしてくれること。
疲れているのに、子どもと遊んでくれること。
私が風邪をひいた時、看病してくれたこと。

記録していくうちに、「こんなに良い人だったんだ」と思えるように。

今では、素直に「ありがとう」と言えるようになりました。

夫も嬉しそうで、私たちの関係は、以前よりずっと良くなっています。`,
      name: 'M.Kさん',
      info: '32歳・主婦\n神奈川県'
    },
    {
      photo: '/images/testimonials/user3.jpg',
      quote: '苦手だった先輩と、話せるようになりました。',
      content: `入社2年目。
仕事は慣れてきたけど、一つだけ悩みがありました。

「先輩が、苦手...」

厳しい指摘ばかりで、話すたびに緊張する日々。

友達に勧められて、美点発見noteを使い始めました。

最初は「苦手な人の良いところなんて...」と思ったけど、意識して観察してみると、

「この人、実は、すごく丁寧に教えてくれてる」
「私のミスをフォローしてくれている」
「仕事に対して、誰よりも真剣」

そんなことに気づきました。

そして、ある日、勇気を出して「いつもありがとうございます」と伝えたら、先輩が笑顔で「頑張ってるね」と言ってくれたんです。

今では、先輩と話すのが楽しいです。

苦手だと思っていたのは、私の「見方」が原因だったんだと気づきました。`,
      name: 'Y.Sさん',
      info: '25歳・事務職\n大阪府'
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-light-gray">
      <Container>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            実際に使っている方の声
          </h2>
          <p className="text-base text-center text-gray-600 mb-16">
            美点発見noteを使い始めた方々から、温かいメッセージが届いています。
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <Card className="flex flex-col h-full">
                {/* 写真 */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden shadow-md bg-gradient-to-br from-primary-coral to-primary-peach flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* 引用 */}
                <h3 className="text-xl font-bold text-primary-coral text-center mb-4 leading-relaxed">
                  {testimonial.quote}
                </h3>

                {/* 境界線 */}
                <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4"></div>

                {/* 本文 */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 whitespace-pre-line flex-grow">
                  {testimonial.content}
                </p>

                {/* 境界線 */}
                <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4"></div>

                {/* 名前・情報 */}
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800 whitespace-pre-line">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-600 whitespace-pre-line mt-1">
                    {testimonial.info}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <p className="text-xs text-gray-500 text-center mt-8">
            ※ ご本人の許可を得て掲載しています
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
};
