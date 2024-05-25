import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import skyScene from '../assets/3d/Sky_2.glb'

function Sky() {
  const sky = useGLTF(skyScene)
  const skyRef = useRef()

  useFrame(() => {
    if (skyRef.current) {
      // Xoay sky quanh trục Y
      skyRef.current.rotation.y += 0.0004
    }
  })

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky
