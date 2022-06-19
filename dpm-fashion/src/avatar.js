import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Model({ scroll, ...props }) {


    useFrame((state, delta) => {
      // console.log(delta)
      actions.FENDI.play()
      actions.CHILL.play()
    
       });


  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./3.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => void (actions["CAMERA"].play().paused = true), [])

  console.log(actions)
  useFrame((state) => {
    actions["CAMERA"].time = THREE.MathUtils.lerp(actions["CAMERA"].time, actions["CAMERA"].getClip().duration * scroll.current, 0.05)
    group.current.children[0].children.forEach((child, index) => {
      // child.material.color.lerp(color.set(hovered === child.name ? "tomato" : "#202020").convertSRGBToLinear(), hovered ? 0.1 : 0.05)
      const et = state.clock.elapsedTime
      //Floating effect
      // child.position.y = Math.sin((et + index * 2000) / 2) * 1
      // child.rotation.x = Math.sin((et + index * 2000) / 3) / 10
      // child.rotation.y = Math.cos((et + index * 2000) / 2) / 10
      // child.rotation.z = Math.sin((et + index * 2000) / 3) / 10
    })
  })


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
            <skinnedMesh name="Wolf3D_Body001_1" frustumCulled={false} geometry={nodes.Wolf3D_Body001_1.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body001_1.skeleton} />
            <skinnedMesh name="Wolf3D_Body001_2" frustumCulled={false} geometry={nodes.Wolf3D_Body001_2.geometry} material={materials['08_-_Default.001']} skeleton={nodes.Wolf3D_Body001_2.skeleton} />
          </group>
          <skinnedMesh name="Wolf3D_Hair001"  frustumCulled={false} geometry={nodes.Wolf3D_Hair001.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom001" frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top001" frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Top001.geometry} material={materials['Material.001']} skeleton={nodes.Wolf3D_Outfit_Top001.skeleton} />
          <skinnedMesh name="EyeLeft001" frustumCulled={false} geometry={nodes.EyeLeft001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft001.skeleton} morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences} />
          <skinnedMesh name="EyeRight001"  frustumCulled={false} geometry={nodes.EyeRight001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight001.skeleton} morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Beard001" frustumCulled={false} geometry={nodes.Wolf3D_Beard001.geometry} material={materials.Wolf3D_Beard} skeleton={nodes.Wolf3D_Beard001.skeleton} morphTargetDictionary={nodes.Wolf3D_Beard001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Beard001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head001" frustumCulled={false} geometry={nodes.Wolf3D_Head001.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head001.skeleton} morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth001" frustumCulled={false} geometry={nodes.Wolf3D_Teeth001.geometry} material={materials['Wolf3D_Teeth.003']} skeleton={nodes.Wolf3D_Teeth001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences} />
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
            <skinnedMesh name="Wolf3D_Body_1" frustumCulled={false} geometry={nodes.Wolf3D_Body_1.geometry} material={materials['Wolf3D_Body.001']} skeleton={nodes.Wolf3D_Body_1.skeleton} />
            <skinnedMesh name="Wolf3D_Body_2" frustumCulled={false} geometry={nodes.Wolf3D_Body_2.geometry} material={materials['main_object.001.mat']} skeleton={nodes.Wolf3D_Body_2.skeleton} />
            <skinnedMesh name="Wolf3D_Body_3" frustumCulled={false} geometry={nodes.Wolf3D_Body_3.geometry} material={materials['main_object.001.mat.001']} skeleton={nodes.Wolf3D_Body_3.skeleton} />
          </group>
          <skinnedMesh name="Wolf3D_Hair" frustumCulled={false} geometry={nodes.Wolf3D_Hair.geometry} material={materials['Wolf3D_Hair.001']} skeleton={nodes.Wolf3D_Hair.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.001']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Material.003']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="EyeLeft" frustumCulled={false} geometry={nodes.EyeLeft.geometry} material={materials['Wolf3D_Eye.001']} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
          <skinnedMesh name="EyeRight" frustumCulled={false} geometry={nodes.EyeRight.geometry} material={materials['Wolf3D_Eye.001']} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Beard" frustumCulled={false} geometry={nodes.Wolf3D_Beard.geometry} material={materials['Wolf3D_Beard.001']} skeleton={nodes.Wolf3D_Beard.skeleton} morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head" frustumCulled={false} geometry={nodes.Wolf3D_Head.geometry} material={materials['Wolf3D_Skin.001']} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth" frustumCulled={false} geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
        </group>
      
        <PerspectiveCamera name="Camera" makeDefault far={100} near={0.1} fov={14.08} position={[-0.2, 1.88, 1.02]} rotation={[-0.08, -0.05, 0]} scale={[0.2, 0.22, 0.18]} />
      </group>
    </group>
   
  )
}

useGLTF.preload('./3.gltf')
