# 美点発見note ランディングページ 技術設計書

**作成日：** 2026年1月11日  
**対象：** VSCode担当開発者  
**プロジェクト：** 美点発見note プロモーションサイト  
**目的：** React + Vite + Tailwind CSS による実装

---

## 📋 目次

1. [プロジェクト概要](#プロジェクト概要)
2. [技術スタック](#技術スタック)
3. [プロジェクト構成](#プロジェクト構成)
4. [開発環境セットアップ](#開発環境セットアップ)
5. [デザインシステム](#デザインシステム)
6. [コンポーネント設計](#コンポーネント設計)
7. [セクション別実装詳細](#セクション別実装詳細)
8. [レスポンシブ対応](#レスポンシブ対応)
9. [アニメーション](#アニメーション)
10. [パフォーマンス最適化](#パフォーマンス最適化)
11. [デプロイ](#デプロイ)
12. [素材リスト](#素材リスト)

---

## 📌 プロジェクト概要

### サイトの目的

20-30代女性をターゲットに、美点発見noteアプリへの登録を促進するランディングページ。

### ターゲットユーザー

- **年齢層：** 20-30代女性
- **悩み：** 人間関係、自己肯定感の低さ、漠然とした不安
- **心理状態：** 何か変えたい、でも大きな一歩は怖い
- **求めるもの：** 優しい、温かい、共感できる

### サイトの特徴

- **ヒプノティック・ライティング**採用
- **満月理論**を中核に据えた構成
- **感情移入**を重視したストーリー展開
- **温かく、優しい**デザイン

---

## 🛠️ 技術スタック

### フロントエンド

```json
{
  "framework": "React 18.x",
  "build_tool": "Vite 5.x",
  "styling": "Tailwind CSS 3.x",
  "language": "TypeScript 5.x (optional)",
  "animation": "Framer Motion 11.x",
  "icons": "Lucide React",
  "fonts": "Google Fonts (Noto Sans JP, Inter)"
}
```

### 推奨パッケージ

```bash
npm create vite@latest biten-note-landing -- --template react
cd biten-note-landing
npm install
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion lucide-react
npm install react-scroll
npx tailwindcss init -p
```

---

## 📁 プロジェクト構成

### ディレクトリ構造

```
biten-note-landing/
├── public/
│   ├── images/
│   │   ├── hero/              # ヒーロー画像
│   │   ├── scenes/            # シーンストーリー画像
│   │   ├── steps/             # 3ステップ画像
│   │   ├── books/             # 書籍表紙画像
│   │   └── profile/           # 佐藤康行氏写真
│   ├── videos/
│   │   ├── hero.mp4          # ヒーロー動画
│   │   ├── step1.mp4         # ステップ1動画
│   │   ├── step2.mp4         # ステップ2動画
│   │   └── step3.mp4         # ステップ3動画
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ProblemSection.jsx
│   │   │   ├── SolutionSection.jsx
│   │   │   ├── ScenesSection.jsx
│   │   │   ├── StepsSection.jsx
│   │   │   ├── TransformationSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── FAQSection.jsx
│   │   │   ├── CTASection.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── VideoPlayer.jsx
│   │   │   └── ScrollReveal.jsx
│   │   └── layout/
│   │       ├── Header.jsx
│   │       └── Container.jsx
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   └── constants.js
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 開発環境セットアップ

### 1. プロジェクト作成

```bash
# Vite + React プロジェクト作成
npm create vite@latest biten-note-landing -- --template react

cd biten-note-landing
npm install
```

### 2. Tailwind CSS セットアップ

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**tailwind.config.js**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // プライマリーカラー
        'primary-coral': '#FF9A9E',
        'primary-peach': '#FAD0C4',
        // セカンダリーカラー
        'secondary-mint': '#A8E6CF',
        'secondary-apricot': '#FFD3A5',
        // アクセントカラー
        'accent-pink': '#FEC8D8',
        'accent-blue': '#C3ECFA',
        // ベースカラー
        'text-dark': '#333333',
        'light-gray': '#F8F8F8',
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'sans-serif'],
        'heading': ['Inter', 'sans-serif'],
      },
      spacing: {
        'section': '120px',
        'section-mobile': '80px',
      },
      maxWidth: {
        'content': '1200px',
        'text': '800px',
      },
      lineHeight: {
        'heading': '1.3',
        'relaxed': '1.8',
      },
    },
  },
  plugins: [],
}
```

### 3. src/styles/index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans text-text-dark bg-white;
    @apply leading-relaxed;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading leading-heading;
  }
}

@layer utilities {
  .gradient-warm {
    background: linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%);
  }
  
  .gradient-cool {
    background: linear-gradient(135deg, #FEC8D8 0%, #C3ECFA 100%);
  }
  
  .text-balance {
    text-wrap: balance;
  }
}
```

### 4. その他パッケージインストール

```bash
# アニメーション
npm install framer-motion

# アイコン
npm install lucide-react

# スムーズスクロール（任意）
npm install react-scroll
```

---

## 🎨 デザインシステム

### カラーパレット

```javascript
// src/utils/constants.js

export const COLORS = {
  // プライマリー
  primaryCoral: '#FF9A9E',
  primaryPeach: '#FAD0C4',
  
  // セカンダリー
  secondaryMint: '#A8E6CF',
  secondaryApricot: '#FFD3A5',
  
  // アクセント
  accentPink: '#FEC8D8',
  accentBlue: '#C3ECFA',
  
  // ベース
  white: '#FFFFFF',
  lightGray: '#F8F8F8',
  textDark: '#333333',
};

export const GRADIENTS = {
  warm: 'linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)',
  cool: 'linear-gradient(135deg, #FEC8D8 0%, #C3ECFA 100%)',
};
```

### タイポグラフィ

```javascript
export const TYPOGRAPHY = {
  h1: {
    desktop: '48px',
    mobile: '32px',
  },
  h2: {
    desktop: '36px',
    mobile: '28px',
  },
  h3: {
    desktop: '24px',
    mobile: '20px',
  },
  body: {
    desktop: '16px',
    mobile: '14px',
  },
  small: {
    desktop: '14px',
    mobile: '12px',
  },
};
```

### スペーシング

```javascript
export const SPACING = {
  sectionGap: {
    desktop: '120px',
    mobile: '80px',
  },
  elementGap: {
    desktop: '40px',
    mobile: '24px',
  },
  paragraphGap: {
    desktop: '24px',
    mobile: '16px',
  },
};
```

---

## 🧩 コンポーネント設計

### 基本コンポーネント

#### Button.jsx

```jsx
import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'large',
  onClick,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-heading font-semibold rounded-full transition-all duration-300";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-coral to-primary-peach text-white hover:shadow-xl hover:scale-105",
    secondary: "bg-white border-2 border-primary-coral text-primary-coral hover:bg-primary-coral hover:text-white",
  };
  
  const sizes = {
    large: "px-12 py-4 text-lg",
    medium: "px-8 py-3 text-base",
    small: "px-6 py-2 text-sm",
  };
  
  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};
```

#### Card.jsx

```jsx
import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hover = true }) => {
  const baseStyles = "bg-white rounded-3xl p-8 shadow-lg";
  
  if (hover) {
    return (
      <motion.div
        className={`${baseStyles} ${className}`}
        whileHover={{ y: -10, shadow: '0 20px 40px rgba(0,0,0,0.1)' }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }
  
  return <div className={`${baseStyles} ${className}`}>{children}</div>;
};
```

#### VideoPlayer.jsx

```jsx
import React from 'react';

export const VideoPlayer = ({ src, poster, className = '', autoPlay = true, loop = true, muted = true }) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};
```

#### ScrollReveal.jsx

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};
```

#### Container.jsx

```jsx
import React from 'react';

export const Container = ({ children, className = '', maxWidth = 'content' }) => {
  const maxWidths = {
    content: 'max-w-content',
    text: 'max-w-text',
    full: 'max-w-full',
  };
  
  return (
    <div className={`${maxWidths[maxWidth]} mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
};
```

---

## 📐 セクション別実装詳細

### 1. HeroSection.jsx

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { VideoPlayer } from '../ui/VideoPlayer';

export const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById('cta-section').scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="relative min-h-screen flex items-center gradient-warm overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左側: テキスト */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm md:text-base mb-6 font-medium"
            >
              佐藤康行氏の「満月理論」に基づく<br />
              50万人が体験したメソッドを、<br />
              今日から、あなたのスマホで。
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            >
              あなたは、<br />
              大切な人の<br />
              「本当の姿」を<br />
              見ていますか？
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl mb-8 leading-relaxed"
            >
              そして、気づくのです。<br />
              すべての人が「満月」であることに。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button size="large" onClick={scrollToSignup}>
                今すぐ無料で始める
              </Button>
              <p className="text-sm mt-4 opacity-90">
                ✓ 完全無料　✓ 1分で登録　✓ 広告なし
              </p>
            </motion.div>
          </motion.div>
          
          {/* 右側: 動画 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <VideoPlayer 
              src="/videos/hero.mp4"
              poster="/images/hero/poster.jpg"
              className="shadow-2xl"
            />
          </motion.div>
        </div>
        
        {/* スクロール促進 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 1.5 }}
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
```

---

### 2. ProblemSection.jsx

```jsx
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
    <section className="py-section md:py-section-mobile bg-light-gray">
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
```

---

### 3. SolutionSection.jsx（満月理論）

```jsx
import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';

export const SolutionSection = () => {
  return (
    <section className="py-section md:py-section-mobile">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              「満月理論」という、<br />
              新しい見方
            </h2>
            <p className="text-xl text-gray-600">
              佐藤康行氏が25年をかけて辿り着いた、<br />
              人間関係の本質を捉えた理論
            </p>
          </div>
        </ScrollReveal>
        
        {/* 満月の図解 */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-20">
            <Card className="gradient-cool p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-white">
                    🌘 三日月として見るか？<br />
                    🌕 満月として見るか？
                  </h3>
                  <p className="text-white leading-relaxed text-lg">
                    月は、いつも「満月」です。<br />
                    ただ、光が当たっていない部分が<br />
                    見えていないだけ。<br /><br />
                    
                    人間も、同じです。<br /><br />
                    
                    目に見える部分（三日月）だけで<br />
                    判断していませんか？
                  </p>
                </div>
                <div className="relative">
                  {/* ここに満月と三日月の図を配置 */}
                  <img 
                    src="/images/moon-illustration.svg" 
                    alt="満月理論の図解"
                    className="w-full"
                  />
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>
        
        {/* 満月理論の3つのポイント */}
        <ScrollReveal delay={0.4}>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              満月理論の3つの核心
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "1",
                  title: "すべての人は「満月」",
                  description: "誰もが完全で完璧な存在。\nただ、光が当たっていない部分が見えていないだけ。"
                },
                {
                  number: "2",
                  title: "三日月を見ているのは自分",
                  description: "相手の欠点が見える時、\nそれは自分の「見方」の問題。\n見方を変えれば、満月が見える。"
                },
                {
                  number: "3",
                  title: "相手を満月として見ると",
                  description: "相手を満月として認める時、\n自分自身も満月であることに気づく。"
                },
              ].map((point, index) => (
                <ScrollReveal key={index} delay={0.6 + index * 0.2}>
                  <Card>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full gradient-warm flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                        {point.number}
                      </div>
                      <h4 className="text-xl font-bold mb-4">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {point.description}
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        {/* 満月理論 × 脳科学 */}
        <ScrollReveal delay={0.8}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">
              満月理論 × 脳科学・心理学
            </h3>
            
            <Card className="bg-light-gray">
              <div className="space-y-8">
                {[
                  {
                    title: "網様体賦活系（RAS）",
                    description: "脳は「探しているもの」を見つける性質があります。\n三日月を探せば三日月が、満月を探せば満月が見えるのです。"
                  },
                  {
                    title: "ミラーニューロン",
                    description: "相手を満月として認める時、\n脳内では「自分も満月だ」という感覚が生まれます。"
                  },
                  {
                    title: "神経可塑性",
                    description: "習慣的に満月を見続けることで、\n脳の回路が物理的に変化します。"
                  },
                ].map((science, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary-coral flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-primary-coral">
                        {science.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {science.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </ScrollReveal>
        
        {/* 実績 */}
        <ScrollReveal delay={1.0}>
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-12">
              満月理論からの、確かな実績
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { number: "50万人+", label: "研修参加者" },
                { number: "43,000人", label: "ANA全社員実践" },
                { number: "450万円", label: "CF達成" },
                { number: "16,000校", label: "資料配布" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary-coral mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-12 text-xl text-gray-700 leading-relaxed">
              なぜ、これほどの実績が生まれたのか？<br />
              <br />
              それは、<br />
              <strong className="text-primary-coral">
                満月理論が、人間の本質を捉えた<br />
                普遍的な真理だから
              </strong>
              です。
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
```

---

### 4. StepsSection.jsx

```jsx
import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';
import { VideoPlayer } from '../ui/VideoPlayer';

export const StepsSection = () => {
  const steps = [
    {
      number: "1",
      icon: "👤",
      title: "大切な人を登録",
      description: "アプリを開いて、\n「👤 新しい人を追加」をタップ。\n\n名前を入力（例: たろうくん）\n写真を選択（任意）\n関係性（例: 友人）\n\n✨ 人数制限なし！何人でも登録できます。\n\nたった30秒で完了します。",
      video: "/videos/step1.mp4",
      tips: "最初は、「一番身近な人」から始めるのがおすすめ。\n毎日会う人なら、美点を見つけやすいからです。"
    },
    {
      number: "2",
      icon: "✍️",
      title: "良いところを記録",
      description: "登録した人をタップして、\n「🖊️ 美点を追加」をタップ。\n\n良いところを、\n15文字程度の短いメモで記録。\n\n「今日、笑顔で挨拶してくれた」\n「困っている時、助けてくれた」\n「いつも優しい言葉をかけてくれる」\n\nどんな小さなことでも、OK。",
      video: "/videos/step2.mp4",
      tips: [
        "✅ 具体的な行動を書く",
        "✅ 小さなことでもOK",
        "✅ その日に気づいたことを記録",
        "✅ ポジティブな表現を使う"
      ]
    },
    {
      number: "3",
      icon: "📖",
      title: "振り返る、贈る",
      description: "記録した美点は、\nLINE風のチャット形式で、\nいつでも振り返ることができます。\n\n「こんなにたくさん、\n 良いところがあったんだ」\n\nその実感が、\nあなたの心を、じんわりと満たします。\n\nそして、PDFで出力して、\n相手にプレゼントすることも。",
      video: "/videos/step3.mp4",
      tips: "1週間続けると → 見方が変わる\n1ヶ月続けると → 習慣になる\n3ヶ月続けると → 世界が変わる"
    },
  ];
  
  return (
    <section className="py-section md:py-section-mobile bg-light-gray">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              使い方は、とってもシンプル。<br />
              たった3ステップで、習慣が始まります。
            </h2>
          </div>
        </ScrollReveal>
        
        <div className="space-y-20">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <Card className="overflow-hidden">
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* テキスト */}
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full gradient-warm flex items-center justify-center text-white text-2xl font-bold">
                        {step.number}
                      </div>
                      <div className="text-4xl">{step.icon}</div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                      {step.description}
                    </p>
                    
                    <div className="bg-accent-pink bg-opacity-20 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0">💡</span>
                        <div>
                          <p className="font-semibold mb-2">ポイント：</p>
                          {Array.isArray(step.tips) ? (
                            <ul className="space-y-2">
                              {step.tips.map((tip, i) => (
                                <li key={i} className="text-gray-700">{tip}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {step.tips}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 動画 */}
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <VideoPlayer 
                      src={step.video}
                      className="shadow-xl"
                    />
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        {/* 複数デバイス対応 */}
        <ScrollReveal delay={0.6}>
          <div className="mt-20 max-w-3xl mx-auto">
            <Card className="gradient-cool text-white text-center p-12">
              <h3 className="text-3xl font-bold mb-6">
                💻 複数のデバイスで使える
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                スマホで記録 → PCで確認<br />
                PCで記録 → スマホで確認<br />
                <br />
                自動で同期されるので、<br />
                いつでも、どこでも、<br />
                あなたの美点発見が続きます。
              </p>
              <p className="text-base opacity-90">
                オフラインでも記録可能。<br />
                オンラインに戻ると自動で同期。
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
```

---

### 5. FAQSection.jsx

```jsx
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
    {
      question: "スマホでもPCでも使えますか？",
      answer: "はい、どちらでも使えます。\n\n美点発見noteは、\nレスポンシブデザインを採用しており、\n\n・スマートフォン（iPhone / Android）\n・タブレット（iPad 等）\n・パソコン（Windows / Mac）\n\nあらゆるデバイスで、\n快適に利用できます。"
    },
    {
      question: "家族や友人と一緒に使えますか？",
      answer: "それぞれが個別にアカウントを作成すれば、\n一緒に使えます。\n\nただし、\n\n美点発見の記録は、\n基本的に「自分だけ」が見るものです。\n\nなぜなら、\n\n美点発見は、\n「相手のため」ではなく、\n「自分自身のため」の習慣だからです。\n\nただし、\n\n記録した美点を、\nPDFで出力して、\n相手にプレゼントすることは可能です。"
    },
  ];
  
  return (
    <section className="py-section md:py-section-mobile">
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
```

---

## 📱 レスポンシブ対応

### ブレークポイント

```javascript
// tailwind.config.js に追加

theme: {
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
}
```

### モバイルファースト設計

```jsx
// モバイルファーストの例

<div className="
  text-2xl          // モバイル: 24px
  md:text-4xl       // タブレット: 36px
  lg:text-5xl       // デスクトップ: 48px
">
  見出し
</div>

<div className="
  px-4              // モバイル: 16px
  md:px-8           // タブレット: 32px
  lg:px-12          // デスクトップ: 48px
">
  コンテナ
</div>
```

---

## 🎬 アニメーション

### Framer Motion の基本パターン

```jsx
// フェードイン
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>

// スライドイン（下から）
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

// スケール
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>

// スクロール連動
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
```

---

## ⚡ パフォーマンス最適化

### 画像最適化

```jsx
// 1. WebP形式を使用
<img src="/images/hero.webp" alt="..." />

// 2. loading="lazy" を追加
<img src="/images/scene1.jpg" alt="..." loading="lazy" />

// 3. srcset でレスポンシブ画像
<img 
  srcset="/images/hero-mobile.jpg 640w,
          /images/hero-tablet.jpg 1024w,
          /images/hero-desktop.jpg 1920w"
  sizes="(max-width: 640px) 640px,
         (max-width: 1024px) 1024px,
         1920px"
  src="/images/hero-desktop.jpg"
  alt="..."
/>
```

### 動画最適化

```jsx
// 1. autoPlay, muted, playsInline を必ず指定
<video autoPlay muted playsInline loop>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>

// 2. poster 画像を指定
<video poster="/images/poster.jpg" ...>

// 3. 動画ファイルを圧縮（推奨: H.264, 720p-1080p, ~5MB以下）
```

### コード分割

```jsx
// React.lazy でコンポーネントを遅延ロード
import React, { lazy, Suspense } from 'react';

const HeroSection = lazy(() => import('./sections/HeroSection'));
const FAQSection = lazy(() => import('./sections/FAQSection'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      {/* ... */}
      <FAQSection />
    </Suspense>
  );
}
```

---

## 🚀 デプロイ

### Netlify デプロイ手順

1. **ビルド**

```bash
npm run build
```

2. **Netlify設定**

`netlify.toml` ファイルを作成:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

3. **Netlify CLI でデプロイ**

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

または、

4. **GitHub連携で自動デプロイ**
- GitHub にリポジトリをプッシュ
- Netlify でリポジトリを連携
- 自動ビルド・デプロイ設定

---

## 📦 素材リスト

### 必要な画像

```
public/images/
├── hero/
│   ├── poster.jpg (1920x1080, ヒーロー動画のサムネイル)
│   └── moon-illustration.svg (満月と三日月の図解)
├── scenes/
│   ├── scene-couple.jpg (シーン1: カップル)
│   ├── scene-workplace.jpg (シーン2: 職場)
│   └── scene-family.jpg (シーン3: 家族)
├── steps/
│   ├── step1-register.jpg (人物登録画面)
│   ├── step2-record.jpg (美点記録画面)
│   └── step3-pdf.jpg (PDF出力画面)
├── books/
│   ├── mangetsu-book.jpg (『満月の法則』表紙)
│   └── monday-book.jpg (『しんどい月曜の朝がラクになる本』表紙)
└── profile/
    └── sato-yasuyuki.jpg (佐藤康行氏写真)
```

### 必要な動画

```
public/videos/
├── hero.mp4 (ヒーロー動画, 10-15秒, 720p-1080p, ~5MB)
├── step1.mp4 (ステップ1動画, 5秒, 720p, ~2MB)
├── step2.mp4 (ステップ2動画, 5秒, 720p, ~2MB)
└── step3.mp4 (ステップ3動画, 5秒, 720p, ~2MB)
```

### 動画の推奨スペック

- **解像度:** 1280x720 (720p) または 1920x1080 (1080p)
- **フォーマット:** MP4 (H.264コーデック)
- **ファイルサイズ:** ヒーロー動画 ~5MB以下、その他 ~2MB以下
- **長さ:** ヒーロー 10-15秒、ステップ 5秒
- **フレームレート:** 30fps
- **ビットレート:** 2000-5000 kbps

---

## ✅ 開発チェックリスト

### Phase 1: セットアップ（1-2日）

```
□ Vite + React プロジェクト作成
□ Tailwind CSS セットアップ
□ Framer Motion インストール
□ 基本コンポーネント作成（Button, Card等）
□ デザインシステム実装（カラー、タイポグラフィ）
```

### Phase 2: セクション実装（5-7日）

```
□ HeroSection（ヒーロー）
□ ProblemSection（問題提起）
□ SolutionSection（満月理論）
□ ScenesSection（シーンストーリー）
□ StepsSection（3ステップ）
□ TransformationSection（本当の変化）
□ TestimonialsSection（証言）
□ FAQSection（よくある質問）
□ CTASection（最終CTA）
□ Footer（フッター）
```

### Phase 3: レスポンシブ＆最適化（2-3日）

```
□ モバイル対応確認（iPhone, Android）
□ タブレット対応確認（iPad）
□ デスクトップ対応確認
□ 画像最適化（WebP変換、圧縮）
□ 動画最適化（圧縮、poster設定）
□ パフォーマンステスト（Lighthouse）
```

### Phase 4: テスト＆デプロイ（1-2日）

```
□ クロスブラウザテスト（Chrome, Safari, Firefox, Edge）
□ アクセシビリティチェック
□ SEO対策（meta tags, OGP）
□ Netlifyデプロイ
□ 本番環境動作確認
```

---

## 📞 質問・相談

実装中に不明点があれば、いつでもご相談ください。

---

**作成者:** Claude (Anthropic)  
**作成日:** 2026年1月11日  
**プロジェクト:** 美点発見note ランディングページ  
**対象:** VSCode担当開発者
