import ShippingArea from 'components/ShoppingCartPage/OrderSummary/ShippingArea'
import DiscountArea from 'components/ShoppingCartPage/OrderSummary/DiscountArea'

export const shoppingCartData = {
  navigationLinks: [
    { label: 'Home', href: '/' },
    { label: 'Login', href: '#' },
  ],
  productsCategories: ['Item', 'Price', 'Qty', 'Subtotal'],
  accordionData: [
    {
      title: 'Estimate Shipping and Tax',
      subtitle: 'Enter your destination to get a shipping estimate.',
      content: <ShippingArea />,
    },
    {
      title: 'Apply Discount Code',
      content: <DiscountArea />,
    },
  ],
}
