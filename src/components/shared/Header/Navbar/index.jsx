'use client'

import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { navbarLinks } from 'data/shared/headerData'
import NavbarLink from 'components/shared/Header/Navbar/NavbarLink'
import NavbarSearchPanel from 'components/shared/Header/Navbar/NavbarSearchPanel'
import logoPicture from 'images/header/Logo.svg'
import profilePicture from 'images/header/profile.svg'
import basket from 'images/header/basket.svg'
import styles from 'components/shared/Header/Navbar/Navbar.module.scss'

export default function Navbar() {
  const [isProductSearchInputOpen, setIsProductSearchInputOpen] = useState(false)
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false)
  const pathname = usePathname()
  const navbarMenuRef = useRef(null)

  const handleMenuToggle = () => {
    setIsNavbarMenuOpen(!isNavbarMenuOpen)
  }
  const handleOutsideClick = (e) => {
    if (isNavbarMenuOpen && navbarMenuRef.current && !navbarMenuRef.current.contains(e.target)) {
      setIsNavbarMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isNavbarMenuOpen])

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__wrapper}>
        <div className={styles.logo}>
          <Link className={styles.logoLink} href="/">
            <Image
              alt="Logo picture"
              className={styles.logoImage}
              height={40}
              src={logoPicture}
              width={34}
            />
          </Link>
        </div>
        <div
          className={cn(styles.burger, {
            [styles.active]: isNavbarMenuOpen,
          })}
          onClick={handleMenuToggle}
        >
          <span className={styles.burger__line} />
          <span className={styles.burger__line} />
          <span className={styles.burger__line} />
        </div>
        <ul
          className={cn(styles.navbarMenu, {
            [styles.open]: isNavbarMenuOpen,
            [styles.hiden]: isProductSearchInputOpen,
          })}
          ref={navbarMenuRef}
        >
          {navbarLinks.map((link) => (
            <NavbarLink key={uuidv4()} {...link} activeLink={pathname === link.href} />
          ))}
        </ul>
      </div>
      <ul className={styles.leftComponent}>
        <NavbarSearchPanel
          isProductSearchInputOpen={isProductSearchInputOpen}
          setIsProductSearchInputOpen={setIsProductSearchInputOpen}
        />
        <Link className={styles.leftComponentLink} href="/shopping-cart">
          <Image alt="basket picture" src={basket} />
        </Link>
        <Link className={styles.leftComponentLinkProfile} href="#">
          <Image
            alt="profile picture"
            className={styles.leftComponentImage}
            height={36}
            src={profilePicture}
            width={36}
          />
        </Link>
      </ul>
    </nav>
  )
}
