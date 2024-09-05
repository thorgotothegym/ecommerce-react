import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../Button'

type Props = {
  view?: string
  src?: string
  width?: number
  height?: number
  product: {
    id: number
    name: string
    description: string
    longDescription: string
    price: number
    oldPrice: number
    discount: number
  }
}

export const ProductView = ({
  view = 'view',
  src = '/placeholder.svg',
  width = 400,
  height = 300,
  product: product,
}: Props) => {
  const { id, name, description, oldPrice, price, discount } = product
  return (
    <>
      <div className='relative overflow-hidden rounded-lg group'>
        <Link href={`${id}`} className='absolute inset-0 z-10' prefetch={false}>
          <span className='sr-only'>{view}</span>
        </Link>
        <Image
          src={src}
          alt={name}
          width={width}
          height={height}
          className='object-cover w-full h-60'
          style={{ aspectRatio: '400/300', objectFit: 'cover' }}
        />
        <div className='p-4 bg-background'>
          <h3 className='text-lg font-semibold md:text-xl'>{name}</h3>
          <p className='text-sm text-muted-foreground'>{description}</p>
          <div className='flex flex-row pt-1 align-middle'>
            <p className='bg-red-500 text-white text-base rounded p-2'>
              {discount}!
            </p>
            <del className='text-base font-semibold md:text-md'>
              {oldPrice}€
            </del>
            <p className='text-base font-semibold md:text-lg'>{price}€</p>
          </div>
          <div className='flex justify-center'>
            <Button className='w-full mt-4'>Add to cart</Button>
          </div>
        </div>
      </div>
    </>
  )
}
