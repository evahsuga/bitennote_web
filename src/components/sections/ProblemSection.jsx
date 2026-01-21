import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ProblemSection = () => {
  const problems = [
    "人間関係がうまくいかない",
    "自分のことが好きになれない",
    "いつも同じことで悩んでいる"
  ];

  return (
    <section className="py-20 md:py-32 bg-light-gray">
      <Container maxWidth="text">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            こんな悩み、ありませんか？
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto space-y-6">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-4">
                <span className="text-4xl flex-shrink-0">😔</span>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-gray-500 text-sm mt-12">
            もし、一つでも当てはまるなら、<br />
            このアプリがお役に立てるかもしれません。
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
};
