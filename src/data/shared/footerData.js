import americanExpressPicture from 'images/footer/american-express.svg'
import discoverPicture from 'images/footer/discover.svg'
import maestroPicture from 'images/footer/maestro.svg'
import payPalPicture from 'images/footer/paypal.svg'
import visaPicture from 'images/footer/visa.svg'

export const footerAllLinksBlocks = [
  {
    title: 'Information',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Laptops', href: '/products-catalog' },
      { label: 'About Us', href: '/about-us' },
      { label: 'About Product', href: '/about-product' },
      { label: 'Terms', href: '#' },
      { label: 'Orders and Returns', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Advanced Search', href: '#' },
      { label: 'Newsletter Subscription', href: '#' },
    ],
  },
  {
    title: 'PC Parts',
    links: [
      { label: 'CPUS', href: '#' },
      { label: 'Add On Cards', href: '#' },
      { label: 'Hard Drives (Internal)', href: '#' },
      { label: 'Graphic Cards', href: '#' },
      { label: 'Keyboards / Mice', href: '#' },
      { label: 'Cases / Power Supplies / Cooling', href: '#' },
      { label: 'RAM (Memory)', href: '#' },
      { label: 'Software', href: '#' },
      { label: 'Speakers / Headsets', href: '#' },
      { label: 'Motherboards', href: '#' },
    ],
  },
  {
    title: 'Desktop PCs',
    links: [
      { label: 'Custom PCs', href: '#' },
      { label: 'Servers', href: '#' },
      { label: 'MSI All-In-One PCs', href: '#' },
      { label: 'HP/Compaq PCs', href: '#' },
      { label: 'ASUS PCs', href: '#' },
      { label: 'Tecs PCs', href: '#' },
    ],
  },
  {
    title: 'Laptops',
    links: [
      { label: 'Evryday Use Notebooks', href: '#' },
      { label: 'MSI Workstation Series', href: '#' },
      { label: 'MSI Prestige Series', href: '#' },
      { label: 'Tablets and Pads', href: '#' },
      { label: 'Netbooks', href: '#' },
      { label: 'Infinity Gaming Notebooks', href: '#' },
    ],
  },
  {
    title: 'Address',
    links: [
      { label: 'Address: 1234 Street Adress City Address, 1234', href: '#' },
      { label: 'Phones:', href: '#', linkMarkText: '(00) 1234 5678' },
      { label: 'We are open: Monday-Thursday: 9:00 AM - 5:30 PM', href: '#' },
      { label: 'Friday: 9:00 AM - 6:00 PM', href: '#' },
      { label: 'Saturday: 11:00 AM - 5:00 PM', href: '#' },
      { label: 'E-mail:', href: '#', linkMarkText: ' shop@email.com' },
      { label: '', href: '#' },
    ],
  },
]

export const footerCardsPartnerImages = [
  { src: payPalPicture, alt: 'pay pal partner image' },
  { src: visaPicture, alt: 'visa partner image' },
  { src: maestroPicture, alt: 'maestro partner image' },
  { src: discoverPicture, alt: 'discover partner image' },
  { src: americanExpressPicture, alt: 'american express partner image' },
]
