'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { User } from '@/components/ui/User'
import { ProductView } from '@/components/ui/ProductView'
import { ProductsUUID } from '@/services/Products'

export default function Page() {
  return (
    <>
      <section
        aria-label='shipping'
        className='w-full container flex justify-center m-1 '
      >
        free shipping
      </section>
      <section aria-label='menu' className='w-full py-4 bg-muted'>
        <div className='container flex flex-row-reverse px-4 md:px-6'>
          <User email='john@example.com' fullName='John Doe' />
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                All Products
              </h2>
              <p className='max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Browse through our wide selection of products to find the
                perfect items for your needs.
              </p>
            </div>
          </div>
          <div className='mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12'>
            {ProductsUUID.slice(0, 12).map(product => {
              const { description, name, price, id } = product
              return (
                <ProductView
                  description={description}
                  name={name}
                  price={price}
                  key={id}
                />
              )
            })}
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 border-t'>
        <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
          <div className='space-y-3'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
              Stay Updated on the Latest Trends
            </h2>
            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Sign up for our newsletter to receive exclusive offers, new
              product announcements, and style inspiration.
            </p>
          </div>
          <div className='mx-auto w-full max-w-sm space-y-2'>
            <form className='flex gap-2'>
              <Input
                type='email'
                placeholder='Enter your email'
                className='max-w-lg flex-1'
              />
              <Button type='submit'>Sign Up</Button>
            </form>
            <p className='text-xs text-muted-foreground'>
              By signing up, you agree to our{' '}
              <Link
                href='#'
                className='underline underline-offset-2'
                prefetch={false}
              >
                Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
