import { useEffect } from 'react'
import cn from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import ProductCardGridItem from 'components/shared/ProductCardGridItem'
import ProductCardListItem from 'components/CatalogProductsPage/ProductsCatalog/ProductCardListItem'
import styles from 'components/CatalogProductsPage/ProductsCatalog/ProductsCatalog.module.scss'

const ProductsCatalog = observer(() => {
  const { productsToShowOnPage, currentProductsViewType } = productsStore

  useEffect(() => {
    productsStore.loadData()
    productsStore.filterProductsByPrice()
    productsStore.sortProductsBySelectedOption()
    productsStore.setNumbersOfProductsInPriceCategories()
  }, [])

  return (
    <div
      className={cn({
        [styles.cardsBlockGrid]: currentProductsViewType === 'grid',
        [styles.cardsBlockList]: currentProductsViewType === 'list',
      })}
    >
      {productsToShowOnPage.map((item) =>
        currentProductsViewType === 'grid' ? (
          <ProductCardGridItem key={uuidv4()} {...item} />
        ) : (
          <ProductCardListItem key={uuidv4()} {...item} />
        ),
      )}
    </div>
  )
})

export default ProductsCatalog
