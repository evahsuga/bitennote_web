import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export const HeroSection = () => {
  const goToApp = () => {
    window.open('https://evahsuga.github.io/biten_note/', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 夜空の背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/night-sky-background.png)`,
        }}
      />

      {/* オーバーレイ（透明度20%で文字を読みやすく） */}
      <div className="absolute inset-0 bg-black/20" />

      <Container className="relative z-10">
        {/* テキストコンテンツ（中央揃え） */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.0, ease: "easeOut" }}
          className="text-white text-center max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.0, delay: 0.6, ease: "easeOut" }}
            className="text-sm md:text-base mb-6 font-medium break-keep"
          >
            佐藤康行氏の「満月理論」に基づく<br />
            50万人が体験したメソッドを、<wbr />
            今日から、<wbr />あなたのスマホで。
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3.0, delay: 1.0, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-balance"
          >
            あなたは、<wbr />
            大切な人の<wbr />
            「本当の姿」を<wbr />
            見ていますか？
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3.0, delay: 1.4, ease: "easeOut" }}
            className="text-lg md:text-xl mb-8 leading-relaxed break-keep"
          >
            そして、<wbr />気づくのです。<br />
            すべての人が「満月」であることに。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3.0, delay: 1.8, ease: "easeOut" }}
          >
            <Button size="large" onClick={goToApp}>
              今すぐ無料で始める
            </Button>
            <p className="text-sm mt-4 opacity-90 break-keep">
              ✓ 完全無料　✓ 1分で登録　✓ 広告なし
            </p>
          </motion.div>

          {/* スクロール促進 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.0, duration: 1.5 }}
            className="mt-8"
          >
            <div className="flex flex-col items-center text-white">
              <span className="text-sm mb-2 opacity-80">スクロール</span>
              <svg className="w-6 h-6 animate-bounce opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
