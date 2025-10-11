// Run it in terminal with : npx prisma db seed

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const vercelImageUrl = (name: string) =>
  `https://sl3kw8d2cbj902ry.public.blob.vercel-storage.com/${name}`

async function seedFurnitures() {
  await prisma.furniture.createMany({
    data: [
      { name: 'Marmól Orangé y Lila', image_url: vercelImageUrl('abstract-1.avif') },
      { name: 'Marmól Brèche', image_url: vercelImageUrl('abstract-2.avif') },
      { name: 'Buffet Noir Pépite', image_url: vercelImageUrl('buffet-1.avif') },
      { name: 'Buffet Noir Pépite', image_url: vercelImageUrl('buffet-2.avif') },
      { name: 'Botiquín Violeta', image_url: vercelImageUrl('cabinet-1.avif') },
      { name: 'Botiquín Violeta', image_url: vercelImageUrl('cabinet-2.avif') },
      { name: 'Lámpara de Carrare', image_url: vercelImageUrl('lamp-1.avif') },
      { name: 'Lámpara Rouge Royale', image_url: vercelImageUrl('lamp-2.avif') },
      { name: 'Espejo Pirata', image_url: vercelImageUrl('mirror-1.avif') },
      { name: 'Espejo Pirata', image_url: vercelImageUrl('mirror-2.avif') },
      { name: 'Espejo Pirata', image_url: vercelImageUrl('mirror-3.avif') },
      { name: 'Espejo Pirata', image_url: vercelImageUrl('mirror-4.avif') },
      { name: 'Espejo Pirata', image_url: vercelImageUrl('mirror-5.avif') },
      { name: 'Mesita Saphir y Jaune', image_url: vercelImageUrl('side-table-1.avif') },
      { name: 'Mesita Saphir', image_url: vercelImageUrl('side-table-2.avif') },
      { name: 'Mesita Jaune', image_url: vercelImageUrl('side-table-3.avif') },
      { name: 'Mesita Emeraude', image_url: vercelImageUrl('side-table-4.avif') },
      { name: 'Mesita Rubis', image_url: vercelImageUrl('side-table-5.avif') },
      { name: 'Mesita Rubis', image_url: vercelImageUrl('side-table-6.avif') },
      { name: 'Mesita Emeraude', image_url: vercelImageUrl('side-table-7.avif') },
      { name: 'Mesita Saphir', image_url: vercelImageUrl('side-table-8.avif') },
      { name: 'Mesa Noir Pépite', image_url: vercelImageUrl('table-1.avif') },
      { name: 'Mesa Noir Pépite', image_url: vercelImageUrl('table-2.avif') },
      { name: 'Mesa Dalmatien', image_url: vercelImageUrl('table-3.avif') },
      { name: 'Mesa Saphir', image_url: vercelImageUrl('table-4.avif') },
      { name: 'Mesa Saphir', image_url: vercelImageUrl('table-5.avif') },
      { name: 'Mesa Abstract Jaune', image_url: vercelImageUrl('table-abstract-1.avif') },
      { name: 'Mesa Abstract Emeraude', image_url: vercelImageUrl('table-abstract-2.avif') },
      { name: 'Mesa Abstract Saphir', image_url: vercelImageUrl('table-abstract-3.avif') },
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
