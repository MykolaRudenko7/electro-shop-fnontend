import React from 'react'
import { observer } from 'mobx-react-lite'
import ReactPaginate from 'react-paginate'
import productsStore from 'stores/productsStore'
import styles from 'components/CatalogProductsPage/ProductsPagination/ProductsPagination.module.scss'

const ProductsPagination = observer(() => {
  const { numberOfPaginationPages, currentPageNumber } = productsStore

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePageChange = (page) => {
    scrollToTop()
    productsStore.setCurrentPage(page.selected)
  }

  return (
    <div className={styles.paginationContainer}>
      <ReactPaginate
        activeClassName={styles.active}
        breakLabel={'...'}
        className={styles.paginate}
        containerClassName={styles.pagination}
        forcePage={currentPageNumber}
        marginPagesDisplayed={2}
        nextClassName={styles.nextButton}
        nextLabel={'>'}
        onPageChange={handlePageChange}
        pageClassName={styles.paginateElements}
        pageCount={numberOfPaginationPages}
        pageRangeDisplayed={2}
        previousClassName={styles.prevButton}
        previousLabel={'<'}
      />
    </div>
  )
})

export default ProductsPagination
