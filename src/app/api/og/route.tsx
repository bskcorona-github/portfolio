import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Kinjo_Tatsuro Portfolio";
  const subtitle =
    searchParams.get("subtitle") || "Full Stack Developer from Okinawa";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1e3a5f 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1e1e3f 0%, transparent 50%)",
          position: "relative",
        }}
      >
        {/* 装飾的なグリッド線 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* コンテンツ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            textAlign: "center",
          }}
        >
          {/* ロゴ */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 40 40"
              fill="none"
              style={{ marginRight: "16px" }}
            >
              <path
                d="M20 5L5 20L20 35L35 20L20 5Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* タイトル */}
          <div
            style={{
              fontSize: 56,
              fontWeight: "bold",
              background: "linear-gradient(to right, #22d3ee, #3b82f6, #a855f7)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "20px",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>

          {/* サブタイトル */}
          <div
            style={{
              fontSize: 28,
              color: "#9ca3af",
              marginBottom: "30px",
            }}
          >
            {subtitle}
          </div>

          {/* 技術タグ */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["TypeScript", "React", "Next.js", "Go", "AWS"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 20px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  color: "#d1d5db",
                  fontSize: 18,
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* URL表示 */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            color: "#6b7280",
            fontSize: 20,
          }}
        >
          bskportfolio.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
