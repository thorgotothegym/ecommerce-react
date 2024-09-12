'use client'
import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { Button } from '../Button'
import { Input } from '../Input'
import { useToast } from '@/hooks/use-toast'

export const Footer = () => {
  const [email, setEmail] = useState<string>()
  const { toast } = useToast()
  const onSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    toast({
      title: `Subscribe to the newsletter!`,
      description: `Now you will be up to date with all our offers`,
      duration: 2000,
    })
  }

  return (
    <>
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
            <form className='flex gap-2' onSubmit={onSumbit}>
              <Input
                type='email'
                value={email}
                placeholder='Enter your email'
                onChange={event => setEmail(event.target.value)}
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
