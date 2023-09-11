import Link from 'next/link'
import cn from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import { payPanelLinks } from 'data/product-catalog/payPanelData'
import styles from 'components/AboutProductPage/PayPanel/LinksPayPanel/LinksPayPanel.module.scss'

export default function LinksPayPanel() {
  return (
    <ul className={styles.links}>
      {payPanelLinks.map(({ href, isActive, title }) => (
        <Link className={cn(styles.link, { [styles.active]: isActive })} href={href} key={uuidv4()}>
          {title}
        </Link>
      ))}
    </ul>
  )
}
