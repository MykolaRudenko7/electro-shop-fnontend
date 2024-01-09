'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import { observer } from 'mobx-react-lite'
import { navbarLinks } from 'data/shared/headerData'
import productsStore from 'stores/productsStore'
import NavbarLink from 'components/shared/Header/Navbar/NavbarLink'
import PopoverAccountMenu from 'components/shared/Header/Navbar/PopoverAccountMenu'
import NavbarSearchPanel from 'components/shared/Header/Navbar/NavbarSearchPanel'
import logoPicture from 'images/header/Logo.svg'
import styles from 'components/shared/Header/Navbar/Navbar.module.scss'

const Navbar = observer(() => {
  const [isProductSearchInputOpen, setIsProductSearchInputOpen] = useState(false)
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false)
  const pathname = usePathname()
  const navbarMenuRef = useRef(null)
  const { totalQuantityOfAddedProducts } = productsStore

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
            [styles.hidden]: isProductSearchInputOpen,
          })}
          data-test-id="navbarMenu"
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
        <Link aria-label="cart" className={styles.leftComponentLink} href="/shopping-cart">
          {totalQuantityOfAddedProducts > 0 && (
            <span className={styles.countProductsInCart}>{totalQuantityOfAddedProducts}</span>
          )}
        </Link>
        <PopoverAccountMenu />
      </ul>
    </nav>
  )
})

export default Navbar
