// @ts-nocheck
"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const matRef = useRef<any>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.3 + t * 0.05, 0.04);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.5 + t * 0.08, 0.04);
    }

    if (matRef.current) {
      matRef.current.distort = 0.32 + Math.sin(t * 0.8) * 0.04;
    }
  });

  return (
    <Float speed={1.0} rotationIntensity={0.2} floatIntensity={0.45}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.55}>
        <MeshDistortMaterial
          ref={matRef}
          color="#FF8A3D"
          attach="material"
          distort={0.32}
          speed={1.4}
          roughness={0.3}
          metalness={0.65}
          emissive="#2A1305"
          emissiveIntensity={0.55}
        />
      </Sphere>
    </Float>
  );
}

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

export default function ThreeScene() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={rootRef} style={{ position: "absolute", inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 45 }}
        dpr={[1, 1.3]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <VisibilityGuard rootEl={rootRef.current} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[6, 8, 5]} intensity={1.8} color="#FFE8C8" />
        <pointLight position={[-5, -3, -3]} color="#7C5CFF" intensity={4} distance={18} />
        <Blob />
      </Canvas>
    </div>
  );
}
