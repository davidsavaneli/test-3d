import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { Preloader, SmoothScroll } from 'components';
import { useViewportHeight } from 'hooks';

import 'assets/css/styles.css';

const App = ({ Component, router, pageProps }: AppProps) => {
  const [showPreloader, setShowPreloader] = useState<boolean>(true);

  useEffect(() => {
    const handleBeforeUnload = () => setShowPreloader(true);
    window.addEventListener('beforeunload', handleBeforeUnload);

    const timeoutId = setTimeout(() => {
      setShowPreloader(false);
    }, 1000);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(timeoutId);
    };
  }, []);

  setTimeout(() => {
    document.body.classList.remove('preload');
  }, 100);

  useViewportHeight();

  if (router.route === '/404' || router.route === '/500') return <Component {...pageProps} />;

  return (
    <AnimatePresence mode='wait'>
      {showPreloader ? (
        <Preloader />
      ) : (
        <main key={router.route}>
          <SmoothScroll root={true}>
            <Component {...pageProps} />
          </SmoothScroll>
        </main>
      )}
    </AnimatePresence>
  );
};

export default App;



// import React, { useEffect, useState } from 'react';
// import type { AppProps } from 'next/app';
// import { AnimatePresence } from 'framer-motion';
// import { Intro, SmoothScroll } from 'components';
// import { useViewportHeight } from 'hooks';

// import 'assets/css/styles.css';

// const App = ({ Component, router, pageProps }: AppProps) => {
//   const [showPreloader, setShowPreloader] = useState<boolean>(true);

//   useEffect(() => {
//     const handleBeforeUnload = () => setShowPreloader(true);
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     // Set a timeout to hide the preloader after 2 seconds (2000 milliseconds)
//     const timeoutId = setTimeout(() => {
//       setShowPreloader(false);
//     }, 10);

//     // Clear the timeout when the page content is fully loaded
//     window.onload = () => {
//       clearTimeout(timeoutId);
//       setShowPreloader(false);
//     };

//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   useViewportHeight();

//   if (router.route === '/404' || router.route === '/500') return <Component {...pageProps} />;

//   return (
//     <AnimatePresence mode='wait'>
//       {showPreloader ? (
//         <Intro show={showPreloader} />
//       ) : (
//         <main key={router.route}>
//           <SmoothScroll root={true}>
//             <Component {...pageProps} />
//           </SmoothScroll>
//         </main>
//       )}
//     </AnimatePresence>
//   );
// };

// export default App;
