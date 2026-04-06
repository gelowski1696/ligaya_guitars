import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { motion } from 'framer-motion'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'

function LiteLoadingModel() {
  const gltf = useLoader(GLTFLoader, '/assets/3Dguitar.glb')
  const groupRef = useRef()
  const model = useMemo(() => {
    const scene = gltf.scene.clone()
    scene.traverse((node) => {
      if (!node.isMesh || !node.material) return

      const materials = Array.isArray(node.material) ? node.material : [node.material]
      materials.forEach((material) => {
        if (material.map) {
          material.map.colorSpace = SRGBColorSpace
          material.map.needsUpdate = true
        }
        material.needsUpdate = true
      })
    })
    return scene
  }, [gltf])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = -0.5 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08
    groupRef.current.rotation.x = -0.05 + Math.sin(state.clock.elapsedTime * 0.4) * 0.015
    groupRef.current.position.y = -0.92 + Math.sin(state.clock.elapsedTime * 0.7) * 0.05
  })

  return (
    <primitive
      ref={groupRef}
      object={model}
      scale={1.82}
      position={[0, -0.92, 0]}
      rotation={[-0.05, -0.5, 0.03]}
    />
  )
}

useLoader.preload(GLTFLoader, '/assets/3Dguitar.glb')

export default function LoadingIntroLite() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0d0700]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(216,156,78,0.18),transparent_24%),linear-gradient(180deg,rgba(10,5,2,0.74)_0%,rgba(10,5,2,0.97)_100%)]" />
      <div className="pointer-events-none absolute inset-x-[12%] bottom-[18%] h-24 rounded-full bg-[radial-gradient(circle,rgba(216,156,78,0.24),transparent_72%)] blur-3xl" />

      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <div className="h-[16rem] w-[16rem] sm:h-[18rem] sm:w-[18rem]">
          <Canvas
            dpr={1}
            camera={{ position: [0, 0.35, 8.6], fov: 24 }}
            gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
            onCreated={({ gl }) => {
              gl.outputColorSpace = SRGBColorSpace
              gl.toneMapping = ACESFilmicToneMapping
              gl.toneMappingExposure = 1.08
            }}
          >
            <ambientLight intensity={1.05} />
            <directionalLight position={[4, 4, 4]} intensity={1.9} color="#ffe8bf" />
            <pointLight position={[-3, -2, 3]} intensity={0.5} color="#c98f4b" />
            <Suspense fallback={null}>
              <LiteLoadingModel />
            </Suspense>
          </Canvas>
        </div>

        <div className="-mt-3 text-center">
          <div className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-[rgba(240,200,137,0.74)]">
            Ligaya Guitars
          </div>
          <div className="mt-3 flex items-end justify-center gap-3 text-[var(--accent-soft)]">
            {[
              { y: [0, -6, 0], delay: 0 },
              { y: [0, -10, 0], delay: 0.14 },
              { y: [0, -7, 0], delay: 0.28 },
            ].map((note, index) => (
              <motion.svg
                key={index}
                width="18"
                height="26"
                viewBox="0 0 18 26"
                fill="none"
                animate={{ y: note.y, opacity: [0.62, 1, 0.62] }}
                transition={{
                  duration: 1.35,
                  delay: note.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <path
                  d="M11 3v13.2a3.2 3.2 0 1 1-1.4-2.64V6.4l6-1.7v10.9a3.2 3.2 0 1 1-1.4-2.64V2L11 3Z"
                  fill="currentColor"
                />
              </motion.svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
