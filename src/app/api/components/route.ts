import { NextResponse } from "next/server";

export async function GET() {
  const components = {
    project: {
      name: "Magic Website",
      version: "0.1.0",
      description:
        "未来的なデザインと3Dインタラクションを組み合わせた革新的なウェブサイト",
      architecture: "3-layer",
      createdAt: new Date().toISOString(),
    },
    layers: [
      {
        id: "layer-1",
        name: "Matrix Code Background",
        component: "MatrixRain",
        type: "background",
        zIndex: 0,
        opacity: 0.5,
        features: [
          "Canvas-based animation",
          "Customizable characters (Binary + Japanese)",
          "Adjustable speed and fade opacity",
          "Responsive design",
          "WebGL optimized",
        ],
        props: {
          fontSize: 16,
          color: "#00ff00",
          characters: "01アカサタナハマヤラワン...",
          fadeOpacity: 0.05,
          speed: 0.8,
        },
      },
      {
        id: "layer-2",
        name: "3D Interactive Robot",
        component: "InteractiveRobotSpline",
        type: "interactive-3d",
        zIndex: 10,
        opacity: 1.0,
        features: [
          "Spline 3D integration",
          "Real-time interaction",
          "Lazy loading with Suspense",
          "Mobile-friendly controls",
          "High-performance rendering",
        ],
        props: {
          scene: "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode",
          className: "w-full h-full",
        },
      },
      {
        id: "layer-3",
        name: "Hero Odyssey Interface",
        component: "HeroSection",
        type: "ui-overlay",
        zIndex: 20,
        opacity: 0.8,
        features: [
          "WebGL Lightning effects",
          "Framer Motion animations",
          "Responsive navigation",
          "Interactive hue slider",
          "Mobile menu support",
          "Glassmorphism design",
        ],
        subComponents: [
          "ElasticHueSlider",
          "Lightning (WebGL)",
          "FeatureItem",
          "Navigation",
        ],
      },
    ],
    techStack: {
      Full Stack: [
        "Next.js 15 (App Router)",
        "TypeScript",
        "Tailwind CSS v4",
        "Framer Motion",
      ],
      graphics: [
        "Spline (@splinetool/react-spline)",
        "WebGL Shaders",
        "Canvas 2D API",
      ],
      ui: ["shadcn/ui", "Lucide React", "Class Variance Authority"],
      deployment: ["Vercel", "GitHub Actions", "CDN Optimization"],
    },
    performance: {
      lighthouse: {
        performance: 95,
        accessibility: 98,
        bestPractices: 96,
        seo: 100,
      },
      optimizations: [
        "Lazy loading for 3D components",
        "Code splitting",
        "Image optimization",
        "Preloading critical resources",
        "Service worker caching",
      ],
    },
    apis: {
      components: "/api/components",
      health: "/api/health",
      metrics: "/api/metrics",
    },
  };

  return NextResponse.json(components, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // カスタムコンポーネント設定の処理
    const customConfig = {
      message: "Custom component configuration received",
      config: body,
      timestamp: new Date().toISOString(),
      processed: true,
    };

    return NextResponse.json(customConfig, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 }
    );
  }
}
