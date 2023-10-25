'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { debounce } from 'lodash'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import searchPicture from 'images/header/search.svg'
import styles from 'components/shared/Header/Navbar/NavbarSearchPanel/NavbarSearchPanel.module.scss'

const NavbarSearchPanel = observer(({ isProductSearchInputOpen, setIsProductSearchInputOpen }) => {
  const containerRef = useRef(null)
  const { productSearchQuery } = productsStore

  const handleIconClick = () => {
    setIsProductSearchInputOpen(!isProductSearchInputOpen)
  }
  const handleOutsideClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsProductSearchInputOpen(false)
    }
  }

  const updateLocalStorage = (keySearchQuery, searchQuery) => {
    localStorage.setItem(keySearchQuery, searchQuery)
  }
  const filterProductsBySearchQueryDebounce = debounce((searchQuery) => {
    productsStore.filterProductsBySearchQuery()
  }, 1000)
  const handleInputChange = (event) => {
    updateLocalStorage('productSearchQuery', event.target.value)
    productsStore.setProductSearchQuery(event.target.value)
    filterProductsBySearchQueryDebounce(event.target.value)
    setIsProductSearchInputOpen(true)
  }
  const handleClearSearchButtonClick = () => {
    updateLocalStorage('productSearchQuery', '')
    productsStore.resetProductSearchQuery()
    containerRef.current?.focus()
    productsStore.filterProductsBySearchQuery()
    setIsProductSearchInputOpen(false)
  }

  useEffect(() => {
    productsStore.setSearchQueryFromLocalStorage()
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
        autoComplete="off"
        className={cn(styles.input, {
          [styles.openSearchInput]: isProductSearchInputOpen,
        })}
        id="searchInput"
        name="searchInput"
        onChange={handleInputChange}
        placeholder="Search entiere store here..."
        type="text"
        value={productSearchQuery}
      />
      {productSearchQuery && isProductSearchInputOpen && (
        <span className={styles.searchClean} onClick={handleClearSearchButtonClick}>
          ×
        </span>
      )}
    </div>
  )
})

export default NavbarSearchPanel
