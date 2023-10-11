'use client'

import { v4 as uuidv4 } from 'uuid'
import { shoppingCartData } from 'data/shopping-cart'
import SummaryItemAccordion from '@/OrderSummary/SummaryAccordionsList/SummaryItemAccordion'
import styles from '@/OrderSummary/SummaryAccordionsList/SummaryAccordionsList.module.scss'

export default function SummaryAccordionsList() {
  const { accordionData } = shoppingCartData

  return (
    <ul className={styles.accordionsList}>
      {accordionData.map((accordion) => (
        <SummaryItemAccordion key={uuidv4()} {...accordion} />
      ))}
    </ul>
  )
}
