// import React from 'react'
// import type { AppProps } from 'next/app'
// import { AnimatePresence } from 'framer-motion'
// // import { Header, Footer, SmoothScroller, FloatingShape } from 'components'
// import FloatingShape from '../components/FloatingShape'

// import 'assets/css/styles.css'

// const App = ({ Component, router, pageProps }: AppProps) => {
//   if (router.route === '/404' || router.route === '/500') return <Component {...pageProps} />

//   return (
//     <React.Fragment>
//       <FloatingShape />
//       {/* <Header />
//       <AnimatePresence mode='wait'>
//         <main key={router.route} id='main'>
//           <Component {...pageProps} />
//         </main>
//       </AnimatePresence>
//       <Footer />
//       <SmoothScroller /> */}
//     </React.Fragment>
//   )
// }

// export default App

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Color } from "three";


export default function App() {
  return (
    <Canvas camera={{ position: [-2, 2, 5] }}>

      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <spotLight intensity={0.6} position={[2, -2, -3]} />

      <mesh>
        <meshStandardMaterial />
        <boxGeometry />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
