import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { filterBlockData } from 'data/filterBlockData'
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
        className={styles.sortPanelFilterOnMobileButton}
        type="button"
        aria-label="filter products"
        onClick={toggleFilterMenuVisibility}
      >
        Filter
      </button>
      <div className={styles.productSortButtons}>
        <div className={styles.productSortButtonWrapper}>
          <button
            type="button"
            className={cn(styles.selectedFiltersButton, {
              [styles.openAccordion]: isSortingByDropdownOpen,
            })}
            onClick={toggleSortingByDropdownVisible}
            ref={triggerSortingByButtonRef}
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
                key={uuidv4()}
                className={styles.dropdownItem}
                onClick={() => selectSortingByOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.productSortButtonWrapper}>
          <button
            type="button"
            className={cn(styles.selectedFiltersButton, {
              [styles.openAccordion]: isProductsPerPageDropdownOpen,
            })}
            onClick={toggleProductPerPageDropdownVisibility}
            ref={triggerProductsPerPageButtonRef}
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
                key={uuidv4()}
                className={styles.dropdownItem}
                onClick={() => selectProductsPerPageOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.setProductsViewButtonsBlock}>
          <button
            onClick={() => handleViewTypeChange('grid')}
            type="button"
            aria-label="set products view style to cards"
            className={cn(styles.setProductsGridViewButton, {
              [styles.changeView]: currentViewType === 'grid',
            })}
          />
          <button
            onClick={() => handleViewTypeChange('list')}
            type="button"
            aria-label="set products view style to list"
            className={cn(styles.setProductsListViewButton, {
              [styles.changeView]: currentViewType === 'list',
            })}
          />
        </div>
      </div>
    </div>
  )
}
