import  { useRef } from 'react'
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


export function BOLO(props) {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF('/models/bolo2.glb')

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });


  return (
    <group ref={meshRef} {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.BASE1BOLO.geometry} material={materials.BASEBOLO} material-color = "#7a5239" position={[0, 0.596, 0]} scale={[1.08, 0.527, 1.08]} />
      <mesh receiveShadow geometry={nodes.RECHEIO001.geometry} material={materials.recheio} position={[0, 0.545, 0]} scale={[1.08, 0.527, 1.08]} />
      <mesh receiveShadow geometry={nodes.RECHEIO.geometry} material={materials.recheio} position={[0, 0.169, 0]} scale={[1.08, 0.527, 1.08]} />
      <mesh receiveShadow geometry={nodes.COBERTURA1.geometry} material={materials.COBERTURA} position={[0, 0.596, 0]} scale={[1.098, 0.536, 1.098]} />
      <mesh receiveShadow geometry={nodes.BASE2BOLO.geometry} material={materials.BASEBOLO} position={[0, 1.592, 0]} scale={[0.765, 0.373, 0.765]} />
      <mesh receiveShadow geometry={nodes.RECHEIO2001.geometry} material={materials.recheio} material-color = "#f5ddb6" position={[0, 1.556, 0]} scale={[0.765, 0.373, 0.765]} />
      <mesh receiveShadow geometry={nodes.RECHEIO2.geometry} material={materials.recheio} position={[0, 1.289, 0]} scale={[0.765, 0.373, 0.765]} />
      <mesh receiveShadow geometry={nodes.COBERTURA2.geometry} material={materials.COBERTURA} position={[0, 1.592, 0]} scale={[0.777, 0.38, 0.777]} />
      <mesh receiveShadow geometry={nodes.BRIGADEIRO.geometry} material={materials.BriGadeiros} material-color = "#503525" position={[0.89, 1.276, 0.038]} scale={0.123} />
      <mesh receiveShadow geometry={nodes.TOPO1.geometry} material={materials.TOPO} position={[0.435, 1.516, 0]} rotation={[Math.PI / 2, 0, -3.069]} scale={0.95} />
      <mesh receiveShadow geometry={nodes.TOPO1001.geometry} material={materials.TOPO} position={[0.435, 2.292, 0]} rotation={[Math.PI / 2, 0, -3.069]} scale={0.95} />
      <mesh receiveShadow geometry={nodes.BRIGADEIRO001.geometry} material={materials.BriGadeiros} position={[0.574, 2.059, 0.075]} scale={0.078} />
    </group>
  )
}

useGLTF.preload('/models/bolo2.glb')


export const Experience = () => {
  
    
    return (
    <>
     

      <PerspectiveCamera makeDefault rotation={[0, 0, 0]} position={[0, 2, 2.7]} />
      <directionalLight castShadow intensity={8} position={[0,1, 0.8]} ></directionalLight>
      <Cake3d  position={[0, 1.66, 1]} rotation={[0.3, 3, 0]} />
      
      </>
            
    )
}