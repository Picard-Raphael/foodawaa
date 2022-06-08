import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import LinkNav from '../../components/LinkNav'
import styles from './header.module.scss'

const Header = () => {
  const router = useRouter()
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-logo']}>
        <Image
          width="20"
          height="20"
          src="/assets/images/carotte.png"
          layout="fixed"
        />
        <Image
          width="134"
          height="30"
          src="/assets/images/FOODAWAA.svg"
          layout="fixed"
        />
      </div>
      <LinkNav
        srcImage="/assets/images/home.svg"
        widthImage="20"
        heightImage="20"
        alt=""
        label="Catalogue Produits"
        href="/"
      />
      <Button
        onClick={() => router.push('/products/create')}
        srcImage="/assets/images/plus.svg"
        widthImage="12"
        heightImage="12"
        alt=""
        label="Ajouter un produit"
        color="primary"
        size="large"
      />
    </nav>
  )
}

export default Header
