import brandImage1 from 'images/CatalogPage/brands/image1.png'
import brandImage2 from 'images/CatalogPage/brands/image2.png'
import brandImage3 from 'images/CatalogPage/brands/image3.png'
import brandImage4 from 'images/CatalogPage/brands/image4.png'
import brandImage5 from 'images/CatalogPage/brands/image5.png'
import brandImage6 from 'images/CatalogPage/brands/image6.png'

export const filterBlockData = {
  filtersBrandsImage: [
    {
      imageSrc: brandImage1,
      alt: 'brand picture',
      href: '#',
    },
    {
      imageSrc: brandImage2,
      alt: 'brand picture',
      href: '#',
    },
    {
      imageSrc: brandImage3,
      alt: 'brand picture',
      href: '#',
    },
    {
      imageSrc: brandImage4,
      alt: 'brand picture',
      href: '#',
    },
    {
      imageSrc: brandImage5,
      alt: 'brand picture',
      href: '#',
    },
    {
      imageSrc: brandImage6,
      alt: 'brand picture',
      href: '#',
    },
  ],

  filtersCategoryLinks: [
    { label: 'Home', href: '/' },
    { label: 'Laptops', href: '/products-catalog' },
    { label: 'Everyday Use Notebooks', href: '#' },
    { label: 'MSI Prestige Series', href: '#' },
    { label: 'MSI WS Series', href: '#' },
  ],

  filtersCategoriesBlocks: [
    {
      titleSortCategory: 'Category',
      sortCategories: [
        { label: 'CUSTOM PCS' },
        { label: 'MSI ALL-IN-ONE' },
        { label: 'CUSTOM PCS' },
      ],
    },
    {
      titleSortCategory: 'Price',
      sortCategories: [
        { label: '$0.00 - $5,000.00' },
        { label: '$5,000.00 - $10,000.00' },
        { label: '$10,000.00 - $15,000.00' },
        { label: '$15,000.00 - $20,000.00' },
        { label: '$20,000.00 - $25,000.00' },
        { label: '$25,000.00 - $30,000.00' },
        { label: '$30,000.00 And Above' },
        { label: 'All' },
      ],
    },
    {
      titleSortCategory: 'Filter Name',
      sortCategories: [{ label: 'Some' }, { label: 'Any' }],
    },
    {
      titleSortCategory: 'Color',
      colorChoiceFilter: [
        { productId: 'Element 1', colorStyle: 'buttonSetProductColorRed' },
        { productId: 'Element 2', colorStyle: 'buttonSetProductColorBlack' },
      ],
    },
  ],

  sortPanelOptions: {
    sortBy: ['Alphabetical', 'Rating', 'Price', 'Reviews Count'],
    show: [20, 25, 35],
  },
}

export const priceRanges = [
  { label: '$0.00 - $5,000.00', min: 0, max: 5000 },
  { label: '$5,000.00 - $10,000.00', min: 5000, max: 10000 },
  { label: '$10,000.00 - $15,000.00', min: 10000, max: 15000 },
  { label: '$15,000.00 - $20,000.00', min: 15000, max: 20000 },
  { label: '$20,000.00 - $25,000.00', min: 20000, max: 25000 },
  { label: '$25,000.00 - $30,000.00', min: 25000, max: 30000 },
  { label: '$30,000.00 And Above', min: 30000, max: Infinity },
  { label: 'All', min: -Infinity, max: Infinity },
]
