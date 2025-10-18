import * as React from 'react'

import { PrismaClient } from '@prisma/client'

import { MainContent } from '../components/main_content'
import { withBlurImage } from '../utils/blur_image'

const prisma = new PrismaClient()

const Home = async () => {
  const furnitures = await prisma.furniture.findMany()
  const furnituresWithBlur = await Promise.all(furnitures.map(withBlurImage))

  return <MainContent furnitures={furnituresWithBlur} />
}

export default Home
