'use client'
import { Button } from '@/components/ui/Button'
import { Label } from '@/components/ui/Label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
import { getById } from '@/services/Products'
import { HeartIcon, StarIcon, TruckIcon } from 'lucide-react'

type Params = {
  params: {
    id: number
  }
}

export default function Page({ params: { id } }: Params) {
  const pepe = getById(id)
  console.log('pepe', pepe)
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
      <h1>{id}</h1>
      <div className='container grid md:grid-cols-2 gap-6 lg:gap-12 items-start px-4 md:px-6'>
        <div className='grid sm:grid-cols-2 gap-4'>
          <img
            src='/placeholder.svg'
            alt='Product Image'
            width={600}
            height={600}
            className='aspect-square object-cover border w-full rounded-lg overflow-hidden'
          />
          <img
            src='/placeholder.svg'
            alt='Product Image'
            width={600}
            height={600}
            className='aspect-square object-cover border w-full rounded-lg overflow-hidden'
          />
          <img
            src='/placeholder.svg'
            alt='Product Image'
            width={600}
            height={600}
            className='aspect-square object-cover border w-full rounded-lg overflow-hidden'
          />
          <img
            src='/placeholder.svg'
            alt='Product Image'
            width={600}
            height={600}
            className='aspect-square object-cover border w-full rounded-lg overflow-hidden'
          />
        </div>
        <div className='grid gap-3 items-start'>
          <div className='flex md:hidden items-start'>
            <div className='grid gap-4'>
              <h1 className='font-bold text-2xl sm:text-3xl'>
                Stylish Sunglasses
              </h1>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-0.5'>
                  <StarIcon className='w-5 h-5 fill-primary' />
                  <StarIcon className='w-5 h-5 fill-primary' />
                  <StarIcon className='w-5 h-5 fill-primary' />
                  <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
                  <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
                </div>
              </div>
            </div>
          </div>
          <div className='grid gap-4 text-sm leading-loose md:hidden'>
            <p>
              Elevate your style with our premium Stylish Sunglasses. Crafted
              with high-quality materials and featuring a sleek, modern design,
              these sunglasses offer both fashion and function.
            </p>
            <p>
              Protect your eyes from harmful UV rays while looking effortlessly
              chic. Whether you\'re running errands or enjoying a day in the
              sun, these sunglasses will become your go-to accessory.
            </p>
          </div>
          <div className='grid gap-4 md:gap-10 items-start'>
            <div className='flex items-center gap-2 mb-4'>
              <TruckIcon className='w-5 h-5 text-primary' />
              <span className='text-primary font-medium'>Free Shipping</span>
            </div>
            <div className='hidden md:flex items-start'>
              <div className='grid gap-4'>
                <h1 className='font-bold text-3xl'>Stylish Sunglasses</h1>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-0.5'>
                    <StarIcon className='w-5 h-5 fill-primary' />
                    <StarIcon className='w-5 h-5 fill-primary' />
                    <StarIcon className='w-5 h-5 fill-primary' />
                    <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
                    <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
                  </div>
                </div>
                <div className='grid gap-4 text-sm leading-loose'>
                  <p>
                    Elevate your style with our premium Stylish Sunglasses.
                    Crafted with high-quality materials and featuring a sleek,
                    modern design, these sunglasses offer both fashion and
                    function.
                  </p>
                  <p>
                    Protect your eyes from harmful UV rays while looking
                    effortlessly chic. Whether you're running errands or
                    enjoying a day in the sun, these sunglasses will become your
                    go-to accessory.
                  </p>
                </div>
              </div>
            </div>
            <form className='grid gap-4 md:gap-8'>
              <div className='grid gap-2'>
                <Label htmlFor='color' className='text-base'>
                  Color
                </Label>
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='size' className='text-base'>
                  Size
                </Label>
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='quantity' className='text-base'>
                  Quantity
                </Label>
                <Select defaultValue='1'>
                  <SelectTrigger className='w-24'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='1'>1</SelectItem>
                    <SelectItem value='2'>2</SelectItem>
                    <SelectItem value='3'>3</SelectItem>
                    <SelectItem value='4'>4</SelectItem>
                    <SelectItem value='5'>5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='text-4xl font-bold'>$29.99</div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Button size='lg'>Add to cart</Button>
                <Button size='lg' variant='outline'>
                  <HeartIcon className='w-4 h-4 mr-2' />
                  Add to wishlist
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
