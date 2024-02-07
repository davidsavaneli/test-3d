// import Script from 'next/script'

// export default function Dashboard() {
//   const test = () => {
//     console.log('script loaded')
//   }
//   // console.log('script loaded')

//   return (
//     <>
//       <Script src="https://raw.githubusercontent.com/PavelDoGreat/WebGL-Fluid-Simulation/master/script.js" onLoad={() => {
//           console.log('Script has loaded')
//         }} />
//     </>
//   )
// }

// 'use client'

// import Script from 'next/script'

// export default function Page() {
//   return (
//     <>
//       <Script
//         src="https://raw.githubusercontent.com/PavelDoGreat/WebGL-Fluid-Simulation/master/script.js"
//         onReady={() => {
//           console.log('sdsd')
//         }}
//       ></Script>
//       <canvas></canvas>
//     </>
//   )
// }

// 'use client'

// import React, { useEffect } from 'react';

// const test = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = '/script.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       <canvas></canvas>
//       <h1>Next.js with TypeScript</h1>
//       <p>Custom script loaded dynamically.</p>
//     </div>
//   );
// };

// export default test;

'use client'

import { useRef, useEffect } from 'react'
import styles from './styles.module.css'

export default function App() {
  const canvas = useRef(null)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('./script').then(({ default: WebglFluid }) => {
        WebglFluid(canvas.current, {
          IMMEDIATE: false, // Whether to trigger multiple random splats when initialized
            TRIGGER: "hover", // Can be change to 'click'
            SIM_RESOLUTION: 256,
            DYE_RESOLUTION: 1024,
            CAPTURE_RESOLUTION: 512,
            DENSITY_DISSIPATION: 1.5,
            VELOCITY_DISSIPATION: 2,
            PRESSURE: 0.55,
            PRESSURE_ITERATIONS: 20,
            CURL: 1,
            SPLAT_RADIUS: 0.05,
            SPLAT_FORCE: 6000,
            SHADING: true,
            COLORFUL: true,
            COLOR_UPDATE_SPEED: 10,
            PAUSED: false,
            BACK_COLOR: { r: 0, g: 0, b: 0 },
            TRANSPARENT: true,
            BLOOM: false,
            BLOOM_ITERATIONS: 8,
            BLOOM_RESOLUTION: 256,
            BLOOM_INTENSITY: 0.15,
            BLOOM_THRESHOLD: 0.3,
            BLOOM_SOFT_KNEE: 0.7,
            SUNRAYS: true,
            SUNRAYS_RESOLUTION: 196,
            SUNRAYS_WEIGHT: 0.5,
        })
      })
    }
  }, [])
  return (
    <div className={styles.overlay}>
      <canvas ref={canvas}></canvas>
    </div>
  )
}
