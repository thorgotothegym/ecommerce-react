'use client'

import * as React from 'react'
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './'
import { filterMenu } from '@/services/Products'

export const CustomMenu: React.FC = () => {
  const menu = filterMenu()
  React.useEffect(() => {
    filterMenu()
  }, [])
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='/'
                  >
                    {/* <Icons.logo className='h-6 w-6' /> */}
                    <div className='mb-2 mt-4 text-lg font-medium'>
                      shadcn/ui
                    </div>
                    <p className='text-sm leading-tight text-muted-foreground'>
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href='/docs' title='Introduction'>
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href='/docs/installation' title='Installation'>
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href='/docs/primitives/typography' title='Typography'>
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[700px]'>
              {menu.map(menuValue => {
                return (
                  <ListItem
                    key={menuValue}
                    title={menuValue}
                    href={menuValue.toLowerCase()}
                  >
                    {menuValue}
                  </ListItem>
                )
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
