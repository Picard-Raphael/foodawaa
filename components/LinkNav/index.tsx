import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classes from './linknav.module.scss'

export interface LinkProps {
  href: string
  label: string
  srcImage?: string
  widthImage?: string
  heightImage?: string
  alt?: string
}

const LinkNav: React.FC<LinkProps> = ({
  href,
  label,
  widthImage,
  heightImage,
  alt,
  srcImage
}) => {
  return (
    <Link href={href}>
      <a className={classes.link}>
        {srcImage && (
          <div className={classes['link-img']}>
            <Image
              alt={alt}
              width={widthImage}
              height={heightImage}
              src={srcImage}
            />
          </div>
        )}
        {label}
      </a>
    </Link>
  )
}

export default LinkNav
