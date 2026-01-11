import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "本当に無料ですか？",
      answer: "はい、完全無料です。\n\n美点発見noteは、\n「美点発見の素晴らしさを、一人でも多くの方に」\nという想いで運営されている、非営利プロジェクトです。\n\n登録料も、月額料金も、一切かかりません。\n安心してご利用ください。"
    },
    {
      question: "本当に効果がありますか？",
      answer: "個人差はありますが、\n多くの方が「変化」を実感されています。\n\n科学的にも、\n・脳の網様体賦活系（RAS）\n・ミラーニューロンの作用\n・神経可塑性による回路の変化\n\nなど、複数のメカニズムで効果が説明されています。\n\nまずは1週間、試してみてください。\n「あれ、何か違うかも？」\nそう感じる瞬間があるはずです。"
    },
    {
      question: "毎日続けられるか不安です...",
      answer: "大丈夫です。\n\n美点発見は、\n「毎日やらなきゃいけない」\nものではありません。\n\n気づいた時に、\n思いついた時に、\n記録する。\n\nそれだけで、十分です。\n\n「楽しみながら、気楽に」\n\nそれが、続けるコツです。"
    },
    {
      question: "美点が思いつかない時は？",
      answer: "最初は、誰でもそうです。\n\nまずは、こんな視点で探してみてください。\n\n✅ 「してくれたこと」を記録する\n  → 「今日、○○してくれた」\n\n✅ 「当たり前」を見直す\n  → 「いつも、○○してくれてる」\n\n✅ 小さなことでOK\n  → 「笑顔が素敵」「挨拶してくれた」\n\nどんな小さなことでも、\n記録していくうちに、\n\n「あれ、こんなにあったんだ」\n\nと気づく瞬間が、必ず来ます。"
    },
    {
      question: "データは安全ですか？",
      answer: "はい、安心してください。\n\n美点発見noteは、\nGoogleが提供する「Firebase」という\n世界標準のセキュリティシステムを使用しています。\n\nあなたのデータは、\n完全に暗号化され、\n他の誰にも見られることはありません。\n\nプライバシーは、厳重に保護されています。"
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <Container maxWidth="text">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            よくある質問
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card hover={false} className="cursor-pointer">
                <div onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold pr-8">
                      Q{index + 1}. {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-primary-coral flex-shrink-0" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-gray-200 mt-6">
                          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
