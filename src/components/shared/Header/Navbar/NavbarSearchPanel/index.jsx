'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import searchPicture from 'images/header/search.svg'
import styles from 'components/shared/Header/Navbar/NavbarSearchPanel/NavbarSearchPanel.module.scss'

export default function NavbarSearchPanel() {
  const [isProductSearchInputOpen, setIsProductSearchInputOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const containerRef = useRef(null)

  const handleIconClick = () => {
    setIsProductSearchInputOpen(!isProductSearchInputOpen)
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleOutsideClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsProductSearchInputOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div
      className={cn(styles.search, { [styles.open]: isProductSearchInputOpen })}
      ref={containerRef}
    >
      <div className={styles.icon} onClick={handleIconClick}>
        <Image alt="Search icon picture" height={24} src={searchPicture} width={24} />
      </div>
      <input
        className={styles.input}
        onChange={handleInputChange}
        placeholder="Search here"
        type="text"
        value={inputValue}
      />
    </div>
  )
}
