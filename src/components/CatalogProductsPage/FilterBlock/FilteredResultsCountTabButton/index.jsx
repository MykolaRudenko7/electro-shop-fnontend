import { observer } from 'mobx-react-lite'
import cn from 'classnames'
import productsStore from 'stores/productsStore'
import styles from '@/FilterBlock/FilteredResultsCountTabButton/FilteredResultsCountTabButton.module.scss'

const FilteredResultsCountTabButton = observer(({ title }) => {
  const isCurrentTabSelected = productsStore.selectedFilterPriceRange === title
  const countOfProducts = productsStore.numbersOfProductsInPriceCategories

  const handleClickOnSelectedFilterCategory = (title) => {
    productsStore.setFilterPriceRange(title)
    productsStore.sortProductsBySelectedOption()
  }

  return (
    <div
      className={cn(styles.selectedFiltersButton, {
        [styles.currentFilterCategory]: isCurrentTabSelected,
      })}
      onClick={() => handleClickOnSelectedFilterCategory(title)}
    >
      {title}
      <span className={styles.selectedFiltersCount}>({countOfProducts[title] || 0})</span>
      <button
        className={styles.selectedFiltersButtonDelete}
        onClick={() => productsStore.removeSidebarFilterByTitle(title)}
        type="button"
      >
        ×
      </button>
    </div>
  )
})

export default FilteredResultsCountTabButton
