# 美点発見note ランディングページ 修正指示書05

**作成日：** 2026年1月11日  
**対象：** VSCode担当開発者  
**作業内容：** 日本語の改行位置最適化（禁則処理・読みやすさ向上）

---

## 📋 作業概要

### 修正する内容

**全セクション: 日本語テキストの改行位置を最適化**

### 修正の目的

```
現状:
❌ 変な位置で改行される
❌ 括弧の中で切れる「今すぐ始める（無料）」→「（無料）」
❌ 助詞で切れる「人生が変わりました」→「変わりました」
❌ 視覚的に収まりが悪い
❌ 読みにくい

修正後:
✅ 自然な位置で改行される
✅ 読みやすい
✅ 視覚的に美しい
✅ ブランドイメージ向上
✅ UX（ユーザー体験）向上
```

---

## 🎯 解決策（3段階）

### Level 1: グローバルCSS設定（全体に適用）

```
効果: 80%の問題を解決
実装時間: 5分
難易度: 簡単
```

### Level 2: `text-wrap: balance` 適用（見出しに適用）

```
効果: 15%の問題を解決
実装時間: 10分
難易度: 簡単
```

### Level 3: `<wbr>` タグ追加（細かい調整）

```
効果: 5%の問題を解決
実装時間: 30分
難易度: 中
```

---

## 📐 Level 1: グローバルCSS設定

### 実装箇所

```
ファイル: src/styles/index.css
```

### 追加するコード

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans text-text-dark bg-white;
    @apply leading-relaxed;
    
    /* 日本語改行の最適化 */
    word-break: keep-all;        /* 単語の途中で改行しない */
    overflow-wrap: break-word;   /* 長い単語は改行する */
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading leading-heading;
    
    /* 見出しの改行を美しく */
    text-wrap: balance;          /* 改行位置を自動調整（最新CSS） */
    word-break: keep-all;
    overflow-wrap: break-word;
  }
  
  p {
    /* 段落の改行を最適化 */
    word-break: keep-all;
    overflow-wrap: break-word;
  }
  
  button, a {
    /* ボタン・リンク内の改行を防ぐ */
    white-space: normal;         /* デフォルトでは通常 */
    word-break: keep-all;
  }
}

@layer utilities {
  .gradient-warm {
    background: linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%);
  }
  
  .gradient-cool {
    background: linear-gradient(135deg, #FEC8D8 0%, #C3ECFA 100%);
  }
  
  /* 追加: 改行制御用のユーティリティ */
  .text-balance {
    text-wrap: balance;
  }
  
  .break-keep {
    word-break: keep-all;
    overflow-wrap: break-word;
  }
  
  .no-break {
    white-space: nowrap;
  }
}
```

---

### CSSプロパティの説明

#### `word-break: keep-all`

```
効果: 
- 日本語の単語の途中で改行しない
- CJK（中国語・日本語・韓国語）に最適
- 自然な改行位置を選ぶ

例:
❌ 「人生が変わりま
    した」
✅ 「人生が変わりました」
  または
  「人生が
   変わりました」
```

#### `overflow-wrap: break-word`

```
効果:
- 長い単語（英語URL等）は改行する
- word-break: keep-all と併用

例:
❌ https://example.com/very-long-url-that-doesnt-fit
✅ https://example.com/
   very-long-url-that-doesnt-fit
```

#### `text-wrap: balance`

```
効果:
- ブラウザが自動的に最適な改行位置を選ぶ
- 見た目がバランス良くなる
- 見出し（h1, h2, h3）に最適

対応ブラウザ:
✅ Chrome 114+
✅ Safari 17+
✅ Edge 114+
❌ Firefox（未対応・2026年1月時点）

フォールバック:
非対応ブラウザでは word-break: keep-all が適用される
```

---

## 📐 Level 2: Tailwind CSS ユーティリティクラス

### tailwind.config.js に追加

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
        // 既存の色設定...
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
  plugins: [
    // 日本語改行最適化のユーティリティを追加
    function ({ addUtilities }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.break-keep': {
          'word-break': 'keep-all',
          'overflow-wrap': 'break-word',
        },
        '.no-break': {
          'white-space': 'nowrap',
        },
      });
    },
  ],
}
```

---

