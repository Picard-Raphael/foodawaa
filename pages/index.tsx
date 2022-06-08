import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Meta from '../layouts/Meta'
import { Main } from '../templates/Main'
import styles from '../styles/pages/Home.module.scss'
import React, { Suspense, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { v4 as uuidv4 } from 'uuid'
export interface Product {
  _id?: string
  tags: string[]
  name: string
  description: string
  image: string
  price: number
}
interface HomeProps {
  products: Product[]
  count: number
}

const DynamicComponentCard = dynamic(() => import('../components/Card'), {
  loading: () => <div>Loading...</div>
})

const Home: NextPage<HomeProps> = ({ products: initialProducts, count }) => {
  const [start, setStart] = useState(initialProducts.length)
  const [products, setProducts] = useState(initialProducts)
  const [hasMore, setHasMore] = useState(true)

  const fetchMoreData = async () => {
    if (count === start) {
      setHasMore(false)
      return
    }
    const res = await fetch(
      'https://technical-test-frontend.herokuapp.com/api/products?start=0'
    )
    const data = await res.json()
    setProducts((prevState) => [...prevState, ...data.products])
    setStart((prevState) => prevState + products.length)
  }

  return (
    <Main meta={<Meta title="Foodawaa" description="Foodawaa e-commerce" />}>
      <div className={styles.home}>
        <h1 className={styles['home-title']}>Welcome!</h1>
        <section>
          <InfiniteScroll
            className={styles['home-cards']}
            dataLength={products.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}>
            {products.map((product: Product) => (
              <article className={styles['home-card']} key={uuidv4()}>
                <DynamicComponentCard
                  name={product.name}
                  description={product.description}
                  img={product.image}
                  price={product.price}
                />
              </article>
            ))}
          </InfiniteScroll>
        </section>
      </div>
    </Main>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://technical-test-frontend.herokuapp.com/api/products?start=0'
  )
  const { products, count } = await res.json()

  return {
    props: {
      products,
      count
    }
  }
}
export default Home
