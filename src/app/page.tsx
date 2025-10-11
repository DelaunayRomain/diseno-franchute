import * as React from 'react'

import { PrismaClient } from '@prisma/client'

import { MainContent } from '../components/main_content'

const prisma = new PrismaClient()

const Home = async () => {
  const furnitures = await prisma.furniture.findMany()

  return <MainContent furnitures={furnitures} />
}

export default Home
