// Run it in terminal with : npx prisma db seed

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const VERCEL_BLOB_STORE = 'sl3kw8d2cbj902ry'

const gcloudImageUrl = (name: string) =>
  `https://${VERCEL_BLOB_STORE}.public.blob.vercel-storage.com/${name}`

async function seedFurnitures() {
  await prisma.furniture.createMany({
    data: [
      { name: 'Marmól Orangé y Lila', image_url: gcloudImageUrl('abstract-1.jpeg') },
      { name: 'Marmól Brèche', image_url: gcloudImageUrl('abstract-2.jpeg') },
      { name: 'Buffet Noir Pépite', image_url: gcloudImageUrl('buffet-1.jpeg') },
      { name: 'Buffet Noir Pépite', image_url: gcloudImageUrl('buffet-2.jpeg') },
      { name: 'Botiquín Violeta', image_url: gcloudImageUrl('cabinet-1.jpeg') },
      { name: 'Botiquín Violeta', image_url: gcloudImageUrl('cabinet-2.jpeg') },
      { name: 'Lámpara de Carrare', image_url: gcloudImageUrl('lamp-1.jpeg') },
      { name: 'Lámpara Rouge Royale', image_url: gcloudImageUrl('lamp-2.jpeg') },
      { name: 'Espejo Pirata', image_url: gcloudImageUrl('mirror-1.jpeg') },
      { name: 'Espejo Pirata', image_url: gcloudImageUrl('mirror-2.jpeg') },
      { name: 'Espejo Pirata', image_url: gcloudImageUrl('mirror-3.jpeg') },
      { name: 'Espejo Pirata', image_url: gcloudImageUrl('mirror-4.jpeg') },
      { name: 'Espejo Pirata', image_url: gcloudImageUrl('mirror-5.jpeg') },
      { name: 'Mesita Saphir y Jaune', image_url: gcloudImageUrl('side-table-1.jpeg') },
      { name: 'Mesita Saphir', image_url: gcloudImageUrl('side-table-2.jpeg') },
      { name: 'Mesita Jaune', image_url: gcloudImageUrl('side-table-3.jpeg') },
      { name: 'Mesita Emeraude', image_url: gcloudImageUrl('side-table-4.jpeg') },
      { name: 'Mesita Rubis', image_url: gcloudImageUrl('side-table-5.jpeg') },
      { name: 'Mesita Rubis', image_url: gcloudImageUrl('side-table-6.jpeg') },
      { name: 'Mesita Emeraude', image_url: gcloudImageUrl('side-table-7.jpeg') },
      { name: 'Mesita Saphir', image_url: gcloudImageUrl('side-table-8.jpeg') },
      { name: 'Mesa Noir Pépite', image_url: gcloudImageUrl('table-1.jpeg') },
      { name: 'Mesa Noir Pépite', image_url: gcloudImageUrl('table-2.jpeg') },
      { name: 'Mesa Dalmatien', image_url: gcloudImageUrl('table-3.jpeg') },
      { name: 'Mesa Saphir', image_url: gcloudImageUrl('table-4.jpeg') },
      { name: 'Mesa Saphir', image_url: gcloudImageUrl('table-5.jpeg') },
      { name: 'Mesa Abstract Jaune', image_url: gcloudImageUrl('table-1.jpeg') },
      { name: 'Mesa Abstract Emeraude', image_url: gcloudImageUrl('table-2.jpeg') },
      { name: 'Mesa Abstract Saphir', image_url: gcloudImageUrl('table-3.jpeg') },
    ],
  })
}

seedFurnitures()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
