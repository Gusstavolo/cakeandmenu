import  { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';





export function BOLO(props) {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF('public/Componets/bolo2.glb')

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
      <mesh receiveShadow geometry={nodes.RECHEIO2001.geometry} material={materials.recheio} material-color = "#e8e3d8" position={[0, 1.556, 0]} scale={[0.765, 0.373, 0.765]} />
      <mesh receiveShadow geometry={nodes.RECHEIO2.geometry} material={materials.recheio} position={[0, 1.289, 0]} scale={[0.765, 0.373, 0.765]} />
      <mesh receiveShadow geometry={nodes.COBERTURA2.geometry} material={materials.COBERTURA} position={[0, 1.592, 0]} scale={[0.777, 0.38, 0.777]} />
      <mesh receiveShadow geometry={nodes.BRIGADEIRO.geometry} material={materials.BriGadeiros} material-color = "#503525" position={[0.89, 1.276, 0.038]} scale={0.123} />
      <mesh receiveShadow geometry={nodes.TOPO1.geometry} material={materials.TOPO} position={[0.435, 1.516, 0]} rotation={[Math.PI / 2, 0, -3.069]} scale={0.95} />
      <mesh receiveShadow geometry={nodes.TOPO1001.geometry} material={materials.TOPO} position={[0.435, 2.292, 0]} rotation={[Math.PI / 2, 0, -3.069]} scale={0.95} />
      <mesh receiveShadow geometry={nodes.BRIGADEIRO001.geometry} material={materials.BriGadeiros} position={[0.574, 2.059, 0.075]} scale={0.078} />
    </group>
  )
}

useGLTF.preload('public/Componets/bolo2.glb')


export const Experience = () => {
  
    
    return (
    <>
     
      <ambientLight intensity={1.7} />
      <directionalLight castShadow shadow-camera-left={0} shadow-camera-right={0} shadow-camera-top={0} shadow-camera-bottom={-1} />
      <PerspectiveCamera makeDefault rotation={[0, 0, 0]} position={[0, 2, 2.7]} />
      <BOLO position={[0, 0.65, -1.2]} rotation={[0.3, 3, 0]} />
      </>
            
    )
}