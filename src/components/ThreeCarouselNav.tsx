import { Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import type { Group } from 'three'
import { useCarouselRotation } from '../hooks/useCarouselRotation'
import type { Content } from '../content/data'

const icons: Record<string, string> = {
  about: '👤',
  experience: '💼',
  services: '🚀',
  projects: '📦',
  skills: '⚡',
  contact: '📬',
}

function CarouselCard({
  id,
  label,
  icon,
  angle,
  radius,
  totalRotation,
  isActive,
  onClick,
}: {
  id: string
  label: string
  icon: string
  angle: number
  radius: number
  totalRotation: number
  isActive: boolean
  onClick: () => void
}) {
  const groupRef = useRef<Group>(null)
  const [hovered, setHovered] = useState(false)

  const x = Math.cos(angle + totalRotation) * radius
  const z = Math.sin(angle + totalRotation) * radius

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.pointer.y * 0.15
      groupRef.current.rotation.y = state.pointer.x * 0.15
    }
  })

  const opacity = isActive ? 1 : 0.4
  const emissiveIntensity = hovered || isActive ? 0.8 : 0.2

  return (
    <group ref={groupRef} position={[x, 0, z]} aria-label={`Card: ${id}`}>
      <mesh
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[2.2, 1.1]} />
        <meshStandardMaterial
          color={hovered ? 'rgba(34, 211, 193, 0.15)' : 'rgba(34, 211, 193, 0.08)'}
          transparent
          opacity={opacity}
          emissive={hovered || isActive ? '#22D3C1' : '#22D3C1'}
          emissiveIntensity={emissiveIntensity}
          side={2}
        />
      </mesh>
      <Text
        position={[0, 0.12, 0.1]}
        fontSize={0.5}
        color={hovered || isActive ? '#22D3C1' : 'rgba(142, 243, 232, 0.8)'}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-v14-latin-700.woff"
      >
        {icon}
      </Text>
      <Text
        position={[0, -0.2, 0.1]}
        fontSize={0.2}
        color={hovered || isActive ? '#EBEEF2' : 'rgba(235,238,242,0.7)'}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-v14-latin-500.woff"
      >
        {label}
      </Text>
    </group>
  )
}

export default function ThreeCarouselNav({
  c,
  prefersReducedMotion,
  onNavigate,
}: {
  c: Content
  prefersReducedMotion: boolean
  onNavigate: (id: string) => void
}) {
  const rotation = useCarouselRotation(prefersReducedMotion)

  const items = useMemo(
    () =>
      c.header.nav.map((n) => ({
        id: n.id,
        label: n.label,
        icon: icons[n.id] || '•',
      })),
    [c.header.nav],
  )

  const radius = window.innerWidth < 768 ? 2.5 : 3.5

  const angleStep = (Math.PI * 2) / items.length

  return (
    <div className="h-[260px] w-full rounded-3xl border border-border bg-card/60 shadow-soft">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={prefersReducedMotion ? 'demand' : 'always'}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[4, 3, 4]} intensity={0.9} />
        <group rotation={[0, rotation, 0]}>
          {items.map((item, index) => {
            const angle = index * angleStep
            const itemRotation = (rotation + angle) % (Math.PI * 2)
            const normalizedRotation = itemRotation < 0 ? itemRotation + Math.PI * 2 : itemRotation
            const isActive = normalizedRotation < 0.5 || normalizedRotation > Math.PI * 2 - 0.5

            return (
              <CarouselCard
                key={item.id}
                id={item.id}
                label={item.label}
                icon={item.icon}
                angle={angle}
                radius={radius}
                totalRotation={rotation}
                isActive={isActive}
                onClick={() => onNavigate(item.id)}
              />
            )
          })}
        </group>
      </Canvas>
    </div>
  )
}
