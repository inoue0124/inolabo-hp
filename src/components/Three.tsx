import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Physics, useBox, usePlane } from '@react-three/cannon'

const Plane = (props: any) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[5, 5]} />
      <shadowMaterial attach="material" opacity={0.5} />
    </mesh>
  )
}

const Box = () => {
  const x = 2
  const y = 2
  const z = 2
  const [ref] = useBox(() => ({
    mass: 1,
    args: [x, y, z],
    position: [Math.random() * -30, 0.5, Math.random() * -20],
  }))
  return (
    <mesh ref={ref} castShadow={true}>
      <boxGeometry attach="geometry" args={[x, y, z]} />
      <meshLambertMaterial attach="material" />
    </mesh>
  )
}

const Three: React.FC = React.memo(() => {
  return (
    <div
      style={{ height: '50vh', width: '100vw', position: 'absolute', zIndex: -1, left: 0, top: 0 }}
    >
      <Canvas camera={{ position: [10, 2, 20], fov: 50 }}>
        <fog args={[0x000000, 0, 10]} />
        <Physics gravity={[5, -10, 0]}>
          <ambientLight intensity={1} color={0x09ffff} />
          <pointLight intensity={2} color={0xdddddd} distance={30} />
          <group>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </group>
          <Plane position={[0, 0, 0]} />
          {/* <gridHelper /> */}
          {/* <Controls /> */}
        </Physics>
      </Canvas>
    </div>
  )
})
export default Three
