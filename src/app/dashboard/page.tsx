"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/navigation";
import MatrixRain from "@/components/ui/matrix-code";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Server,
  Activity,
  Settings,
  Play,
  Pause,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  Zap,
} from "lucide-react";

export default function DashboardPage() {
  const ROBOT_SCENE_URL =
    "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  const servers = [
    {
      id: "mcp-01",
      name: "Main MCP Server",
      status: "running",
      uptime: "99.9%",
      connections: 142,
      cpu: 23,
      memory: 67,
      requests: 1247,
    },
    {
      id: "mcp-02",
      name: "AI Integration Server",
      status: "running",
      uptime: "98.7%",
      connections: 89,
      cpu: 45,
      memory: 52,
      requests: 892,
    },
    {
      id: "mcp-03",
      name: "Data Processing Server",
      status: "maintenance",
      uptime: "97.2%",
      connections: 0,
      cpu: 0,
      memory: 12,
      requests: 0,
    },
  ];

  const metrics = [
    { label: "Total Requests", value: "2,139", change: "+12%", icon: Activity },
    { label: "Active Connections", value: "231", change: "+5%", icon: Users },
    { label: "Average Response", value: "142ms", change: "-8%", icon: Zap },
    {
      label: "Success Rate",
      value: "99.7%",
      change: "+0.2%",
      icon: CheckCircle,
    },
  ];

  const recentLogs = [
    {
      time: "14:23:45",
      level: "INFO",
      message: "MCP server started successfully",
      server: "mcp-01",
    },
    {
      time: "14:22:12",
      level: "SUCCESS",
      message: "Claude Desktop connected",
      server: "mcp-01",
    },
    {
      time: "14:21:08",
      level: "INFO",
      message: "New tool registered: get_weather",
      server: "mcp-02",
    },
    {
      time: "14:20:34",
      level: "WARNING",
      message: "High memory usage detected",
      server: "mcp-02",
    },
    {
      time: "14:19:56",
      level: "INFO",
      message: "Resource cache updated",
      server: "mcp-01",
    },
    {
      time: "14:19:12",
      level: "ERROR",
      message: "Connection timeout from client",
      server: "mcp-03",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "running":
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case "maintenance":
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case "error":
        return <XCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "SUCCESS":
        return "text-green-400";
      case "INFO":
        return "text-blue-400";
      case "WARNING":
        return "text-yellow-400";
      case "ERROR":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
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

      {/* 3Dロボット中間層 */}
      <div className="fixed inset-0 z-10 opacity-20">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
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
              Developer
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Dashboard
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Magic
              MCPサーバーをリアルタイムで監視・管理するための統合ダッシュボード
            </p>
          </motion.div>

          {/* メトリクス */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-xl border-white/10"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    {metric.label}
                  </CardTitle>
                  <metric.icon className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {metric.value}
                  </div>
                  <p className="text-xs text-gray-400">
                    <span className="text-green-400">{metric.change}</span> from
                    last hour
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* サーバー一覧 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Server className="w-5 h-5" />
                    MCP Servers
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    アクティブなMCPサーバーの状態とパフォーマンス
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {servers.map((server) => (
                      <div
                        key={server.id}
                        className="p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(server.status)}
                            <div>
                              <h3 className="text-white font-medium">
                                {server.name}
                              </h3>
                              <p className="text-gray-400 text-sm">
                                {server.id}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                              <Settings className="w-4 h-4 text-gray-400" />
                            </button>
                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                              <RefreshCw className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Uptime</p>
                            <p className="text-white font-medium">
                              {server.uptime}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-400">Connections</p>
                            <p className="text-white font-medium">
                              {server.connections}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-400">CPU</p>
                            <p className="text-white font-medium">
                              {server.cpu}%
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-400">Memory</p>
                            <p className="text-white font-medium">
                              {server.memory}%
                            </p>
                          </div>
                        </div>

                        {/* リソース使用率バー */}
                        <div className="mt-3 space-y-2">
                          <div>
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>CPU Usage</span>
                              <span>{server.cpu}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-blue-400 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${server.cpu}%` }}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Memory Usage</span>
                              <span>{server.memory}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-purple-400 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${server.memory}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ログとアクティビティ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* リアルタイムログ */}
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Recent Logs
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    リアルタイムサーバーログ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {recentLogs.map((log, index) => (
                      <div key={index} className="text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-gray-500 text-xs">
                            {log.time}
                          </span>
                          <span
                            className={`text-xs font-medium ${getLevelColor(
                              log.level
                            )}`}
                          >
                            {log.level}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {log.server}
                          </span>
                        </div>
                        <p className="text-gray-300">{log.message}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* クイックアクション */}
              <Card className="bg-black/40 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <button className="w-full p-3 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 rounded-lg text-green-400 transition-colors flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Start All Servers
                    </button>
                    <button className="w-full p-3 bg-yellow-600/20 hover:bg-yellow-600/30 border border-yellow-600/30 rounded-lg text-yellow-400 transition-colors flex items-center gap-2">
                      <Pause className="w-4 h-4" />
                      Pause Non-Critical
                    </button>
                    <button className="w-full p-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg text-blue-400 transition-colors flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      Restart All
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
