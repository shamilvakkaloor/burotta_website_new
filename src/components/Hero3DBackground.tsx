import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingBlobs = () => {
    const mainBlobRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (mainBlobRef.current) {
            mainBlobRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            mainBlobRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <group>
            {/* Primary Orange Gooey Blob */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <Sphere ref={mainBlobRef} args={[1, 100, 200]} scale={1.2} position={[2, 0, -2]}>
                    <MeshDistortMaterial
                        color="#eb6f2b"
                        attach="material"
                        distort={0.5}
                        speed={2}
                        roughness={0.2}
                        metalness={0.1}
                    />
                </Sphere>
            </Float>

            {/* Secondary Cream/Yellow Blob */}
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
                <Sphere args={[1, 64, 64]} scale={0.8} position={[-2.5, 1, -3]}>
                    <MeshDistortMaterial
                        color="#ffc107"
                        attach="material"
                        distort={0.3}
                        speed={1.5}
                        roughness={0.4}
                        metalness={0.2}
                    />
                </Sphere>
            </Float>

            {/* Small accent floating element */}
            <Float speed={3} rotationIntensity={2} floatIntensity={2}>
                <Sphere args={[1, 32, 32]} scale={0.4} position={[1, -1.5, -1]}>
                    <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.8} />
                </Sphere>
            </Float>
        </group>
    );
};

const Hero3DBackground = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffd8a8" />
                <pointLight position={[-10, -10, -5]} intensity={1} color="#eb6f2b" />
                <FloatingBlobs />
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            </Canvas>
        </div>
    );
};

export default Hero3DBackground;
