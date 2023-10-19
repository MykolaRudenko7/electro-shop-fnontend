import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { filterBlockData } from 'data/product-catalog/filterBlockData'
import Loading from 'app/loading'
import ProductsService from 'services/productFetchingService'
import NavigationLink from 'components/shared/NavigationLink'
import ProductsSectionWrapper from 'components/CatalogProductsPage/ProductsSectionWrapper'
import bannerImage from 'images/CatalogPage/banner.png'
import styles from 'app/products-catalog/ProductsCatalog.module.scss'

export default async function ProductsCatalogPage() {
  const { filtersCategoryLinks } = filterBlockData

  const laptops = await ProductsService.fetchLaptops()

  return (
    <div className={styles.catalog}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogBannerWrapper}>
          <Link about="banner picture link" href="#">
            <Image
              alt="banner image"
              className={styles.catalogBannerImage}
              placeholder="blur"
              src={bannerImage}
            />
          </Link>
        </div>
        <ul className={styles.linksWrapper}>
          {filtersCategoryLinks.map((link) => (
            <NavigationLink key={uuidv4()} {...link} />
          ))}
        </ul>
        <h2 className={styles.titleProducts}>MSI PS Series</h2>
        <Suspense fallback={<Loading />}>
          <ProductsSectionWrapper laptops={laptops} />
        </Suspense>
      </div>
    </div>
  )
}
