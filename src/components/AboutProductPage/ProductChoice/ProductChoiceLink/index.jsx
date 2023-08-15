import Link from 'next/link'
import styles from 'components/AboutProductPage/ProductChoice/ProductChoiceLink/ProductChoiceLink.module.scss'

export default function ProductChoiceLink({ href, label }) {
  return (
    <li className={styles.productChoiceLinkWrapper}>
      <Link className={styles.productChoiceLink} href={href}>
        {label}
      </Link>
    </li>
  )
}
