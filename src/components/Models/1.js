/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/1.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="3W10ZO" geometry={nodes['3W10ZO'].geometry} material={materials['HEADBAND.001']} skeleton={nodes['3W10ZO'].skeleton} />
          <skinnedMesh name="5JGX5N" geometry={nodes['5JGX5N'].geometry} material={materials['mid sock']} skeleton={nodes['5JGX5N'].skeleton} />
          <skinnedMesh name="83884S" geometry={nodes['83884S'].geometry} material={materials['final face ']} skeleton={nodes['83884S'].skeleton} />
          <skinnedMesh name="ADLPZH" geometry={nodes.ADLPZH.geometry} material={materials['Material.020']} skeleton={nodes.ADLPZH.skeleton} />
          <skinnedMesh name="E1PY6Y" geometry={nodes.E1PY6Y.geometry} material={materials['wavy jersey']} skeleton={nodes.E1PY6Y.skeleton} />
          <group name="ECKRAN">
            <skinnedMesh name="sk_dante_ingame_noJacket004" geometry={nodes.sk_dante_ingame_noJacket004.geometry} material={materials['mi_dante_eye.005']} skeleton={nodes.sk_dante_ingame_noJacket004.skeleton} />
            <skinnedMesh name="sk_dante_ingame_noJacket004_1" geometry={nodes.sk_dante_ingame_noJacket004_1.geometry} material={materials['mi_dante_eye.004']} skeleton={nodes.sk_dante_ingame_noJacket004_1.skeleton} />
          </group>
          <skinnedMesh name="M7TI7F" geometry={nodes.M7TI7F.geometry} material={materials['mTranslucent.001']} skeleton={nodes.M7TI7F.skeleton} />
          <skinnedMesh name="MGCA6Z" geometry={nodes.MGCA6Z.geometry} material={materials['Material.048']} skeleton={nodes.MGCA6Z.skeleton} />
          <skinnedMesh name="O137WV" geometry={nodes.O137WV.geometry} material={materials['wavy jersey']} skeleton={nodes.O137WV.skeleton} />
          <skinnedMesh name="SPQER4" geometry={nodes.SPQER4.geometry} material={materials['forearm mid']} skeleton={nodes.SPQER4.skeleton} />
          <skinnedMesh name="VMQCUB" geometry={nodes.VMQCUB.geometry} material={materials['human.005']} skeleton={nodes.VMQCUB.skeleton} />
          <skinnedMesh name="W6MVKD" geometry={nodes.W6MVKD.geometry} material={materials['human.005']} skeleton={nodes.W6MVKD.skeleton} />
          <skinnedMesh name="YN377P" geometry={nodes.YN377P.geometry} material={materials.DREADS} skeleton={nodes.YN377P.skeleton} />
          <skinnedMesh name="ZITAOA" geometry={nodes.ZITAOA.geometry} material={materials['forearm mid']} skeleton={nodes.ZITAOA.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/1.glb')
