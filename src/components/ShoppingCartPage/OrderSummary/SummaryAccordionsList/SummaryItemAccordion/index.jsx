import Image from 'next/image'
import { useRef, useState } from 'react'
import cn from 'classnames'
import arrowUp from 'images/ShoppingCart/arrow.svg'
import styles from '@/OrderSummary/SummaryAccordionsList/SummaryItemAccordion/SummaryItemAccordion.module.scss'

export default function SummaryItemAccordion({ title, subtitle, content }) {
  const [activeAccordion, setActiveAccordion] = useState(null)
  const contentAccordionRef = useRef(null)

  const toggleAccordion = (title) => setActiveAccordion(activeAccordion === title ? null : title)

  return (
    <li className={styles.accordionItem}>
      <div className={styles.triggerContainer}>
        <button
          aria-label="accordion trigger"
          className={styles.title}
          onClick={() => toggleAccordion(title)}
          type="button"
        >
          {title}{' '}
          <Image
            alt="accordion arrow"
            className={cn(styles.arrowPic, { [styles.rotateArrow]: activeAccordion })}
            height={15}
            src={arrowUp}
            width={16}
          />
        </button>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div
        className={cn(styles.content, { [styles.activeAccordion]: activeAccordion })}
        ref={contentAccordionRef}
        style={
          activeAccordion === title
            ? { height: contentAccordionRef?.current?.scrollHeight }
            : { height: '0px' }
        }
      >
        {content}
      </div>
    </li>
  )
}
