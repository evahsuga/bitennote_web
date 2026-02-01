import React from 'react';

export const TermsOfService = () => {
  return (
    <div className="prose prose-gray max-w-none">
      <p className="text-sm text-gray-500 mb-6">最終更新日: 2025年2月1日</p>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">1. はじめに</h3>
        <p className="text-gray-700 leading-relaxed">
          本利用規約（以下「本規約」）は、「美点発見note」（以下「本アプリ」）の利用条件を定めるものです。
          ユーザーは、本アプリを利用することにより、本規約に同意したものとみなされます。
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">2. サービスの内容</h3>
        <p className="text-gray-700 leading-relaxed">
          本アプリは、ユーザーが大切な人の良いところ（美点）を記録し、振り返ることができるサービスです。
          本アプリは無料で提供され、将来的に有料機能が追加される場合があります。
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">3. 利用登録</h3>
        <p className="text-gray-700 leading-relaxed">
          本アプリの利用にあたり、ユーザーは正確な情報を提供するものとします。
          虚偽の情報を登録した場合、サービスの利用を制限することがあります。
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">4. 禁止事項</h3>
        <p className="text-gray-700 leading-relaxed mb-3">ユーザーは、以下の行為を行ってはなりません：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>法令または公序良俗に違反する行為</li>
          <li>他者の権利を侵害する行為</li>
          <li>本アプリの運営を妨害する行為</li>
          <li>不正アクセスやハッキング行為</li>
          <li>本アプリを商業目的で無断利用する行為</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">5. 知的財産権</h3>
        <p className="text-gray-700 leading-relaxed">
          本アプリに関する著作権、商標権その他の知的財産権は、運営者または正当な権利者に帰属します。
          ユーザーが本アプリ内で作成したコンテンツの権利は、ユーザーに帰属します。
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">6. 免責事項</h3>
        <p className="text-gray-700 leading-relaxed mb-3">運営者は、以下の事項について責任を負いません：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>本アプリの利用により生じた損害</li>
          <li>データの消失や破損</li>
          <li>サービスの中断や停止</li>
          <li>第三者による不正アクセス</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">7. サービスの変更・終了</h3>
        <p className="text-gray-700 leading-relaxed">
          運営者は、事前の通知なく本アプリの内容を変更、または提供を終了することがあります。
          これによりユーザーに生じた損害について、運営者は責任を負いません。
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">8. 規約の変更</h3>
        <p className="text-gray-700 leading-relaxed">
          運営者は、必要に応じて本規約を変更することがあります。
          変更後の規約は、本アプリ内に掲載した時点で効力を生じます。
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-3">9. 準拠法・管轄裁判所</h3>
        <p className="text-gray-700 leading-relaxed">
          本規約の解釈にあたっては、日本法を準拠法とします。
          本アプリに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      </section>
    </div>
  );
};
