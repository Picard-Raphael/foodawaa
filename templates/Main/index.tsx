import type { ReactNode } from 'react'
import Header from '../../layouts/Header'
import styles from './main.module.scss'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMainProps) => (
  <>
    <header className={styles.header}>
      {props.meta}
      <Header />
    </header>
    <main className={styles.main}>{props.children}</main>
  </>
)

export { Main }
