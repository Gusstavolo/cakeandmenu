import  { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { DirectionalLight } from 'three';

export function Cake3d(props) {
  const { nodes, materials } = useGLTF('/models/bolonew.glb')
  const meshRef = useRef();
  

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });


  return (
    <group castShadow receiveShadow ref={meshRef} {...props} dispose={null}>
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
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.81}>
        <mesh geometry={nodes.Circle008.geometry} material={materials.bolo1} />
        <mesh geometry={nodes.Circle008_1.geometry} material={materials.recheio} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.61}>
        <mesh receiveShadow geometry={nodes.Circle004_Circle027_1.geometry} material={materials['Material.009']} />
        <mesh receiveShadow geometry={nodes.Circle004_Circle027_2.geometry} material={materials['Material.016']} />
      </group>
      <mesh geometry={nodes.strawberry008.geometry} material={materials['Strawberry.001']} rotation={[0.311, 0, Math.PI / 2]} scale={0.008} />
      <mesh geometry={nodes.BRIGADEIRO006.geometry} material={materials['brigaderio.001']} scale={0.082} />
      <mesh geometry={nodes.BRIGADEIRO007.geometry} material={materials['brigaderio.001']} scale={0.076} />
      <mesh receiveShadow geometry={nodes.BRIGADEIRO008.geometry} material={materials['brigaderio.001']} scale={0.068} />
      <mesh receiveShadow geometry={nodes.Circle001.geometry} material={materials.cobertura} rotation={[Math.PI / 2, 0, 0]} scale={0.81} />
    </group>
  )
}

useGLTF.preload('/models/boloslice.glb')

export const Experience = () => {
  
    
    return (
    <>
     

      <PerspectiveCamera makeDefault rotation={[0, 0, 0]} position={[0, 2, 2.7]} />
      <directionalLight castShadow intensity={8} position={[0,1, 0.8]} ></directionalLight>
      <Cake3d  position={[0, 1.56, 1.2]} rotation={[0.3, 3, 0]} />
      
      </>
            
    )
}
export function OverlaySlice() {
    
  return(
     <>
     <ambientLight intensity={3}></ambientLight>
     <PerspectiveCamera makeDefault rotation={[0, 0, 0]} position={[0, 2, 2.7]} />
      <directionalLight castShadow intensity={8} position={[0.1,0.5, 0.4]} ></directionalLight>
      <CakeSlice  position={[0, 1.9, 1.4]} rotation={[0.6, 0.9, 0]} />
        
     </>
  )
}