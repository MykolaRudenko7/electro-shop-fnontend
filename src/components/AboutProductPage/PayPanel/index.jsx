'use client'

import CounterPrice from 'components/AboutProductPage/PayPanel/CounterPrice'
import Links from 'components/AboutProductPage/PayPanel/LinksPayPanel'
import PayButtons from 'components/AboutProductPage/PayPanel/PayButtons'
import ProductCounter from 'components/AboutProductPage/PayPanel/ProductCounter'
import styles from 'components/AboutProductPage/PayPanel/PayPanel.module.scss'

export default function PayPanel() {
  return (
    <section className={styles.payPanel}>
      <div className={styles.payPanel__container}>
        <Links />
        <div className={styles.pay}>
          <CounterPrice />
          <ProductCounter />
          <PayButtons />
        </div>
      </div>
    </section>
  )
}
