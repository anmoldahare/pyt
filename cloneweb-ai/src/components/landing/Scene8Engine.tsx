import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

function Starfield(props: any) {
  const ref = useRef<any>(null);
  const sphere = random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 });

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#4F46E5"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Scene8Engine() {
  return (
    <div className="h-[80vh] bg-black relative overflow-hidden flex items-center justify-center">
      
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Starfield />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center pointer-events-none">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">The Architecture</h2>
        <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Multi-Agent <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
            Intelligence
          </span>
        </h3>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          DeepSeek-V4 for precise code generation. Qwen3-VL for complex visual reasoning. Working together in a continuous feedback loop.
        </p>
      </div>

    </div>
  );
}
