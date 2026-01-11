# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

美点発見note（Biten Note）ランディングページ - 佐藤康行氏の「満月理論」に基づく美点発見メソッドを紹介する1ページ完結型のプロモーションサイト。

**技術スタック**: React 19.2 + Vite 7.3 + Tailwind CSS 3.4 + Framer Motion

## Development Commands

### Local Development
```bash
# 標準開発サーバー（PCのみ）
npm run dev

# ネットワーク公開（同一WiFi環境の携帯・タブレットからアクセス可能）
npm run dev -- --host
# → PC: http://localhost:5173/
# → 携帯: http://[IPアドレス]:5173/ (例: http://192.168.3.3:5173/)
```

### Build & Preview
```bash
# プロダクションビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

## Architecture

### Component Structure

このプロジェクトは**コンポーネントベース設計**で、3層のコンポーネント階層を持つ：

1. **sections/** - ページを構成する7つの独立したセクション（各セクションが1つのビューポート相当）
2. **ui/** - 再利用可能なUIプリミティブ（Button, Card, ScrollReveal等）
3. **layout/** - レイアウトラッパー（Container等）

```
App.jsx
├── HeroSection        # グラデーション背景 + キャッチコピー
├── ProblemSection     # 3つの悩みカード
├── SolutionSection    # 満月理論の説明（図解 + 3つの核心 + 実績数値）
├── StepsSection       # 3ステップの使い方（左右交互レイアウト）
├── FAQSection         # アコーディオン式FAQ
├── CTASection         # 最終行動喚起
└── Footer             # 運営情報
```

### Key Design Patterns

**1. ScrollReveal Pattern**
全セクションで`<ScrollReveal>`コンポーネントを使用してスクロール連動アニメーションを実装。Framer Motionの`useInView`フックベース。

**2. Responsive Layout**
- モバイルファースト設計（Tailwind CSS）
- ブレークポイント: `md:` (768px) でデスクトップレイアウトに切り替え
- グリッドレイアウトは`grid md:grid-cols-2`パターンを多用

**3. Gradient System**
カスタムユーティリティクラス（`src/styles/index.css`）:
- `.gradient-warm` - ヒーロー/CTAセクション用（コーラルピンク → ピーチ）
- `.gradient-cool` - 満月理論セクション用（ピンク → ブルー）

### Configuration Files

**重要**: このプロジェクトは`package.json`で`"type": "module"`（ES Modules）を使用しているため、PostCSS/Tailwind設定ファイルは`.cjs`拡張子必須：

- `tailwind.config.cjs` - Tailwind CSS設定（CommonJS形式）
- `postcss.config.cjs` - PostCSS設定（CommonJS形式）

`.js`拡張子にすると「module is not defined」エラーが発生する。

### Color Palette

`tailwind.config.cjs`でカスタムカラーを定義：

- `primary-coral` / `primary-peach` - グラデーション用
- `secondary-mint` / `secondary-apricot` - アクセント用
- `accent-pink` / `accent-blue` - クールグラデーション用
- `text-dark` / `light-gray` - ベースカラー

### Animation System

Framer Motion使用:
- **ScrollReveal** - スクロール時のフェードイン（opacity + y軸移動）
- **Button** - ホバー時の拡大（scale: 1.05）、タップ時の縮小（scale: 0.95）
- **Card** - ホバー時の浮き上がり（y: -10px）
- **FAQ Accordion** - 高さ + 不透明度のトランジション

### Design System Constants

`src/utils/constants.js`にカラー、タイポグラフィ、スペーシングの定数を定義。ただし実際の実装ではTailwindユーティリティクラスを直接使用しているため、参照用として機能。

## Content Structure

### Static Placeholders

現在、以下はプレースホルダー（叩き台）状態：
- ヒーロー動画エリア（右側）
- 満月理論の図解イラスト
- 3ステップの操作動画（Step 1/2/3）

実装時は`public/images/`および`public/videos/`に素材を配置し、各セクションのsrc属性を更新。

### FAQ Section

`FAQSection.jsx`のFAQデータは配列で管理。質問追加時は`faqs`配列に`{question, answer}`オブジェクトを追加するだけ。

## Troubleshooting

### Tailwind CSSが適用されない
1. ブラウザで強制リフレッシュ（Cmd+Shift+R / Ctrl+Shift+R）
2. Viteキャッシュクリア: `rm -rf node_modules/.vite && npm run dev`
3. PostCSS/Tailwind設定ファイルが`.cjs`拡張子か確認

### ネットワーク公開でアクセスできない
- ファイアウォール設定を確認
- 同じWiFiネットワークに接続されているか確認
- ターミナルに表示されるNetwork URLを使用（例: `http://192.168.3.3:5173/`）

## Reference Documentation

- 設計仕様書: `設計仕様書（bitenweb）.md`
- デザインモックアップ: `biten_note_design_mockup.md`
- README: `README.md`
