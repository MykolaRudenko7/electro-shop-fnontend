'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { filterBlockData } from 'data/product-catalog/filterBlockData'
import productsStore from 'stores/productsStore'
import NavigationLink from 'components/shared/NavigationLink'
import ProductsPagination from 'components/CatalogProductsPage/ProductsPagination'
import FilterBlock from 'components/CatalogProductsPage/FilterBlock'
import ProductsCatalog from 'components/CatalogProductsPage/ProductsCatalog'
import ProductsSortPanel from 'components/CatalogProductsPage/ProductsSortPanel'
import TextBlockAboutCompany from 'components/CatalogProductsPage/TextBlockAboutCompany'
import FilterCountProductsButton from 'components/CatalogProductsPage/FilterBlock/FilteredResultsCountTabButton'
import bannerImage from 'images/CatalogPage/banner.png'
import styles from 'app/products-catalog/ProductsCatalog.module.scss'

export const metadata = {
  title: 'Catalog page',
  description: 'Catalog products. Tech online store',
}

const ProductsCatalogPage = observer(() => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)
  const { filtersCategoryLinks } = filterBlockData
  const { selectedSidebarFilters } = productsStore

  const toggleFilterMenuVisibility = () => setIsFilterMenuOpen(!isFilterMenuOpen)

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
            <NavigationLink key={uuidv4()} {...link} />
          ))}
        </ul>
        <h2 className={styles.titleProducts}>
          MSI PS Series <span className={styles.titleProductsCount}>(20)</span>
        </h2>
        <section className={styles.productsWrapper}>
          <div className={cn(styles.filterPart, { [styles.openFilterMenu]: isFilterMenuOpen })}>
            <Link about="back button" className={styles.whiteBackButton} href="/" role="button">
              ‹ Back
            </Link>
            <FilterBlock toggleFilterMenuVisibility={toggleFilterMenuVisibility} />
          </div>
          <div className={styles.productsPart}>
            <ProductsSortPanel toggleFilterMenuVisibility={toggleFilterMenuVisibility} />
            <div className={styles.selectedFiltersPanel}>
              {selectedSidebarFilters &&
                selectedSidebarFilters.map(({ title }) => (
                  <FilterCountProductsButton key={uuidv4()} title={title} />
                ))}
              <button
                className={styles.selectedFiltersPanelClearButton}
                onClick={() => productsStore.resetToDefaultFilters()}
                type="button"
              >
                Clear All
              </button>
            </div>
            <ProductsCatalog />
            <ProductsPagination />
            <TextBlockAboutCompany />
          </div>
        </section>
      </div>
    </div>
  )
})

export default ProductsCatalogPage
