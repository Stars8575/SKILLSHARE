import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import HeroFallback3D from './HeroFallback3D';

// Procedural Stylized Student Avatar at Laptop Desk
const StudentModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const laptopLidRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.8) * 0.08;
      headRef.current.rotation.x = Math.sin(t * 1.2) * 0.04;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* Soft rounded desk */}
      <mesh position={[0, -0.1, 0.4]} receiveShadow>
        <cylinderGeometry args={[2.2, 2.2, 0.15, 48]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.05} />
      </mesh>

      {/* Desk Base Rim */}
      <mesh position={[0, -0.22, 0.4]}>
        <cylinderGeometry args={[2.22, 2.22, 0.06, 48]} />
        <meshStandardMaterial color="#E9DDF3" roughness={0.3} />
      </mesh>

      {/* Student Character */}
      <group position={[0, 0, 0]}>
        {/* Torso - Lavender/Pink Hoodie */}
        <mesh position={[0, 0.65, -0.1]} castShadow>
          <capsuleGeometry args={[0.42, 0.5, 8, 16]} />
          <meshStandardMaterial color="#C783F6" roughness={0.5} />
        </mesh>

        {/* Hoodie Collar */}
        <mesh position={[0, 1.05, -0.05]}>
          <torusGeometry args={[0.22, 0.08, 12, 24]} />
          <meshStandardMaterial color="#A855F7" roughness={0.4} />
        </mesh>

        {/* Head & Face Group */}
        <group ref={headRef} position={[0, 1.35, -0.05]}>
          {/* Head */}
          <mesh castShadow>
            <sphereGeometry args={[0.34, 32, 32]} />
            <meshStandardMaterial color="#FDE2D1" roughness={0.4} />
          </mesh>

          {/* Stylized Modern Hair (Pastel Dark Violet) */}
          <mesh position={[0, 0.15, -0.05]} castShadow>
            <sphereGeometry args={[0.36, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
            <meshStandardMaterial color="#372554" roughness={0.7} />
          </mesh>
          {/* Hair Bun / Swoop */}
          <mesh position={[0, 0.38, -0.12]}>
            <sphereGeometry args={[0.18, 16, 16]} />
            <meshStandardMaterial color="#372554" roughness={0.7} />
          </mesh>

          {/* Friendly Glasses Frame */}
          <mesh position={[-0.12, 0.02, 0.32]}>
            <torusGeometry args={[0.09, 0.02, 12, 24]} />
            <meshStandardMaterial color="#F36CBF" roughness={0.2} metalness={0.6} />
          </mesh>
          <mesh position={[0.12, 0.02, 0.32]}>
            <torusGeometry args={[0.09, 0.02, 12, 24]} />
            <meshStandardMaterial color="#F36CBF" roughness={0.2} metalness={0.6} />
          </mesh>
          {/* Glasses Bridge */}
          <mesh position={[0, 0.03, 0.33]}>
            <boxGeometry args={[0.06, 0.015, 0.02]} />
            <meshStandardMaterial color="#F36CBF" roughness={0.2} metalness={0.6} />
          </mesh>

          {/* Cute Eyes behind glasses */}
          <mesh position={[-0.12, 0.02, 0.31]}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshBasicMaterial color="#29213B" />
          </mesh>
          <mesh position={[0.12, 0.02, 0.31]}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshBasicMaterial color="#29213B" />
          </mesh>

          {/* Friendly Smile */}
          <mesh position={[0, -0.12, 0.31]} rotation={[0, 0, 0]}>
            <torusGeometry args={[0.05, 0.012, 8, 16, Math.PI]} />
            <meshBasicMaterial color="#EC4899" />
          </mesh>

          {/* Soft Blushing Cheeks */}
          <mesh position={[-0.2, -0.06, 0.26]}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color="#F8B4D9" transparent opacity={0.65} />
          </mesh>
          <mesh position={[0.2, -0.06, 0.26]}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color="#F8B4D9" transparent opacity={0.65} />
          </mesh>
        </group>

        {/* Arms resting on desk */}
        <mesh position={[-0.35, 0.35, 0.22]} rotation={[0.6, 0.4, -0.4]}>
          <capsuleGeometry args={[0.11, 0.45, 8, 16]} />
          <meshStandardMaterial color="#C783F6" roughness={0.5} />
        </mesh>
        <mesh position={[0.35, 0.35, 0.22]} rotation={[0.6, -0.4, 0.4]}>
          <capsuleGeometry args={[0.11, 0.45, 8, 16]} />
          <meshStandardMaterial color="#C783F6" roughness={0.5} />
        </mesh>
      </group>

      {/* Sleek Laptop on Desk */}
      <group position={[0, 0.02, 0.45]}>
        {/* Laptop Keyboard Base */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[0.68, 0.025, 0.48]} />
          <meshStandardMaterial color="#F5ECFD" roughness={0.2} metalness={0.4} />
        </mesh>
        {/* Trackpad */}
        <mesh position={[0, 0.015, 0.12]}>
          <boxGeometry args={[0.2, 0.005, 0.14]} />
          <meshStandardMaterial color="#E9DDF3" roughness={0.3} />
        </mesh>
        {/* Keyboard area */}
        <mesh position={[0, 0.015, -0.07]}>
          <boxGeometry args={[0.58, 0.005, 0.22]} />
          <meshStandardMaterial color="#372554" roughness={0.5} />
        </mesh>

        {/* Laptop Screen / Lid (Angled 108 deg) */}
        <group ref={laptopLidRef} position={[0, 0.015, -0.24]} rotation={[-0.32, 0, 0]}>
          {/* Screen Casing */}
          <mesh position={[0, 0.24, 0]} castShadow>
            <boxGeometry args={[0.68, 0.46, 0.02]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.3} />
          </mesh>
          {/* Glowing Display */}
          <mesh position={[0, 0.24, 0.012]}>
            <planeGeometry args={[0.64, 0.42]} />
            <meshBasicMaterial color="#29213B" />
          </mesh>
          {/* Glowing Code / UI Lines on Screen */}
          <mesh position={[-0.12, 0.33, 0.015]}>
            <planeGeometry args={[0.32, 0.03]} />
            <meshBasicMaterial color="#C783F6" />
          </mesh>
          <mesh position={[-0.05, 0.27, 0.015]}>
            <planeGeometry args={[0.42, 0.025]} />
            <meshBasicMaterial color="#F36CBF" />
          </mesh>
          <mesh position={[-0.15, 0.21, 0.015]}>
            <planeGeometry args={[0.24, 0.025]} />
            <meshBasicMaterial color="#D7F7E8" />
          </mesh>
          <mesh position={[0.02, 0.15, 0.015]}>
            <planeGeometry args={[0.5, 0.025]} />
            <meshBasicMaterial color="#A855F7" />
          </mesh>
        </group>
      </group>

      {/* Coffee Mug on Desk */}
      <group position={[0.72, 0.12, 0.4]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.07, 0.2, 16]} />
          <meshStandardMaterial color="#F36CBF" roughness={0.3} />
        </mesh>
        {/* Mug Handle */}
        <mesh position={[0.09, 0, 0]}>
          <torusGeometry args={[0.05, 0.015, 8, 16]} />
          <meshStandardMaterial color="#F36CBF" roughness={0.3} />
        </mesh>
        {/* Warm Coffee surface */}
        <mesh position={[0, 0.09, 0]}>
          <cylinderGeometry args={[0.075, 0.075, 0.01, 16]} />
          <meshBasicMaterial color="#4A2E18" />
        </mesh>
      </group>

      {/* Stack of Colorful Books on Desk */}
      <group position={[-0.72, 0.1, 0.35]} rotation={[0, 0.25, 0]}>
        {/* Book 1 (Mint) */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[0.34, 0.06, 0.26]} />
          <meshStandardMaterial color="#D7F7E8" roughness={0.4} />
        </mesh>
        {/* Book 2 (Lavender) */}
        <mesh position={[0.02, 0.065, 0.01]} rotation={[0, -0.15, 0]} castShadow>
          <boxGeometry args={[0.32, 0.06, 0.24]} />
          <meshStandardMaterial color="#C783F6" roughness={0.4} />
        </mesh>
        {/* Book 3 (Pink) */}
        <mesh position={[-0.01, 0.13, 0]} rotation={[0, 0.1, 0]} castShadow>
          <boxGeometry args={[0.3, 0.05, 0.23]} />
          <meshStandardMaterial color="#FFE1F2" roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
};

