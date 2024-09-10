'use client'
import React, { createContext, useState, FC, ReactNode } from 'react'

type MyContextType = {
  value: string
  setValue: (newValue: string) => void
}

const MyContext = createContext<MyContextType | undefined>(undefined)

type MyContextProviderProps = {
  children: ReactNode
}

export const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>('')

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContext
