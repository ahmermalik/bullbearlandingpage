import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { OrbitControls } from '@react-three/drei';

const TextBubble = ({ position, text }) => {
    const font = useLoader(FontLoader, '/fonts/satoshi.json');
    const meshRef = useRef();
  
    useEffect(() => {
      if (font && meshRef.current) {
        const geometry = new TextGeometry(text, { font, size: 0.5, height: 0.2 });
        meshRef.current.geometry = geometry;
      }
    }, [font, text]);
  
    return (
      <group position={position}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <meshPhongMaterial color="white" />
        </mesh>
        <mesh position={[0, 0, -1]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhongMaterial color="lightblue" />
        </mesh>
      </group>
    );
  };
  

  const Scene = () => {
    const cameraRef = useRef();
  
    useEffect(() => {
        let scrollY = window.scrollY;
        const onScroll = () => {
          if (cameraRef.current && cameraRef.current.position) {
            const deltaY = window.scrollY - scrollY;
            cameraRef.current.position.z -= deltaY * 0.2;
            scrollY = window.scrollY;
          }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
      }, []);
    
  
    return (
      <Canvas>
        <perspectiveCamera ref={cameraRef} position={[0, 0, 10]} lookAt={[25, 0, -25]} />
        <ambientLight />3
        <pointLight position={[0, 10, 25]} />
  
        <mesh position={[0, 0, -50]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry attach="geometry" args={[200, 200]} />
          <meshPhongMaterial attach="material" color="blue" />
        </mesh>
  
        <TextBubble position={[0, 2, 10]} text="Hello World 1" />
        <TextBubble position={[0, 2, -30]} text="Hello World 2" />
        <TextBubble position={[0, 2, -70]} text="Hello World 3" />
  
        <OrbitControls
          ref={cameraRef}
          maxPolarAngle={Math.PI / 2}  // Limit vertical tilt
          minPolarAngle={0}            // Limit vertical tilt
          enableZoom={true}
        />
      </Canvas>
  );
};

  
  

export default Scene;
