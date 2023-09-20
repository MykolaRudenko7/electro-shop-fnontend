'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import searchPicture from 'images/header/search.svg'
import styles from 'components/shared/Header/Navbar/NavbarSearchPanel/NavbarSearchPanel.module.scss'

export default function NavbarSearchPanel({
  isProductSearchInputOpen,
  setIsProductSearchInputOpen,
}) {
  const [searchInputValue, setSearchInputValue] = useState('')
  const containerRef = useRef(null)

  const handleIconClick = () => {
    setIsProductSearchInputOpen(!isProductSearchInputOpen)
  }
  const handleInputChange = (event) => {
    setSearchInputValue(event.target.value)
    localStorage.setItem('searchValue', event.target.value)
  }
  const handleOutsideClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsProductSearchInputOpen(false)
    }
  }
  const onClickClearSearch = () => {
    setSearchInputValue('')
    localStorage.removeItem('searchTerm')
    containerRef.current?.focus()
  }

  useEffect(() => {
    const storedSearchValue = localStorage.getItem('searchValue')

    if (storedSearchValue) {
      setSearchInputValue(storedSearchValue)
    }

    window.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div className={styles.search} ref={containerRef}>
      <div
        className={cn(styles.icon, { [styles.openSearchInput]: isProductSearchInputOpen })}
        onClick={handleIconClick}
      >
        <Image alt="Search icon picture" height={24} src={searchPicture} width={24} />
      </div>
      <input
        className={cn(styles.input, {
          [styles.openSearchInput]: isProductSearchInputOpen,
        })}
        onChange={handleInputChange}
        placeholder="Search entiere store here..."
        type="text"
        value={searchInputValue}
      />
      {searchInputValue && (
        <span className={styles.searchClean} onClick={onClickClearSearch}>
          ×
        </span>)}
    </div>
  )
}
