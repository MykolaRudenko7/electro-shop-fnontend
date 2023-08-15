'use client'
import { v4 as uuidv4 } from 'uuid'
import { linksProductChoiceData } from 'data/productChoiceData'
import CounterPrice from 'components/AboutProductPage/PayPanel/CounterPrice'
import LinksPayPanel from 'components/AboutProductPage/PayPanel/LinksPayPanel'
import PayButtons from 'components/AboutProductPage/PayPanel/PayButtons'
import ProductCounter from 'components/AboutProductPage/PayPanel/ProductCounter'
import ColorChoice from 'components/AboutProductPage/ProductChoice/ColorChoice/index'
import ProductChoiceLink from 'components/AboutProductPage/ProductChoice/ProductChoiceLink'
import ProductChoiceSlider from 'components/AboutProductPage/ProductChoice/ProductChoiceSlider'
import styles from 'components/AboutProductPage/ProductChoice/ProductChoice.module.scss'

export default function ProductChoice() {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.productChoice}>
          <ul className={styles.productChoiceLinks}>
            {linksProductChoiceData.map((link) => (
              <ProductChoiceLink key={uuidv4()} {...link} />
            ))}
          </ul>
          <h2 className={styles.productChoice__title}>MSI MPG Trident 3</h2>
          <h4 className={styles.productChoice__subtitle}>Be the first to review this product</h4>
          <p className={styles.productChoice__text}>
            MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD,
            Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop
          </p>
          <ColorChoice />
          <div className={styles.bottom}>
            <p className={styles.bottom__contact}>
              Have a Question?
              <a className={styles.bottom__contactLink} href="#">
                Contact Us
              </a>
            </p>
            <p className={styles.bottom__model}>SKU D5515AI</p>
          </div>
          <p className={styles.productChoiceMoreInf}>+ More information</p>
        </div>
        <div className={styles.appearOnPhone}>
          <LinksPayPanel />
        </div>
        <ProductChoiceSlider />
      </div>
      <div className={styles.appearOnPhone}>
        <div className={styles.appearBlock}>
          <div className={styles.appearBlockTop}>
            <ProductCounter />
            <PayButtons />
          </div>
          <CounterPrice />
        </div>
      </div>
    </section>
  )
}
