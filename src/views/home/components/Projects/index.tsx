import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedSubText, AnimatedTitle, Button, AnimatedImage } from 'components'
import { projectsData } from 'testData'
import { projectsDataTypes } from 'types'

import styles from './styles.module.css'

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.projectsSection} ref={projectsRef}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-4'>
            <AnimatedSubText endPositionY={0}>
              Our software solutions amplify opportunities for venture and private equity firms, regardless of stage or
              provided timeline.
            </AnimatedSubText>
          </div>
          <div className='col-8'>
            <div className={styles.titleBox}>
              <AnimatedTitle transformDirection='rtl'>Recent</AnimatedTitle>
              <AnimatedTitle transformDirection='ltr'>Work</AnimatedTitle>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className={styles.items}>
          {projectsData.map((o: projectsDataTypes, index) => {
            return (
              <React.Fragment key={index}>
                <ProjectItem data={o} key={o.id} even={index % 2 ? true : false} />
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

type ProjectItemProps = {
  data: projectsDataTypes
  even?: boolean
}

const ProjectItem = ({ data, even = false }: ProjectItemProps) => {
  const projectItemRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: projectItemRef, offset: ['start end', 'end start'] })

  const InfoY = useTransform(scrollYProgress, [0, 1], ['-80px', '80px'])
  const InfoX = useTransform(scrollYProgress, [0, 1], [even ? '-20px' : '20px', even ? '20px' : '-20px'])
  const ImageY = useTransform(scrollYProgress, [0, 1], ['80px', '-80px'])
  const ImageX = useTransform(scrollYProgress, [0, 1], [even ? '20px' : '-40px', even ? '-40px' : '20px'])
  const ImageRotate = useTransform(scrollYProgress, [0, 1], [even ? '2deg' : '-2deg', even ? '-2deg' : '2deg'])

  return (
    <motion.article className={styles.projectItem} ref={projectItemRef}>
      <div className={styles.projectItemRow}>
        <div className={styles.projectItemCol}>
          <motion.div className={styles.projectItemInfo} style={{ y: InfoY, x: InfoX }}>
            <div className={styles.projectItemTitle}>
              {data.title.split(' ').map((word, index) => (
                <AnimatedTitle key={index} size='medium' disableX fontLowercase textAlign={even ? 'left' : 'right'}>
                  {word}
                </AnimatedTitle>
              ))}
            </div>
            <p className={styles.projectItemDescription}>{data.description}</p>
            <p className={styles.projectItemDescription}>
              {data.tags.map((o, index) => {
                return (
                  <React.Fragment key={index}>
                    {o}
                    {index !== data.tags.length - 1 && ', '}
                  </React.Fragment>
                )
              })}
            </p>
            <div className={styles.projectItemButton}>
              <Button label='View More' />
            </div>
          </motion.div>
        </div>
        <div className={styles.projectItemCol}>
          <motion.div className={styles.projectItemImgBox} style={{ y: ImageY, x: ImageX, rotate: ImageRotate }}>
            <AnimatedImage src={data.image.src} alt={data.image.alt} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}

export default Projects
