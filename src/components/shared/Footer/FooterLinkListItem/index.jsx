import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import Link from 'next/link'
import styles from 'components/shared/Footer/FooterLinkListItem/FooterLinkListItem.module.scss'

export default function FooterLinkListItem({ title, links }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(null)

  const toggleAccordion = (title) => {
    setIsAccordionOpen((prevTitle) => (prevTitle === title ? null : title))
  }

  return (
    <div className={styles.blockWrapper}>
      <h6
        className={cn(styles.title, { [styles.openAccordion]: isAccordionOpen === title })}
        onClick={() => toggleAccordion(title)}
      >
        {title}
      </h6>
      <ul
        className={cn(styles.blockLinks, {
          [styles.openAccordion]: isAccordionOpen === title,
        })}
      >
        {links.map((link) => (
          <li className={styles.blockItem} key={uuidv4()}>
            <Link className={styles.blockLink} href={link.href}>
              {link.label} <span className={styles.linkMarkText}>{link.linkMarkText}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