// Floating 3D Skill Tag Card
interface FloatingSkillBadgeProps {
  position: [number, number, number];
  title: string;
  category: string;
  color: string;
  textColor?: string;
  speed?: number;
  rotationSpeed?: number;
  iconSymbol: string;
}

const FloatingSkillBadge: React.FC<FloatingSkillBadgeProps> = ({
  position,
  title,
  category,
  color,
  textColor = '#29213B',
  speed = 2,
  iconSymbol,
}) => {
  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.8} position={position}>
      <group>
        {/* Rounded Glass Backing Card */}
        <RoundedBox args={[1.5, 0.65, 0.1]} radius={0.12} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.1}
            metalness={0.05}
            transparent
            opacity={0.92}
          />
        </RoundedBox>

        {/* Delicate Gradient / Accent Border */}
        <mesh position={[0, 0, -0.06]}>
          <planeGeometry args={[1.54, 0.69]} />
          <meshBasicMaterial color="#E9DDF3" />
        </mesh>

        {/* Small Icon Badge Circle */}
        <mesh position={[-0.48, 0.03, 0.06]}>
          <circleGeometry args={[0.18, 24]} />
          <meshBasicMaterial color={color} />
        </mesh>

        {/* Icon Symbol */}
        <Text
          position={[-0.48, 0.03, 0.07]}
          fontSize={0.16}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {iconSymbol}
        </Text>

        {/* Skill Title Text */}
        <Text
          position={[-0.18, 0.1, 0.06]}
          fontSize={0.14}
          color={textColor}
          anchorX="left"
          anchorY="middle"
          fontWeight="bold"
        >
          {title}
        </Text>

        {/* Sub-label Category Text */}
        <Text
          position={[-0.18, -0.1, 0.06]}
          fontSize={0.095}
          color="#777184"
          anchorX="left"
          anchorY="middle"
        >
          {category}
        </Text>
      </group>
    </Float>
  );
};

