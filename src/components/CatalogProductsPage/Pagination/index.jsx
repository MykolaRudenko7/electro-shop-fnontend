import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from 'components/CatalogProductsPage/Pagination/Pagination.module.scss'

export default function Pagination({ pageCount, onPageChange, currentPage }) {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }
  const handlePageChange = (selectedPage) => {
    scrollToTop()
    onPageChange(selectedPage)
  }

  return (
    <div className={styles.paginationContainer}>
      <ReactPaginate
        activeClassName={styles.active}
        breakLabel={'...'}
        className={styles.paginate}
        containerClassName={styles.pagination}
        initialPage={currentPage}
        marginPagesDisplayed={2}
        nextClassName={styles.nextButton}
        nextLabel={'>'}
        onPageChange={handlePageChange}
        pageClassName={styles.paginateElements}
        pageCount={pageCount}
        pageRangeDisplayed={2}
        previousClassName={styles.prevButton}
        previousLabel={'<'}
      />
    </div>
  )
}
