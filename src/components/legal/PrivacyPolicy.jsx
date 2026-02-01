import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="prose prose-gray max-w-none">
      <p className="text-sm text-gray-500 mb-6">最終更新日: 2025年2月1日</p>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">1. はじめに</h3>
        <p className="text-gray-700 leading-relaxed">
          「美点発見note」（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。
          本プライバシーポリシーでは、本アプリにおける情報の取り扱いについて説明します。
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">2. 収集する情報</h3>
        <p className="text-gray-700 leading-relaxed mb-3">本アプリでは、以下の情報を収集・保存する場合があります：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>ユーザーが入力した人物情報（名前、写真、関係性など）</li>
          <li>ユーザーが記録した美点（良いところ）のメモ</li>
          <li>アプリの利用状況に関する匿名の統計データ</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">3. 情報の保存場所</h3>
        <p className="text-gray-700 leading-relaxed">
          本アプリで入力されたデータは、原則としてユーザーのデバイス内（ブラウザのローカルストレージ）に保存されます。
          クラウド同期機能を利用する場合、データは暗号化された状態で安全なサーバーに保存されます。
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">4. 情報の利用目的</h3>
        <p className="text-gray-700 leading-relaxed mb-3">収集した情報は、以下の目的で利用します：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>本アプリの機能提供およびサービス向上</li>
          <li>ユーザーサポートの提供</li>
          <li>アプリの改善のための統計分析（匿名化されたデータのみ）</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">5. 第三者への提供</h3>
        <p className="text-gray-700 leading-relaxed">
          ユーザーの個人情報は、法令に基づく場合を除き、ユーザーの同意なく第三者に提供することはありません。
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">6. データの削除</h3>
        <p className="text-gray-700 leading-relaxed">
          ユーザーは、アプリ内の設定からいつでも自身のデータを削除することができます。
          ブラウザのデータを削除することで、ローカルに保存されたすべてのデータが消去されます。
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">7. お問い合わせ</h3>
        <p className="text-gray-700 leading-relaxed">
          プライバシーポリシーに関するご質問は、アプリ内のお問い合わせフォームよりご連絡ください。
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-3">8. 改定について</h3>
        <p className="text-gray-700 leading-relaxed">
          本プライバシーポリシーは、必要に応じて改定されることがあります。
          重要な変更がある場合は、アプリ内でお知らせします。
        </p>
      </section>
    </div>
  );
};
