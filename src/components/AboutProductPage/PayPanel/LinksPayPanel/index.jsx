import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import { payPanelLinks } from 'data/payPanelData'
import styles from 'components/AboutProductPage/PayPanel/LinksPayPanel/LinksPayPanel.module.scss'

export default function LinksPayPanel() {
  return (
    <ul className={styles.links}>
      {payPanelLinks.map(({ href, isActive, title }) => (
        <Link
          key={uuidv4()}
          href={href}
          className={classNames(styles.link, { [styles.active]: isActive })}
        >
          {title}
        </Link>
      ))}
    </ul>
  )
}
