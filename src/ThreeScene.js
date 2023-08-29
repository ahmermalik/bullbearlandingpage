import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BoxBufferGeometry } from 'three';  // <-- Imported here
import { Html } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import Model from './components/Model';


const Box = () => {
    const meshRef = useRef();
  
    useFrame(() => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01));
  
    return (
      <mesh ref={meshRef}>
<boxGeometry args={[1, 1]} />
        <meshStandardMaterial attach="material" color="hotpink" />
      </mesh>
    );
  };


  

const ThreeScene = () => (
  <Canvas  gammaFactor={2.2} gammaOutput={true}>

    <Environment preset="night" background="white" /> 
    <ambientLight intensity={0.5} />
    {/* <Model url={'/models/pepe/scene.gltf'} /> */}
    <Model url={'/models/pepe_the_frog/scene.gltf'} />
    <pointLight position={[10, 10, 10]} />
    <OrbitControls />
  </Canvas>
);

export default ThreeScene;
