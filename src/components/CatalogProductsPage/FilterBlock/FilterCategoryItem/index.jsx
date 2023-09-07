'use client'

import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import styles from 'components/CatalogProductsPage/FilterBlock/FilterCategoryItem/FilterCategoryItem.module.scss'

export default function FilterCategoryItem({
  title,
  info,
  isFilterCategoryOpen,
  toggleFilterCategoryAccordionVisibility,
}) {
  return (
    <div className={styles.categoryWrapper}>
      <h5
        className={cn(styles.categoryTitle, {
          [styles.openAccordion]: isFilterCategoryOpen,
        })}
        onClick={toggleFilterCategoryAccordionVisibility}
      >
        {title}
      </h5>
      <ul
        className={cn(styles.categoryItems, {
          [styles.openAccordion]: isFilterCategoryOpen,
        })}
      >
        {info.map(({ link, category, amount }) => (
          <li className={styles.categoryItem} key={uuidv4()}>
            <Link className={styles.categoryItemLink} href={link}>
              {category}
              <span className={styles.categoryItemLinkAmount}>{amount}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
