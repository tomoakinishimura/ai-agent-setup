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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* ヒーローセクション */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full filter blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 glass rounded-full">
            <p className="text-sm font-medium text-blue-600">AI導入支援のプロフェッショナル</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            AIエージェント<br />設定代行
          </h1>
          <p className="text-2xl text-slate-700 mb-6 font-medium">
            OpenClaw・Claude・Claude Code
          </p>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            技術に詳しくない方でも安心。AI秘書を簡単に導入できます。<br />
            環境構築から運用まで、すべてお任せください。
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105"
          >
            無料相談を申し込む
          </a>
        </div>
      </section>

      {/* サービス特徴 */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              こんな方におすすめ
            </h2>
            <p className="text-lg text-slate-600">
              あなたのビジネスに最適なAI導入をサポートします
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">スタートアップ経営者</h3>
              <p className="text-slate-600 leading-relaxed">
                時間がない、自動化したい、少額で始めたい方に最適です。
              </p>
            </div>
            <div className="glass p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">中小企業の経営者・情シス</h3>
              <p className="text-slate-600 leading-relaxed">
                業務効率化・コスト削減を実現したい企業様をサポートします。
              </p>
            </div>
            <div className="glass p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">技術に興味がある個人</h3>
              <p className="text-slate-600 leading-relaxed">
                エンジニアじゃないけどAIを使いたい方を丁寧にサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* できること */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              サポート内容
            </h2>
            <p className="text-lg text-slate-600">
              導入から運用まで、すべてお任せください
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-200">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">OpenClaw 導入支援</h3>
                  <p className="text-slate-600 leading-relaxed">
                    環境構築から初期設定、カスタマイズまで完全サポート。
                  </p>
                </div>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 transition-colors duration-200">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Claude / Claude Code 設定</h3>
                  <p className="text-slate-600 leading-relaxed">
                    あなたの業務に合わせた最適なAIアシスタントを構築します。
                  </p>
                </div>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors duration-200">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">カスタマイズ・自動化</h3>
                  <p className="text-slate-600 leading-relaxed">
                    メール、カレンダー、Slackなど各種サービスとの連携設定。
                  </p>
                </div>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors duration-200">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">使い方レクチャー</h3>
                  <p className="text-slate-600 leading-relaxed">
                    導入後も安心。使い方をわかりやすくお伝えします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              料金プラン
            </h2>
            <p className="text-lg text-slate-300">
              お客様のニーズに合わせた柔軟なプラン
            </p>
          </div>
          <div className="glass-dark p-10 rounded-3xl shadow-2xl">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pb-8 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">初期導入サポート</h3>
                  <p className="text-slate-300">環境構築・初期設定・カスタマイズ</p>
                </div>
                <div className="text-3xl font-bold text-blue-400">
                  5万円〜10万円
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pb-8 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">スポット相談</h3>
                  <p className="text-slate-300">設定の見直し・トラブルシューティング</p>
                </div>
                <div className="text-3xl font-bold text-blue-400">
                  1万円 / 1時間
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">月額サポート（オプション）</h3>
                  <p className="text-slate-300">継続的な運用サポート・改善提案</p>
                </div>
                <div className="text-3xl font-bold text-blue-400">
                  1万円〜3万円
                </div>
              </div>
            </div>
            <div className="mt-10 p-6 bg-blue-500/10 rounded-2xl border border-blue-400/20">
              <p className="text-slate-200 leading-relaxed">
                ※ 環境や要件により変動します。まずはお気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              お問い合わせ
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              まずはお気軽にご相談ください。<br />お客様の環境やご要望をヒアリングし、最適なプランをご提案いたします。
            </p>
          </div>
          
          {status === 'success' && (
            <div className="glass bg-green-50 border-2 border-green-500/30 text-green-800 px-6 py-5 rounded-2xl mb-8 shadow-lg">
              <p className="font-bold text-lg mb-1">送信完了！</p>
              <p>お問い合わせありがとうございます。24時間以内にご返信いたします。</p>
            </div>
          )}

          {status === 'error' && (
            <div className="glass bg-red-50 border-2 border-red-500/30 text-red-800 px-6 py-5 rounded-2xl mb-8 shadow-lg">
              <p className="font-bold text-lg mb-1">エラーが発生しました</p>
              <p>{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="glass p-10 rounded-3xl shadow-2xl">
            <div className="mb-6">
              <label htmlFor="name" className="block text-slate-900 font-bold mb-3 text-lg">
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-900 bg-white"
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-slate-900 font-bold mb-3 text-lg">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-900 bg-white"
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-slate-900 font-bold mb-3 text-lg">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-900 bg-white resize-none"
                required
                disabled={status === 'loading'}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-blue-600 text-white px-8 py-5 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
              {status === 'loading' ? '送信中...' : '送信する'}
            </button>
          </form>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-lg">
            © 2026 AIエージェント設定代行. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