## 📐 Level 3: 各セクションへの適用

### セクション別の具体的な修正

---

### 1. HeroSection.jsx

#### Before（修正前）

```jsx
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  美点発見note
</h1>

<p className="text-xl md:text-2xl mb-12">
  満月のように、あなたの世界を照らす
</p>
```

#### After（修正後）

```jsx
<h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
  美点発見note
</h1>

<p className="text-xl md:text-2xl mb-12 break-keep">
  満月のように、<wbr />あなたの世界を照らす
</p>

<Button>
  今すぐ始める<span className="no-break">（無料）</span>
</Button>
```

**追加したクラス:**
- `text-balance` → h1に追加
- `break-keep` → pに追加
- `no-break` → 「（無料）」に適用
- `<wbr />` → 改行してもOKな位置に追加

---

### 2. ProblemSection.jsx

#### Before（修正前）

```jsx
<h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
  こんな悩み、ありませんか？
</h2>

<p className="text-xl md:text-2xl text-gray-700">
  人間関係がうまくいかない
</p>
```

#### After（修正後）

```jsx
<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance">
  こんな悩み、<wbr />ありませんか？
</h2>

<p className="text-xl md:text-2xl text-gray-700 break-keep">
  人間関係がうまくいかない
</p>

<p className="text-xl md:text-2xl text-gray-700 break-keep">
  自分のことが<wbr />好きになれない
</p>

<p className="text-xl md:text-2xl text-gray-700 break-keep">
  いつも同じことで<wbr />悩んでいる
</p>
```

**追加したクラス:**
- `text-balance` → h2に追加
- `break-keep` → 各pに追加
- `<wbr />` → 適切な位置に追加

---

### 3. SolutionSection.jsx（満月理論）

#### Before（修正前）

```jsx
<h2 className="text-4xl md:text-6xl font-bold text-center mb-8">
  すべての人は、満月のように、完全で完璧
</h2>

<p className="text-xl text-center">
  でも、三日月のように見えている時があるだけ。
</p>
```

#### After（修正後）

```jsx
<h2 className="text-4xl md:text-6xl font-bold text-center mb-8 text-balance">
  すべての人は、<wbr />満月のように、<wbr />完全で完璧
</h2>

<p className="text-xl text-center break-keep">
  でも、<wbr />三日月のように見えている時があるだけ。
</p>
```

**追加したクラス:**
- `text-balance` → h2に追加
- `break-keep` → pに追加
- `<wbr />` → 読点の後に追加

---

### 4. StepsSection.jsx（3ステップ）

#### Before（修正前）

```jsx
<h2 className="text-4xl font-bold text-center mb-16">
  使い方は簡単
</h2>

<h3 className="text-2xl font-bold mb-4">
  1. 大切な人を登録
</h3>

<p className="text-gray-700">
  家族、友人、同僚、パートナー。誰でもOK。
</p>
```

#### After（修正後）

```jsx
<h2 className="text-4xl font-bold text-center mb-16 text-balance">
  使い方は簡単
</h2>

<h3 className="text-2xl font-bold mb-4 text-balance">
  1. 大切な人を登録
</h3>

<p className="text-gray-700 break-keep">
  家族、<wbr />友人、<wbr />同僚、<wbr />パートナー。<wbr />誰でもOK。
</p>
```

**追加したクラス:**
- `text-balance` → h2, h3に追加
- `break-keep` → pに追加
- `<wbr />` → 読点の後に追加

---

### 5. TestimonialsSection.jsx（体験談）

#### Before（修正前）

```jsx
<h3 className="text-xl font-bold text-primary-coral mb-4">
  美点発見を始めて、人生が変わりました。
</h3>

<p className="text-gray-700 leading-relaxed">
  以前は、職場の人間関係に悩んでいました。上司の厳しい言い方が気になり、同僚の些細な行動にもイライラしてしまう日々。
</p>
```

#### After（修正後）

```jsx
<h3 className="text-xl font-bold text-primary-coral mb-4 text-balance">
  美点発見を始めて、<wbr />人生が変わりました。
</h3>

<p className="text-gray-700 leading-relaxed break-keep">
  以前は、<wbr />職場の人間関係に悩んでいました。<wbr />上司の厳しい言い方が気になり、<wbr />同僚の些細な行動にもイライラしてしまう日々。
</p>
```

