import React from 'react';
import { Container } from '../layout/Container';

export const Footer = () => {
  return (
    <footer className="bg-text-dark text-white py-16">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* 左: ブランド情報 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">美点発見note</h3>
            <p className="text-gray-400 leading-relaxed">
              大切な人の<br />
              良いところを記録する<br />
              習慣を。
            </p>
          </div>

          {/* 中央: リンク */}
          <div>
            <h4 className="font-bold mb-4">リンク</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary-coral transition-colors">アプリ</a></li>
              <li><a href="#" className="hover:text-primary-coral transition-colors">使い方</a></li>
              <li><a href="#" className="hover:text-primary-coral transition-colors">よくある質問</a></li>
              <li><a href="#" className="hover:text-primary-coral transition-colors">美点発見とは？</a></li>
              <li><a href="#" className="hover:text-primary-coral transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-primary-coral transition-colors">利用規約</a></li>
            </ul>
          </div>

          {/* 右: 運営情報 */}
          <div>
            <h4 className="font-bold mb-4">運営情報</h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              あなたと一緒に<br />
              「美点発見」！
            </p>
            <p className="text-sm text-gray-400">
              開発協力:<br />
              Evahpro LLC
            </p>
            <p className="mt-4">
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-primary-coral transition-colors">
                お問い合わせ
              </a>
            </p>
          </div>
        </div>

        {/* 免責事項 */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center text-sm text-gray-500 leading-relaxed">
            <p className="mb-2">💡 このアプリ・サイトは、</p>
            <p className="mb-2">佐藤康行氏および関連団体の公式サイトではありません。</p>
            <p className="mb-4">美点発見®メソッドに共感した有志による、非営利の応援プロジェクトです。</p>
          </div>
        </div>

        {/* コピーライト */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2025 あなたと一緒に「美点発見」！ All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