// Floating Organic Pearls / Glow Spheres
const FloatingPearls = () => {
  return (
    <>
      <Float speed={3} floatIntensity={1.2} position={[-1.8, 1.8, -0.5]}>
        <mesh>
          <sphereGeometry args={[0.18, 24, 24]} />
          <MeshDistortMaterial color="#C783F6" distort={0.25} speed={2} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={2.5} floatIntensity={1.5} position={[1.9, 1.6, -0.3]}>
        <mesh>
          <sphereGeometry args={[0.22, 24, 24]} />
          <MeshDistortMaterial color="#F36CBF" distort={0.2} speed={1.8} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={3.2} floatIntensity={1.0} position={[1.7, -1.2, 0.2]}>
        <mesh>
          <sphereGeometry args={[0.15, 24, 24]} />
          <MeshDistortMaterial color="#D7F7E8" distort={0.3} speed={2.2} roughness={0.3} />
        </mesh>
      </Float>

      <Float speed={2.8} floatIntensity={1.1} position={[-1.7, -1.0, 0.3]}>
        <mesh>
          <sphereGeometry args={[0.16, 24, 24]} />
          <MeshDistortMaterial color="#FFE1F2" distort={0.25} speed={1.9} roughness={0.2} />
        </mesh>
      </Float>
    </>
  );
};

// Interactive 3D Canvas Hero Scene
export default function HeroScene3D() {
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return <HeroFallback3D />;
  }

  return (
    <div
      className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative ambient background blur glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#C783F6]/25 filter blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#F36CBF]/20 filter blur-3xl pointer-events-none animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FFE1F2]/40 filter blur-2xl pointer-events-none" />

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0.4, 4.4], fov: 42 }}
        shadows
        className="w-full h-full cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Soft Studio Lighting */}
        <ambientLight intensity={1.1} />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1.3}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        {/* Purple/Pink Rim Lighting for dreamy depth */}
        <pointLight position={[-4, 2, -2]} intensity={1.4} color="#C783F6" />
        <pointLight position={[4, -1, -2]} intensity={1.2} color="#F36CBF" />
        <pointLight position={[0, 4, 2]} intensity={0.8} color="#FFFFFF" />

        {/* Central Student Model */}
        <StudentModel />

        {/* 4 Floating Skill Badges surrounding the student as requested */}
        {/* Python */}
        <FloatingSkillBadge
          position={[-1.75, 1.1, 0.3]}
          title="Python"
          category="Data & AI"
          color="#8B5CF6"
          speed={2.2}
          iconSymbol="Py"
        />

        {/* UI/UX Design */}
        <FloatingSkillBadge
          position={[1.85, 0.9, 0.2]}
          title="UI/UX Design"
          category="Figma & Proto"
          color="#F36CBF"
          speed={2.5}
          iconSymbol="UX"
        />

        {/* Video Editing */}
        <FloatingSkillBadge
          position={[-1.85, -0.4, 0.5]}
          title="Video Editing"
          category="DaVinci & Motion"
          color="#38BDF8"
          speed={2.0}
          iconSymbol="🎬"
        />

        {/* Public Speaking */}
        <FloatingSkillBadge
          position={[1.8, -0.45, 0.4]}
          title="Public Speaking"
          category="Pitching & Story"
          color="#F59E0B"
          speed={2.4}
          iconSymbol="🎙️"
        />

        {/* Floating Pearls and glowing particles */}
        <FloatingPearls />
      </Canvas>

      {/* Subtle Hint on desktop */}
      <div className="absolute bottom-3 text-center pointer-events-none">
        <span className="text-[11px] font-medium tracking-wide text-[#777184]/70 bg-white/70 px-3 py-1 rounded-full border border-[#E9DDF3]/60 backdrop-blur-sm shadow-xs">
          Interactive 3D Workspace • Drag to rotate
        </span>
      </div>
    </div>
  );
}
