// @ts-nocheck
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
      <MeshDistortMaterial
        color="#00f0ff"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function ThreeScene() {
  return (
    <Canvas className="canvas-three">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#7000ff" intensity={2} />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
