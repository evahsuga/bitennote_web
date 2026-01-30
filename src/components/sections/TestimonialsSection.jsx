import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Swiper スタイル
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 体験談カードコンポーネント
const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // 冒頭部分を取得（最初の3行程度）
  const getPreviewContent = (content) => {
    const lines = content.split('\n').filter(line => line.trim() !== '');
    return lines.slice(0, 3).join('\n');
  };

  const previewContent = getPreviewContent(testimonial.content);
  const hasMoreContent = testimonial.content.length > previewContent.length;

  return (
    <Card hover={false} className="h-full">
      {/* 写真（プレースホルダー） */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden shadow-md bg-gradient-to-br from-primary-coral to-primary-peach flex items-center justify-center">
          <span className="text-white text-xl font-bold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
      </div>

      {/* 引用（短文） */}
      <h3 className="text-lg md:text-xl font-bold text-primary-coral text-center mb-3 leading-relaxed text-balance">
        {testimonial.quote}
      </h3>

      {/* 境界線 */}
      <div className="w-12 h-0.5 bg-gray-200 mx-auto mb-3" />

      {/* 体験談本文 */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
                {testimonial.content}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-gray-600 leading-relaxed mb-2 whitespace-pre-line">
                {previewContent}
              </p>
              {hasMoreContent && (
                <div className="text-center text-gray-400 text-sm">...</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 続きを読む / 閉じる ボタン */}
        {hasMoreContent && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-center text-primary-coral text-sm font-medium py-2 hover:underline focus:outline-none"
          >
            {isExpanded ? '閉じる ▲' : '続きを読む ▼'}
          </button>
        )}
      </div>

      {/* 境界線 */}
      <div className="w-12 h-0.5 bg-gray-200 mx-auto mb-3 mt-2" />

      {/* 名前・情報 */}
      <div className="text-center">
        <p className="font-semibold text-gray-800 text-sm">
          {testimonial.name}
        </p>
        <p className="text-xs text-gray-600">
          {testimonial.age}・{testimonial.location}
        </p>
      </div>
    </Card>
  );
};

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
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
      age: '28歳・会社員',
      location: '東京都',
    },
    {
      id: 2,
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
      age: '32歳・主婦',
      location: '神奈川県',
    },
    {
      id: 3,
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
      age: '25歳・事務職',
      location: '大阪府',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <Container>
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 text-balance">
            実際に使っている方の声
          </h2>
          <p className="text-sm text-center text-gray-600 mb-10">
            美点発見noteを使い始めた方々から、<wbr />温かいメッセージが届いています。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="testimonials-swiper-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{
                clickable: true,
                dynamicBullets: false,
              }}
              autoplay={{
                enabled: true,
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              loopedSlides={3}
              initialSlide={0}
              speed={600}
              spaceBetween={16}
              slidesPerView={1.1}
              centeredSlides={true}
              simulateTouch={true}
              touchRatio={1}
              touchStartPreventDefault={false}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  centeredSlides: false,
                  spaceBetween: 24,
                },
              }}
              a11y={{
                prevSlideMessage: '前の体験談',
                nextSlideMessage: '次の体験談',
                paginationBulletMessage: '体験談 {{index}} に移動',
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollReveal>

        <p className="text-center text-gray-500 text-xs mt-8">
          ※ ご本人の許可を得て掲載しています
        </p>
      </Container>
    </section>
  );
};
