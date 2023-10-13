'use client'

import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import { filterBlockData } from 'data/product-catalog/filterBlockData'
import FilterCategoryItem from 'components/CatalogProductsPage/FilterBlock/FilterCategoryItem'
import FilterBrandImageItem from 'components/CatalogProductsPage/FilterBlock/FilterBrandImageItem'
import advertisingImage from 'images/CatalogPage/filter/advertising.png'
import styles from 'components/CatalogProductsPage/FilterBlock/FilterBlock.module.scss'

const FilterBlock = observer(({ toggleFilterMenuVisibility }) => {
  const { filtersCategoriesBlocks, filtersBrandsImage } = filterBlockData
  const { productsWishList, productsRatingList } = productsStore

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
            <button
              aria-label="clear filter"
              className={styles.clearFiltersButton}
              onClick={() => productsStore.resetToDefaultFilters()}
              type="button"
            >
              Clear Filter
            </button>
          </div>
          {filtersCategoriesBlocks.map((item) => (
            <FilterCategoryItem {...item} key={uuidv4()} />
          ))}
          <button aria-label="apply filters" className={styles.applyFiltersButton} type="button">
            Apply Filters
          </button>
        </div>
      </div>
      <div className={styles.brandsWrapper}>
        <div className={styles.brandsHeader}>
          <h4 className={styles.brandsTitle}>Brands</h4>
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
      <div className={styles.selectedList}>
        <h4 className={styles.listTitle}>Compare Products</h4>
        {productsRatingList.length ? (
          <div className={styles.listItems}>
            {productsRatingList.map((item) => (
              <p className={styles.listSubtitle} key={uuidv4()}>
                {item}
              </p>
            ))}
            <button
              aria-label="reset list"
              className={styles.resetListButton}
              onClick={() => productsStore.resetProductsRatingList()}
              type="button"
            >
              Clear List
            </button>
          </div>
        ) : (
          <p className={styles.listNoItems}>You have no items to compare.</p>
        )}
      </div>
      <div className={styles.selectedList}>
        <h4 className={styles.listTitle}>My Wish List</h4>
        {productsWishList.length ? (
          <div className={styles.listItems}>
            {productsWishList.map((item) => (
              <p className={styles.listSubtitle} key={uuidv4()}>
                {item}
              </p>
            ))}
            <button
              aria-label="reset list"
              className={styles.resetListButton}
              onClick={() => productsStore.resetProductsInWishList()}
              type="button"
            >
              Clear List
            </button>
          </div>
        ) : (
          <p className={styles.listNoItems}>You have no items in your wish list.</p>
        )}
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
})

export default FilterBlock
