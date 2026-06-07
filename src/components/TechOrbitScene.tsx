// @ts-nocheck
"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Line, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const TECH = [
  { name: "Next.js",  color: "#FFFFFF" },
  { name: "React",    color: "#5DD4FF" },
  { name: "TS",       color: "#7C5CFF" },
  { name: "Tauri",    color: "#E8C275" },
  { name: "Rust",     color: "#FF6F91" },
  { name: "Node",     color: "#FF6B2C" },
  { name: "GSAP",     color: "#FF8A3D" },
  { name: "Three.js", color: "#FFFFFF" },
  { name: "Figma",    color: "#FF6F91" },
];

const RING_COUNTS = [3, 4, 2];

function Core() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    const t = s.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.22;
    }
  });
  return (
    <Sphere ref={meshRef} args={[0.7, 64, 64]}>
      <MeshDistortMaterial
        color="#FF8A3D"
        distort={0.28}
        speed={1.0}
        roughness={0.3}
        metalness={0.65}
        emissive="#2A1305"
        emissiveIntensity={0.55}
      />
    </Sphere>
  );
}

function Ring({ radius, tilt }: { radius: number; tilt: number }) {
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    const segs = 72;
    for (let i = 0; i <= segs; i++) {
      const a = (i / segs) * Math.PI * 2;
      pts.push([Math.cos(a) * radius, Math.sin(a) * radius * 0.4, 0]);
    }
    return pts;
  }, [radius]);

  return (
    <group rotation={[tilt, 0, 0]}>
      <Line points={points} color="#3a3a48" lineWidth={0.9} dashed transparent opacity={0.5} dashSize={0.12} gapSize={0.08} />
    </group>
  );
}

function OrbitingNode({
  radius, tiltX, speed, phase, name, color,
}: { radius: number; tiltX: number; speed: number; phase: number; name: string; color: string }) {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame((s) => {
    const t = s.clock.getElapsedTime() * speed + phase;
    if (groupRef.current) {
      groupRef.current.position.set(
        Math.cos(t) * radius,
        Math.sin(t) * radius * 0.4,
        Math.sin(t * 0.7) * 0.4
      );
    }
  });

  return (
    <group rotation={[tiltX, 0, 0]}>
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} toneMapped={false} />
        </mesh>
        <Html center distanceFactor={6} occlude={false} style={{ pointerEvents: "none" }}>
          <div style={{
            padding: "3px 8px",
            background: "rgba(15,15,21,0.78)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 999,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#F5F5F7",
            whiteSpace: "nowrap",
            transform: "translateY(-22px)",
          }}>
            {name}
          </div>
        </Html>
      </group>
    </group>
  );
}

/** Pause R3F's render loop when the canvas is offscreen. */
function VisibilityGuard({ rootEl }: { rootEl: HTMLElement | null }) {
  const { invalidate, set } = useThree();
  useEffect(() => {
    if (!rootEl || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting;
        set({ frameloop: visible ? "always" : "never" });
        if (visible) invalidate();
      },
      { threshold: 0.05 }
    );
    io.observe(rootEl);
    return () => io.disconnect();
  }, [rootEl, set, invalidate]);
  return null;
}

export default function TechOrbitScene() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const placements = useMemo(() => {
    const items: { ringIdx: number; tech: typeof TECH[number]; phase: number }[] = [];
    let cursor = 0;
    RING_COUNTS.forEach((count, ringIdx) => {
      for (let i = 0; i < count; i++) {
        items.push({
          ringIdx,
          tech: TECH[cursor % TECH.length],
          phase: (i / count) * Math.PI * 2,
        });
        cursor++;
      }
    });
    return items;
  }, []);

  return (
    <div ref={rootRef} style={{ position: "absolute", inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0.4, 5.2], fov: 50 }}
        dpr={[1, 1.3]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <VisibilityGuard rootEl={rootRef.current} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 6, 4]} intensity={1.2} color="#FFE8C8" />
        <pointLight position={[-4, -2, -3]} color="#7C5CFF" intensity={4} distance={18} />

        <Core />

        <Ring radius={1.4} tilt={0.0} />
        <Ring radius={2.2} tilt={0.3} />
        <Ring radius={3.0} tilt={-0.4} />

        {placements.map((p, i) => {
          const radius = [1.4, 2.2, 3.0][p.ringIdx];
          const tilts = [0.0, 0.3, -0.4];
          const speeds = [0.45, 0.32, 0.20];
          return (
            <OrbitingNode
              key={i}
              radius={radius}
              tiltX={tilts[p.ringIdx]}
              speed={speeds[p.ringIdx]}
              phase={p.phase}
              name={p.tech.name}
              color={p.tech.color}
            />
          );
        })}
      </Canvas>
    </div>
  );
}
