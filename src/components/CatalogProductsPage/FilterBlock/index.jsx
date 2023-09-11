'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { filterBlockData } from 'data/product-catalog/filterBlockData'
import FilterCategoryItem from 'components/CatalogProductsPage/FilterBlock/FilterCategoryItem'
import FilterBrandImageItem from 'components/CatalogProductsPage/FilterBlock/FilterBrandImageItem'
import advertisingImage from 'images/CatalogPage/filter/advertising.png'
import styles from 'components/CatalogProductsPage/FilterBlock/FilterBlock.module.scss'

export default function FilterBlock({ toggleFilterMenuVisibility }) {
  const {
    filtersCategoryPriceBlock,
    colorChoiceButtonsCatalogFilters,
    filtersNameBlock,
    filtersBrandsImage,
  } = filterBlockData

  const [selectedProductColor, setSelectedProductColor] = useState(null)
  const [isFilterCategoryOpen, setIsFilterCategoryOpen] = useState(true)
  const handleColorElementSelection = (productId) => setSelectedProductColor(productId)
  const toggleFilterCategoryAccordionVisibility = () =>
    setIsFilterCategoryOpen(!isFilterCategoryOpen)

  return (
    <div className={styles.filterBlock}>
      <div className={styles.filtersWrapper}>
        <div className={styles.filters}>
          <div className={styles.filtersHeader}>
            <button
              aria-label="close panel"
              className={styles.topButtonCloseOnMobile}
              onClick={toggleFilterMenuVisibility}
              type="button"
            >
              ✖
            </button>
            <h4 className={styles.title}>Filters</h4>
            <button aria-label="clear filter" className={styles.clearFiltersButton} type="button">
              Clear Filter
            </button>
          </div>
          {filtersCategoryPriceBlock.map(({ title, info }) => (
            <FilterCategoryItem
              info={info}
              isFilterCategoryOpen={isFilterCategoryOpen}
              key={uuidv4()}
              title={title}
              toggleFilterCategoryAccordionVisibility={toggleFilterCategoryAccordionVisibility}
            />
          ))}
          <div className={styles.colorBlock}>
            <h5
              className={cn(styles.colorTitle, {
                [styles.openAccordion]: isFilterCategoryOpen,
              })}
              onClick={toggleFilterCategoryAccordionVisibility}
              role="button"
            >
              Color
            </h5>
            {isFilterCategoryOpen && (
              <div className={styles.colorButtons}>
                {colorChoiceButtonsCatalogFilters.map(({ productId, colorStyle }) => (
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
          </div>
          {filtersNameBlock.map(({ title, info }) => (
            <FilterCategoryItem
              info={info}
              isFilterCategoryOpen={isFilterCategoryOpen}
              key={uuidv4()}
              title={title}
              toggleFilterCategoryAccordionVisibility={toggleFilterCategoryAccordionVisibility}
            />
          ))}
          <button aria-label="apply filters" className={styles.applyFiltersButton} type="button">
            Apply Filters <span className={styles.filtersApplyButtonCount}>(2)</span>
          </button>
        </div>
      </div>
      <div className={styles.brandsWrapper}>
        <div className={styles.brandsHeader}>
          <h4 className={styles.brandsTitle}>Filters</h4>
          <button aria-label="clear filter" className={styles.brandsButton} type="button">
            Clear Filter
          </button>
        </div>
        <div className={styles.brandsImages}>
          {filtersBrandsImage.map(({ alt, imageSrc, href }) => (
            <FilterBrandImageItem alt={alt} href={href} imageSrc={imageSrc} key={uuidv4()} />
          ))}
        </div>
      </div>
      <div className={styles.compareProductsWrapper}>
        <div className={styles.compareProductsTop}>
          <h4 className={styles.compareProductsTitle}>Compare Products</h4>
        </div>
        <p className={styles.compareProductsSubtitle}>You have no items to compare.</p>
      </div>
      <div className={styles.wishListWrapper}>
        <div className={styles.wishListTop}>
          <h4 className={styles.wishListTitle}>My Wish List</h4>
        </div>
        <p className={styles.wishListSubtitle}>You have no items in your wish list.</p>
      </div>
      <Link about="advertising link" className={styles.advertisingImageWrapper} href="#">
        <Image
          alt="advertising picture"
          className={styles.advertisingImage}
          src={advertisingImage}
        />
      </Link>
    </div>
  )
}
