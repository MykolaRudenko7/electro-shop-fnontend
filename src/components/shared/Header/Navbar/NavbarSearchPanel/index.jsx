'use client'
import classNames from 'classnames'
import styles from 'components/shared/Header/Navbar/NavbarSearchPanel/NavbarSearchPanel.module.scss'
import searchPicture from 'images/AboutPage/header/search.svg'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

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
      ref={containerRef}
      className={classNames(styles.search, { [styles.open]: isProductSearchInputOpen })}
    >
      <div className={styles.icon} onClick={handleIconClick}>
        <Image src={searchPicture} alt="Search icon picture" width={24} height={24} />
      </div>
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search here"
      />
    </div>
  )
}
