'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { filterBlockData } from 'data/filterBlockData'
import LinksPanel from 'components/shared/NavigationLink'
import FilterBlock from 'components/CatalogProductsPage/FilterBlock'
import ProductsSortPanel from 'components/CatalogProductsPage/ProductsSortPanel'
import FilterCountProductsButton from 'components/CatalogProductsPage/FilterBlock/FilteredProductCountButton'
import bannerImage from 'images/CatalogPage/banner.png'
import styles from 'app/products-catalog/ProductsCatalog.module.scss'

export const metadata = {
  title: 'Catalog page',
  description: 'Catalog products. Tech online store',
}

export default function ProductsCatalog() {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)
  const [currentViewType, setCurrentViewType] = useState('grid')
  const { filtersCategoryLinks, selectedFiltersDataButtons } = filterBlockData

  const toggleFilterMenuVisibility = () => setIsFilterMenuOpen(!isFilterMenuOpen)
  const handleViewTypeChange = (type) => setCurrentViewType(type)

  return (
    <div className={styles.catalog}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogBannerWrapper}>
          <Link href="#" about="banner picture link">
            <Image
              className={styles.catalogBannerImage}
              src={bannerImage}
              alt="banner image"
              priority
            />
          </Link>
        </div>
        <ul className={styles.linksWrapper}>
          {filtersCategoryLinks.map((link) => (
            <LinksPanel key={uuidv4()} {...link} />
          ))}
        </ul>
        <h2 className={styles.titleProducts}>
          MSI PS Series <span className={styles.titleProductsCount}>(20)</span>
        </h2>
        <section className={styles.productsWrapper}>
          <div className={cn(styles.filterPart, { [styles.openFilterMenu]: isFilterMenuOpen })}>
            <Link href="#" className={styles.whiteBackButton} about="back button" role="button">
              ‹ Back
            </Link>
            <FilterBlock toggleFilterMenuVisibility={toggleFilterMenuVisibility} />
          </div>
          <div className={styles.productsPart}>
            <ProductsSortPanel
              toggleFilterMenuVisibility={toggleFilterMenuVisibility}
              currentViewType={currentViewType}
              handleViewTypeChange={handleViewTypeChange}
            />
            <div className={styles.selectedFiltersPanel}>
              {selectedFiltersDataButtons.map((item) => (
                <FilterCountProductsButton key={uuidv4()} {...item} />
              ))}
              <Link href="#" className={styles.selectedFiltersPanelClearButton}>
                Clear All
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
