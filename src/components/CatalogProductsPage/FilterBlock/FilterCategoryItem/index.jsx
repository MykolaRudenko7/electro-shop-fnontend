'use client'

import { useState } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import styles from 'components/CatalogProductsPage/FilterBlock/FilterCategoryItem/FilterCategoryItem.module.scss'

const FilterCategoryItem = observer(({ titleSortCategory, sortCategories, colorChoiceFilter }) => {
  const [selectedProductColor, setSelectedProductColor] = useState(null)
  const [isFilterCategoryOpen, setIsFilterCategoryOpen] = useState(true)

  const handleColorElementSelection = (productId) => setSelectedProductColor(productId)
  const toggleFilterCategoryAccordionVisibility = () =>
    setIsFilterCategoryOpen(!isFilterCategoryOpen)

  const selectCategoryItem = (category) => {
    productsStore.resetCurrentPageNumber()
    productsStore.setFilterPriceRange(category)
    productsStore.filterProductsByPrice()
    productsStore.sortProductsBySelectedOption()
    productsStore.addCurrentFilterToSidebarPanel(category)
  }

  const countOfProduct = productsStore.numbersOfProductsInPriceCategories

  return (
    <div className={styles.categoryWrapper}>
      <h5
        className={cn(styles.categoryTitle, {
          [styles.openAccordion]: isFilterCategoryOpen,
        })}
        onClick={toggleFilterCategoryAccordionVisibility}
        role="button"
      >
        {titleSortCategory}
      </h5>
      <ul
        className={cn(styles.categoryItems, {
          [styles.openAccordion]: isFilterCategoryOpen,
        })}
      >
        {sortCategories?.map(({ label }) => (
          <li
            className={styles.categoryItemLink}
            key={uuidv4()}
            onClick={() => selectCategoryItem(label)}
          >
            {label}
            <span className={styles.categoryItemLinkAmount} role="button">
              {countOfProduct[label] || 0}
            </span>
          </li>
        ))}
        {colorChoiceFilter && isFilterCategoryOpen && (
          <div className={styles.chooseProductColorButtonsWrapper}>
            {colorChoiceFilter.map(({ productId, colorStyle }) => (
              <button
                aria-label="choose product color"
                className={cn(styles.colorChoiceButton, styles[colorStyle], {
                  [styles.selectedElementColor]: selectedProductColor === productId,
                })}
                key={uuidv4()}
                onClick={() => handleColorElementSelection(productId)}
              />
            ))}
          </div>
        )}
      </ul>
    </div>
  )
})

export default FilterCategoryItem
