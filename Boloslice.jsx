/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/boloslice.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/boloslice.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.81}>
        <mesh geometry={nodes.Circle008.geometry} material={materials.bolo1} />
        <mesh geometry={nodes.Circle008_1.geometry} material={materials.recheio} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.81}>
        <mesh geometry={nodes.Circle004_Circle027_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Circle004_Circle027_2.geometry} material={materials['Material.016']} />
      </group>
      <mesh geometry={nodes.strawberry008.geometry} material={materials['Strawberry.001']} rotation={[0.311, 0, Math.PI / 2]} scale={0.008} />
      <mesh geometry={nodes.BRIGADEIRO006.geometry} material={materials['brigaderio.001']} scale={0.082} />
      <mesh geometry={nodes.BRIGADEIRO007.geometry} material={materials['brigaderio.001']} scale={0.076} />
      <mesh geometry={nodes.BRIGADEIRO008.geometry} material={materials['brigaderio.001']} scale={0.068} />
      <mesh geometry={nodes.Circle001.geometry} material={materials.cobertura} rotation={[Math.PI / 2, 0, 0]} scale={0.81} />
    </group>
  )
}

useGLTF.preload('/boloslice.glb')