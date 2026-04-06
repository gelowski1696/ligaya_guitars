import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { motion } from 'framer-motion'

function LoadingModel() {
  const gltf = useLoader(GLTFLoader, '/assets/3Dguitar.glb')
  const groupRef = useRef()
  const model = useMemo(() => gltf.scene.clone(), [gltf])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = -0.55 + Math.sin(state.clock.elapsedTime * 0.9) * 0.12
    groupRef.current.rotation.x = -0.08 + Math.sin(state.clock.elapsedTime * 0.45) * 0.02
    groupRef.current.position.y = -0.95 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08
  })

  return (
    <primitive
      ref={groupRef}
      object={model}
      scale={2.05}
      position={[0, -0.95, 0]}
      rotation={[-0.08, -0.55, 0.04]}
    />
  )
}

useLoader.preload(GLTFLoader, '/assets/3Dguitar.glb')

export default function LoadingIntro() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0d0700]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(216,156,78,0.18),transparent_28%),linear-gradient(180deg,rgba(10,5,2,0.76)_0%,rgba(10,5,2,0.96)_100%)]" />
      <div className="pointer-events-none absolute inset-x-[18%] bottom-[16%] h-28 rounded-full bg-[radial-gradient(circle,rgba(216,156,78,0.28),transparent_72%)] blur-3xl" />

      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <div className="h-[18rem] w-[18rem] sm:h-[22rem] sm:w-[22rem]">
          <Canvas
            dpr={[1, 1.2]}
            camera={{ position: [0, 0.45, 8.9], fov: 24 }}
            gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
          >
            <ambientLight intensity={1.15} />
            <directionalLight position={[4, 5, 4]} intensity={2.25} color="#ffe8bf" />
            <directionalLight position={[-3, 2, 3]} intensity={0.55} color="#c98f4b" />
            <pointLight position={[-4, -2, 3]} intensity={0.7} color="#c98f4b" />
            <Suspense fallback={null}>
              <LoadingModel />
            </Suspense>
          </Canvas>
        </div>

        <div className="-mt-4 flex flex-col items-center gap-3">
          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[rgba(240,200,137,0.74)]">
            Ligaya Guitars
          </div>
          <div className="flex items-end gap-3 text-[var(--accent-soft)]">
            {[
              { y: [0, -8, 0], delay: 0 },
              { y: [0, -12, 0], delay: 0.15 },
              { y: [0, -7, 0], delay: 0.3 },
            ].map((note, index) => (
              <motion.svg
                key={index}
                width="18"
                height="26"
                viewBox="0 0 18 26"
                fill="none"
                animate={{ y: note.y, opacity: [0.65, 1, 0.65] }}
                transition={{
                  duration: 1.4,
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
