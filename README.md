# 美点発見note ランディングページ

佐藤康行氏の「満月理論」に基づく美点発見メソッドを紹介するランディングページ

## 🚀 技術スタック

- React 19.2.3
- Vite 7.3.1
- Tailwind CSS 3.4.19
- Framer Motion 12.25.0（アニメーション）
- Lucide React 0.562.0（アイコン）

## 📦 セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173/` にアクセス

### ネットワーク公開（携帯からアクセス）

```bash
npm run dev -- --host
```

同じWiFi環境の他のデバイスからアクセス可能

### プロダクションビルド

```bash
npm run build
```

ビルド結果は `dist/` フォルダに出力されます

### ビルド結果のプレビュー

```bash
npm run preview
```

## 📁 プロジェクト構成

```
bitennote_web/
├── src/
│   ├── components/
│   │   ├── sections/     # 各セクションコンポーネント
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ProblemSection.jsx
│   │   │   ├── SolutionSection.jsx
│   │   │   ├── BridgeSection.jsx
│   │   │   ├── StepsSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── DeveloperSection.jsx
│   │   │   ├── FAQSection.jsx
│   │   │   ├── CTASection.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/           # 再利用可能なUIコンポーネント
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── ScrollReveal.jsx
│   │   │   └── VideoPlayer.jsx
│   │   └── layout/       # レイアウトコンポーネント
│   │       └── Container.jsx
│   ├── styles/           # グローバルCSS
│   │   └── index.css
│   ├── utils/            # 定数・ユーティリティ
│   │   └── constants.js
│   ├── App.jsx           # メインアプリケーション
│   └── main.jsx          # エントリーポイント
├── public/               # 静的ファイル（画像・動画）
├── index.html            # HTMLテンプレート
├── tailwind.config.cjs   # Tailwind CSS設定
├── postcss.config.cjs    # PostCSS設定
├── vite.config.js        # Vite設定
└── package.json          # プロジェクト設定
```

## 🎨 実装済みセクション

1. **HeroSection** - グラデーション背景、キャッチコピー、CTAボタン
2. **ProblemSection** - 3つの悩みをカード形式で表示
3. **SolutionSection** - 満月理論の説明、3つの核心、実績数値、CAMPFIRE実績画像
4. **BridgeSection** - 満月理論から美点発見へ（3パート構成）
   - Part 1: YSメソッドから生まれた「美点発見」
   - Part 2: 紙に書き出す方法の価値（書籍画像 + 書き出し例）
   - Part 3: ANA谷光宏さんのストーリー + アプリ化の必然性
5. **StepsSection** - 3ステップの使い方（左右交互レイアウト）
6. **TestimonialsSection** - ユーザーの声（3名の体験談）
7. **DeveloperSection** - 佐藤康行氏プロフィール、著書3冊、満月瞑想紹介
8. **FAQSection** - アコーディオン形式のよくある質問
9. **CTASection** - 最終的な行動喚起
10. **Footer** - 運営情報、リンク、免責事項

## 🎨 デザインシステム

### カラーパレット

- **プライマリー**: コーラルピンク (#FF9A9E) → ピーチ (#FAD0C4)
- **セカンダリー**: ミント (#A8E6CF)、アプリコット (#FFD3A5)
- **アクセント**: ピンク (#FEC8D8)、ブルー (#C3ECFA)

### タイポグラフィ

- **見出し**: Inter（英字）
- **本文**: Noto Sans JP（日本語）

### アニメーション

- スクロールに応じたフェードイン
- ホバー時のカードエフェクト
- FAQアコーディオン

## 🖼️ 実装済み画像・素材

### SolutionSection
- `sato_満月三日月説明.png` - 満月理論の図解
- `campfire_美点発見.png` - クラウドファンディング実績

### BridgeSection
- `202402-monday-book.png` - 書籍「しんどい月曜日の朝がラクになる本」
- `biten_kakidasi_kami.png` - 美点発見シート書き出し例

### DeveloperSection
- `sato-yasuyuki.png` - 佐藤康行氏プロフィール写真
- `201610満月の法則.png` - 書籍「満月の法則」
- `202402-monday-book.png` - 書籍「しんどい月曜日の朝がラクになる本」
- `202510-mangetsu-counseling.png` - 書籍「満月カウンセリング」
- `mangetsu-meditation-start.png` - 満月瞑想紹介画像

## 📝 今後の改善点

- [x] 実際の画像追加（満月理論図解、書籍、プロフィール写真）
- [ ] ヒーロー動画エリアの動画追加
- [ ] 3ステップの操作動画追加
- [ ] ユーザー体験談の写真追加
- [ ] パフォーマンス最適化
- [ ] SEO対策（meta tags、OGP）
- [ ] アクセシビリティ改善

## 🚀 デプロイ

### Netlify / Vercel

```bash
npm run build
```

`dist/` フォルダをデプロイ

## 📄 ライセンス

ISC

## 👤 開発

作成日: 2026年1月11日
