import Link from 'next/link'
import styles from 'components/CatalogProductsPage/FilterBlock/FilteredProductCountButton/FilteredProductCountButton.module.scss'

export default function FilteredProductCountButton({ title, href, count }) {
  return (
    <Link href={href} className={styles.selectedFiltersButton}>
      {title}
      <span className={styles.selectedFiltersCount}>({count})</span>
      <span className={styles.selectedFiltersButtonDelete}>×</span>
    </Link>
  )
}
