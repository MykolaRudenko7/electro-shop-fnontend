import Link from 'next/link'
import styles from '@/FilterBlock/FilteredProductCountButton/FilteredProductCountButton.module.scss'

export default function FilteredProductCountButton({ title, href, count }) {
  return (
    <Link className={styles.selectedFiltersButton} href={href}>
      {title}
      <span className={styles.selectedFiltersCount}>({count})</span>
      <span className={styles.selectedFiltersButtonDelete}>×</span>
    </Link>
  )
}
