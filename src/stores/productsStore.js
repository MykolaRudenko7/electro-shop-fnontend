import { makeAutoObservable } from 'mobx'
import data from 'data/shared/db.json'
import { priceRanges } from 'data/product-catalog/filterBlockData'

class ProductsStore {
  productsQuantity = 0
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

  constructor() {
    makeAutoObservable(this)
  }

  loadData() {
    const {
      laptops: { list },
    } = data
    this.laptops = list
  }

  increaseProductQuantity() {
    this.productsQuantity += 1
  }

  subtractProductQuantity() {
    if (this.productsQuantity > 0) {
      this.productsQuantity -= 1
    }
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
      case 'Reviews Count':
        this.filteredLaptops = this.sortProductsByReviewsCount(copyLaptops)
        break
      default:
        this.filteredLaptops = this.sortProductsByAlphabetical(copyLaptops)
        break
    }
  }

  setFilterPriceRange(option) {
    this.selectedFilterPriceRange = option
  }

  isPriceRangeValid() {
    const currentPriceRange =
      priceRanges.find((range) => range.label === this.selectedFilterPriceRange) || priceRanges[0]

    return currentPriceRange
  }

  filterProductsByPrice() {
    const currentPriceRange = this.isPriceRangeValid()
    const copyLaptops = [...this.laptops]

    const filteredLaptops = copyLaptops.filter(
      (product) => product.price >= currentPriceRange.min && product.price <= currentPriceRange.max,
    )

    this.filteredLaptops = filteredLaptops
  }

  setNumbersOfProductsInPriceCategories() {
    this.laptops.forEach((laptop) => {
      const priceCategory = priceRanges.find(
        (range) => laptop.price >= range.min && laptop.price < range.max,
      ).label

      this.numbersOfProductsInPriceCategories[priceCategory] =
        (this.numbersOfProductsInPriceCategories[priceCategory] || 0) + 1
    })
    this.numbersOfProductsInPriceCategories.All = this.laptops.length
  }

  isSidebarFilterAlreadySelected(category) {
    return this.selectedSidebarFilters.some((item) => item.title === category)
  }

  addCurrentFilterToSidebarPanel(category) {
    const doesCategoryExist = this.isSidebarFilterAlreadySelected(category)

    if (!doesCategoryExist) {
      const categoryObject = { title: category }
      this.selectedSidebarFilters.push(categoryObject)
    }
  }

  removeSidebarFilterByTitle(title) {
    this.selectedSidebarFilters = this.selectedSidebarFilters.filter((item) => item.title !== title)
  }

  isProductAlreadyInList(name, list) {
    return list.indexOf(name) !== -1
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

  toggleProductInWishList(name) {
    this.toggleProductInList(name, this.productsWishList)
  }

  toggleProductInRatingList(name) {
    this.toggleProductInList(name, this.productsRatingList)
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
}

export default new ProductsStore()
