'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { filterBlockData } from 'data/product-catalog/filterBlockData'
import LinksPanel from 'components/shared/NavigationLink'
import FilterBlock from 'components/CatalogProductsPage/FilterBlock'
import ProductsSortPanel from 'components/CatalogProductsPage/ProductsSortPanel'
import FilterCountProductsButton from 'components/CatalogProductsPage/FilterBlock/FilteredProductCountButton'
import bannerImage from 'images/CatalogPage/banner.png'
import styles from 'app/products-catalog/ProductsCatalog.module.scss'
import ProductCards from 'components/CatalogProductsPage/ProductCards'

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
          <Link about="banner picture link" href="#">
            <Image
              alt="banner image"
              className={styles.catalogBannerImage}
              src={bannerImage}
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
            <Link about="back button" className={styles.whiteBackButton} href="#" role="button">
              ‹ Back
            </Link>
            <FilterBlock toggleFilterMenuVisibility={toggleFilterMenuVisibility} />
          </div>
          <div className={styles.productsPart}>
            <ProductsSortPanel
              currentViewType={currentViewType}
              handleViewTypeChange={handleViewTypeChange}
              toggleFilterMenuVisibility={toggleFilterMenuVisibility}
            />
            <div className={styles.selectedFiltersPanel}>
              {selectedFiltersDataButtons.map((item) => (
                <FilterCountProductsButton key={uuidv4()} {...item} />
              ))}
              <Link className={styles.selectedFiltersPanelClearButton} href="#">
                Clear All
              </Link>
            </div>
            <ProductCards currentViewType={currentViewType} />
          </div>
        </section>
      </div>
    </div>
  )
}