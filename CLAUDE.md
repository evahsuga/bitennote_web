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

**注意**: このプロジェクトにはlint/test設定なし。ビルドの成功でデプロイ可否を判断。

## Architecture

### Component Structure

このプロジェクトは**コンポーネントベース設計**で、3層のコンポーネント階層を持つ：

1. **sections/** - ページを構成する7つの独立したセクション（各セクションが1つのビューポート相当）
2. **ui/** - 再利用可能なUIプリミティブ（Button, Card, ScrollReveal等）
3. **layout/** - レイアウトラッパー（Container等）

```
App.jsx
├── HeroSection           # グラデーション背景 + キャッチコピー
├── ProblemSection        # 3つの悩みカード
├── SolutionSection       # 満月理論の説明（図解 + 3つの核心 + 実績数値 + CF画像）
├── BridgeSection         # 満月理論から美点発見へ（YSメソッド → 紙の価値 → ANA導入）
├── StepsSection          # 3ステップの使い方（左右交互レイアウト + 動画）
├── TestimonialsSection   # ユーザーの声（Swiper.js横スクロール）
├── DeveloperSection      # 佐藤康行氏プロフィール + 書籍 + 満月瞑想紹介
├── FAQSection            # アコーディオン式FAQ
├── CTASection            # 最終行動喚起
└── Footer                # 運営情報
```

### Key Design Patterns

**1. ScrollReveal Pattern**
全セクションで`<ScrollReveal>`コンポーネントを使用してスクロール連動アニメーションを実装。Framer Motionの`useInView`フックベース。
- トリガーマージン: `-100px`（画面に入る100px手前で発火）
- アニメーション: `y: 50px → 0`, `opacity: 0 → 1`, `duration: 0.8s`
- `delay`プロパティで連続要素の順次アニメーション可能

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

### Swiper.js Integration

TestimonialsSectionで使用。カスタムスタイルは`src/styles/index.css`の`.testimonials-swiper-container`で定義:
- デスクトップ: 左右ナビゲーションボタン + ドットインジケーター
- モバイル: スワイプ + ドットインジケーターのみ（ボタン非表示）
- カード高さ自動調整（`height: auto`）

### Design System Constants

`src/utils/constants.js`にカラー、タイポグラフィ、スペーシングの定数を定義。ただし実際の実装ではTailwindユーティリティクラスを直接使用しているため、参照用として機能。

### Japanese Text Handling

日本語改行の最適化がbase layerで適用済み（`src/styles/index.css`）:
- デスクトップ: `word-break: keep-all`（単語途中で改行しない）
- モバイル（767px以下）: `word-break: normal`（横はみ出し防止）
- 見出し: `text-wrap: balance`（改行位置の自動調整）

カスタムユーティリティクラス:
- `.text-balance` - 見出し用（改行バランス調整）
- `.break-keep` - 単語区切り維持
- `.no-break` - 改行禁止

## Content Structure

### Images & Assets

**実装済み画像:**
- `public/images/sato_満月三日月説明.png` - 満月理論の図解（SolutionSection）
- `public/images/campfire_美点発見.png` - CF実績画像（SolutionSection）
- `public/images/biten_kakidasi_kami.png` - 美点発見シート書き出し例（BridgeSection）
- `public/images/sato-yasuyuki.png` - 佐藤康行氏プロフィール写真
- `public/images/201610満月の法則.png` - 書籍表紙（満月の法則）
- `public/images/202402-monday-book.png` - 書籍表紙（しんどい月曜日の朝がラクになる本）
- `public/images/202510-mangetsu-counseling.png` - 書籍表紙（満月カウンセリング）
- `public/images/mangetsu-meditation-start.png` - 満月瞑想紹介画像（リンク先: https://pay.ioe.jp/mmst_0821_limited-release/）
- `public/images/night-sky-background.png` - 背景画像

**実装済み動画（StepsSection）:**
- `public/videos/movstep1.mp4` (3.0MB) + `movstep1image.png` - Step1: 大切な人を登録
- `public/videos/movstep2_1.mp4` (4.9MB) + `movstep2image.png` - Step2: 良いところを記録
- `public/videos/movstep3.mp4` (2.6MB) + `movstep3image.png` - Step3: 振り返る、贈る

**動画実装パターン:**
```jsx
<video
  controls           // 再生コントロール表示
  muted              // デフォルト無音
  poster="/videos/movstep1image.png"  // サムネイル画像
  preload="metadata" // メタデータのみ先読み（軽量化）
  playsInline        // iOSでフルスクリーン強制回避
  className="w-full rounded-2xl shadow-xl"
>
  <source src="/videos/movstep1.mp4" type="video/mp4" />
</video>
```

**動画最適化:**
- 推奨ファイルサイズ: 3〜5MB以下（モバイル対応）
- FFmpegで圧縮: `ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow output.mp4`
- サムネイル画像（poster属性）で読み込み前の表示を最適化

**未実装:**
- ユーザー体験談の写真（TestimonialsSection）

**画像・動画命名規則:**
- 日本語ファイル名は一部ブラウザで読み込みエラーが発生するため、新規追加ファイルは英語ファイル名推奨
- 既存の日本語ファイル名（`sato_満月三日月説明.png`, `201610満月の法則.png`）は動作確認済み

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
- 追加差分仕様書: `bitenweb設計仕様書追加差分01.md`
- デザインモックアップ: `biten_note_design_mockup.md`
- README: `README.md`

## Git

- Repository: https://github.com/evahsuga/bitennote_web
- Branch: master
- Deployment: 未設定（手動で`dist/`をNetlify/Vercelにデプロイ）

## Technical Notes

### Tailwind v4 → v3.4 ダウングレード経緯
PostCSS互換性問題によりTailwind CSS v4からv3.4にダウングレード。設定ファイルは`.cjs`拡張子必須（Configuration Filesセクション参照）。

### 日本語ファイル名の注意
一部ブラウザで日本語ファイル名の画像が読み込みエラーになる場合あり。新規追加ファイルは英語ファイル名推奨。既存の日本語ファイル名（`sato_満月三日月説明.png`, `201610満月の法則.png`等）は動作確認済み。
