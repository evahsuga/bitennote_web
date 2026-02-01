# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

美点発見note（Biten Note）ランディングページ - 佐藤康行氏の「満月理論」に基づく美点発見メソッドを紹介する1ページ完結型のプロモーションサイト。

**技術スタック**: React 19.2 + Vite 7.3 + Tailwind CSS 3.4 + Framer Motion + Swiper.js

## Development Commands

```bash
# 標準開発サーバー（PCのみ）
npm run dev

# ネットワーク公開（同一WiFi環境の携帯・タブレットからアクセス可能）
npm run dev -- --host

# プロダクションビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

**注意**: このプロジェクトにはlint/test設定なし。ビルドの成功でデプロイ可否を判断。

## Deployment

| 環境 | URL | 更新タイミング |
|------|-----|---------------|
| 開発確認用 | https://evahsuga.github.io/bitennote_web/ | pushで自動（GitHub Actions） |
| 本番公開用 | Netlify（Stopped） | 手動でTrigger deploy |
| アプリ | https://evahsuga.github.io/biten_note/#/ | 別リポジトリ |

- Repository: https://github.com/evahsuga/bitennote_web
- Branch: master
- GitHub Pages: `.github/workflows/deploy.yml`でビルド＆デプロイ
- Netlify: Build statusをStoppedに設定済み。本番公開時は「Deploys」→「Trigger deploy」で手動実行

## Architecture

### Component Structure

4層のコンポーネント階層：

```
src/components/
├── sections/      # ページセクション（10個）
├── ui/            # UIプリミティブ（Button, Card, ScrollReveal, Modal等）
├── layout/        # レイアウト（Container）
└── legal/         # 法的ページ（PrivacyPolicy, TermsOfService）
```

**App.jsx構成:**
```
HeroSection           # id なし
ProblemSection        # id なし
SolutionSection       # id="mangetsu-theory"
BridgeSection         # id="biten-discovery", id="biten-episode"（複数section）
StepsSection          # id="how-to-use"
TestimonialsSection   # id なし
DeveloperSection      # id なし
FAQSection            # id なし
CTASection            # id="cta-section"
Footer                # プライバシーポリシー・利用規約モーダル含む
```

### Key Design Patterns

**1. ScrollReveal Pattern**
全セクションで使用。Framer Motionの`useInView`ベース。
- `delay`プロパティで順次アニメーション可能

**2. Modal Pattern**
`Modal.jsx` - 汎用モーダルコンポーネント。Footer内でプライバシーポリシー・利用規約表示に使用。
- ESCキー/背景クリックで閉じる
- 背景スクロール防止

**3. Swiper.js Integration**
TestimonialsSection・StepsSectionで横スクロールカルーセル。
- カスタムスタイル: `src/styles/index.css`の`.testimonials-swiper-container`, `.steps-swiper-container`
- モバイル: スワイプ + ドットのみ（ナビボタン非表示）
- **注意**: `loop`と`autoplay`はモバイルで問題があり無効化済み

### Configuration Files

**重要**: ES Modules（`"type": "module"`）使用のため、設定ファイルは`.cjs`拡張子必須：
- `tailwind.config.cjs`
- `postcss.config.cjs`

### GitHub Pages Asset Paths

`vite.config.js`で`base: '/bitennote_web/'`設定済み。

**画像・動画パスは`import.meta.env.BASE_URL`を使用:**
```jsx
// 正しい
src={`${import.meta.env.BASE_URL}images/example.png`}
style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/bg.png)` }}

// 間違い（GitHub Pagesで404になる）
src="/images/example.png"
```

### Japanese Text Handling

`src/styles/index.css`でbase layer適用済み：
- デスクトップ: `word-break: keep-all`
- モバイル: `word-break: normal`（横はみ出し防止）

**重要**: `.break-keep`クラスはモバイルで横スクロール問題を引き起こすため使用禁止。

### Color Palette

`tailwind.config.cjs`定義：
- `primary-coral` / `primary-peach` - ウォームグラデーション
- `accent-pink` / `accent-blue` - クールグラデーション
- `text-dark` / `light-gray` - ベースカラー

## Content Structure

### Images (`public/images/`)

| ファイル | 使用箇所 |
|---------|---------|
| `night-sky-background.png` | HeroSection背景 |
| `sato_満月三日月説明.png` | SolutionSection |
| `tani-mitsuhiro.png` | BridgeSection（谷さんプロフィール） |
| `sato-yasuyuki.png` | DeveloperSection |
| `201610満月の法則.png`, `202402-monday-book.png`, `202510-mangetsu-counseling.png` | 書籍表紙 |
| `mangetsu-meditation-start.png` | DeveloperSection |
| `biten_kakidasi_kami.png` | BridgeSection |

### Videos (`public/videos/`)

StepsSectionで使用。各ステップに動画+サムネイル：
- `movstep1.mp4` + `movstep1image.png`
- `movstep2_1.mp4` + `movstep2image.png`
- `movstep3.mp4` + `movstep3image.png`

**動画実装パターン:**
```jsx
<video controls muted poster={step.poster} preload="metadata" playsInline>
  <source src={step.video} type="video/mp4" />
</video>
```

## Troubleshooting

### Tailwind CSSが適用されない
1. 強制リフレッシュ（Cmd+Shift+R）
2. `rm -rf node_modules/.vite && npm run dev`
3. 設定ファイルが`.cjs`拡張子か確認

### GitHub Pagesで画像が表示されない
`import.meta.env.BASE_URL`を使用しているか確認。絶対パス（`/images/...`）は404になる。

### Swiperのループ/オートプレイが動かない
モバイルでの互換性問題により無効化済み。手動スワイプのみ対応。
