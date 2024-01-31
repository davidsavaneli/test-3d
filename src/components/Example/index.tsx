import React, { memo } from 'react'
import clsx from 'clsx'
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider'
import styles from './styles.module.css'

const Example = () => {
  return (
    <Shss speed={2}>
      <ShssWrapper>
        <ShssSlide>
          <div className={clsx(styles.slide)}>
            <div
              className={styles.slideInner}
              style={{
                background: 'linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)',
              }}
            ></div>
          </div>
        </ShssSlide>
        <ShssSlide>
          <div className={clsx(styles.slide)}>
            <div
              className={styles.slideInner}
              style={{
                background: 'linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
              }}
            ></div>
          </div>
        </ShssSlide>
        <ShssSlide>
          <div className={clsx(styles.slide)}>
            <div
              className={styles.slideInner}
              style={{
                background: 'linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%)',
              }}
            ></div>
          </div>
        </ShssSlide>
        <ShssSlide>
          <div className={clsx(styles.slide)}>
            <div
              className={styles.slideInner}
              style={{
                background: 'linear-gradient(90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)',
              }}
            ></div>
          </div>
        </ShssSlide>
        <ShssSlide>
          <div className={clsx(styles.slide)}>
            <div
              className={styles.slideInner}
              style={{
                background: 'linear-gradient(90deg, hsla(33, 100%, 53%, 1) 0%, hsla(58, 100%, 68%, 1) 100%)',
              }}
            ></div>
          </div>
        </ShssSlide>
      </ShssWrapper>
    </Shss>
  )
}

export default memo(Example)
