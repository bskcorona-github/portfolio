"use client";

import React, { useState } from "react";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { Navigation } from "@/components/ui/navigation";
import MatrixRain from "@/components/ui/matrix-code";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";

const ContactHero = () => {
  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-screen flex flex-col justify-center pt-24">
      {/* メインコンテンツ */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
          お問い合わせ
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
          Magic MCPについてご質問やご相談がございましたら、
          <br />
          お気軽にお問い合わせください。
        </p>

        {/* 連絡先ハイライト */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Mail, title: "メール", value: "contact@magic-mcp.com" },
            {
              icon: MessageSquare,
              title: "チャット",
              value: "リアルタイムサポート",
            },
            { icon: Phone, title: "電話", value: "24時間対応" },
          ].map((contact) => (
            <Card
              key={contact.title}
              className="backdrop-blur-xl bg-white/5 border-white/10"
            >
              <CardContent className="p-6 text-center">
                <contact.icon className="size-8 text-blue-400 mx-auto mb-3" />
                <div className="text-white font-medium mb-1">
                  {contact.title}
                </div>
                <div className="text-gray-400 text-sm">{contact.value}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理（実際の実装では適切なAPIを呼び出し）
    console.log("Form submitted:", formData);
    alert("お問い合わせありがとうございます。後日ご連絡いたします。");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* お問い合わせフォーム */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="backdrop-blur-xl bg-white/5 border-white/10">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-white">
                  メッセージを送信
                </h2>
                <p className="text-gray-400">
                  詳細なお問い合わせはこちらのフォームをご利用ください
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      お名前 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="山田太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      メールアドレス *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      件名
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="お問い合わせの件名"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      メッセージ *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      placeholder="お問い合わせ内容をご記入ください..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/40 rounded-lg font-medium transition-colors"
                  >
                    <Send className="size-4" />
                    送信する
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* 連絡先情報 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                その他の連絡方法
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "メールアドレス",
                    value: "contact@magic-mcp.com",
                    description: "24時間以内にご返信いたします",
                  },
                  {
                    icon: MessageSquare,
                    title: "Discord",
                    value: "Magic MCP Community",
                    description: "開発者コミュニティ",
                  },
                  {
                    icon: MapPin,
                    title: "所在地",
                    value: "東京, 日本",
                    description: "リモートファースト開発",
                  },
                ].map((item) => (
                  <Card
                    key={item.title}
                    className="backdrop-blur-xl bg-white/5 border-white/10"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-500/20 backdrop-blur-sm border border-blue-500/30">
                          <item.icon className="size-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium mb-1">
                            {item.title}
                          </h3>
                          <p className="text-blue-400 mb-1">{item.value}</p>
                          <p className="text-gray-400 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="backdrop-blur-xl bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-white font-medium mb-3">営業時間</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">月曜日 - 金曜日</span>
                    <span className="text-white">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">土曜日</span>
                    <span className="text-white">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">日曜日</span>
                    <span className="text-white">休業</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function ContactPage() {
  const ROBOT_SCENE_URL =
    "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div className="relative bg-black overflow-hidden">
      {/* グローバルナビゲーション */}
      <Navigation />

      {/* Matrix Code背景 - 最背面（50%透過） - 固定 */}
      <div className="fixed inset-0 z-0 opacity-50">
        <MatrixRain
          fontSize={16}
          color="#00ff00"
          characters="01アカサタナハマヤラワンイキシチニヒミリヰケセテネヘメレエコソトノホモロオクスツヌフムルウ"
          fadeOpacity={0.05}
          speed={0.8}
        />
      </div>

      {/* 3Dロボット中間層 - 固定 */}
      <div className="fixed inset-0 z-10">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
        />
      </div>

      {/* スクロール可能なコンテンツ層 */}
      <div className="relative z-20 bg-transparent">
        {/* お問い合わせヒーローセクション */}
        <div className="min-h-screen">
          <ContactHero />
        </div>

        {/* お問い合わせフォームセクション */}
        <div className="relative bg-gradient-to-b from-black/0 via-black/80 to-black/95">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
