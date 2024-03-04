import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedSubText, AnimatedTitle, Button, AnimatedImage } from 'components'
import { projectsData } from 'testData'
import { projectsDataTypes } from 'types'

import styles from './styles.module.css'

import ProjectImgSrc1 from 'assets/images/uploads/home/project-img-1.png'

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.projectsSection} ref={projectsRef}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <AnimatedSubText>
              Our software solutions amplify opportunities for venture and private equity firms, regardless of stage or
              provided timeline.
            </AnimatedSubText>
          </div>
          <div className='col-8'>
            <div className={styles.titleBox}>
              <AnimatedTitle animationDirection='rtl'>Recent</AnimatedTitle>
              <AnimatedTitle animationDirection='ltr'>Work</AnimatedTitle>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className={styles.items}>
          {projectsData.map((o: projectsDataTypes, index) => {
            return (
              <React.Fragment key={index}>
                <ProjectItem data={o} key={o.id} />
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
}

const ProjectItem = ({ data }: ProjectItemProps) => {
  const projectItemRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: projectItemRef, offset: ['start end', 'end start'] })

  const InfoY = useTransform(scrollYProgress, [0, 1], ['-150px', `150px`])
  const ImageY = useTransform(scrollYProgress, [0, 1], ['150px', `-150px`])

  return (
    <motion.article className={styles.projectItem} ref={projectItemRef}>
      <div className={styles.projectItemRow}>
        <div className={styles.projectItemCol}>
          <motion.div className={styles.projectItemInfo} style={{ y: InfoY }}>
            <div className={styles.projectItemTitle}>
              {data.title.split(' ').map((word, index) => (
                <AnimatedTitle key={index} size='medium' disableX fontLowercase>
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
          <motion.div className={styles.projectItemImgBox} style={{ y: ImageY }}>
            <AnimatedImage src={data.image.src} alt={data.image.alt} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}

export default Projects
