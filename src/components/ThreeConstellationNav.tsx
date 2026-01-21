import { Html, Line } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import type { Group } from 'three'

type NodeDef = {
  id: string
  label: string
  position: [number, number, number]
}

function Scene({
  nodes,
  links,
  onNavigate,
  reducedMotion,
}: {
  nodes: NodeDef[]
  links: Array<[number, number]>
  onNavigate: (id: string) => void
  reducedMotion: boolean
}) {
  const group = useRef<Group>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  useFrame((state, delta) => {
    if (reducedMotion) return
    const g = group.current
    if (!g) return

    g.rotation.y += delta * 0.12
    g.rotation.x = state.pointer.y * 0.25
    g.rotation.z = state.pointer.x * 0.15
  })

  return (
    <group ref={group}>
      <ambientLight intensity={0.9} />
      <pointLight position={[4, 3, 4]} intensity={0.9} />

      {links.map(([a, b]) => (
        <Line
          key={`${a}-${b}`}
          points={[nodes[a]!.position, nodes[b]!.position]}
          color="#22D3C1"
          transparent
          opacity={0.35}
          lineWidth={1}
        />
      ))}

      {nodes.map((n) => {
        const isHovered = hovered === n.id
        return (
          <group key={n.id} position={n.position}>
            <mesh
              onPointerOver={() => setHovered(n.id)}
              onPointerOut={() => setHovered((v) => (v === n.id ? null : v))}
              onClick={() => onNavigate(n.id)}
            >
              <sphereGeometry args={[isHovered ? 0.12 : 0.095, 16, 16]} />
              <meshStandardMaterial
                color={isHovered ? '#22D3C1' : '#8EF3E8'}
                emissive={isHovered ? '#22D3C1' : '#0B4B44'}
                emissiveIntensity={isHovered ? 1.2 : 0.65}
              />
            </mesh>
            {isHovered && (
              <Html
                center
                distanceFactor={10}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >
                <div
                  style={{
                    padding: '6px 10px',
                    borderRadius: 999,
                    background: 'rgba(16, 20, 26, 0.85)',
                    border: '1px solid rgba(34, 211, 193, 0.35)',
                    color: 'rgba(235,238,242,0.92)',
                    fontFamily: '"IBM Plex Mono", ui-monospace, monospace',
                    fontSize: 12,
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {n.label}
                </div>
              </Html>
            )}
          </group>
        )
      })}
    </group>
  )
}

export default function ThreeConstellationNav({
  nodes,
  onNavigate,
  reducedMotion,
}: {
  nodes: Array<{ id: string; label: string }>
  onNavigate: (id: string) => void
  reducedMotion: boolean
}) {
  const sceneNodes = useMemo<NodeDef[]>(
    () => [
      { ...nodes[0]!, position: [-1.9, 0.35, 0] },
      { ...nodes[1]!, position: [-0.7, -0.25, 0.2] },
      { ...nodes[2]!, position: [0.35, 0.5, -0.1] },
      { ...nodes[3]!, position: [1.45, -0.2, 0.15] },
      { ...nodes[4]!, position: [0.8, -0.95, -0.15] },
      { ...nodes[5]!, position: [-0.1, -0.75, 0.1] },
    ],
    [nodes],
  )

  const links = useMemo<Array<[number, number]>>(
    () => [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 1],
      [2, 5],
    ],
    [],
  )

  return (
    <div className="h-[260px] w-full rounded-3xl border border-border bg-card/60 shadow-soft">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4.3], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={reducedMotion ? 'demand' : 'always'}
      >
        <Scene
          nodes={sceneNodes}
          links={links}
          onNavigate={onNavigate}
          reducedMotion={reducedMotion}
        />
      </Canvas>
    </div>
  )
}
