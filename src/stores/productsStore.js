import { makeAutoObservable } from 'mobx'
import data from 'data/shared/db.json'
import { priceRanges } from 'data/product-catalog/filterBlockData'

class ProductsStore {
  currentPageNumber = 0

  currentSortOption = 'Alphabetical'
  productsPerPage = 20

  currentProductsViewType = 'grid'
  selectedFilterPriceRange = 'All'

  laptops = []
  filteredLaptops = []
  numbersOfProductsInPriceCategories = {}

  selectedSidebarFilters = []
  productsWishList = []
  productsRatingList = []
  productSearchQuery = ''

  productsInCart = []
  productsQuantities = {}
  productsSums = {}

  get productsToShowOnPage() {
    const startIndex = this.currentPageNumber * this.productsPerPage
    const endIndex = startIndex + this.productsPerPage

    return this.filteredLaptops.slice(startIndex, endIndex)
  }

  get numberOfPaginationPages() {
    if (this.filteredLaptops.length === 0 || this.productsPerPage <= 0) {
      return 1
    }

    return Math.ceil(this.filteredLaptops.length / this.productsPerPage)
  }

  get startPaginationNumberPage() {
    return this.currentPageNumber * this.productsPerPage + 1
  }

  get endPaginationNumberPage() {
    const calculatedEndIndex = this.currentPageNumber * this.productsPerPage + this.productsPerPage

    return Math.min(calculatedEndIndex, this.filteredLaptops.length)
  }

  get formattedItemsRange() {
    return `Items ${this.startPaginationNumberPage}-${this.endPaginationNumberPage} of ${this.filteredLaptops.length}`
  }

  get totalCartSum() {
    return Object.values(this.productsSums).reduce((total, price) => total + price, 0)
  }

  get totalQuantityOfAddedProducts() {
    return Object.keys(this.productsQuantities).length
  }

  constructor() {
    makeAutoObservable(this)
  }

  loadData() {
    const {
      laptops: { list },
    } = data
    this.laptops = list
  }

  resetCurrentPageNumber() {
    this.currentPageNumber = 0
  }

  resetSelectedSidebarFilters() {
    this.selectedSidebarFilters = []
  }

  resetFilterPriceRange() {
    this.selectedFilterPriceRange = 'All'
  }

  setSortingByOption(option) {
    this.currentSortOption = option
  }

  setProductsPerPage(option) {
    this.productsPerPage = option
  }

  setCurrentViewType(viewType) {
    this.currentProductsViewType = viewType
  }

  setCurrentPage(page) {
    this.currentPageNumber = page
  }

  sortProductsBySelectedOption() {
    const copyLaptops = [...this.filteredLaptops]

    switch (this.currentSortOption) {
      case 'Alphabetical':
        this.filteredLaptops = this.sortProductsByAlphabetical(copyLaptops)
        break
      case 'Rating':
        this.filteredLaptops = this.sortProductsByRating(copyLaptops)
        break
      case 'Price':
        this.filteredLaptops = this.sortProductsByPrice(copyLaptops)
        break
      case 'Reviews productQuantity':
        this.filteredLaptops = this.sortProductsByReviewsCount(copyLaptops)
        break
      default:
        this.filteredLaptops = this.sortProductsByAlphabetical(copyLaptops)
        break
    }
  }

  sortProductsByAlphabetical(products) {
    return products.sort((a, b) => a.name.localeCompare(b.name))
  }

  sortProductsByRating(products) {
    return products.sort((a, b) => b.rating - a.rating)
  }

  sortProductsByPrice(products) {
    return products.sort((a, b) => a.price - b.price)
  }

  sortProductsByReviewsCount(products) {
    return products.sort((a, b) => b.reviewsCount - a.reviewsCount)
  }

  setFilterPriceRange(option) {
    this.selectedFilterPriceRange = option
  }

  filterProductsByPrice() {
    const currentPriceRange = this.isPriceRangeValid()
    const copyLaptops = [...this.laptops]

    const filteredLaptops = copyLaptops.filter(
      (product) => product.price >= currentPriceRange.min && product.price <= currentPriceRange.max,
    )

    this.filteredLaptops = filteredLaptops
  }

  isPriceRangeValid() {
    const currentPriceRange =
      priceRanges.find((range) => range.label === this.selectedFilterPriceRange) || priceRanges[0]

    return currentPriceRange
  }

