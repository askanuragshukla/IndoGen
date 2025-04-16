import React, { useEffect, useRef } from "react";
import ThreeGlobe from "three-globe";
import * as THREE from "three";
import json from "./globe.json";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Globe = new ThreeGlobe()
  .hexPolygonsData(json.features)
  .hexPolygonResolution(3)
  .hexPolygonMargin(0.4)
  .hexPolygonColor(() => "white") // Continents remain white
  .showAtmosphere(false);

// Apply material properties
const globeMaterial = Globe.globeMaterial();
globeMaterial.specular = new THREE.Color("#cddbfe");
globeMaterial.shininess = 0;
globeMaterial.color = new THREE.Color("#008000"); // Green Earth

const Box = () => {
  const boxRef = useRef();

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.006;
      boxRef.current.rotation.y -= 0.006;
    }
  });

  const scale_g = 0.024;

  return (
    <mesh ref={boxRef}>
      <primitive
        object={Globe}
        position={[0, 0, 0]}
        scale={[scale_g, scale_g, scale_g]}
      />
    </mesh>
  );
};

const RotatingEarth = () => (
  <div style={{ height: 80, backgroundColor: "transparent" }}>
    <Canvas>
      <ambientLight color="#ffffff" />
      <OrbitControls />
      <Box />
    </Canvas>
  </div>
);

export default RotatingEarth;
