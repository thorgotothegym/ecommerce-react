'use client'
import { ProductView } from '@/components/ui/ProductView'
import { ProductsUUID } from '@/services/Products'

export default function Page() {
  return (
    <>
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
                <>
                  <ProductView
                    description={description}
                    name={name}
                    price={price}
                    key={description}
                    id={String(id)}
                  />
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
