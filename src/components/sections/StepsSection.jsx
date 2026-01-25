import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper スタイル
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const StepsSection = () => {
  const steps = [
    {
      number: "1",
      icon: "👤",
      title: "大切な人を登録",
      description: "「新しい人を追加」をタップ。\n名前・写真・関係性を入力。\nたった30秒で完了。",
      video: "/videos/movstep1.mp4",
      poster: "/videos/movstep1image.png"
    },
    {
      number: "2",
      icon: "✍️",
      title: "良いところを記録",
      description: "登録した人をタップ。\n15文字程度の短いメモで記録。\nどんな小さなことでもOK。",
      video: "/videos/movstep2_1.mp4",
      poster: "/videos/movstep2image.png"
    },
    {
      number: "3",
      icon: "📖",
      title: "振り返る、贈る",
      description: "チャット形式で振り返り。\n心がじんわり満たされる。\nPDFでプレゼントも可能。",
      video: "/videos/movstep3.mp4",
      poster: "/videos/movstep3image.png"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
              携帯用・美点発見noteの使い方
            </h2>
            <p className="text-lg text-gray-600">
              たった3ステップで、習慣が始まります
            </p>
          </div>
        </ScrollReveal>

        {/* 目次 */}
        <ScrollReveal delay={0.1}>
          <div className="flex justify-center gap-3 md:gap-8 mb-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                <div className="w-8 h-8 rounded-full gradient-warm flex items-center justify-center text-white text-sm font-bold">
                  {step.number}
                </div>
                <span className="text-xs md:text-base text-gray-700 font-medium text-center">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Swiper スライド */}
        <ScrollReveal delay={0.2}>
          <div className="steps-swiper-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{
                clickable: true,
                dynamicBullets: false,
              }}
              autoplay={{
                enabled: true,
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              loopAdditionalSlides={3}
              initialSlide={0}
              speed={600}
              spaceBetween={16}
              slidesPerView={1.1}
              centeredSlides={true}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  centeredSlides: false,
                  spaceBetween: 24,
                },
              }}
              a11y={{
                prevSlideMessage: '前のステップ',
                nextSlideMessage: '次のステップ',
                paginationBulletMessage: 'ステップ {{index}} に移動',
              }}
            >
              {steps.map((step) => (
                <SwiperSlide key={step.number}>
                  <Card hover={false} className="h-full">
                    {/* ステップヘッダー */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center text-white text-lg font-bold">
                        {step.number}
                      </div>
                      <span className="text-2xl">{step.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800">
                        {step.title}
                      </h3>
                    </div>

                    {/* 動画 */}
                    <div className="mb-4">
                      <video
                        controls
                        muted
                        poster={step.poster}
                        preload="metadata"
                        playsInline
                        className="w-full max-h-48 md:max-h-64 object-contain rounded-xl shadow-md bg-black"
                      >
                        <source src={step.video} type="video/mp4" />
                      </video>
                    </div>

                    {/* 説明 */}
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line text-center">
                      {step.description}
                    </p>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollReveal>

        {/* 複数デバイス対応 - コンパクト版 */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-pink-500 to-blue-500 text-white text-center p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                💻 複数デバイスで同期
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                スマホ・PC間で自動同期。<br />
                オフラインでも記録可能。
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
