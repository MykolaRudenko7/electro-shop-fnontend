import Link from 'next/link'
import styles from 'components/shared/NavigationLink/NavigationLink.module.scss'

export default function NavigationLink({ href, label }) {
  return (
    <li className={styles.listItem}>
      <Link className={styles.link} href={href}>
        {label}
      </Link>
    </li>
  )
}
