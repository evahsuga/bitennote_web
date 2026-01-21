import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 夜空の背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/night-sky-background.png)',
        }}
      />

      {/* オーバーレイ（透明度20%で文字を読みやすく） */}
      <div className="absolute inset-0 bg-black/20" />

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左側: テキスト */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-white"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="text-sm md:text-base mb-6 font-medium"
            >
              佐藤康行氏の「満月理論」に基づく<br />
              50万人が体験したメソッドを、<br />
              今日から、あなたのスマホで。
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            >
              あなたは、<br />
              大切な人の<br />
              「本当の姿」を<br />
              見ていますか？
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
              className="text-lg md:text-xl mb-8 leading-relaxed"
            >
              そして、気づくのです。<br />
              すべての人が「満月」であることに。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
            >
              <Button size="large" onClick={scrollToSignup}>
                今すぐ無料で始める
              </Button>
              <p className="text-sm mt-4 opacity-90">
                ✓ 完全無料　✓ 1分で登録　✓ 広告なし
              </p>
            </motion.div>
          </motion.div>

          {/* 右側: プレースホルダー画像 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="bg-white bg-opacity-20 rounded-2xl shadow-2xl aspect-video flex items-center justify-center">
              <p className="text-white text-xl">ヒーロー動画エリア</p>
            </div>
          </motion.div>
        </div>

        {/* スクロール促進 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">スクロール</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
