'use client'

import { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import productsStore from 'stores/productsStore'
import { filterBlockData } from 'data/product-catalog/filterBlockData'
import styles from 'components/CatalogProductsPage/ProductsSortPanel/ProductsSortPanel.module.scss'

const ProductsSortPanel = observer(({ toggleFilterMenuVisibility }) => {
  const { sortPanelOptions } = filterBlockData
  const { formattedItemsRange } = productsStore

  const [isSortingByDropdownOpen, setIsSortingByDropdownOpen] = useState(false)
  const [isProductsPerPageDropdownOpen, setIsProductsPerPageDropdownOpen] = useState(false)
  const triggerSortingByButtonRef = useRef(null)
  const triggerProductsPerPageButtonRef = useRef(null)

  useEffect(() => {
    window.addEventListener('mousedown', handleDropdownOutsideClick)

    return () => {
      window.removeEventListener('mousedown', handleDropdownOutsideClick)
    }
  }, [])

  const toggleSortingByDropdownVisible = () => setIsSortingByDropdownOpen((prevState) => !prevState)
  const toggleProductPerPageDropdownVisibility = () =>
    setIsProductsPerPageDropdownOpen((prevState) => !prevState)

  const handleDropdownOutsideClick = (event) => {
    if (
      !triggerSortingByButtonRef.current?.contains(event.target) &&
      !triggerProductsPerPageButtonRef.current?.contains(event.target) &&
      !event.target.classList.contains(styles.dropdownItem)
    ) {
      setIsSortingByDropdownOpen(false)
      setIsProductsPerPageDropdownOpen(false)
    }
  }

  const handleSortingProductsByOption = (option) => {
    setIsSortingByDropdownOpen(false)
    productsStore.setSortingByOption(option)
    productsStore.sortProductsBySelectedOption()
    productsStore.resetCurrentPageNumber()
  }
  const handleProductsPerPageSelection = (option) => {
    setIsProductsPerPageDropdownOpen(false)
    productsStore.setProductsPerPage(option)
    productsStore.resetCurrentPageNumber()
  }

  return (
    <div className={styles.sortPanel}>
      <p className={styles.sortPanelTitle}>{formattedItemsRange}</p>
      <button
        aria-label="filter products"
        className={styles.sortPanelFilterOnMobileButton}
        onClick={toggleFilterMenuVisibility}
        type="button"
      >
        Filter
      </button>
      <div className={styles.productSortButtons}>
        <div className={styles.productSortButtonWrapper}>
          <button
            className={cn(styles.selectedFiltersButton, {
              [styles.openAccordion]: isSortingByDropdownOpen,
            })}
            onClick={toggleSortingByDropdownVisible}
            ref={triggerSortingByButtonRef}
            type="button"
          >
            Sort By:{' '}
            <span className={styles.selectedFiltersOption}>{productsStore.currentSortOption}</span>
          </button>
          <ul
            className={cn(styles.dropdownList, {
              [styles.openAccordion]: isSortingByDropdownOpen,
            })}
          >
            {sortPanelOptions.sortBy.map((option) => (
              <li
                className={styles.dropdownItem}
                key={uuidv4()}
                onClick={() => handleSortingProductsByOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.productSortButtonWrapper}>
          <button
            className={cn(styles.selectedFiltersButton, {
              [styles.openAccordion]: isProductsPerPageDropdownOpen,
            })}
            onClick={toggleProductPerPageDropdownVisibility}
            ref={triggerProductsPerPageButtonRef}
            type="button"
          >
            Show:
            <span className={styles.selectedFiltersOption}>
              {productsStore.productsPerPage} per page
            </span>
          </button>
          <ul
            className={cn(styles.dropdownList, {
              [styles.openAccordion]: isProductsPerPageDropdownOpen,
            })}
          >
            {sortPanelOptions.show.map((option) => (
              <li
                className={styles.dropdownItem}
                key={uuidv4()}
                onClick={() => handleProductsPerPageSelection(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.setProductsViewButtonsBlock}>
          <button
            aria-label="set products view style to cards"
            className={cn(styles.setProductsGridViewButton, {
              [styles.changeView]: productsStore.currentProductsViewType === 'grid',
            })}
            onClick={() => productsStore.setCurrentViewType('grid')}
            type="button"
          />
          <button
            aria-label="set products view style to list"
            className={cn(styles.setProductsListViewButton, {
              [styles.changeView]: productsStore.currentProductsViewType === 'list',
            })}
            onClick={() => productsStore.setCurrentViewType('list')}
            type="button"
          />
        </div>
      </div>
    </div>
  )
})

export default ProductsSortPanel
