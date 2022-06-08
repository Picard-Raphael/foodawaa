import React from 'react'
import styles from './card.module.scss'

export interface CardProps {
  img: string
  name: string
  price: number
  description: string
}

const Card: React.FC<CardProps> = ({ img, name, price, description }) => {
  return (
    <div className={styles.card}>
      <img
        loading="lazy"
        className={styles['card-img']}
        src={img}
        width="226"
        height="142"
        alt={name}
      />
      <div className={styles['card-bloc-price']}>
        <h3 className={styles['card-name']}>{name}</h3>
        <span className={styles['card-price']}>{price} €</span>
      </div>
      <p className={styles['card-description']}>{description}</p>
    </div>
  )
}

export default Card
