import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function GuitarBody({ subtle = false }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    meshRef.current.rotation.y = Math.sin(t * 0.24) * (subtle ? 0.08 : 0.14)
    meshRef.current.rotation.x = Math.sin(t * 0.16) * (subtle ? 0.02 : 0.04)
  })

  const woodMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(subtle ? '#6B3C18' : '#5C2E00'),
        roughness: subtle ? 0.54 : 0.45,
        metalness: 0.05,
        transparent: subtle,
        opacity: subtle ? 0.72 : 1,
      }),
    [subtle],
  )

  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#C9A84C'),
        roughness: subtle ? 0.38 : 0.24,
        metalness: 0.78,
        transparent: subtle,
        opacity: subtle ? 0.58 : 1,
      }),
    [subtle],
  )

  const darkWoodMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#1A0800'),
        roughness: 0.62,
        metalness: 0,
        transparent: subtle,
        opacity: subtle ? 0.5 : 1,
      }),
    [subtle],
  )

  const stringMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#D4AF37'),
        roughness: 0.14,
        metalness: 0.88,
        transparent: subtle,
        opacity: subtle ? 0.4 : 1,
      }),
    [subtle],
  )

  return (
    <group ref={meshRef} position={[0, -0.5, 0]}>
      <mesh material={woodMaterial} position={[0, -0.5, 0]}>
        <sphereGeometry args={[1.2, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.65]} />
      </mesh>

      <mesh material={woodMaterial} position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.95, 24, 24, 0, Math.PI * 2, Math.PI * 0.35, Math.PI * 0.65]} />
      </mesh>

      <mesh material={woodMaterial} position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.6, 0.7, 0.5, 24]} />
      </mesh>

      <mesh material={darkWoodMaterial} position={[0, -0.2, -0.12]}>
        <sphereGeometry args={[1.15, 24, 24]} />
      </mesh>

      <mesh material={darkWoodMaterial} position={[0, -0.1, 0.13]}>
        <cylinderGeometry args={[0.28, 0.28, 0.05, 24]} />
      </mesh>

      <mesh material={goldMaterial} position={[0, -0.1, 0.14]}>
        <torusGeometry args={[0.3, 0.02, 8, 24]} />
      </mesh>

      <mesh material={woodMaterial} position={[0, 1.55, 0]}>
        <cylinderGeometry args={[0.12, 0.16, 2.2, 12]} />
      </mesh>

      <mesh material={darkWoodMaterial} position={[0, 1.55, 0.1]}>
        <boxGeometry args={[0.22, 2.1, 0.06]} />
      </mesh>

      {[-0.7, -0.4, -0.1, 0.2, 0.5, 0.8].map((y, index) => (
        <mesh key={index} material={goldMaterial} position={[0, 1.55 + y * 0.5, 0.13]}>
          <boxGeometry args={[0.23, 0.015, 0.015]} />
        </mesh>
      ))}

      {[-0.05, -0.02, 0, 0.02, 0.04, 0.06].map((x, index) => (
        <mesh key={index} material={stringMaterial} position={[x, 0.6, 0.14]}>
          <cylinderGeometry args={[0.003, 0.003, 3.6, 6]} />
        </mesh>
      ))}

      <mesh material={woodMaterial} position={[0, 2.85, 0]}>
        <boxGeometry args={[0.35, 0.7, 0.12]} />
      </mesh>

      {[[-0.12, 2.95], [-0.12, 2.78], [-0.12, 2.62], [0.12, 2.95], [0.12, 2.78], [0.12, 2.62]].map(
        ([x, y], index) => (
          <group key={index}>
            <mesh material={goldMaterial} position={[x, y, 0.07]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.035, 0.035, 0.12, 10]} />
            </mesh>
            <mesh material={goldMaterial} position={[x, y, 0.14]}>
              <sphereGeometry args={[0.04, 8, 8]} />
            </mesh>
          </group>
        ),
      )}

      <mesh material={goldMaterial} position={[0, 2.65, 0.12]}>
        <boxGeometry args={[0.25, 0.03, 0.04]} />
      </mesh>

      <mesh material={goldMaterial} position={[0, -0.8, 0.13]}>
        <boxGeometry args={[0.5, 0.08, 0.05]} />
      </mesh>
    </group>
  )
}

function HeroRig({ subtle = false }) {
  const groupRef = useRef()
  const ringA = useRef()
  const ringB = useRef()
  const orb = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * (subtle ? 0.6 : 0.85)) * (subtle ? 0.12 : 0.2)
      groupRef.current.rotation.z = Math.sin(t * 0.22) * (subtle ? 0.02 : 0.035)
    }

    if (ringA.current) ringA.current.rotation.z = t * 0.18
    if (ringB.current) ringB.current.rotation.z = -t * 0.13
    if (orb.current) {
      orb.current.position.x = Math.sin(t * 0.3) * (subtle ? 0.18 : 0.32)
      orb.current.position.y = Math.cos(t * 0.24) * (subtle ? 0.12 : 0.18)
    }
  })

  return (
    <group ref={groupRef} position={subtle ? [0.28, -0.35, -0.1] : [0, -0.08, 0]}>
      <mesh ref={ringA} position={[0, 0, -2.4]}>
        <torusGeometry args={[2.75, 0.012, 4, 48]} />
        <meshBasicMaterial color="#C9A84C" transparent opacity={subtle ? 0.08 : 0.14} />
      </mesh>
      <mesh ref={ringB} position={[0, 0, -2.1]}>
        <torusGeometry args={[3.4, 0.009, 4, 48]} />
        <meshBasicMaterial color="#E8C96A" transparent opacity={subtle ? 0.05 : 0.1} />
      </mesh>
      <mesh ref={orb} position={[0.24, 0.12, -3.05]}>
        <sphereGeometry args={[subtle ? 1.34 : 1.55, 20, 20]} />
        <meshBasicMaterial color="#2A1303" transparent opacity={subtle ? 0.16 : 0.28} />
      </mesh>
      <GuitarBody subtle={subtle} />
    </group>
  )
}

export default function GuitarScene({ subtle = false }) {
  return (
    <Canvas
      dpr={subtle ? [1, 1.2] : [1, 1.4]}
      camera={{ position: [0, 0, subtle ? 7.8 : 7.2], fov: subtle ? 42 : 48 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={subtle ? 0.62 : 0.45} />
      <pointLight position={[4.5, 5, 5]} intensity={subtle ? 0.95 : 1.3} color="#FFF5E0" />
      <pointLight position={[-4, -1.4, 3]} intensity={subtle ? 0.34 : 0.55} color="#C9A84C" />
      <spotLight
        position={[0, 7, 4]}
        angle={0.34}
        penumbra={0.8}
        intensity={subtle ? 0.9 : 1.35}
        color="#FFE8A0"
      />

      <HeroRig subtle={subtle} />
    </Canvas>
  )
}
