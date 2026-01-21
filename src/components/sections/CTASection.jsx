import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export const CTASection = () => {
  return (
    <section id="cta-section" className="relative py-32 gradient-warm overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <div className="border-t-2 border-b-2 border-white border-opacity-30 py-8 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              さあ、<wbr />今日から始めましょう。
            </h2>
            <p className="text-xl md:text-2xl break-keep">
              あなたの人生を、<wbr />
              明るく変える、<wbr />その第一歩を。
            </p>
          </div>

          <p className="text-lg md:text-xl mb-8 break-keep">
            50万人が、<wbr />
            すでにこの一歩を踏み出しました。<br />
            <br />
            あなたも、<wbr />仲間に加わりませんか？
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <Button
              size="large"
              className="!bg-white !text-primary-coral shadow-2xl text-xl px-16 py-5"
              onClick={() => {
                alert('アプリ登録ページへ遷移します');
              }}
            >
              今すぐ無料で始める ▶
            </Button>
          </motion.div>

          <div className="text-base mb-12 space-y-2">
            <p className="break-keep">✓ 完全無料</p>
            <p className="break-keep">✓ 1分で登録</p>
            <p className="break-keep">✓ 広告なし</p>
          </div>

          <div className="border-t-2 border-white border-opacity-30 pt-8">
            <p className="text-xl md:text-2xl leading-relaxed break-keep">
              もう、<wbr />迷わなくていいんです。<br />
              <br />
              あなたの人生は、<wbr />今日から変わります。
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
