import cn from 'classnames'
import Link from 'next/link'
import styles from 'components/shared/Header/Navbar/NavbarLink/NavbarLink.module.scss'

export default function NavbarLink({ href, label, activeLink }) {
  return (
    <li className={styles.navbarLinkWrapper} data-test-id="navbarLinkWrapper">
      <Link
        aria-label="navigation link"
        className={cn(styles.navbarLink, { [styles.activeLink]: activeLink })}
        href={href}
      >
        {label}
      </Link>
    </li>
  )
}
