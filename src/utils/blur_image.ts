import { Furniture } from '@prisma/client'
import { getPlaiceholder } from 'plaiceholder'

export type FurnitureWithBlur = Furniture & {
  blurDataURL: string
}

export const withBlurImage = async (furniture: Furniture): Promise<FurnitureWithBlur> => {
  const arrayBuffer = await fetch(furniture.image_url).then((res) => res.arrayBuffer())

  const { base64 } = await getPlaiceholder(Buffer.from(arrayBuffer))

  return { ...furniture, blurDataURL: base64 }
}
