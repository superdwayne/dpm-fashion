/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/3.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="1st" position={[-0.14, -0.84, -1.38]} rotation={[0, 1.49, 0]} scale={1.05}>
          <primitive object={nodes.Hips} />
          <primitive object={nodes.neutral_bone} />
          <primitive object={nodes.neutral_bone_1} />
          <primitive object={nodes.neutral_bone_2} />
          <primitive object={nodes.neutral_bone_3} />
          <primitive object={nodes.neutral_bone_4} />
          <primitive object={nodes.neutral_bone_5} />
          <primitive object={nodes.neutral_bone_6} />
          <primitive object={nodes.neutral_bone_7} />
          <primitive object={nodes.neutral_bone_8} />
          <group name="Wolf3D_Body001">
            <skinnedMesh name="Wolf3D_Body001_1" geometry={nodes.Wolf3D_Body001_1.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body001_1.skeleton} />
            <skinnedMesh name="Wolf3D_Body001_2" geometry={nodes.Wolf3D_Body001_2.geometry} material={materials['08_-_Default.001']} skeleton={nodes.Wolf3D_Body001_2.skeleton} />
          </group>
          <skinnedMesh name="Wolf3D_Hair001" geometry={nodes.Wolf3D_Hair001.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom001" geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top001" geometry={nodes.Wolf3D_Outfit_Top001.geometry} material={materials['Material.001']} skeleton={nodes.Wolf3D_Outfit_Top001.skeleton} />
          <skinnedMesh name="EyeLeft001" geometry={nodes.EyeLeft001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft001.skeleton} morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences} />
          <skinnedMesh name="EyeRight001" geometry={nodes.EyeRight001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight001.skeleton} morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Beard001" geometry={nodes.Wolf3D_Beard001.geometry} material={materials.Wolf3D_Beard} skeleton={nodes.Wolf3D_Beard001.skeleton} morphTargetDictionary={nodes.Wolf3D_Beard001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Beard001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head001" geometry={nodes.Wolf3D_Head001.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head001.skeleton} morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth001" geometry={nodes.Wolf3D_Teeth001.geometry} material={materials['Wolf3D_Teeth.003']} skeleton={nodes.Wolf3D_Teeth001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences} />
        </group>
        <group name="2nd" position={[0.12, 0.02, -2.47]} rotation={[0, -0.13, 0]} scale={1.05}>
          <primitive object={nodes.Hips_1} />
          <primitive object={nodes.neutral_bone_9} />
          <primitive object={nodes.neutral_bone_10} />
          <primitive object={nodes.neutral_bone_11} />
          <primitive object={nodes.neutral_bone_12} />
          <primitive object={nodes.neutral_bone_13} />
          <primitive object={nodes.neutral_bone_14} />
          <primitive object={nodes.neutral_bone_15} />
          <primitive object={nodes.neutral_bone_16} />
          <primitive object={nodes.neutral_bone_17} />
          <group name="Wolf3D_Body">
            <skinnedMesh name="Wolf3D_Body_1" geometry={nodes.Wolf3D_Body_1.geometry} material={materials['Wolf3D_Body.001']} skeleton={nodes.Wolf3D_Body_1.skeleton} />
            <skinnedMesh name="Wolf3D_Body_2" geometry={nodes.Wolf3D_Body_2.geometry} material={materials['main_object.001.mat']} skeleton={nodes.Wolf3D_Body_2.skeleton} />
            <skinnedMesh name="Wolf3D_Body_3" geometry={nodes.Wolf3D_Body_3.geometry} material={materials['main_object.001.mat.001']} skeleton={nodes.Wolf3D_Body_3.skeleton} />
          </group>
          <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials['Wolf3D_Hair.001']} skeleton={nodes.Wolf3D_Hair.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.001']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Material.003']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials['Wolf3D_Eye.001']} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials['Wolf3D_Eye.001']} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Beard" geometry={nodes.Wolf3D_Beard.geometry} material={materials['Wolf3D_Beard.001']} skeleton={nodes.Wolf3D_Beard.skeleton} morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials['Wolf3D_Skin.001']} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
        </group>
        <group name="4810c803a53d4a5c9b426e63b8488949fbx" position={[0, 0, -5.91]} scale={0.02}>
          <group name="RootNode">
            <group name="air_jordan1_Off_White_NIKEair_jordan1_Off_White_NIKE">
              <group name="polySurface1" />
              <group name="polySurface2" />
            </group>
          </group>
        </group>
        <PerspectiveCamera name="Camera" makeDefault={false} far={100} near={0.1} fov={14.08} position={[-0.2, 1.88, 1.02]} rotation={[-0.08, -0.05, 0]} scale={[0.2, 0.22, 0.18]} />
      </group>
    </group>
  )
}

useGLTF.preload('/3.gltf')