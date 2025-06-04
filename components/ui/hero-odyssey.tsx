"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { InteractiveRobotSpline } from "./interactive-3d-robot";
import MatrixRain from "./matrix-code";

interface ElasticHueSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
}

const ElasticHueSlider: React.FC<ElasticHueSliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 360,
  step = 1,
  label = "Adjust Hue",
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const progress = (value - min) / (max - min);
  const thumbPosition = progress * 100;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const increment = e.shiftKey ? step * 10 : step;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowUp":
        e.preventDefault();
        onChange(Math.min(max, value + increment));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        e.preventDefault();
        onChange(Math.max(min, value - increment));
        break;
      case "Home":
        e.preventDefault();
        onChange(min);
        break;
      case "End":
        e.preventDefault();
        onChange(max);
        break;
    }
  };

  // クライアントサイドでのみレンダリング
  if (!isMounted) {
    return (
      <div className="scale-50 relative w-full max-w-xs flex flex-col items-center">
        <div className="text-gray-300 text-sm mb-1">{label}</div>
        <div className="relative w-full h-5 flex items-center">
          <div className="absolute left-0 w-full h-1 bg-gray-700 rounded-full z-0"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="scale-50 relative w-full max-w-xs flex flex-col items-center"
      ref={sliderRef}
    >
      {label && (
        <label
          htmlFor="hue-slider-native"
          className="text-gray-300 text-sm mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative w-full h-5 flex items-center">
        <input
          id="hue-slider-native"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer z-20 focus:outline-none"
          style={{ WebkitAppearance: "none" }}
          aria-label={`${label}: ${value}度`}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-describedby="hue-slider-description"
        />

        <div className="absolute left-0 w-full h-1 bg-gray-700 rounded-full z-0"></div>

        <div
          className="absolute left-0 h-1 bg-blue-500 rounded-full z-10"
          style={{ width: `${thumbPosition}%` }}
        ></div>

        <motion.div
          className={`absolute top-1/2 transform -translate-y-1/2 z-30 w-4 h-4 bg-white rounded-full border-2 ${
            isFocused ? "border-blue-400 shadow-lg" : "border-gray-400"
          }`}
          style={{ left: `${thumbPosition}%` }}
          animate={{
            scale: isDragging ? 1.2 : isFocused ? 1.1 : 1,
            boxShadow: isFocused
              ? "0 0 0 3px rgba(59, 130, 246, 0.3)"
              : "0 0 0 0px transparent",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: isDragging ? 20 : 30,
          }}
        ></motion.div>
      </div>

      <div id="hue-slider-description" className="sr-only">
        矢印キーで色相を調整できます。Shiftキーと組み合わせると10度ずつ変更できます。
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className="text-xs text-gray-500 mt-2"
          aria-live="polite"
        >
          {value}°
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

interface FeatureItemProps {
  name: string;
  value: string;
  position: string;
}

interface LightningProps {
  hue?: number;
  xOffset?: number;
  speed?: number;
  intensity?: number;
  size?: number;
}

export const Lightning: React.FC<LightningProps> = ({
  hue = 230,
  xOffset = 0,
  speed = 1,
  intensity = 1,
  size = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const vertexShaderSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;
      
      #define OCTAVE_COUNT 10

      vec3 hsv2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          return c.z * mix(vec3(1.0), rgb, c.y);
      }

      float hash11(float p) {
          p = fract(p * .1031);
          p *= p + 33.33;
          p *= p + p;
          return fract(p);
      }

      float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * .1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
      }

      mat2 rotate2d(float theta) {
          float c = cos(theta);
          float s = sin(theta);
          return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          float a = hash12(ip);
          float b = hash12(ip + vec2(1.0, 0.0));
          float c = hash12(ip + vec2(0.0, 1.0));
          float d = hash12(ip + vec2(1.0, 1.0));
          
          vec2 t = smoothstep(0.0, 1.0, fp);
          return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }

      float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < OCTAVE_COUNT; ++i) {
              value += amplitude * noise(p);
              p *= rotate2d(0.45);
              p *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }

      void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
          vec2 uv = fragCoord / iResolution.xy;
          uv = 2.0 * uv - 1.0;
          uv.x *= iResolution.x / iResolution.y;
          uv.x += uXOffset;
          
          uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0;
          
          float dist = abs(uv.x);
          vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
          vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
          col = pow(col, vec3(1.0));
          fragColor = vec4(col, 1.0);
      }

      void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;

    const compileShader = (
      source: string,
      type: number
    ): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(
      fragmentShaderSource,
      gl.FRAGMENT_SHADER
    );
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
    ]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
    const iTimeLocation = gl.getUniformLocation(program, "iTime");
    const uHueLocation = gl.getUniformLocation(program, "uHue");
    const uXOffsetLocation = gl.getUniformLocation(program, "uXOffset");
    const uSpeedLocation = gl.getUniformLocation(program, "uSpeed");
    const uIntensityLocation = gl.getUniformLocation(program, "uIntensity");
    const uSizeLocation = gl.getUniformLocation(program, "uSize");

    const startTime = performance.now();
    const render = () => {
      resizeCanvas();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
      const currentTime = performance.now();
      gl.uniform1f(iTimeLocation, (currentTime - startTime) / 1000.0);
      gl.uniform1f(uHueLocation, hue);
      gl.uniform1f(uXOffsetLocation, xOffset);
      gl.uniform1f(uSpeedLocation, speed);
      gl.uniform1f(uIntensityLocation, intensity);
      gl.uniform1f(uSizeLocation, size);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [hue, xOffset, speed, intensity, size, isMounted]);

  // クライアントサイドでのみレンダリング
  if (!isMounted) {
    return <div className="w-full h-full bg-transparent" />;
  }

  return <canvas ref={canvasRef} className="w-full h-full relative" />;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ name, value, position }) => {
  return (
    <div
      className={`absolute ${position} z-10 group transition-all duration-300 hover:scale-110`}
    >
      <div className="flex items-center gap-2 relative">
        <div className="relative">
          <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></div>
          <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="text-white relative">
          {name && (
            <div className="font-medium group-hover:text-white transition-colors duration-300">
              {name}
            </div>
          )}
          <div className="text-white/70 text-sm group-hover:text-white/70 transition-colors duration-300">
            {value}
          </div>
          <div className="absolute -inset-2 bg-white/10 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  const [lightningHue, setLightningHue] = useState(220);
  const [splineEnabled, setSplineEnabled] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0.3 }
        : {
            staggerChildren: 0.3,
            delayChildren: 0.2,
          },
    },
  };

  const itemVariants = {
    hidden: { y: shouldReduceMotion ? 0 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const ROBOT_SCENE_URL =
    "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 min-h-[calc(100vh-120px)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full z-200 top-[20%] relative"
        >
          <motion.div variants={itemVariants}>
            <FeatureItem
              name=""
              value="プロフェッショナル開発"
              position="left-0 sm:left-10 top-40"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem
              name=""
              value="次世代Web技術"
              position="left-1/4 top-24"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem
              name=""
              value="デザイン×エンジニアリング"
              position="right-1/4 top-24"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem
              name=""
              value="アート級プログラミング"
              position="right-0 sm:right-10 top-40"
            />
          </motion.div>
        </motion.div>

        {/* Main hero content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-30 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <ElasticHueSlider
            value={lightningHue}
            onChange={setLightningHue}
            label="Lightning Hue"
          />

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4 mb-4"
          >
            <button
              onClick={() => setSplineEnabled(!splineEnabled)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                splineEnabled
                  ? "bg-green-500/20 text-green-300 hover:bg-green-500/30"
                  : "bg-red-500/20 text-red-300 hover:bg-red-500/30"
              } border border-current focus:outline-none focus:ring-2 focus:ring-current focus:ring-opacity-50`}
            >
              3D Robot: {splineEnabled ? "ON" : "OFF"}
            </button>
            {splineEnabled && (
              <span className="text-yellow-400 text-xs">
                ⚠️ テスト中 - エラーが発生する可能性があります
              </span>
            )}
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="フルスタックエンジニア"
          >
            <span>Modern Full Stack Engineer</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transform group-hover:translate-x-1 transition-transform duration-300"
              aria-hidden="true"
            >
              <path
                d="M8 3L13 8L8 13M13 8H3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-light mb-2"
          >
            Bsk Corona
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl pb-3 font-light bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent"
          >
            Innovation Through Code
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 mb-9 max-w-2xl text-lg leading-relaxed"
          >
            まだ初心者ですが、革新的なWebアプリケーションを構築し、AIの統合による優れたユーザーエクスペリエンスを探求しています。
          </motion.p>

          <Link href="/sections/projects">
            <motion.button
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="mt-[100px] sm:mt-[100px] px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="作品を見る"
            >
              作品を見る
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* 3D Robot Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.5 : 2 }}
        className="absolute inset-0 z-0"
      >
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="absolute inset-0 w-full h-full"
          disableSpline={!splineEnabled}
        />
      </motion.div>

      {/* Lightning Background (50% opacity) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: shouldReduceMotion ? 0.5 : 1 }}
        className="absolute inset-0 z-10"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-blue-500/10 to-purple-600/5 blur-3xl"></div>
        <div className="absolute top-0 w-[100%] left-1/2 transform -translate-x-1/2 h-full">
          <Lightning
            hue={lightningHue}
            xOffset={0}
            speed={shouldReduceMotion ? 0.5 : 1.6}
            intensity={0.3}
            size={2}
          />
        </div>
        <div className="z-10 absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] backdrop-blur-3xl rounded-full bg-[radial-gradient(circle_at_25%_90%,_rgba(30,56,107,0.15)_15%,_rgba(0,0,0,0.3)_70%,_rgba(0,0,0,0.4)_100%)]"></div>
      </motion.div>

      {/* Matrix Code Background (30% opacity) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{
          duration: shouldReduceMotion ? 0.5 : 2,
          delay: shouldReduceMotion ? 0 : 1,
        }}
        className="absolute inset-0 z-15"
      >
        <MatrixRain
          fontSize={14}
          color="#00ff00"
          characters="01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
          fadeOpacity={0.05}
          speed={shouldReduceMotion ? 0.3 : 0.8}
        />
      </motion.div>
    </div>
  );
};
