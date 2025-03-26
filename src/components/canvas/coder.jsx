import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const SketchfabModel = () => {
  return (
    <iframe
      title="Galaxy of Coder!"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; fullscreen; xr-spatial-tracking"
      className="w-full max-w-4xl h-[600px] rounded-none"
      src="https://sketchfab.com/models/561b2a5a775f49929420b72b405e9e3f/embed"
    ></iframe>
  );
};

const SketchfabCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SketchfabModel />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SketchfabCanvas;
