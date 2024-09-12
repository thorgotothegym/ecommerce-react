'use client'
import React, { createContext, useState, FC, ReactNode } from 'react'

type User = {
  name?: string
  email: string
}

type MyContextType = {
  value: User
  setValue: React.Dispatch<React.SetStateAction<User>>
}

const MyContext = createContext<MyContextType | undefined>(undefined)

type MyContextProviderProps = {
  children: ReactNode
}

export const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {
  const [value, setValue] = useState<User>({ name: '', email: '' })

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContext
