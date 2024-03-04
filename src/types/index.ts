import type { StaticImageData } from 'next/image'

type imageTypes = {
  src: StaticImageData
  alt: string
}

export type servicesDataTypes = {
  id: number
  number: string
  title: string
  description: string
  icon: StaticImageData
}

export type projectsDataTypes = {
  id: number
  title: string
  description: string
  tags: string[]
  image: imageTypes
}
