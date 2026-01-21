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
├── HeroSection           # グラデーション背景 + キャッチコピー
├── ProblemSection        # 3つの悩みカード
├── SolutionSection       # 満月理論の説明（図解 + 3つの核心 + 実績数値 + CF画像）
├── StepsSection          # 3ステップの使い方（左右交互レイアウト）
├── TestimonialsSection   # ユーザーの声（3名の体験談）
├── DeveloperSection      # 佐藤康行氏プロフィール + 書籍 + 満月瞑想紹介
├── FAQSection            # アコーディオン式FAQ
├── CTASection            # 最終行動喚起
└── Footer                # 運営情報
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

### Images & Assets

**実装済み画像:**
- `public/images/sato_満月三日月説明.png` - 満月理論の図解（SolutionSection）
- `public/images/campfire_美点発見.png` - CF実績画像（SolutionSection）
- `public/images/sato-yasuyuki.png` - 佐藤康行氏プロフィール写真
- `public/images/201610満月の法則.png` - 書籍表紙（満月の法則）
- `public/images/202402-monday-book.png` - 書籍表紙（しんどい月曜日の朝がラクになる本）
- `public/images/202510-mangetsu-counseling.png` - 書籍表紙（満月カウンセリング）
- `public/images/mangetsu-meditation-start.png` - 満月瞑想紹介画像（リンク先: https://pay.ioe.jp/mmst_0821_limited-release/）

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

**プレースホルダー残り:**
- ヒーロー動画エリア（右側）
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

## Recent Development History

### 2026-01-17: DeveloperSection画像統合とコンテンツ強化

**追加セクション:**
- TestimonialsSection（3名のユーザー体験談）
- DeveloperSection（佐藤康行氏プロフィール + 著書 + 満月瞑想紹介）

**DeveloperSection実装内容:**
- 左カラム:
  - 佐藤康行氏のプロフィール写真（`sato-yasuyuki.png`）
  - 著書3冊の表紙画像（満月の法則、しんどい月曜日の朝がラクになる本、満月カウンセリング）
- 右カラム:
  - 名前・肩書き・経歴
  - 実績エリア（研修参加者50万人以上、ANA全社員研修、著書350冊以上、全国16,000校配布）
- 満月瞑想セクション:
  - YouTube動画 → 画像リンクに変更（`mangetsu-meditation-start.png`）
  - リンク先: https://pay.ioe.jp/mmst_0821_limited-release/
  - 詳細な説明文（重要キーワードを太字＋大きめフォントで強調）
  - 引用元表記を最下段に追加

**SolutionSection追加:**
- 満月三日月図解画像（`sato_満月三日月説明.png`）と写真出典
- CAMPFIRE実績画像（`campfire_美点発見.png`）とプロジェクトリンク

**画像対応:**
- 日本語ファイル名でブラウザ読み込みエラーが発生した画像を英語ファイル名にリネーム
- `202402しんどい月曜日の朝がラクになる本.png` → `202402-monday-book.png`
- `202510満月カウンセリング.png` → `202510-mangetsu-counseling.png`
- `満月瞑想スタートエディション画像.png` → `mangetsu-meditation-start.png`

**レイアウト修正:**
- DeveloperSectionのグリッドレイアウトを`grid-cols-5` → `grid-cols-2`に変更（PC表示でバランス改善）
- 書籍表示を`object-cover` → `object-contain`に変更（画像全体表示）

**コミット:**
- commit `7db8378`: DeveloperSection layout fix
- commit `308c2ce`: DeveloperSection画像統合とコンテンツ強化

### 初回実装（2026-01-17）

**プロジェクトセットアップ:**
- Vite + React 19.2 + Tailwind CSS 3.4 + Framer Motion 12.25
- Tailwind v4からv3.4にダウングレード（PostCSS互換性問題対応）
- ES Modulesプロジェクト（`"type": "module"`）のため、設定ファイルを`.cjs`拡張子に変更

**実装セクション:**
- HeroSection: グラデーション背景 + キャッチコピー + CTAボタン
- ProblemSection: 3つの悩みカード
- SolutionSection: 満月理論の説明（3つの核心 + 実績数値）
- StepsSection: 3ステップの使い方（左右交互レイアウト）
- FAQSection: アコーディオン式FAQ
- CTASection: 最終行動喚起
- Footer: 運営情報

**Git:**
- GitHub repository: https://github.com/evahsuga/bitennote_web
- ブランチ: master
