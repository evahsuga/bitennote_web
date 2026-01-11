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
│   │   │   ├── StepsSection.jsx
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
3. **SolutionSection** - 満月理論の説明、3つの核心、実績数値
4. **StepsSection** - 3ステップの使い方（左右交互レイアウト）
5. **FAQSection** - アコーディオン形式のよくある質問
6. **CTASection** - 最終的な行動喚起
7. **Footer** - 運営情報、リンク、免責事項

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

## 📝 今後の改善点

- [ ] 実際の画像・動画の追加
- [ ] 満月理論の図解イラスト（SVG）
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
