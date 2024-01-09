export const productFetchingServiceMock = {
  productsSuccessResponse: {
    data: [
      {
        inStock: true,
        slug: 'mi-lite-15',
        url: 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612476949/new-products/1_hw0qj0.jpg',
        name: 'Laptop Mi Notebook Lite 15 I5/8/512/MX110/W (JYU4139CN)',
        reviewsCount: 10,
        previousPrice: 29999,
        rating: 4.3,
        price: 21499,
      },
    ],
  },

  laptopsErrorResponse: {
    status: 400,
    statusText: 'Bad Request',
    data: { message: 'Laptops not found' },
  },

  newProductsErrorResponse: {
    status: 400,
    statusText: 'Bad Request',
    data: { message: 'New Products not found' },
  },
}
