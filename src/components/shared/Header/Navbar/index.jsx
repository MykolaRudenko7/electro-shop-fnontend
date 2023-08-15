'use client'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { navbarLinks } from 'data/headerData'
import NavbarLink from 'components/shared/Header/Navbar/NavbarLink'
import Search from 'components/shared/Header/Navbar/NavbarSearchPanel'
import logoPicture from 'images/AboutPage/header/Logo.svg'
import basketPicture from 'images/AboutPage/header/basket.svg'
import profilePicture from 'images/AboutPage/header/profile.svg'
import styles from 'components/shared/Header/Navbar/Navbar.module.scss'

export default function Navbar() {
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false)
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
          <Link href="/" className={styles.logoLink}>
            <Image
              className={styles.logoImage}
              src={logoPicture}
              alt="Logo picture"
              width={34}
              height={40}
            />
          </Link>
        </div>
        <div
          className={classNames(styles.burger, {
            [styles.active]: isNavbarMenuOpen,
          })}
          onClick={handleMenuToggle}
        >
          <span className={styles.burger__line} />
          <span className={styles.burger__line} />
          <span className={styles.burger__line} />
        </div>
        <ul
          className={classNames(styles.navbarMenu, {
            [styles.open]: isNavbarMenuOpen,
          })}
          ref={navbarMenuRef}
        >
          {navbarLinks.map((link) => (
            <NavbarLink key={uuidv4()} {...link} />
          ))}
        </ul>
      </div>
      <ul className={styles.leftComponent}>
        <Search />
        <Link className={styles.leftComponentLink} href="#">
          <Image
            className={styles.leftComponentImage}
            src={basketPicture}
            alt="logo picture"
            width={25}
            height={25}
          />
        </Link>
        <Link className={styles.leftComponentLinkProfile} href="#">
          <Image
            className={styles.leftComponentImage}
            src={profilePicture}
            alt="profile picture"
            width={36}
            height={36}
          />
        </Link>
      </ul>
    </nav>
  )
}
