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
    { label: 'Home', href: '#' },
    { label: 'Laptops', href: '#' },
    { label: 'Everyday Use Notebooks', href: '#' },
    { label: 'MSI Prestige Series', href: '#' },
    { label: 'MSI WS Series', href: '#' },
  ],

  filtersCategoryPriceBlock: [
    {
      title: 'Category',
      info: [
        { category: 'CUSTOM PCS', link: '#', amount: 15 },
        { category: 'MSI ALL-IN-ONE', link: '#', amount: 45 },
        { category: 'CUSTOM PCS', link: '#', amount: 1 },
      ],
    },
    {
      title: 'Price',
      info: [
        { category: '$0.00 - $1,000.00', link: '#', amount: 19 },
        { category: '$1,000.00 - $2,000.00', link: '#', amount: 21 },
        { category: '$2,000.00 - $3,000.00', link: '#', amount: 9 },
        { category: '$3,000.00 - $4,000.00', link: '#', amount: 6 },
        { category: '$4,000.00 - $5,000.00', link: '#', amount: 3 },
        { category: '$5,000.00 - $6,000.00', link: '#', amount: 1 },
        { category: '$6,000.00 - $7,000.00', link: '#', amount: 1 },
        { category: '$7,000.00 And Above', link: '#', amount: 1 },
      ],
    },
  ],

  filtersNameBlock: [
    {
      title: 'Filter Name',
      info: [
        { category: '1', link: '#', amount: 197 },
        { category: '2', link: '#', amount: 271 },
        { category: '3', link: '#', amount: 97 },
        { category: '4', link: '#', amount: 76 },
        { category: '5', link: '#', amount: 37 },
        { category: '6', link: '#', amount: 71 },
        { category: '7', link: '#', amount: 17 },
        { category: '8', link: '#', amount: 71 },
      ],
    },
  ],

  colorChoiceButtonsCatalogFilters: [
    { productId: 'Element 1', colorStyle: 'buttonSetProductColorRed' },
    { productId: 'Element 2', colorStyle: 'buttonSetProductColorBlack' },
  ],

  selectedFiltersDataButtons: [
    { title: 'CUSTOM PCS', count: 24, href: '#' },
    { title: 'HP/COMPAQ PCS', count: 24, href: '#' },
  ],

  sortPanelOptions: {
    sortBy: ['Position', 'By ABC', 'Newest', 'Oldest', 'Alphabetical'],
    show: ['35 per page', '40 per page', '45 per page'],
  },
}
