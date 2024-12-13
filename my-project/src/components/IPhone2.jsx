import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  // Load the GLTF model
  const { nodes, materials } = useGLTF('/iphone_16_pro_max.glb');
  
  return (
    <group {...props} dispose={null}>
      {/* Main Model */}
      <group scale={0.01}>
        {/* Group for iPhone body */}
        <group position={[-0.328, 2.26, 0.199]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_black002_0.geometry}
            material={materials['black.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_basecolor001_0.geometry}
            material={materials['basecolor.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_metalframe002_0.geometry}
            material={materials['metalframe.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_metaL001_0.geometry}
            material={materials['metaL.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_glass002_0.geometry}
            material={materials['glass.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_apple_logo001_0.geometry}
            material={materials['apple_logo.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_screen001_0.geometry}
            material={materials['screen.001']}
          />
        </group>

        {/* Additional Groups for other parts like camera, lens, etc. */}
        <group position={[-1.412, 78.525, -2.209]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_black002_0.geometry}
            material={materials['black.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_glass002_0.geometry}
            material={materials['glass.002']}
          />
        </group>
        
        {/* Other model components */}
        {/* Group for other elements (e.g., lens, buttons, etc.) */}
        <group position={[-0.395, -6.001, -38.303]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={1.482}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017_metalframe002_0.geometry}
            material={materials['metalframe.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017_black002_0.geometry}
            material={materials['black.002']}
          />
        </group>
        
        {/* Another component with lens or screen */}
        <group position={[5.382, 71.83, 25.412]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[8.288, 8.288, 2.595]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_metalframe002_0.geometry}
            material={materials['metalframe.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_black002_0.geometry}
            material={materials['black.002']}
          />
        </group>

        {/* Other components with lens and materials */}
        <group position={[5.382, 51.985, 25.276]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[8.288, 8.288, 2.595]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_metalframe002_0.geometry}
            material={materials['metalframe.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_black002_0.geometry}
            material={materials['black.002']}
          />
        </group>

        {/* Continue adding groups as needed... */}
      </group>
    </group>
  );
}

// Preload the GLTF model to ensure it loads before rendering
useGLTF.preload('/iphone_16_pro_max.glb');

export default Model;
