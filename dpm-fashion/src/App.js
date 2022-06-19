import React, { Suspense, useRef, useState, useEffect  } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Html } from "@react-three/drei"
import Avatar from "./avatar"
import Overlay from "./overlay"
import './App.css'


export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return (
    <>
    <Canvas style={{backgroundColor: "black" , display: "block" , height: "100vh", width: "100vw"}}
        shadows
        onCreated={(state) => state.events.connect(overlay.current)}
        raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
        <ambientLight intensity={0.8} />
       
       <Suspense fallback={<Html><img className="fuse" src="https://samherbert.net/svg-loaders/svg-loaders/puff.svg" alt="Loading" />`</Html>}>
          <Avatar scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
       
        
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />

      </>

  );
}


