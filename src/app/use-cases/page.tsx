"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/navigation";
import MatrixRain from "@/components/ui/matrix-code";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bot,
  Code2,
  GitBranch,
  Slack,
  FileText,
  Search,
  BarChart3,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Building,
} from "lucide-react";

export default function UseCasesPage() {
  const useCases = [
    {
      title: "企業内チャットボット",
      description: "SlackやTeamsと連携したインテリジェントなカスタマーサポート",
      icon: Bot,
      category: "Customer Support",
      complexity: "初級",
      time: "2-3週間",
      features: [
        "リアルタイムSlack統合",
        "社内FAQ自動応答",
        "エスカレーション機能",
        "多言語対応",
      ],
      technologies: ["MCP", "Slack API", "Claude", "PostgreSQL"],
      example: `// MCP Server設定例
{
  "name": "slack-support-bot",
  "tools": [
    "search_knowledge_base",
    "create_ticket",
    "escalate_to_human"
  ],
  "resources": [
    "faq://company",
    "tickets://active"
  ]
}`,
    },
    {
      title: "コード解析・生成システム",
      description: "GitHubと連携したコードレビューとドキュメント自動生成",
      icon: Code2,
      category: "Development",
      complexity: "上級",
      time: "4-6週間",
      features: [
        "GitHub PR自動レビュー",
        "コード品質分析",
        "ドキュメント自動生成",
        "セキュリティ脆弱性検出",
      ],
      technologies: ["MCP", "GitHub API", "ESLint", "TypeScript"],
      example: `// GitHub統合MCP Tool
{
  "name": "analyze_pull_request",
  "description": "PRの自動解析とレビュー",
  "inputSchema": {
    "type": "object",
    "properties": {
      "repository": {"type": "string"},
      "pr_number": {"type": "number"}
    }
  }
}`,
    },
    {
      title: "データ分析ダッシュボード",
      description: "複数データソースを統合したビジネスインテリジェンス",
      icon: BarChart3,
      category: "Analytics",
      complexity: "中級",
      time: "3-4週間",
      features: [
        "リアルタイムデータ統合",
        "カスタマイズ可能なレポート",
        "アラート・通知機能",
        "データエクスポート",
      ],
      technologies: ["MCP", "PostgreSQL", "MongoDB", "Redis"],
      example: `// データ統合Resource
{
  "uri": "analytics://sales-data",
  "description": "売上データの統合ビュー",
  "mimeType": "application/json",
  "refreshInterval": "5m"
}`,
    },
    {
      title: "ドキュメント検索システム",
      description: "企業ナレッジベースのインテリジェント検索とQ&A",
      icon: Search,
      category: "Knowledge Management",
      complexity: "中級",
      time: "2-4週間",
      features: [
        "セマンティック検索",
        "文書自動分類",
        "Q&A自動生成",
        "権限管理",
      ],
      technologies: ["MCP", "Vector DB", "Elasticsearch", "OpenAI"],
      example: `// ナレッジベース検索Tool
{
  "name": "semantic_search",
  "description": "意味的文書検索",
  "inputSchema": {
    "properties": {
      "query": {"type": "string"},
      "category": {"type": "string"},
      "limit": {"type": "number"}
    }
  }
}`,
    },
    {
      title: "クラウドリソース管理",
      description: "AWS/Azure/GCPの統合監視とコスト最適化",
      icon: Cloud,
      category: "DevOps",
      complexity: "上級",
      time: "6-8週間",
      features: [
        "マルチクラウド監視",
        "コスト分析・予測",
        "リソース自動スケーリング",
        "セキュリティ監査",
      ],
      technologies: ["MCP", "AWS SDK", "Azure API", "GCP API"],
      example: `// クラウドモニタリングTool
{
  "name": "optimize_cloud_costs",
  "description": "クラウドコストの最適化提案",
  "inputSchema": {
    "properties": {
      "provider": {"enum": ["aws", "azure", "gcp"]},
      "timeframe": {"type": "string"}
    }
  }
}`,
    },
    {
      title: "セキュリティ監査システム",
      description: "包括的なセキュリティ監視とコンプライアンス管理",
      icon: Shield,
      category: "Security",
      complexity: "上級",
      time: "8-12週間",
      features: [
        "リアルタイム脅威検出",
        "コンプライアンスレポート",
        "インシデント対応自動化",
        "ログ分析・相関",
      ],
      technologies: ["MCP", "SIEM", "SOAR", "Threat Intelligence"],
      example: `// セキュリティ監査Resource
{
  "uri": "security://threat-intelligence",
  "description": "脅威インテリジェンス統合",
  "mimeType": "application/json",
  "security": "high"
}`,
    },
  ];

  const integrationPartners = [
    { name: "Slack", icon: Slack, description: "チーム コラボレーション" },
    { name: "GitHub", icon: GitBranch, description: "コード管理" },
    { name: "Notion", icon: FileText, description: "ドキュメント管理" },
    { name: "Salesforce", icon: Building, description: "CRM システム" },
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "初級":
        return "text-green-400 bg-green-400/10";
      case "中級":
        return "text-yellow-400 bg-yellow-400/10";
      case "上級":
        return "text-red-400 bg-red-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Customer Support": "text-blue-400 bg-blue-400/10",
      Development: "text-purple-400 bg-purple-400/10",
      Analytics: "text-green-400 bg-green-400/10",
      "Knowledge Management": "text-yellow-400 bg-yellow-400/10",
      DevOps: "text-orange-400 bg-orange-400/10",
      Security: "text-red-400 bg-red-400/10",
    };
    return colors[category] || "text-gray-400 bg-gray-400/10";
  };

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <Navigation />

      {/* Matrix Code背景 */}
      <div className="fixed inset-0 z-0 opacity-30">
        <MatrixRain
          fontSize={14}
          color="#00ff00"
          characters="01アカサタナハマヤラワンイキシチニヒミリヰケセテネヘメレエコソトノホモロオクスツヌフムルウ"
          fadeOpacity={0.05}
          speed={0.6}
        />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-20 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* ヘッダー */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Use
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Cases
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Magic MCPを活用した実際のユースケースと統合パターンをご紹介します
            </p>
          </motion.div>

          {/* ユースケース一覧 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <useCase.icon className="w-8 h-8 text-blue-400" />
                    <div className="flex gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(
                          useCase.category
                        )}`}
                      >
                        {useCase.category}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getComplexityColor(
                          useCase.complexity
                        )}`}
                      >
                        {useCase.complexity}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* プロジェクト詳細 */}
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {useCase.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        1-3人
                      </div>
                    </div>

                    {/* 主要機能 */}
                    <div>
                      <h4 className="text-white font-medium mb-2">主要機能</h4>
                      <div className="space-y-1">
                        {useCase.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 技術スタック */}
                    <div>
                      <h4 className="text-white font-medium mb-2">
                        技術スタック
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* コード例 */}
                    <div>
                      <h4 className="text-white font-medium mb-2">設定例</h4>
                      <div className="bg-gray-900/50 border border-white/10 rounded-lg p-3 overflow-x-auto">
                        <pre className="text-xs text-gray-300">
                          <code>{useCase.example}</code>
                        </pre>
                      </div>
                    </div>

                    {/* アクションボタン */}
                    <button className="w-full mt-4 p-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg text-blue-400 transition-colors flex items-center justify-center gap-2">
                      詳細を見る
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* 統合パートナー */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="bg-black/40 backdrop-blur-xl border-white/10">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl mb-2">
                  統合パートナー
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Magic MCPは主要なプラットフォームとシームレスに統合できます
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {integrationPartners.map((partner, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <partner.icon className="w-8 h-8 text-gray-400 mb-3" />
                      <h3 className="text-white font-medium mb-1">
                        {partner.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {partner.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA セクション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl border-white/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  独自のユースケースを開発しませんか？
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Magic
                  MCPを使って、あなたのビジネスに最適なAIソリューションを構築できます。
                  無料でコンサルテーションを受けて、プロジェクトを始めましょう。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    無料相談を予約
                  </button>
                  <button className="px-6 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white rounded-lg transition-colors">
                    技術資料をダウンロード
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
