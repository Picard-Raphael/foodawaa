import Image from 'next/image'
import React from 'react'
import { classNames } from '../../helper/classnames.helper'
import classes from './button.module.scss'

export type ButtonColor = 'primary'

export type ButtonSize = 'large' | 'small'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color: ButtonColor
  size: ButtonSize
  label: string
  srcImage?: string
  widthImage?: string
  heightImage?: string
  alt?: string
  type?: string
}

export const Button: React.FC<ButtonProps> = ({
  label,
  color,
  size,
  srcImage,
  widthImage,
  heightImage,
  alt,
  type,
  ...props
}) => {
  const btnClasses = {
    [classes.btn]: true,
    [classes['btn--primary']]: color === 'primary'
  }

  return (
    <button className={classNames(btnClasses)} {...props}>
      {srcImage && (
        <div className={classes['btn-image']}>
          <Image
            alt={alt}
            width={widthImage}
            height={heightImage}
            src={srcImage}
          />
        </div>
      )}
      {label}
    </button>
  )
}
