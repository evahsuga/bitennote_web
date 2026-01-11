import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';

export const ProblemSection = () => {
  const problems = [
    {
      title: "人間関係が、うまくいかない",
      description: "職場、家庭、友人関係...\n何となく、ギクシャクしてしまう。\n\n相手の欠点ばかりが目について、\nイライラしてしまう自分がいる。\n\n「どうして、わかってくれないの？」\n\nそんな思いが、胸に渦巻く。",
      emoji: "😔"
    },
    {
      title: "自分に、自信が持てない",
      description: "「私なんて...」\nそう思ってしまう瞬間が、多い。\n\n他の人と比べて、\n自分が劣っているような気がする。\n\n「このままでいいのかな」\n\nそんな不安が、心を覆う。",
      emoji: "😟"
    },
    {
      title: "何をしても、満たされない",
      description: "仕事も、プライベートも、\n特に大きな問題があるわけじゃない。\n\nでも、何となく、空虚。\n\n「本当にやりたいことって、何だろう」\n\n漠然とした不安が、消えない。",
      emoji: "😕"
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-light-gray">
      <Container maxWidth="text">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            こんな悩み、<br className="md:hidden" />
            ありませんか？
          </h2>
          <p className="text-lg text-center text-gray-600 mb-16">
            あなたは、一人じゃありません。<br />
            多くの人が、同じように感じています。
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <Card>
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">{problem.emoji}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary-coral">
                      {problem.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
              でも、大丈夫。<br />
              <span className="text-primary-coral">あなたは、何も悪くありません。</span>
            </p>
            <p className="mt-6 text-lg text-gray-600">
              ただ、「見方」を変えるだけで、<br />
              世界は、驚くほど変わります。
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