  setNumbersOfProductsInPriceCategories() {
    this.numbersOfProductsInPriceCategories = {}

    this.laptops.forEach((laptop) => {
      const priceCategory = priceRanges.find(
        (range) => laptop.price >= range.min && laptop.price < range.max,
      ).label

      this.numbersOfProductsInPriceCategories[priceCategory] =
        (this.numbersOfProductsInPriceCategories[priceCategory] || 0) + 1
    })
    this.numbersOfProductsInPriceCategories.All = this.laptops.length
  }

  addCurrentFilterToSidebarPanel(category) {
    const doesCategoryExist = this.isSidebarFilterAlreadySelected(category)

    if (!doesCategoryExist) {
      const categoryObject = { title: category }
      this.selectedSidebarFilters.push(categoryObject)
    }
  }

  isSidebarFilterAlreadySelected(category) {
    return this.selectedSidebarFilters.some((item) => item.title === category)
  }

  removeSidebarFilterByTitle(title) {
    this.selectedSidebarFilters = this.selectedSidebarFilters.filter((item) => item.title !== title)
  }

  toggleProductInWishList(name) {
    this.toggleProductInList(name, this.productsWishList)
  }

  toggleProductInRatingList(name) {
    this.toggleProductInList(name, this.productsRatingList)
  }

  toggleProductInList(name, list) {
    const isProductInList = this.isProductAlreadyInList(name, list)

    if (isProductInList) {
      const existingItemIndex = list.indexOf(name)
      list.splice(existingItemIndex, 1)
    } else {
      list.push(name)
    }
  }

  isProductAlreadyInList(name, list) {
    return list.indexOf(name) !== -1
  }

  resetProductsInWishList() {
    this.productsWishList = []
  }

  resetProductsRatingList() {
    this.productsRatingList = []
  }

  resetToDefaultFilters = () => {
    this.resetSelectedSidebarFilters()
    this.resetFilterPriceRange()
    this.filterProductsByPrice()
    this.sortProductsBySelectedOption()
    this.resetCurrentPageNumber()
  }

  setSearchQueryFromLocalStorage() {
    const searchQueryFromLocalStorage = this.getSearchQueryFromLocalStorage()

    if (searchQueryFromLocalStorage) {
      this.productSearchQuery = searchQueryFromLocalStorage
    }
  }

  getSearchQueryFromLocalStorage() {
    return localStorage.getItem('productSearchQuery') || ''
  }

  setProductSearchQuery(searchQuery) {
    this.productSearchQuery = searchQuery
  }

  resetProductSearchQuery() {
    this.productSearchQuery = ''
  }

  filterProductsBySearchQuery() {
    this.filteredLaptops = this.laptops.filter(this.isProductMatchingSearch)
  }

  isProductMatchingSearch = (product) => {
    const { name, description } = product

    const productSearchQuery = this.productSearchQuery.toLowerCase()
    const productName = name.toLowerCase()
    const productDescription = description.toLowerCase()

    const productNameMatches = this.doesProductNameMatchSearch(productName, productSearchQuery)
    const productDescriptionMatches = this.doesProductDescriptionMatchSearch(
      productDescription,
      productSearchQuery,
    )

    return productNameMatches || productDescriptionMatches
  }

  doesProductNameMatchSearch(productName, productSearchQuery) {
    const productNameIncludesSearchQuery = productName.includes(productSearchQuery)

    return productNameIncludesSearchQuery
  }

  doesProductDescriptionMatchSearch(productDescription, productSearchQuery) {
    const productDescriptionIncludesSearchQuery = productDescription.includes(productSearchQuery)

    return productDescriptionIncludesSearchQuery
  }

  addProductToCart(product) {
    const { slug, price } = product
    const isProductInCart = this.isProductInCart(slug)

    if (isProductInCart) {
      this.incrementProductQuantity(slug, price)
    } else {
      this.productsQuantities[slug] = 1
      this.productsSums[slug] = price
      this.productsInCart.push(product)
    }
  }

  isProductInCart(slug) {
    return this.productsQuantities[slug] !== undefined && this.productsSums[slug] !== undefined
  }

  incrementProductQuantity(slug, price) {
    this.productsQuantities[slug] += 1
    this.productsSums[slug] += price
  }

  decrementProductQuantity(slug, price) {
    this.productsQuantities[slug] -= 1
    this.productsSums[slug] -= price

    if (this.productsQuantities[slug] < 1) {
      this.removeProductFromCart(slug)
    }
  }

  removeProductFromCart(slug) {
    delete this.productsQuantities[slug]
    delete this.productsSums[slug]
    this.productsInCart = this.productsInCart.filter((item) => item.slug !== slug)
  }

  clearCart() {
    this.productsInCart = []
    this.productsQuantities = {}
    this.productsSums = {}
  }
}

export default new ProductsStore()
