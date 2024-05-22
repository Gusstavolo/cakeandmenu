import  { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { Text3D, Center, Text } from '@react-three/drei';

import fontdanci from "../assets/fontdanci.json"
import { AmbientLight } from 'three';


export function Cake3d(props) {
  const { nodes, materials } = useGLTF('/models/bolonew.glb')
  const meshRef = useRef();
  

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });


  return (
    <group  ref={meshRef} {...props} dispose={null}>
      <mesh  geometry={nodes.bolo1.geometry} material={materials.bolo1} rotation={[Math.PI / 2, 0, 0]} scale={[6.294, 6.294, 12.011]} />
      <mesh  geometry={nodes.cobertura.geometry} material={materials.cobertura} rotation={[Math.PI / 2, 0, 0]} scale={[6.294, 6.294, 6.844]} />
      <mesh  geometry={nodes.recheio.geometry} material={materials.recheio} rotation={[Math.PI / 2, 0, 0]} scale={[6.294, 6.294, 12.011]} />
      <mesh  geometry={nodes.strawberry.geometry} material={materials.Strawberry} rotation={[0.311, 0, Math.PI / 2]} scale={0.008} />
      <mesh  geometry={nodes.strawberry001.geometry} material={materials.Strawberry} rotation={[2.831, -0.006, -1.573]} scale={0.008} />
      <mesh  geometry={nodes.strawberry002.geometry} material={materials.Strawberry} rotation={[1.502, -1.259, 3.07]} scale={0.008} />
      <mesh  geometry={nodes.strawberry003.geometry} material={materials.Strawberry} rotation={[1.658, 1.259, -0.092]} scale={0.008} />
      <mesh  geometry={nodes.strawberry004.geometry} material={materials.Strawberry} rotation={[2.723, -0.719, -1.856]} scale={0.008} />
      <mesh  geometry={nodes.strawberry005.geometry} material={materials.Strawberry} rotation={[0.421, 0.725, 1.282]} scale={0.008} />
      <mesh  geometry={nodes.strawberry006.geometry} material={materials.Strawberry} rotation={[2.708, 0.757, -1.263]} scale={0.008} />
      <mesh  geometry={nodes.strawberry007.geometry} material={materials.Strawberry} rotation={[0.432, -0.751, 1.875]} scale={0.008} />
      <mesh  geometry={nodes.BRIGADEIRO.geometry} material={materials.brigaderio} scale={0.057} />
      <mesh  geometry={nodes.BRIGADEIRO001.geometry} material={materials.brigaderio} scale={0.059} />
      <mesh  geometry={nodes.BRIGADEIRO002.geometry} material={materials.brigaderio} scale={0.055} />
      <mesh  geometry={nodes.BRIGADEIRO003.geometry} material={materials.brigaderio} scale={0.051} />
      <mesh  geometry={nodes.BRIGADEIRO004.geometry} material={materials.brigaderio} scale={0.057} />
      <mesh  geometry={nodes.BRIGADEIRO005.geometry} material={materials.brigaderio} scale={0.049} />
      <mesh  geometry={nodes.bolo2.geometry} material={materials.bolo1} rotation={[Math.PI / 2, 0, 0]} scale={[5.162, 5.162, 9.85]} />
      <mesh  geometry={nodes.cobertura001.geometry} material={materials.cobertura} rotation={[Math.PI / 2, 0, -0.824]} scale={[5.162, 5.162, 5.613]} />
      <mesh  geometry={nodes.recheio001.geometry} material={materials.recheio} rotation={[Math.PI / 2, 0, 0]} scale={[5.162, 5.162, 9.85]} />
      <mesh  geometry={nodes.strawberry2.geometry} material={materials.Strawberry} position={[0, -0.044, 0]} rotation={[2.921, -0.135, -1.603]} scale={0.009} />
      <mesh  geometry={nodes.strawberry2001.geometry} material={materials.Strawberry} position={[0, -0.044, 0]} rotation={[1.658, 1.259, -0.092]} scale={0.009} />
      <mesh  geometry={nodes.strawberry2003.geometry} material={materials.Strawberry} position={[0, -0.044, 0]} rotation={[2.723, -0.719, -1.856]} scale={0.009} />
      <mesh  geometry={nodes.strawberry2002.geometry} material={materials.Strawberry} position={[0, -0.044, 0]} rotation={[2.708, 0.757, -1.263]} scale={0.009} />
      <mesh  geometry={nodes.BRIGADEIRO2001.geometry} material={materials.brigaderio} scale={0.059} />
      <mesh  geometry={nodes.BRIGADEIRO2.geometry} material={materials.brigaderio} scale={0.059} />
      <mesh  geometry={nodes.BRIGADEIRO2002.geometry} material={materials.brigaderio} scale={0.059} />
      <mesh receiveShadow geometry={nodes.Base_Cake.geometry} material={materials.Default} position={[0, 0, 0.02]} rotation={[Math.PI / 2, 0, 0]} scale={3.261} />
   
    </group>
  )
}

