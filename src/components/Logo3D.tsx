import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

const LogoModel = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  // A rich, slightly brighter blue to make the glossy reflection pop better
  const baseColor = new THREE.Color('#2563eb'); 
  
  // Ambient and spot lighting colors adjusted based on theme
  const envPreset = isDarkMode ? 'city' : 'apartment';
  const lightIntensity = isDarkMode ? 0.8 : 1.2;

  return (
    <>
      <ambientLight intensity={lightIntensity * 0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={lightIntensity} 
        color={isDarkMode ? '#ffffff' : '#f0f0f0'} 
      />
      <spotLight 
        position={[-10, 10, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={lightIntensity * 2} 
        castShadow 
      />

      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 6, Math.PI / 6]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Float
          speed={2} // Animation speed
          rotationIntensity={0.2} // XYZ rotation intensity
          floatIntensity={0.5} // Up/down float intensity
          floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within
        >
          <Center>
            <Text3D
              font="/fonts/helvetiker_bold.typeface.json"
              size={0.6}
              height={0.15}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.01}
              bevelOffset={0}
              bevelSegments={5}
            >
              MEDIAN POINT
              <meshPhysicalMaterial
                ref={materialRef}
                color={baseColor}
                metalness={0.7}
                roughness={0.1}
                clearcoat={1.0}
                clearcoatRoughness={0.1}
                envMapIntensity={isDarkMode ? 2.5 : 1.5}
              />
            </Text3D>
          </Center>
        </Float>
      </PresentationControls>

      <Environment preset={envPreset} />
      
      {/* Add a subtle shadow beneath the floating text */}
      <ContactShadows 
        position={[0, -0.6, 0]} 
        opacity={isDarkMode ? 0.6 : 0.25} 
        scale={10} 
        blur={2.5} 
        far={2} 
        color={isDarkMode ? '#000000' : '#1d4ed8'} 
      />
    </>
  );
};

export default function Logo3D() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();

    // Create an observer to watch for class changes on the html element (dark mode toggle)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-[150px] md:h-[220px] lg:h-[260px] cursor-grab active:cursor-grabbing mb-4">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 40 }}
        shadows
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <LogoModel isDarkMode={isDarkMode} />
      </Canvas>
    </div>
  );
}
