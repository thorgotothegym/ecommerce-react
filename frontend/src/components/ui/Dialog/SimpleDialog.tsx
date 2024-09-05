'use client'
import { FormEvent, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '.'
import { Button } from '../Button'
import { User } from 'lucide-react'
import { Label } from '../Label'
import { Input } from '../Input'
import { cn } from '@/lib/utils'

type Props = {
  children?: React.ReactNode
}

type Form = {
  email: string
  password: string
}

export const SimpleDialog: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [form, setForm] = useState<Form>({ email: '', password: '' })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <User className='hover:cursor-pointer' />
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Create Account</DialogTitle>
            <DialogDescription>
              Don't have an account? Sign up
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className='grid grid-cols-4 items-center gap-4 pb-2'>
              <Label htmlFor='email' className={cn('text-right')}>
                email
              </Label>
              <Input
                id='email'
                className='col-span-3'
                value={form.email}
                onChange={event =>
                  setForm({ ...form, email: event.target.value })
                }
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='password' className='text-right'>
                Password
              </Label>
              <Input
                id='password'
                type='password'
                value={form.password}
                onChange={event =>
                  setForm({ ...form, password: event.target.value })
                }
                className='col-span-3'
              />
            </div>
            <DialogFooter>
              <Button type='submit' className='mt-3'>
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
