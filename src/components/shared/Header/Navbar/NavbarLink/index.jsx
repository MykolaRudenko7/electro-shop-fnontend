import classNames from 'classnames'
import Link from 'next/link'
import styles from 'components/shared/Header/Navbar/NavbarLink/NavbarLink.module.scss'

export default function NavbarLink({ href, isActiveLink, label }) {
  return (
    <li className={styles.navbarLinkWrapper}>
      <Link
        href={href}
        className={classNames(styles.navbarLink, {
          [styles.activeLink]: isActiveLink,
        })}
      >
        {label}
      </Link>
    </li>
  )
}