useGLTF.preload('/models/bolonew.glb')

export function CakeSlice(props) {
  const { nodes, materials } = useGLTF('/models/boloslice.glb')
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.81}>
        <mesh castShadow receiveShadow geometry={nodes.Circle008.geometry} material={materials.bolo1} />
        <mesh castShadow receiveShadow geometry={nodes.Circle008_1.geometry} material={materials.recheio} />
      </group>
     
      <mesh castShadow receiveShadow geometry={nodes.strawberry008.geometry} material={materials['Strawberry.001']} rotation={[0.311, 0, Math.PI / 2]} scale={0.008} />
      <mesh castShadow receiveShadow geometry={nodes.BRIGADEIRO006.geometry} material={materials['brigaderio.001']} scale={0.082} />
      <mesh castShadow receiveShadow geometry={nodes.BRIGADEIRO007.geometry} material={materials['brigaderio.001']} scale={0.076} />
      <mesh castShadow receiveShadow geometry={nodes.BRIGADEIRO008.geometry} material={materials['brigaderio.001']} scale={0.068} />
      <mesh castShadow receiveShadow geometry={nodes.Circle001.geometry} material={materials.cobertura} rotation={[Math.PI / 2, 0, 0]} scale={0.81} />
    </group>
  )
}

useGLTF.preload('/models/boloslice.glb')

export const Experience = () => {
 
  const meshRef = useRef();
  

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });
  const { width: w, height: h } = useThree((state) => state.viewport);

    return (
    <>
     
     <ambientLight intensity={1}></ambientLight>

      <PerspectiveCamera makeDefault rotation={[0, 0, 0]} position={[0, 2, 2.7]} />
      <directionalLight castShadow intensity={8} position={[0,1, 0.8]} ></directionalLight>
       
      <Cake3d  position={[0, 1.48, 0.8]} rotation={[0.3, 3, 0]} />
      <group rotation={[0.3, 0, 0]} position={[0, 2.42, 1.1]} ref={meshRef}>
          <mesh position={[0, 0.08, -0.06]}>
            <Center >
              <Text3D 
              font={fontdanci} 
              scale={0.098} 
            maxWidth={[-w / 5, -h * 2, 3]}
            height={0.2}
              curveSegments={12}
              bevelEnabled={true}
              bevelThickness={0.01}
              bevelSize={0.02}
              bevelSegments={5}
            >
              Gustavo
            <meshStandardMaterial color="#b34458"    />
          </Text3D>
          </Center>
        </mesh>
        <mesh position={[0, 0.01, -0.06]}>
          <Center >
              <Text3D 
              font={fontdanci} 
              scale={0.078} 
            maxWidth={[-w / 5, -h * 2, 3]}
            height={0.2}
            curveSegments={12}
            bevelEnabled={true}
            bevelThickness={0.01}
            bevelSize={0.02}
            bevelSegments={5}
            >
              oliveira
            <meshStandardMaterial color="#b34458"    />
          </Text3D>
          </Center>
        </mesh>
        <mesh position={[0, -0.05, -0.02]}>
          <Center >
            <Text3D 
            font={fontdanci} 
            scale={0.068} 
          maxWidth={[2, -h * 2, 3]}
          height={0.2}
          curveSegments={12}
          bevelEnabled={true}
          bevelThickness={0.01}
          bevelSize={0.02}
          bevelSegments={5}
          >
            19
          <meshStandardMaterial color="#b34458"    />
        </Text3D>
        </Center>
        </mesh>
        
      
      </group>
    
  
      
      </>
            
    )
}
export function OverlaySlice() {
    
  return(
     <Canvas shadows>
     <PerspectiveCamera makeDefault rotation={[0, 0, 0]} position={[0, 2, 2.7]} />
      <pointLight intensity={20} position={[0, 0, 3]}></pointLight>
      <directionalLight castShadow
    
       intensity={5}
       position={[0, -2, 1.5]}
       
      ></directionalLight>
      <directionalLight castShadow
    
    intensity={5}
    position={[0, 5, 3]} />
    
   
    
      <CakeSlice  position={[0, 1.9, 1.4]} rotation={[0.6, 0.9, 0]} />
        
     </Canvas>
  )
}