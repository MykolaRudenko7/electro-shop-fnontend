'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import ProductsPagination from 'components/CatalogProductsPage/ProductsPagination'
import FilterBlock from 'components/CatalogProductsPage/FilterBlock'
import ProductsCatalog from 'components/CatalogProductsPage/ProductsCatalog'
import ProductsSortPanel from 'components/CatalogProductsPage/ProductsSortPanel'
import TextBlockAboutCompany from 'components/CatalogProductsPage/TextBlockAboutCompany'
import SelectedSidebarFilters from 'components/CatalogProductsPage/FilterBlock/SelectedSidebarFilters'
import styles from 'components/CatalogProductsPage/ProductsSectionWrapper/ProductsSectionWrapper.module.scss'

const ProductsSectionWrapper = observer(({ laptops }) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)
  const toggleFilterMenuVisibility = () => setIsFilterMenuOpen(!isFilterMenuOpen)

  useEffect(() => {
    productsStore.setLaptops(laptops)
  }, [])

  return (
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
          <SelectedSidebarFilters />
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
  )
})

export default ProductsSectionWrapper