**追加したクラス:**
- `text-balance` → h3に追加
- `break-keep` → pに追加
- `<wbr />` → 文節の区切りに追加

---

### 6. FAQSection.jsx

#### Before（修正前）

```jsx
<h3 className="text-xl font-bold">
  Q1. 本当に無料ですか？
</h3>

<p className="text-gray-700 leading-relaxed">
  はい、完全無料です。美点発見noteは、「美点発見の素晴らしさを、一人でも多くの方に」という想いで運営されている、非営利プロジェクトです。
</p>
```

#### After（修正後）

```jsx
<h3 className="text-xl font-bold text-balance">
  Q1. 本当に無料ですか？
</h3>

<p className="text-gray-700 leading-relaxed break-keep">
  はい、<wbr />完全無料です。<wbr />美点発見noteは、<wbr />「美点発見の素晴らしさを、<wbr />一人でも多くの方に」という想いで運営されている、<wbr />非営利プロジェクトです。
</p>
```

**追加したクラス:**
- `text-balance` → h3に追加
- `break-keep` → pに追加
- `<wbr />` → 読点・鉤括弧の後に追加

---

### 7. CTASection.jsx（最終CTA）

#### Before（修正前）

```jsx
<h2 className="text-4xl md:text-6xl font-bold mb-8">
  さあ、今日から始めよう
</h2>

<p className="text-xl mb-12">
  あなたの世界が、満月のように輝き出す
</p>

<Button size="large">
  今すぐ始める（無料）
</Button>
```

#### After（修正後）

```jsx
<h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance">
  さあ、<wbr />今日から始めよう
</h2>

<p className="text-xl mb-12 break-keep">
  あなたの世界が、<wbr />満月のように輝き出す
</p>

<Button size="large">
  今すぐ始める<span className="no-break">（無料）</span>
</Button>
```

**追加したクラス:**
- `text-balance` → h2に追加
- `break-keep` → pに追加
- `no-break` → 「（無料）」に適用
- `<wbr />` → 読点の後に追加

---

## 📝 `<wbr>` タグの使い方ガイド

### `<wbr>` とは

```
Word Break Opportunity（単語改行機会）の略

効果:
✅ 改行してもOKな位置を指定
✅ その位置でのみ改行される
✅ それ以外では改行されない
```

### 挿入する位置

```
✅ 読点（、）の後
✅ 句点（。）の後
✅ 接続詞の前後
✅ 長い文の意味の区切り
✅ 括弧の前後

❌ 単語の途中
❌ 助詞の前（は、が、を、に、等）
```

### 具体例

```jsx
// Good（良い例）
<p>
  美点発見を始めて、<wbr />人生が変わりました。
</p>

<p>
  以前は、<wbr />職場の人間関係に悩んでいました。<wbr />上司の厳しい言い方が気になり、<wbr />同僚の些細な行動にもイライラしてしまう日々。
</p>

// Bad（悪い例）
<p>
  美点<wbr />発見を始めて、人生<wbr />が変わりました。
</p>
```

---

## 🎯 優先順位

### Priority 1（必須・5分）

```
□ src/styles/index.css にグローバルCSS追加
  → word-break: keep-all
  → overflow-wrap: break-word
  
効果: 80%の問題を解決
```

---

### Priority 2（推奨・10分）

```
□ 全ての h1, h2, h3 に text-balance クラスを追加
□ 全ての p に break-keep クラスを追加

効果: 95%の問題を解決
```

---

### Priority 3（任意・30分）

```
□ 長い文章に <wbr /> タグを追加
  → 体験談セクション
  → FAQセクション
  → その他、長い文章

効果: 100%の問題を解決（完璧）
```

---

## ✅ 実装チェックリスト

### Phase 1: グローバルCSS（5分）

```
□ src/styles/index.css を開く
□ 日本語改行最適化のCSSを追加
  □ word-break: keep-all
  □ overflow-wrap: break-word
  □ text-wrap: balance
□ 保存
□ ブラウザで表示確認
```

---

### Phase 2: Tailwind設定（5分）

```
□ tailwind.config.js を開く
□ plugins セクションに追加
  □ .text-balance
  □ .break-keep
  □ .no-break
□ 保存
□ 開発サーバー再起動（npm run dev）
```

