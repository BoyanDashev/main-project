/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { BoxGeometry } from "three";
import { Suspense } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { Html } from "@react-three/drei";

import React, { useRef } from "react";

function Model(props) {
  const { nodes, materials } = useGLTF('/models/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-5.177, -20.679, 0]} rotation={[Math.PI / 2, -0.462, Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh geometry={nodes.meshNode_Material_u1_v1_0.geometry} material={materials.Material_u1_v1} />
          <mesh geometry={nodes.meshNode_Material_u2_v1_0.geometry} material={materials.Material_u2_v1} />
          <mesh geometry={nodes.meshNode_Material_u1_v2_0.geometry} material={materials.Material_u1_v2} />
        </group>
      </group>
    </group>
  )
}


const Computer = () => {
  return (
    <div className="bg-slate-900 flex w-auto h-[700px] pt-20 ">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <Model />
          <OrbitControls enableRotate={true} enableZoom={ true} enablePan={ true } />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Computer;
