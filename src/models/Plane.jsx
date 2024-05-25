import React, { useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Plane() {
  const { scene } = useGLTF(planeScene);
  const planeRef = useRef();
  const clock = new THREE.Clock();

  useFrame(() => {
    if (planeRef.current) {
      const t = clock.getElapsedTime() * 0.3; // Giảm tốc độ di chuyển

      // Tính toán vị trí mới
      const x = Math.sin(t) * 2.5;
      const y = Math.sin(t * 0.5) * 1;
      const z = Math.cos(t) * 2.5;

      // Cập nhật vị trí máy bay
      planeRef.current.position.set(x, y, z);

      // Tính toán hướng máy bay
      const lookAtPosition = new THREE.Vector3(
        Math.sin(t + 0.01) * 2.5,
        Math.sin((t + 0.01) * 0.5) * 1,
        Math.cos(t + 0.01) * 2.5
      );
      planeRef.current.lookAt(lookAtPosition);
    }
  });

  return (
    <mesh ref={planeRef} scale={[0.2, 0.2, 0.2]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Plane;