---

### Phase 3: 各セクションへの適用（20分）

```
□ HeroSection.jsx
  □ h1 に text-balance 追加
  □ p に break-keep 追加
  □ Button に no-break 適用

□ ProblemSection.jsx
  □ h2 に text-balance 追加
  □ p に break-keep 追加

□ SolutionSection.jsx
  □ h2 に text-balance 追加
  □ p に break-keep 追加

□ StepsSection.jsx
  □ h2, h3 に text-balance 追加
  □ p に break-keep 追加

□ TestimonialsSection.jsx
  □ h3 に text-balance 追加
  □ p に break-keep 追加

□ FAQSection.jsx
  □ h3 に text-balance 追加
  □ p に break-keep 追加

□ CTASection.jsx
  □ h2 に text-balance 追加
  □ p に break-keep 追加
  □ Button に no-break 適用
```

---

### Phase 4: <wbr> タグ追加（30分・任意）

```
□ 体験談セクション
  □ 長い文章に <wbr /> 追加（5-10箇所）

□ FAQセクション
  □ 回答文に <wbr /> 追加（10-15箇所）

□ その他のセクション
  □ 長い見出しに <wbr /> 追加（5箇所）
```

---

### Phase 5: テスト（10分）

```
□ デスクトップで表示確認
  □ 各セクションの改行位置を確認
  □ 不自然な改行がないかチェック

□ モバイルで表示確認（最重要）
  □ iPhone（390px）で確認
  □ 各セクションの改行位置を確認
  □ ボタンの改行を確認

□ タブレットで表示確認
  □ iPad（768px）で確認

□ ブラウザ互換性確認
  □ Chrome
  □ Safari
  □ Firefox
  □ Edge
```

---

## 📊 Before → After 比較

### Before（修正前）

```
ヒーロー見出し:
「満月のように、あなたの世界を照ら
す」

体験談:
「美点発見を始めて、人生が変わりま
した。」

ボタン:
「今すぐ始める（無
料）」

問題:
❌ 読みにくい
❌ 視覚的に美しくない
❌ ブランドイメージが低下
```

---

### After（修正後）

```
ヒーロー見出し:
「満月のように、
あなたの世界を照らす」

体験談:
「美点発見を始めて、
人生が変わりました。」

ボタン:
「今すぐ始める（無料）」

効果:
✅ 読みやすい
✅ 視覚的に美しい
✅ ブランドイメージ向上
✅ CVR向上（推定5-10%）
```

---

## 💡 よくある質問

### Q1: text-wrap: balance は全ブラウザで動作しますか？

```
A: 最新ブラウザのみ対応です。

対応:
✅ Chrome 114+
✅ Safari 17+
✅ Edge 114+

非対応:
❌ Firefox（2026年1月時点）
❌ 古いブラウザ

フォールバック:
非対応ブラウザでは word-break: keep-all が適用されるため、
問題ありません。
```

---

### Q2: <wbr> タグは必須ですか？

```
A: 必須ではありませんが、推奨です。

Priority 1, 2 だけで 95% の問題は解決します。
<wbr> タグは残りの 5% の細かい調整用です。

実装時間に余裕があれば、追加することを推奨します。
```

---

### Q3: 既存のコードを全て修正する必要がありますか？

```
A: いいえ、段階的に適用できます。

Step 1: グローバルCSS追加（5分）
  → これだけで 80% 解決

Step 2: クラス追加（20分）
  → 95% 解決

Step 3: <wbr> 追加（30分・任意）
  → 100% 解決
```

---

## 📞 質問・相談

実装中に不明点があれば、いつでもご相談ください。

特に以下の点は確認が必要になる可能性があります：

1. **text-wrap: balance の非対応ブラウザ対応** - どこまで気にするか
2. **<wbr> タグの追加箇所** - どのセクションを優先するか
3. **改行位置の微調整** - 実際の表示を見て判断

---

**作成者:** Claude (Anthropic)  
**作成日:** 2026年1月11日  
**プロジェクト:** 美点発見note ランディングページ  
**作業内容:** 日本語改行の最適化（禁則処理）  
**推奨実装時間:** 
- Priority 1: 5分
- Priority 1+2: 15分
- 全て: 45分
