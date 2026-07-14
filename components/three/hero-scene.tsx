"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import type { Mesh } from "three";

function Knot() {
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={1.5}>
        <torusKnotGeometry args={[1, 0.32, 180, 24]} />
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.35}
          speed={1.6}
          roughness={0.15}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function Satellite({ position, color, size }: { position: [number, number, number]; color: string; size: number }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.6} />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="h-full w-full" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 4, 4]} intensity={1.4} color="#3B82F6" />
          <pointLight position={[-4, -2, -2]} intensity={1.1} color="#06B6D4" />
          <Knot />
          <Satellite position={[2.4, 1.3, -1]} color="#3B82F6" size={0.35} />
          <Satellite position={[-2.2, -1.1, -1.4]} color="#06B6D4" size={0.28} />
          <Satellite position={[1.8, -1.6, -0.6]} color="#EC4899" size={0.2} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
