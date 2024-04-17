/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 LorientMob.glb --transform 
Files: LorientMob.glb [2.82MB] > D:\projects\Threejs\r3f-vite-starter\public\models\LorientMob-transformed.glb [120.67KB] (96%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshBasicMaterial } from 'three'

export function LorientMob(props) {
  const meshBasic = new MeshBasicMaterial({color:'black'})

  const { nodes, materials } = useGLTF('/models/LorientMob-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <lineSegments geometry={nodes.mergedMob_1.geometry} material={nodes.mergedMob_1.material} />
      <mesh geometry={nodes.mergedMob_2.geometry} material={meshBasic} />
    </group>
  )
}

useGLTF.preload('/models/LorientMob-transformed.glb')
