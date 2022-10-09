import { Canvas, useFrame } from "@react-three/fiber";
import { Container } from "@mui/material";
import { useRef } from "react";

function Cube() {
  const refCube = useRef();

  useFrame(() => {
    if (!refCube.current) {
      return;
    }
    refCube.current.rotation.x += 0.01;
    refCube.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={refCube}>
      <sphereBufferGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial metalness={0.7} roughness={0.2} color="0x292929" />
    </mesh>
  );
}

export default function R3f() {
  return (
    <Container>
      <Canvas>
        <ambientLight intensity={0.2} />
        <pointLight position={(10, 10, 10)} color={"#0694D1"} intensity={1} />
        <Cube />
      </Canvas>
    </Container>
  );
}
