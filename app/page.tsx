'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'メール送信に失敗しました');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'エラーが発生しました');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AIエージェント設定代行
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            OpenClaw・Claude・Claude Code の導入をお手伝い
          </p>
          <p className="text-lg text-gray-600 mb-10">
            技術に詳しくない方でも安心。AI秘書を簡単に導入できます。
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
          >
            まずはご相談ください
          </a>
        </div>
      </section>

      {/* サービス特徴 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            こんな方におすすめ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">スタートアップ経営者</h3>
              <p className="text-gray-600">
                時間がない、自動化したい、少額で始めたい方に最適です。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3">中小企業の経営者・情シス</h3>
              <p className="text-gray-600">
                業務効率化・コスト削減を実現したい企業様をサポートします。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">技術に興味がある個人</h3>
              <p className="text-gray-600">
                エンジニアじゃないけどAIを使いたい方を丁寧にサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* できること */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            サポート内容
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🤖 OpenClaw 導入支援</h3>
              <p className="text-gray-600">
                環境構築から初期設定、カスタマイズまで完全サポート。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🧠 Claude / Claude Code 設定</h3>
              <p className="text-gray-600">
                あなたの業務に合わせた最適なAIアシスタントを構築します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">⚙️ カスタマイズ・自動化</h3>
              <p className="text-gray-600">
                メール、カレンダー、Slackなど各種サービスとの連携設定。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">📚 使い方レクチャー</h3>
              <p className="text-gray-600">
                導入後も安心。使い方をわかりやすくお伝えします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            料金プラン
          </h2>
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="text-xl font-bold">初期導入サポート</h3>
                  <p className="text-gray-600 mt-1">環境構築・初期設定・カスタマイズ</p>
                </div>
                <div className="text-2xl font-bold text-indigo-600">
                  5万円〜10万円
                </div>
              </div>
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="text-xl font-bold">スポット相談</h3>
                  <p className="text-gray-600 mt-1">設定の見直し・トラブルシューティング</p>
                </div>
                <div className="text-2xl font-bold text-indigo-600">
                  1万円 / 1時間
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">月額サポート（オプション）</h3>
                  <p className="text-gray-600 mt-1">継続的な運用サポート・改善提案</p>
                </div>
                <div className="text-2xl font-bold text-indigo-600">
                  1万円〜3万円
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                ※ 環境や要件により変動します。まずはお気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section id="contact" className="bg-indigo-600 py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            お問い合わせ
          </h2>
          <p className="text-center text-indigo-100 mb-10">
            まずはお気軽にご相談ください。お客様の環境やご要望をヒアリングし、最適なプランをご提案いたします。
          </p>
          
          {status === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6">
              <p className="font-semibold">送信完了！</p>
              <p>お問い合わせありがとうございます。24時間以内にご返信いたします。</p>
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg mb-6">
              <p className="font-semibold">エラーが発生しました</p>
              <p>{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
                disabled={status === 'loading'}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-indigo-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? '送信中...' : '送信する'}
            </button>
          </form>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 AIエージェント設定代行. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
