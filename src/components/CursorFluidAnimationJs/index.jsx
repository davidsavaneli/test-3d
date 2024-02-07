// import React, { memo, useEffect, useRef } from 'react'
// import WebglFluid from "webgl-fluid";
// import styles from './styles.module.css'

// const CursorFluidAnimationJs = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     WebglFluid(canvasRef.current, {
//       TRIGGER: "click"
//     });
//   }, []);

//   return (
//     <div className={styles.overlay}>
//       <canvas ref={canvasRef}></canvas>
//     </div>
//   )
// }

// export default memo(CursorFluidAnimationJs)

import React, { memo, useEffect, useRef } from 'react'
import styles from './styles.module.css'

const CursorFluidAnimationJs = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Check if window object exists (client-side)
    if (typeof window !== 'undefined') {
      import('webgl-fluid').then(({ default: WebglFluid }) => {
        WebglFluid(canvasRef.current, {
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
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default memo(CursorFluidAnimationJs)
