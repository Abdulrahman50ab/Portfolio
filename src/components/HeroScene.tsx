import React, { Component, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useInView } from 'framer-motion';
import * as THREE from 'three';

// Shared pointer state, tracked on the window so the parallax keeps working
// while the canvas sits behind content with pointer-events disabled.
const pointer = { x: 0, y: 0 };

const SceneCluster = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.045;
    g.rotation.x += (pointer.y * 0.14 - g.rotation.x) * 0.04;
    g.rotation.z += (pointer.x * 0.08 - g.rotation.z) * 0.04;
  });

  return (
    <group ref={group}>
      {/* Right cluster — sits around/behind the portrait column */}
      <Float speed={1.4} rotationIntensity={0.65} floatIntensity={1.15}>
        <mesh position={[3.9, 1.6, -0.8]}>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshStandardMaterial color="#6366F1" flatShading roughness={0.32} metalness={0.08} />
        </mesh>
      </Float>
      <Float speed={1.9} rotationIntensity={0.9} floatIntensity={1.6}>
        <mesh position={[4.9, -0.6, -0.3]}>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshBasicMaterial color="#A5B4FC" wireframe />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.3}>
        <mesh position={[3.0, -2.0, 0]}>
          <octahedronGeometry args={[0.42, 0]} />
          <meshStandardMaterial color="#C7D2FE" flatShading roughness={0.4} metalness={0.05} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={1.8}>
        <mesh position={[2.5, 2.6, -1.8]}>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial color="#E4E4E7" roughness={0.5} />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[5.6, 1.1, -1.5]} rotation={[0.7, 0.4, 0]}>
          <torusGeometry args={[0.45, 0.14, 16, 40]} />
          <meshStandardMaterial color="#C7D2FE" flatShading roughness={0.35} metalness={0.1} />
        </mesh>
      </Float>

      {/* Left-edge accents — kept very light so headline text stays readable */}
      <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.4}>
        <mesh position={[-5.4, -2.4, -2.2]}>
          <sphereGeometry args={[0.3, 24, 24]} />
          <meshStandardMaterial color="#E4E4E7" roughness={0.5} />
        </mesh>
      </Float>
      <Float speed={1.7} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[-5.8, 2.2, -2.5]}>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshBasicMaterial color="#E0E7FF" wireframe />
        </mesh>
      </Float>
    </group>
  );
};

// Pauses the render loop whenever the hero scrolls out of the viewport.
const VisibleCanvas = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Defer mounting the WebGL context until after first paint.
    const id = window.setTimeout(() => setReady(true), 50);
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.clearTimeout(id);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <div ref={wrapRef} className="h-full w-full">
      {ready && (
        <Canvas
          frameloop={inView ? 'always' : 'never'}
          dpr={[1, 1.75]}
          camera={{ position: [0, 0, 9], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={1.15} />
          <directionalLight position={[4, 6, 6]} intensity={1.1} />
          <directionalLight position={[-5, -2, 4]} intensity={0.35} />
          <Suspense fallback={null}>
            <SceneCluster />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

// WebGL can fail to initialise (blocked, unsupported, GPU whitelists) —
// in that case the hero simply keeps its plain background.
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const HeroScene = () => (
  <SceneBoundary>
    <VisibleCanvas />
  </SceneBoundary>
);

export default HeroScene;
