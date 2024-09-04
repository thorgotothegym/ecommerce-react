'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  paths?: string[]
}

export const Breadcrumb: React.FC<Props> = () => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)
  const capitalizeLinks: boolean = true
  return (
    <ul>
      <li>
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link
          return (
            <Link href={href} className='pl-1 pr-1' key={link}>
              {itemLink}
            </Link>
          )
        })}
      </li>
    </ul>
  )
}
