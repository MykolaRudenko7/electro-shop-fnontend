import cn from 'classnames'
import Link from 'next/link'
import styles from 'components/shared/Header/Navbar/NavbarLink/NavbarLink.module.scss'

export default function NavbarLink({ href, label, activeLink }) {
  return (
    <li className={styles.navbarLinkWrapper}>
      <Link className={cn(styles.navbarLink, { [styles.activeLink]: activeLink })} href={href}>
        {label}
      </Link>
    </li>
  )
}
