import { Canvas } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

// Pillow component
const Pillow = () => {
  // Create a simple fabric material (light grey color)
  const pillowMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0.8, 0.8, 0.8), // light grey
    roughness: 0.7,
    metalness: 0,
    emissive: new THREE.Color(0.1, 0.1, 0.1), // slight glow effect
  });

  // Using a rounded box geometry instead of a regular box
  return (
    <motion.mesh
      onClick={(ev) => console.log(ev)}
      scale={[0.7, 0.5, 1]}
      castShadow
      receiveShadow
      animate={{ rotateY: [0, Math.PI, 0] }}
      transition={{ duration: 2 }}
    >
      <RoundedBox args={[1, 0.6, 0.5]} radius={0.1}>
        <meshStandardMaterial {...pillowMaterial} />
      </RoundedBox>
    </motion.mesh>
  );
};

// App component with the Canvas
const App = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 5], fov: 30 }}>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Pillow */}
      <Pillow />

      {/* Ground to receive shadows */}
      {/* <mesh receiveShadow position={[0, -0.5, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.5} />
      </mesh> */}

      {/* Orbit Controls for easy scene interaction */}
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default App;
