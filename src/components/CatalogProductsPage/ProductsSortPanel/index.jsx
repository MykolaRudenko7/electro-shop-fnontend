import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { filterBlockData } from 'data/product-catalog/filterBlockData'
import styles from 'components/CatalogProductsPage/ProductsSortPanel/ProductsSortPanel.module.scss'

export default function ProductsSortPanel({
  toggleFilterMenuVisibility,
  handleViewTypeChange,
  currentViewType,
}) {
  const [isSortingByDropdownOpen, setIsSortingByDropdownOpen] = useState(false)
  const [isProductsPerPageDropdownOpen, setIsProductsPerPageDropdownOpen] = useState(false)

  const { sortPanelOptions } = filterBlockData
  const [currentSortingByOption, setCurrentSortingByOption] = useState(sortPanelOptions.sortBy[0])
  const [currentProductsPerPage, setCurrentProductsPerPage] = useState(sortPanelOptions.show[0])
  const triggerSortingByButtonRef = useRef(null)
  const triggerProductsPerPageButtonRef = useRef(null)

  const toggleSortingByDropdownVisible = () => setIsSortingByDropdownOpen((prevState) => !prevState)
  const toggleProductPerPageDropdownVisibility = () =>
    setIsProductsPerPageDropdownOpen((prevState) => !prevState)

  const selectSortingByOption = (option) => {
    setCurrentSortingByOption(option)
    setIsSortingByDropdownOpen(false)
  }
  const selectProductsPerPageOption = (option) => {
    setCurrentProductsPerPage(option)
    setIsProductsPerPageDropdownOpen(false)
  }
  const dropdownOutsideClick = (event) => {
    if (
      !triggerSortingByButtonRef.current?.contains(event.target) &&
      !triggerProductsPerPageButtonRef.current?.contains(event.target) &&
      !event.target.classList.contains(styles.dropdownItem)
    ) {
      setIsSortingByDropdownOpen(false)
      setIsProductsPerPageDropdownOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', dropdownOutsideClick)

    return () => {
      window.removeEventListener('mousedown', dropdownOutsideClick)
    }
  }, [])

  return (
    <div className={styles.sortPanel}>
      <p className={styles.sortPanelTitle}>Items 1-35 of 61</p>
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
            Sort By: <span className={styles.selectedFiltersOption}>{currentSortingByOption}</span>
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
                onClick={() => selectSortingByOption(option)}
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
            Show: <span className={styles.selectedFiltersOption}>{currentProductsPerPage}</span>
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
                onClick={() => selectProductsPerPageOption(option)}
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
              [styles.changeView]: currentViewType === 'grid',
            })}
            onClick={() => handleViewTypeChange('grid')}
            type="button"
          />
          <button
            aria-label="set products view style to list"
            className={cn(styles.setProductsListViewButton, {
              [styles.changeView]: currentViewType === 'list',
            })}
            onClick={() => handleViewTypeChange('list')}
            type="button"
          />
        </div>
      </div>
    </div>
  )
}
